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
Route::get('/admin/catalogue', "App\Http\Controllers\ProductController@index")->name('Product.index');
Route::get('/admin/catalogue/edit/{product}', "App\Http\Controllers\ProductController@edit")->name('Product.edit');
Route::put('/admin/catalogue/update', "App\Http\Controllers\ProductController@update")->name('Product.update');
Route::get('/admin/catalogue/create', "App\Http\Controllers\ProductController@create")->name('Product.create');
Route::get('/admin/catalogue/{product}', "App\Http\Controllers\ProductController@show")->name('Product.show');
Route::post('/admin/catalogue/store', "App\Http\Controllers\ProductController@store")->name('Product.store');
Route::delete('/admin/catalogue/{product}',"App\Http\Controllers\ProductController@destroy")->name('Product.destroy');
