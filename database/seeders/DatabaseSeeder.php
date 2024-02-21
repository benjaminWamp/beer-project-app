<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Avis;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
        \App\Models\Manufacturer::factory(5)->create();
        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        \App\Models\Category::factory()->create([
            "name" => "Blonde",
            "description" => "Nos plus belles bières blondes",
            "slug" => "blonde",
            "color" => "orange",
        ]);

        \App\Models\Category::factory()->create([
            "name" => "Brune",
            "description" => "Nos meilleures bières brunes",
            "slug" => "brune",
            "color" => "purple",
        ]);


        \App\Models\Category::factory()->create([
            "name" => "Blanche",
            "description" => "Nos plus pure bière blanche",
            "slug" => "blanche",
            "color" => "yellow",
        ]);

        $beers = \App\Models\Beer::factory(50)->create();

        $categories = \App\Models\Category::all();

        $beers->each(function ($book) use ($categories) {
            $book->categories()->attach(
                $categories->random(rand(1, 2))->pluck("id")->toArray()
            );
        });

        Avis::factory()->create(10);

        \App\Models\User::factory(5)->create();
    }
}
