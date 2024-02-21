<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Beer>
 */
class BeerFactory extends Factory
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
            "published_at" => fake()->dateTimeBetween("-10 years"),
            /*"cover" => fake()->imageUrl(640, 480, "book", true),*/
            "image" => fake()->randomElement([
                "image-1.png",
                "image-2.png",
            ]),
            "price" => fake()->numberBetween(100, 10000),
            "manufacturer_id" => "1"
        ];
    }
}
