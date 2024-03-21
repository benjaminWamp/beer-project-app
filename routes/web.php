<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AvisController;
use App\Models\Avis;

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
    '/admin/avis',
    AvisController::class . "@index"
)->name("Avis.index");

Route::get(
    '/admin/avis/{Avis}',
    AvisController::class . "@show"
)->name("Avis.show");
