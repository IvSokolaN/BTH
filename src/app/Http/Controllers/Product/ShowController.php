<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Product;

class ShowController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke($product)
    {
        return Product::findOrFail($product);
    }
}
