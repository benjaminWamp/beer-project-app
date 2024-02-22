<?php

namespace App\Policies;

use App\Models\Favorite;
use App\Models\User;

class FavoritePolicy
{
    /**
     * Create a new policy instance.
     */
    public function favorites(User $user, Favorite $favorite): bool
    {

        return $user->id === $favorite->user_id;
    }
}
