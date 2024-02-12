<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Beer extends Model
{
    use HasFactory;

    protected $casts = [
        "published_at" => "datetime",
    ];

    protected $fillable = [
        'name',
        'description',
        'published_at',
        'image',
        'price',
        "editor_id",
    ];
}
