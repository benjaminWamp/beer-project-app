<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Models\Order;
use App\Models\Beer;
use Illuminate\Http\Request;

class OrderControler extends Controller
{
    public function show()
    {
        return view("cart.show");
    }

    public function addToCart(Request $request)
    {
        //On vérifie que l'id du livre existe bien
        $request->validate([
            "beer_id" => ["required", "exists:beers,id"]
        ]);

        $beer = Beer::find($request->input("beer_id"));

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
        //     "beer_id" => $request->input("beer_id"),
        //     "quantity" => 1,
        //     "price" => $beer->price
        // ]);

        $request->session()->flash("success", "Votre produit a bien été ajouté au panier");
        return redirect()->intended("cart.show");
    }
}