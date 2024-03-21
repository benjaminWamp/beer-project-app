<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ManufacturerController;
use App\Http\Controllers\UserController;
use App\Models\Manufacturer;

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
Route::get('/admin/produits', "App\Http\Controllers\ProductController@index")->name('product.index');
Route::get('/admin/produits/modifier/{product}', "App\Http\Controllers\ProductController@edit")->name('product.edit');
Route::put('/admin/produits/modifier/{product}', "App\Http\Controllers\ProductController@update")->name('product.update');
Route::get('/admin/produits/ajouter', "App\Http\Controllers\ProductController@create")->name('product.create');
Route::get('/admin/produits/{product}', "App\Http\Controllers\ProductController@show")->name('product.show');
Route::post('/admin/produits/store', "App\Http\Controllers\ProductController@store")->name('product.store');
Route::delete('/admin/produits/{product}', "App\Http\Controllers\ProductController@destroy")->name('product.destroy');

Route::get(
    '/admin/producteurs',
    ManufacturerController::class . "@index"
)->name("manufacturer.index");

Route::get(
    '/admin/producteurs/ajouter',
    ManufacturerController::class . "@create"
)->name("manufacturer.create");

Route::get(
    '/admin/producteurs/{manufacturer}',
    ManufacturerController::class . "@show"
)->name("manufacturer.show");

Route::delete(
    '/admin/producteurs/{manufacturer}',
    ManufacturerController::class . "@destroy"
)->name("manufacturer.destroy");

Route::post(
    '/admin/producteurs',
    ManufacturerController::class . "@store"
)->name("manufacturer.store");

Route::get(
    '/admin/producteurs/modifier/{manufacturer}',
    ManufacturerController::class . "@edit"
)->name("manufacturer.edit");

Route::put(
    '/admin/modifier/{manufacturer}',
    ManufacturerController::class . "@update"
)->name("manufacturer.update");

Route::get('/admin/utilisateurs', UserController::class . "@index")->name('users.index');
