<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//  Products Routing
Route::prefix('/products')->group(function () {
    Route::get('/', \App\Http\Controllers\Product\IndexController::class);
    Route::get('/{product}', \App\Http\Controllers\Product\ShowController::class);
    Route::post('/store', \App\Http\Controllers\Product\StoreController::class);
    Route::patch('/{product}/edit', \App\Http\Controllers\Product\UpdateController::class);
    Route::delete('/{product}', \App\Http\Controllers\Product\DeleteController::class);
});
