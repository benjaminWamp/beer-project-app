<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Favorite extends Model
{
    use HasFactory;

    public function user(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }

    public function product(): BelongsToMany
    {
        return $this->belongsToMany(Product::class);
    }

    protected $fillable = [
        'user_id',
        'product_id',
    ];
}
