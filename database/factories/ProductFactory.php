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
        $names = [
            "La Houppe du Gnome",
            "La Barbe à Papa",
            "La Moustache de Lutin",
            "La Potion Magique",
            "La Chouette Dorée",
            "La Licorne Enchantée",
            "La Bière du Sorcier",
            "La Pinte des Fées",
            "La Gargouille Givrée",
            "La Gueule de Bois",
            "La Danse des Loutres",
            "La Bière de l'Ours Polaire",
            "La Truffe Sauvage",
            "La Bulle de Rêve",
            "La Potion Secrète",
            "La Source du Dragon",
            "La Fleur de Bière",
            "La Larme de Licorne",
            "La Gueule de Loup",
            "La Mousse de Minuit",
            "La Griffe du Tigre",
            "La Bière des Lutins",
            "La Traversée du Désert",
            "La Fée des Boissons",
            "La Barrique Mystique",
            "La Chope d'Or",
            "La Guerre des Mondes",
            "La Bière des Dieux",
            "La Plume d'Oie",
            "La Taverne du Nain",
            "La Tempête de Houblon",
            "La Conquête du Sud",
            "La Morsure de Vampire",
            "La Légende du Tonnerre",
            "La Gourde de Gobelin",
            "La Lune Rousse",
            "La Voie Lactée",
            "La Légende du Phénix",
            "La Lueur d'Espoir",
            "La Cloche du Navire",
            "La Brise des Sirènes",
            "La Fureur des Dieux",
            "La Force du Corsaire",
            "La Bière des Pirates",
            "La Sérénade du Soleil",
            "La Mélodie de la Mer",
            "La Vague d'Écume",
            "La Chanson du Vent",
        ];

        $descriptions = [
            "Une bière blonde classique avec des notes fruitées et florales.",
            "Une bière brune riche et maltée avec des arômes de caramel et de chocolat.",
            "Une bière ambrée équilibrée avec des saveurs de caramel et une légère amertume.",
            "Une IPA houblonnée avec des arômes d'agrumes et une finale amère.",
            "Une Stout robuste avec des notes de café et de chocolat.",
            "Une bière blanche rafraîchissante avec des arômes d'épices et d'agrumes.",
            "Une bière rousse douce avec des saveurs de biscuit et de caramel.",
        ];

        $images = ["Biere1.jpg", "Biere2.jpg", "Biere3.jpg", "Biere4.jpg", "Biere5.jpeg", "Biere6.jpg", "Biere7.jpg", "Biere8.jpg", "Biere9.jpg", "Biere10.jpg", "Biere11.jpg", "Biere12.jpg", "Biere13.jpg", "Biere14.jpg", "Biere15.jpg", "Biere16.jpg", "Biere17.jpg", "Biere18.jpg", "Biere19.jpg", "Biere20.jpg"];

        shuffle($names);

        return [
            "name" => fake()->randomElement($names),
            "description" => fake()->randomElement($descriptions),
            // "name" => fake()->words(4, true),
            // "description" => fake()->text(1000),
            "delivered_at" => fake()->dateTimeBetween("-10 years"),
            "stock" => fake()->numberBetween(1, 500),
            /*"cover" => fake()->imageUrl(640, 480, "book", true),*/
            "image" => fake()->randomElement($images),
            "price_ht" => fake()->numberBetween(100, 10000),
            "manufacturer_id" => fake()->numberBetween(1, 5),
            "category_id" => fake()->numberBetween(1, 3),
            "reviews_sum" => fake()->numberBetween(0, 5),
        ];
    }
}
