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
Route::post('/admin/catalogue/{beer}', "App\Http\Controllers\ProductController@edit")->name('Product.edit');
Route::delete('/admin/catalogue/{beer}',"App\Http\Controllers\ProductController@destroy")->name('Product.destroy');
