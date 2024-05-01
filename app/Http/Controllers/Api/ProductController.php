<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Database\Capsule\Manager;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // dd($request->input("manufacturer"));
        // Récupérez les paramètres de requête
        $categories = $request->input('categories');
        $manufacturers = $request->input('manufacturer');
        $sorting = $request->input('sorting');
        $order = $request->input('order');
        $search = $request->input('search');

        $products = Product::query(); // Commencez par initialiser la requête de base

        if ($categories) {
            $products->whereHas("categories", function (Builder $query) use ($categories) {
                $query->whereIn("category_id", $categories);
            });
        }

        if ($manufacturers) {
            $products->whereIn("manufacturer_id", $manufacturers);
        }

        if ($sorting) {
            $products->orderBy($sorting, $order);
        }

        if ($search) {
            $products->where("name", "LIKE", "%$search%");
        }

        // Exécutez la requête et récupérez les résultats paginés
        return $products->with(["categories", "manufacturer"])->paginate(15);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return $product->load(["categories", "manufacturer", "reviews" => function ($query) {
            $query->orderBy('updated_at', 'desc')->with(['user:id,name']); // Trie les reviews par date de mise à jour (du plus récent au plus ancien)
        }]);
    }

    public function showReviews(Product $product)
    {
        return $product->reviews;
    }
}
