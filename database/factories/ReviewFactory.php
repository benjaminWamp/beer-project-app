<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Review>
 */
class ReviewFactory extends Factory
{
    public function definition(): array
    {
        $messages = [
            "Une bière rafraîchissante avec une saveur fruitée.",
            "Excellent goût, très agréable à déguster.",
            "Une bière légère et subtile avec des notes florales.",
            "J'adore cette bière, parfaite pour une soirée entre amis.",
            "Un arrière-goût malté qui persiste en bouche.",
            "Bière pleine de caractère avec une belle amertume.",
            "Une bière artisanale avec des ingrédients de qualité.",
            "Un vrai délice pour les amateurs de bière.",
            "Une bière originale qui surprend par sa complexité.",
            "Parfaite pour accompagner un repas ou simplement se détendre.",
            "Une bière qui ne laisse pas indifférent, à essayer absolument.",
            "Texture crémeuse et arômes délicats, un vrai régal.",
            "Bière brassée avec passion, ça se ressent dans chaque gorgée.",
            "Une bière de dégustation à savourer lentement.",
            "Des bulles fines et une mousse onctueuse, un vrai plaisir pour les papilles.",
            "Une bière avec du caractère, idéale pour les connaisseurs.",
            "Une découverte surprenante, je recommande à tous les amateurs de bière.",
            "Une belle découverte, je suis conquis par cette bière.",
            "Un coup de cœur pour cette bière, je vais en racheter sans hésiter.",
            "Une bière qui se marie parfaitement avec les plats épicés.",
            "Des notes de caramel et de torréfaction qui donnent une belle complexité.",
            "Une bière qui mérite d'être connue, je la recommande vivement.",
            "Une bière légère et désaltérante, parfaite pour l'été.",
            "Une bière à la robe ambrée et au goût équilibré.",
            "Des arômes de fruits tropicaux qui invitent au voyage.",
            "Une bière de qualité, fabriquée avec soin et passion.",
            "Une bière avec une belle amertume et un arrière-goût floral.",
            "Parfaite pour accompagner un plateau de fromages variés.",
            "Une bière qui révèle de nouvelles saveurs à chaque dégustation.",
            "Une bière légèrement acidulée qui donne envie d'en reprendre.",
            "Une bière avec un nez complexe et une finale en bouche agréable.",
            "Un bel équilibre entre l'amertume et la douceur, j'en suis fan.",
            "Une bière à la fois douce et robuste, à découvrir absolument.",
            "Des bulles pétillantes et une fraîcheur qui raviront les palais les plus exigeants.",
            "Une bière à la fois originale et accessible, un vrai plaisir à déguster.",
            "Une bière à la robe dorée et aux arômes envoûtants.",
            "Un véritable délice pour les amateurs de bière artisanale.",
            "Une bière qui se démarque par son caractère unique et sa finesse.",
            "Une bière légèrement épicée qui éveille les sens.",
            "Une belle découverte, je la recommande à tous les amateurs de bière.",
            "Un bel équilibre entre les saveurs maltées et houblonnées.",
            "Une bière qui se bonifie avec le temps, à déguster sans modération.",
            "Une bière idéale pour les soirées d'hiver au coin du feu.",
            "Des arômes de fruits secs et de caramel qui invitent à la dégustation.",
            "Une bière qui laisse une sensation de fraîcheur en bouche.",
            "Un véritable concentré de plaisir pour les amateurs de bière.",
            "Une bière avec du caractère, à savourer sans précipitation.",
            "Une bière à la fois subtile et intense, un véritable régal.",
            "Une bière artisanale qui mérite d'être connue, je la recommande vivement.",
        ];

        shuffle($messages);

        return [
            'stars' => fake()->numberBetween(0, 5),
            'message' => fake()->randomElement($messages),
            'product_id' => fake()->numberBetween(1, 50),
            'user_id' => fake()->numberBetween(1, 10),
        ];
    }
}
