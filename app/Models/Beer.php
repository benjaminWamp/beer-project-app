<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Beer extends Model
{
    use HasFactory;

    protected $casts = [
        "published_at" => "datetime",
    ];

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class); /*belongTo(Category::class, "category_id, "id")*/
    }

    protected $fillable = [
        'name',
        'description',
        'published_at',
        'image',
        'price',
        "manufacturer_id",
    ];
}
