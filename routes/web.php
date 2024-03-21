<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;

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

Route::get(
    '/admin/categories',
    CategoryController::class . "@index"
)->name("category.index");

Route::get(
    '/admin/categories/ajouter',
    CategoryController::class . "@create"
)->name("category.create");

Route::get(
    '/admin/categories/{category}',
    CategoryController::class . "@show"
)->name("category.show");

Route::delete(
    '/admin/categories/{category}',
    CategoryController::class . "@destroy"
)->name("category.destroy");

Route::post(
    '/admin/categories',
    CategoryController::class . "@store"
)->name("category.store");

Route::get(
    '/admin/categories/modifier/{category}',
    CategoryController::class . "@edit"
)->name("category.edit");

Route::put(
    '/admin/modifier/{category}',
    CategoryController::class . "@update"
)->name("category.update");