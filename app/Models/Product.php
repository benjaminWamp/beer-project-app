<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
    use HasFactory;

    protected $casts = [
        "delivered_at" => "datetime",
    ];

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class); /*belongTo(Category::class, "category_id, "id")*/
    }

    public function manufacturer(): BelongsTo
    {
        return $this->belongsTo(Manufacturer::class); /*belongTo(Category::class, "category_id, "id")*/
    }

    public function reviews(): BelongsToMany
    {
        return $this->belongsToMany(Review::class); /*belongTo(Category::class, "category_id, "id")*/
    }

    protected $fillable = [
        'name',
        'description',
        'delivered_at',
        'stock',
        'image',
        'price_ht',
        "manufacturer_id",
        'reviews_sum'
    ];
}
