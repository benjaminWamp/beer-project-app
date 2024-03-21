<?php

use Illuminate\Support\Facades\Route;

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
Route::get('/admin/catalogue', "App\Http\Controllers\ProductController@index")->name('product.index');
Route::get('/admin/produit/modifier/{product}', "App\Http\Controllers\ProductController@edit")->name('product.edit');
Route::put('/admin/produit/modifier/{product}', "App\Http\Controllers\ProductController@update")->name('product.update');
Route::get('/admin/produit/ajouter', "App\Http\Controllers\ProductController@create")->name('product.create');
Route::get('/admin/produit/{product}', "App\Http\Controllers\ProductController@show")->name('product.show');
Route::post('/admin/produit/store', "App\Http\Controllers\ProductController@store")->name('product.store');
Route::delete('/admin/produit/{product}',"App\Http\Controllers\ProductController@destroy")->name('product.destroy');
