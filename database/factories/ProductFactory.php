<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => fake()->words(4, true),
            "description" => fake()->text(1000),
            "delivered_at" => fake()->dateTimeBetween("-10 years"),
            "stock" => fake()->numberBetween(1, 100),
            /*"cover" => fake()->imageUrl(640, 480, "book", true),*/
            "image" => fake()->randomElement([
                "image-1.png",
                "image-2.png",
            ]),
            "price_ht" => fake()->numberBetween(100, 10000),
            "manufacturer_id" => "1",
            "reviews_sum" => fake()->numberBetween(0, 5),
        ];
    }
}
