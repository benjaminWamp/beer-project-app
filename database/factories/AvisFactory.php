<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AvisFactory extends Factory
{
    public function definition(): array
    {
        return [
            'stars' => fake()->numberBetween(0, 5),
            'message' => fake()->text(1000),
            "beer_id" => "1",
            "user_id" => "1",
        ];
    }
}
