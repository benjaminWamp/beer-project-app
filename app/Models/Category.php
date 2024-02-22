<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Category extends Model
{
    use HasFactory;

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class); /*belongTo(Category::class, "book_id, "id")*/
    }

    protected $fillable = [
        'name',
        'description',
        'slug',
        'color',
    ];
}
