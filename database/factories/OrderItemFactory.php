<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrderItem>
 */
class OrderItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'order_id' => fake()->numberBetween(1, 25),
            'product_id' => fake()->numberBetween(1, 50),
            'quantity' => fake()->numberBetween(1, 10),
            'price_ht' => fake()->randomFloat(2, 5, 50),
        ];
    }
}
