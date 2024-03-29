<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Resources\Product\ProductResource;
use App\Models\Product;

class ShowController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Product $product)
    {
        return new ProductResource($product);
    }
}
