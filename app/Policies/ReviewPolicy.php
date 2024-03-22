<?php

namespace App\Policies;

use App\Models\Review;
use App\Models\User;

class ReviewPolicy
{
    /**
     * Create a new policy instance.
     */
    public function reviews(User $user, Review $reviews): bool
    {
        return $user->id === $reviews->user_id;
    }
}
