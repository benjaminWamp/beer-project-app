<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Order;
use App\Models\Favorite;
use App\Models\Review;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            "name" => "Cécile Valente",
            "email" => "cecile.valente@email.com",
            "password" => "passwordCecile",
            "number" => "8",
            "street" => "rue de cécile",
            "city" => "Rouen",
            "zip_code" => "76000",
            "role" => "admin",
        ]);

        \App\Models\User::factory()->create([
            "name" => "Clément Duport",
            "email" => "clement.duport@email.com",
            "password" => "clem123",
            "number" => "5",
            "street" => "rue des roseaux",
            "city" => "Ormes",
            "zip_code" => "45140",
            "role" => "admin",
        ]);

        \App\Models\User::factory()->create([
            "name" => "Benjamin Langlois",
            "email" => "benjamin.langlois@email.com",
            "password" => "passwordBenjamin",
            "number" => "69",
            "street" => "rue Albert Camus",
            "city" => "Paris",
            "zip_code" => "75010",
            "role" => "admin",
        ]);

        \App\Models\User::factory()->create([
            "name" => "Monsieur Consomateur",
            "email" => "monsieur.consomateur@email.com",
            "password" => "passwordConsomateur",
            "number" => "10",
            "street" => "rue de la Thune",
            "city" => "Paris",
            "zip_code" => "75016",
            "role" => "customer",
        ]);


        \App\Models\Manufacturer::factory()->create([
            "name" => "BrewDog",
            "adress" => "Ellon, Scotland",
            "description" => "BrewDog est une brasserie artisanale écossaise.",
        ]);

        \App\Models\Manufacturer::factory()->create([
            "name" => "Sierra Nevada Brewing Co.",
            "adress" => "Chico, Californie, États-Unis",
            "description" => "Sierra Nevada Brewing Co. est une brasserie artisanale américaine.",
        ]);

        \App\Models\Manufacturer::factory()->create([
            "name" => "Stone Brewing",
            "adress" => "Escondido, Californie, États-Unis",
            "description" => "Stone Brewing est une brasserie artisanale américaine connue pour ses IPA.",
        ]);

        \App\Models\Manufacturer::factory()->create([
            "name" => "Guinness",
            "adress" => "Dublin, Irlande",
            "description" => "Guinness est une brasserie irlandaise célèbre pour sa bière stout.",
        ]);

        \App\Models\Manufacturer::factory()->create([
            "name" => "Weihenstephan",
            "adress" => "Freising, Allemagne",
            "description" => "Weihenstephan est une brasserie allemande, la plus ancienne au monde.",
        ]);



        \App\Models\Category::factory()->create([
            "name" => "Blonde",
            "description" => "Nos plus belles bières blondes",
            "color" => "orange",
        ]);

        \App\Models\Category::factory()->create([
            "name" => "Brune",
            "description" => "Nos meilleures bières brunes",
            "color" => "purple",
        ]);


        \App\Models\Category::factory()->create([
            "name" => "Blanche",
            "description" => "Nos plus pure bière blanche",
            "color" => "yellow",
        ]);



        $products = \App\Models\Product::factory(50)->create();

        $categories = \App\Models\Category::all();

        $manufacturers = \App\Models\Manufacturer::all();

        $products->each(function ($product) use ($categories) {
            $randomCount = rand(1, 3);
            $product->categories()->attach(
                $categories->random($randomCount)->pluck("id")->toArray()
            );
        });

        Review::factory(50)->create();

        Favorite::factory(50)->create();

        \App\Models\Order::factory(50)->create();

        \App\Models\OrderItem::factory(100)->create();
    }
}
