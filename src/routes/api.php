<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//  Products Routing
Route::prefix('/products')->group(function () {
    Route::post('/store', \App\Http\Controllers\Product\StoreController::class);
});
