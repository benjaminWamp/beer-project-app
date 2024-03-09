<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Http\Request;

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
        return $cart->load("orderItems.product");
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

        return $order->load("orderItems.product");
    }

    public function RemoveFromCart(Request $request, OrderItem $orderItem)
    {

        // Get User cart
        $order = $orderItem->order;
        $this->authorize("order", $order);
        $orderItem->delete();
        $order->calculateTotal();

        return $order->load("orderItems.product");
    }

    /**
     * Update the specified resource in storage.
     */
    public function complete(Request $request)
    {
        $order = $request->user()->cart();

        $order->update([
            "status" => "complete",
        ]);

        return $order->load("orderItems.product");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function deleteCart(Request $request)
    {
        $order = $request->user()->cart();
        $order->delete();
        $order->calculateTotal();

        return $order->load("orderItems.product");
    }
}
