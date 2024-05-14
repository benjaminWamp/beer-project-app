<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;


class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $orders = $request->user()->orders;

        return $orders;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function showCart(Request $request)
    {
        $user = $request->user();
        $cart = $user->cart();
        return $cart->load(["orderItems.product", "orderItems.product.categories"]);
    }

    /**
     * Add item to cart
     */

    public function addToCart(Request $request)
    {
        $product = Product::find($request->input("product_id"));

        $request->validate([
            "product_id" => ["required", "exists:products,id"],
            "quantity" => ["required", "integer", "min:1", "max:$product->stock"],
        ]);

        // Vérifie si l'utilisateur à déjà une order de status cart
        $order = $request->user()->cart();
        // Vérifie la présence dans orderItem ou non du produit choisie
        $orderItem = $order->orderItems()->where("product_id", "=", $product->id)->first();

        if ($orderItem) {
            $orderItem->update([
                "quantity" => $orderItem->quantity + $request->input("quantity"),
            ]);
        } else {
            $order->orderItems()->create([
                "product_id" => $request->input("product_id"),
                "quantity" => $request->input("quantity"),
                "price_ht" => $product->price_ht
            ]);
        }

        $order->calculateTotal();
        $added = $order->load("orderItems.product");
        $product->calculateStock($request->input("quantity"));
        return response()->json([$added, "message" => "Produit ajouté au panier"], 200);
    }

    public function RemoveFromCart(Request $request, OrderItem $orderItem)
    {
        $quantity = $orderItem->quantity;
        $product = Product::find($orderItem->product_id);

        // Get User cart
        $order = $orderItem->order;


        $this->authorize("order", $order);

        $orderItem->delete();

        $product->restoreStock($quantity);
        $order->calculateTotal();

        return response()->json(["message" => "Produit supprimé du panier"], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function payed(Request $request)
    {
        $order = $request->user()->cart();

        $order->update([
            "status" => "payed",
        ]);

        // return $order->load("orderItems.product");
        return response()->json(["message" => "Votre panier a été payé"], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function deleteCart(Request $request)
    {
        $order = $request->user()->cart();
        $order->delete();
        $order->calculateTotal();

        // return $order->load("orderItems.product");
        return response()->json(["message" => "Votre panier a été supprimé"], 200);
    }

    public function updateOrderAddress (Request $request){
        try {
            if (!Auth::check()) {
                return response()->json(["message" => "Veuillez vous authentifier"], 401);
            }

            $request->user()->update(
                $request->validate([
                    "number" => "numeric",
                    "street" => "max:1000",
                    "city" => "max:1000",
                    "zip_code" => "max:5|min:5"
                ])
            );
            
            $request->user()->cart()->update(
                $request->validate([
                    "number" => "numeric",
                    "street" => "max:1000",
                    "city" => "max:1000",
                    "zip_code" => "max:5|min:5"
                ])
            );

            return response()->json(["message" => "Vos informations ont été mise à jour"], 200);
        } catch (ValidationException $e) {
            return response()->json(['errors' => $e->errors()], 422);
        }
    }
}
