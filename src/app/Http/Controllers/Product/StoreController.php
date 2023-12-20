<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\StoreRequest;
use App\Models\Product;
use App\Notifications\CreateProduct;

class StoreController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();
        $product = Product::create($data);
        $product->notify(new CreateProduct());

        return response()->json(['message' => 'Product created successfully.']);
    }
}
