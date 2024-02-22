<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }

    public function favorites(): HasMany
    {
        return $this->hasMany(Favorite::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'numero',
        "rue",
        "ville",
        "code_postal",
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function hasReview(Product $product): bool
    {

        $review = $this->reviews()->where("product_id", "=", $product->id)->first(); //this fait référence au contexte de la classe actuel et appel la fonction order au dessus

        if ($review) {
            return true;
        } else {
            return false;
        }
    }

    public function hasFavorite(Product $product): bool
    {

        $favorite = $this->favorites()->where("product_id", "=", $product->id)->first(); //this fait référence au contexte de la classe actuel et appel la fonction order au dessus

        if ($favorite) {
            return true;
        } else {
            return false;
        }
    }
}
