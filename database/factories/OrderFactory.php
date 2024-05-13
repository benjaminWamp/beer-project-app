<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'status' => $this->faker->randomElement(['cart', 'payed', 'delivered', "cancel"]),
            'total' => $this->faker->randomFloat(2, 10, 1000),
            'number' => $this->faker->randomNumber(1, 100),
            'street' => $this->faker->streetAddress,
            'city' => $this->faker->city,
            'zip_code' => $this->faker->postcode,
            'user_id' => fake()->numberBetween(1, 10),
        ];
    }
}
