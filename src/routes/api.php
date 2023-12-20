<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login', \App\Http\Controllers\Auth\LoginController::class);

Route::middleware('auth:sanctum')->group(function () {
    //  Products Routing
    Route::prefix('/products')->group(function () {
        Route::get('/', \App\Http\Controllers\Product\IndexController::class);
        Route::get('/{product}', \App\Http\Controllers\Product\ShowController::class);
        Route::post('/store', \App\Http\Controllers\Product\StoreController::class);
        Route::patch('/{product}/update', \App\Http\Controllers\Product\UpdateController::class);
        Route::delete('/{product}', \App\Http\Controllers\Product\DeleteController::class);
    });

    //  Users Routing
    Route::prefix('/users')->group(function () {
        Route::get('/user', \App\Http\Controllers\User\ShowController::class);
    });
});