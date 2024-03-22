<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{

    public function index()
    {
        $reviews = Review::paginate(5);

        return view('review.index', compact('reviews'));
    }

    public function show(Review $review)
    {
        return view('review.show', compact("review"));
    }
}
