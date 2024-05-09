<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Favorite;
use App\Models\Product;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class FavoriteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $query =  $request->user()->favorites()->with('product')->orderBy('created_at', 'desc');

        $pagination = $request->input('pagination');

        // Si la pagination est activée, retourne les données paginées
        if ($pagination) {

            return $query->paginate(5);
        }

        // Sinon, retourne toutes les données sans pagination
        return $query->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

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
                return response()->json([$favorite, "message" => "Le produit a été ajouté à vos favoris."], 200);
            }
        } catch (ValidationException $e) {
            return response()->json(['errors' => $e->errors()], 422);
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
    public function destroy($productId)
    {
        try {
            $userId = Auth::id();

            $favorite = Favorite::where('user_id', $userId)
                ->where('product_id', $productId)
                ->firstOrFail();

            $this->authorize('favorites', $favorite);

            $favorite->delete();

            return response()->json(['message' => 'Favoris supprimé']);
        } catch (QueryException $e) {
            return response()->json(['errors' => $e->getMessage()]);
        }
    }
}
