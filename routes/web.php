<?php

use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ManufacturerController;
use App\Http\Controllers\UserController;
use App\Models\Manufacturer;
use App\Http\Controllers\ReviewController;
use App\Models\Review;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Middleware\Authenticate;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



Route::get("/admin/login", LoginController::class . "@show")->name("login");
Route::post("/admin/login", LoginController::class . "@authenticate")->name("login");

Route::middleware(["auth"])->group(function () {

    Route::post("/logout", LogoutController::class . "@logout")->name("logout");

    Route::get('/admin/catalogue', "App\Http\Controllers\ProductController@index")->name('product.index');
    Route::get('/admin/produit/modifier/{product}', "App\Http\Controllers\ProductController@edit")->name('product.edit');
    Route::put('/admin/produit/modifier/{product}', "App\Http\Controllers\ProductController@update")->name('product.update');
    Route::get('/admin/produit/ajouter', "App\Http\Controllers\ProductController@create")->name('product.create');
    Route::get('/admin/produit/{product}', "App\Http\Controllers\ProductController@show")->name('product.show');
    Route::post('/admin/produit/store', "App\Http\Controllers\ProductController@store")->name('product.store');
    Route::delete('/admin/produit/{product}',  "App\Http\Controllers\ProductController@destroy")->name('product.destroy');

    Route::get('/admin/categories', CategoryController::class . "@index")->name("category.index");
    Route::get('/admin/categories/ajouter', CategoryController::class . "@create")->name("category.create");
    Route::get('/admin/categories/{category}', CategoryController::class . "@show")->name("category.show");
    Route::delete('/admin/categories/{category}', CategoryController::class . "@destroy")->name("category.destroy");
    Route::post('/admin/categories', CategoryController::class . "@store")->name("category.store");
    Route::get('/admin/categories/modifier/{category}', CategoryController::class . "@edit")->name("category.edit");
    Route::put('/admin/modifier/{category}', CategoryController::class . "@update")->name("category.update");

    Route::get('/admin/producteurs', ManufacturerController::class . "@index")->name("manufacturer.index");
    Route::get('/admin/producteurs/ajouter', ManufacturerController::class . "@create")->name("manufacturer.create");
    Route::get('/admin/producteurs/{manufacturer}', ManufacturerController::class . "@show")->name("manufacturer.show");
    Route::delete('/admin/producteurs/{manufacturer}', ManufacturerController::class . "@destroy")->name("manufacturer.destroy");
    Route::post('/admin/producteurs', ManufacturerController::class . "@store")->name("manufacturer.store");
    Route::get('/admin/producteurs/modifier/{manufacturer}', ManufacturerController::class . "@edit")->name("manufacturer.edit");
    Route::put('/admin/producteurs/producteurs/modifier/{manufacturer}', ManufacturerController::class . "@update")->name("manufacturer.update");

    Route::get('/admin/avis', ReviewController::class . "@index")->name("review.index");
    Route::get('/admin/avis/{review}', ReviewController::class . "@show")->name("review.show");

    Route::get('/admin/utilisateurs', UserController::class . "@index")->name('users.index');
    Route::get('/admin/utilisateurs/ajouter', UserController::class . "@create")->name('users.create');
    Route::post('/admin/utilisateurs/ajouter', UserController::class . "@store")->name('users.store');
    Route::get('/admin/utilisateurs/updateRole/{user}', UserController::class . "@editRole")->name('users.editRole');
    Route::put('/admin/utilisateurs/updateRole/{user}', UserController::class . "@update")->name("users.update");

    Route::get('admin/commandes', OrderController::class . "@index")->name("orders.index");
    Route::get('admin/commandes/{order}', OrderController::class . "@show")->name("orders.show");
    Route::post('admin/commandes/{order}/delivered', OrderController::class . "@delivered")->name("orders.delivered");
    Route::post('admin/commandes/{order}/cancel', OrderController::class . "@cancel")->name("orders.cancel");
});
