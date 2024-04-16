<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Favorite;
use App\Models\Product;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return $request->user()->favorites;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate(["product_id" => "required|exists:products,id"]);
        $product = Product::find($request->input("product_id"));

        // Vérifie si l'utilisateur à déjà une order de status cart
        $hasFavorite = $request->user()->hasFavorite($product);

        if ($hasFavorite) {
            return response()->json(["message" => "Vous avez déjà mis ce produit en favoris."], 403);
        } else {
            $favorite = Favorite::create([
                "product_id" => $request->input("product_id"),
                "user_id" => $request->user()->id,
            ]);

            return $favorite;
        }
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Favorite $favorite)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Favorite $favorite)
    {
        $this->authorize("favorites", $favorite);
        $favorite->delete();
        return $favorite;
    }
}
