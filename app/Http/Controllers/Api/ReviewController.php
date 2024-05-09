<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ReviewRequest;
use App\Models\Product;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return $request->user()->reviews;
    }

    public function store(ReviewRequest $request)
    {
        try {
            // Vérifie si l'utilisateur à déjà une review
            $product = Product::find($request->input("product_id"));
            $hasReview = $request->user()->hasReview($product);

            if ($hasReview) {
                return response()->json(["message" => "Vous avez déjà laissé un avis sur ce produit."], 403);
            }

            $review = Review::create([
                'stars' => $request->input("stars"),
                'message' => $request->input("message"),
                "product_id" => $request->input("product_id"),
                "user_id" => $request->user()->id,
            ]);

            $product->calculateReviewsSum();

            return response()->json(["message" => "Votre avis a été crée"], 200);
        } catch (ValidationException $e) {
            // Renvoie une réponse JSON avec les erreurs de validation
            return response()->json(['errors' => $e->errors()], 422);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     */

    public function update(ReviewRequest $request, Review $review)
    {
        try {
            $this->authorize("reviews", $review);
            $product = Product::find($request->input("product_id"));
            $review->update($request->validated());
            $product->calculateReviewsSum();
            return response()->json(["message" => "Votre avis a été modifié"], 200);
        } catch (ValidationException $e) {
            return response()->json(['errors' => $e->errors()], 422);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Review $review)
    {
        $this->authorize("reviews", $review);
        $product = Product::find($review->product_id);
        $review->delete();
        $product->calculateReviewsSum();
        return response()->json(["message" => "Votre avis a été supprimé"], 200);
    }
}
