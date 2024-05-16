<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $casts = [
        "delivered_at" => "datetime",
    ];

    public function categories(): BelongsToMany //Pour une table intermédiaire
    {
        return $this->belongsToMany(Category::class); /*belongTo(Category::class, "category_id, "id")*/
    }

    public function manufacturer(): BelongsTo
    {
        return $this->belongsTo(Manufacturer::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function reviews(): HasMany // Quand il n'y a pas de table intermédiaire
    {
        return $this->hasMany(Review::class); /*belongTo(Category::class, "category_id, "id")*/
    }

    protected $fillable = [
        'name',
        'description',
        'delivered_at',
        "stock",
        'image',
        'price_ht',
        "manufacturer_id",
        'reviews_mean'
    ];

    public function calculateReviewsSum(): void
    {
        $sum = 0;

        $sum = $this->reviews()->sum("stars");

        // foreach ($this->reviews as $review) {
        //     $sum += $review->stars;
        // };
        if ($this->reviews->count() > 0) {
            $sum /= $this->reviews->count();
        }

        $this->update([
            "reviews_mean" => $sum,
        ]);
    }

    public function calculateStock($quantity): void
    {
        $stock = $this->stock;


        $this->update([
            "stock" => $stock - $quantity
        ]);
    }

    public function restoreStock($quantity): void
    {
        $stock = $this->stock;
        $this->update([
            "stock" => $stock + $quantity
        ]);
    }

    public function calculateStock($quantity): void
    {
        $stock = $this->stock;


        $this->update([
            "stock" => $stock - $quantity
        ]);
    }

}
