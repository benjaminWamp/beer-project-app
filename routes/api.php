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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get("/catalogue", ProductController::class . "@index")->name("product.index");
Route::get("/catalogue", "App\Http\Controllers\Api\ProductController@index")->name("product.index");
Route::get("/product/{product}", "App\Http\Controllers\Api\ProductController@show")->name("product.show");
Route::get("/product/{product}/reviews", "App\Http\Controllers\Api\ProductController@showReviews")->name("product.reviews");

Route::post("/login", "App\Http\Controllers\Api\AuthController@login")->name("login");

Route::middleware('auth:sanctum')->group(
    function () {
        Route::get("/user/reviews", "App\Http\Controllers\Api\UserController@showReviews")->name("user.reviews");
        Route::post("/user/reviews", "App\Http\Controllers\Api\ReviewController@store")->name("review.store");
        Route::post("/user/reviews/{review}", "App\Http\Controllers\Api\ReviewController@update")->name("review.update");
    }
);
