<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ManufacturerController;
use App\Models\Manufacturer;
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

Route::get('/', function () {
    return view('welcome');
});

Route::get("/login", LoginController::class . "@show")->name("login");
Route::post("/login", LoginController::class . "@authenticate")->name("login");

Route::middleware(["auth"])->group(function () {

    Route::post("/logout", LogoutController::class . "@logout")->name("logout");

    Route::get('/admin/catalogue', "App\Http\Controllers\ProductController@index")->name('product.index');
    Route::get('/admin/produit/modifier/{product}', "App\Http\Controllers\ProductController@edit")->name('product.edit');
    Route::put('/admin/produit/modifier/{product}', "App\Http\Controllers\ProductController@update")->name('product.update');
    Route::get('/admin/produit/ajouter', "App\Http\Controllers\ProductController@create")->name('product.create');
    Route::get('/admin/produit/{product}', "App\Http\Controllers\ProductController@show")->name('product.show');
    Route::post('/admin/produit/store', "App\Http\Controllers\ProductController@store")->name('product.store');
    Route::delete('/admin/produit/{product}', "App\Http\Controllers\ProductController@destroy")->name('product.destroy');

    Route::get('/admin/producteurs', ManufacturerController::class . "@index")->name("manufacturer.index");
    Route::get('/admin/producteurs/ajouter', ManufacturerController::class . "@create")->name("manufacturer.create");
    Route::get('/admin/producteurs/{manufacturer}', ManufacturerController::class . "@show")->name("manufacturer.show");
    Route::delete('/admin/producteurs/{manufacturer}', ManufacturerController::class . "@destroy")->name("manufacturer.destroy");
    Route::post('/admin/producteurs', ManufacturerController::class . "@store")->name("manufacturer.store");
    Route::get('/admin/producteurs/modifier/{manufacturer}', ManufacturerController::class . "@edit")->name("manufacturer.edit");
    Route::put('/admin/producteurs/modifier/{manufacturer}', ManufacturerController::class . "@update")->name("manufacturer.update");
});
