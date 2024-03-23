<?php

namespace App\Policies;

use App\Models\Order;
use App\Models\User;

class OrderPolicy
{
    /**
     * Create a new policy instance.
     */
    public function order(User $user, Order $order)
    {
        return $user->id === $order->user_id;
    }
}
