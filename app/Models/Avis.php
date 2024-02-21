<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Avis extends Model
{
    use HasFactory;

    public function beer(): BelongsTo
    {
        return $this->belongsTo(Beer::class); /*belongTo(Category::class, "category_id, "id")*/
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class); /*belongTo(Category::class, "category_id, "id")*/
    }

    protected $fillable = [
        'stars',
        'message',
    ];
}
