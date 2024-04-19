<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return
            Product::with(["categories", "manufacturer"])->paginate(15);
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
