<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{

    public function index()
    {
        $reviews = Review::paginate(15);

        return view('review.index', compact('reviews'));
    }

    public function search(Request $request)
    {
        $query = $request->input('query');

        $reviews = Review::whereHas('user', function ($q) use ($query) {
            $q->where('name', 'LIKE', "%{$query}%");
        })
            ->orWhereHas('product', function ($q) use ($query) {
                $q->where('name', 'LIKE', "%{$query}%");
            })
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->appends(['query' => $query]);

        return view('review.search', compact('reviews', 'query'));
    }

    public function show(Review $review)
    {
        return view('review.show', compact("review"));
    }
}
