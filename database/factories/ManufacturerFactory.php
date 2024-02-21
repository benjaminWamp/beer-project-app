<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Manufacturer>
 */
class ManufacturerFactory extends Factory
{
    public function definition(): array
    {
        return [
            "name" => fake()->words(2, true),
            "adress" => fake()->randomElement(["105 rue Louis Blanc", "80 rue Edmund Halley", "5 rue des roseaux"]),
            "description" => fake()->text(10000),
        ];
    }
}
