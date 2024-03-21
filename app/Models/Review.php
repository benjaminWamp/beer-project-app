<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    use HasFactory;

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class); /*belongTo(Category::class, "category_id, "id")*/
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class); /*belongTo(Category::class, "category_id, "id")*/
    }

    protected $fillable = [
        'stars',
        'message',
        'product_id',
        'user_id',
    ];
}
