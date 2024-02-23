<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ManufacturerController;
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

Route::get(
    '/admin/producteurs',
    ManufacturerController::class . "@index"
)->name("manufacturer.index");

Route::get(
    '/admin/manufacturer/create',
    ManufacturerController::class . "@create"
)->name("manufacturer.create");

Route::get(
    '/admin/{manufacturer}',
    ManufacturerController::class . "@show"
)->name("manufacturer.show");

Route::delete(
    '/admin/{manufacturer}',
    ManufacturerController::class . "@destroy"
)->name("manufacturer.destroy");

Route::post(
    '/admin/producteurs',
    ManufacturerController::class . "@store"
)->name("manufacturer.store");

Route::get(
    '/admin/edit/{manufacturer}',
    ManufacturerController::class . "@edit"
)->name("manufacturer.edit");

Route::put(
    '/admin/update/{manufacturer}',
    ManufacturerController::class . "@update"
)->name("manufacturer.update");
