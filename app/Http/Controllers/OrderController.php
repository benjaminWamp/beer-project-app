<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::whereIn("status", ["complete", "delivered", "cancel"])
            ->orderBy('created_at', 'asc') // Order by created_at in descending order
            ->paginate(15);

        return view("orders.index", ["orders" => $orders]);
    }

    public function search(Request $request)
    {
        $query = $request->input('query');

        $orders = Order::whereHas('user', function ($q) use ($query) {
            $q->where('email', 'LIKE', "%{$query}%")
                ->orWhere('name', 'LIKE', "%{$query}%");
        })
            ->orWhere('number', 'LIKE', "%{$query}%")
            ->orWhere('street', 'LIKE', "%{$query}%")
            ->orWhere('city', 'LIKE', "%{$query}%")
            ->orWhere('zip_code', 'LIKE', "%{$query}%")
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->appends(['query' => $query]);

        return view('orders.search', compact('orders', 'query'));
    }


    public function show(Order $order)
    {

        return view("orders.show", compact("order"));
    }

    public function delivered(Order $order)
    {
        if ($order->status === "payed") {
            $order->update([
                "status" => "delivered"
            ]);
            return redirect()->route("orders.show", $order);
        }
    }

    public function cancel(Order $order)
    {
        if ($order->status !== "cart") {
            $order->update([
                "status" => "cancel"
            ]);
            return redirect()->route("orders.show", $order);
        }
    }


    public function addToCart(Request $request)
    {
        //On vérifie que l'id du livre existe bien
        $request->validate([
            "product_id" => ["required", "exists:products,id"]
        ]);

        $product = Product::find($request->input("product_id"));

        $order = $request->user()->orders()->where("status", "cart")->first();

        if (!$order) {
            $order = Order::create(
                [
                    "user_id" => $request->user()->id,
                    "total" => 10,
                    "status" => "cart",
                    "number" => 80,
                    "street" => "Edmund Halley",
                    "city" => "Saint-etienne-du-Rouvray",
                    "zip_code" => "76575",
                    "price" => 100000,
                    "created_at" => now(),
                ]
            );
        }

        // $order->orderItems()->create([
        //     "product_id" => $request->input("product_id"),
        //     "quantity" => 1,
        //     "price" => $product->price
        // ]);

        $request->session()->flash("success", "Votre produit a bien été ajouté au panier");
        return redirect()->intended("cart.show");
    }
}
