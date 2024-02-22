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
        "published_at" => "datetime",
    ];

    public function categories(): BelongsToMany //Pour une table intermédiaire
    {
        return $this->belongsToMany(Category::class); /*belongTo(Category::class, "category_id, "id")*/
    }

    public function manufacturer(): BelongsTo
    {
        return $this->belongsTo(Manufacturer::class);
    }

    public function reviews(): HasMany // Quand il n'y a pas de table intermédiaire
    {
        return $this->hasMany(Review::class); /*belongTo(Category::class, "category_id, "id")*/
    }

    protected $fillable = [
        'name',
        'description',
        'published_at',
        'image',
        'price',
        "manufacturer_id",
        'reviews_sum'
    ];

    public function calculateReviewsSum(): void
    {
        $sum = 0;

        $sum = $this->reviews()->sum("stars");

        // foreach ($this->reviews as $review) {
        //     $sum += $review->stars;
        // };
        $sum /= $this->reviews->count();

        $this->update([
            "reviews_sum" => $sum,
        ]);
    }
}
