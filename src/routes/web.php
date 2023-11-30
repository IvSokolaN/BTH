<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return '<a href="/products">Products</a>';
})->name('home');
