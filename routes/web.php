<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::post('/users/datatable', [\App\Http\Controllers\UserController::class, 'datatable']);

    Route::resources([
        'users' => \App\Http\Controllers\UserController::class
    ]);

    Route::get('/pdf/{id}', [\App\Http\Controllers\UserController::class, 'makePdf'])
    ->name('makePdf');

});



Route::get('/validate/{id}', function ($userId) {
    $user = \App\Models\User::findOrFail($userId);

    return Inertia::render('Carne', [
        "user" => $user
    ]);
})->name('validate');
