<?php

use App\Http\Controllers\Api\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post("/login", "App\Http\Controllers\Api\AuthController@login")->name("login");
Route::post("/register", "App\Http\Controllers\Api\RegisterController@register")->name("register");

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get("/catalogue", ProductController::class . "@index")->name("product.index");
Route::get("/catalogue", "App\Http\Controllers\Api\ProductController@index")->name("product.index");

Route::get("/product/{product}", "App\Http\Controllers\Api\ProductController@show")->name("product.show");
Route::get("/product/{product}/reviews", "App\Http\Controllers\Api\ProductController@showReviews")->name("product.reviews");

Route::get("/categories", "App\Http\Controllers\Api\CategoryController@index")->name("categories.index");
Route::get("/manufacturers", "App\Http\Controllers\Api\ManufacturerController@index")->name("manufacturers.index");


Route::middleware('auth:sanctum')->group(
    function () {
        Route::get("/user/reviews", "App\Http\Controllers\Api\UserController@showReviews")->name("user.reviews");
        Route::post("/user/reviews", "App\Http\Controllers\Api\ReviewController@store")->name("review.store");
        Route::post("/user/reviews/{review}", "App\Http\Controllers\Api\ReviewController@update")->name("review.update");
        Route::delete("/user/reviews/{review}", "App\Http\Controllers\Api\ReviewController@destroy")->name("review.destroy");

        Route::get("/user/favorites", "App\Http\Controllers\Api\FavoriteController@index")->name("favorite.index");
        Route::post("/user/favorites", "App\Http\Controllers\Api\FavoriteController@store")->name("favorite.store");
        Route::delete("/user/favorites/{favorite}", "App\Http\Controllers\Api\FavoriteController@destroy")->name("favorite.destroy");

        Route::get("/user", "App\Http\Controllers\Api\UserController@show")->name("user.show");
        Route::post("/user", "App\Http\Controllers\Api\UserController@updateUser")->name("user.updateUser");
        Route::delete("/user", "App\Http\Controllers\Api\UserController@removeUser")->name("user.removeUser");

        Route::get("/user/orders", "App\Http\Controllers\Api\OrderController@index")->name("order.index");
        Route::get("/user/cart", "App\Http\Controllers\Api\OrderController@showCart")->name("order.showCart");
        Route::post("/user/cart", "App\Http\Controllers\Api\OrderController@addToCart")->name("order.addToCart");
        Route::post("/user/cart/complete", "App\Http\Controllers\Api\OrderController@complete")->name("order.complete");
        Route::delete("/user/cart/{orderItem}", "App\Http\Controllers\Api\OrderController@removeFromCart")->name("order.removeFromCart");
        Route::delete("/user/cart", "App\Http\Controllers\Api\OrderController@deleteCart")->name("order.deleteCart");

        Route::post("/logout", "App\Http\Controllers\Api\AuthController@logout")->name("logout");
    }
);
