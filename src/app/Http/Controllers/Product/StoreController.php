<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\StoreRequest;
use App\Jobs\StoreProductJob;
use App\Models\Product;
use App\Notifications\SendCreateProductNotification;

class StoreController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();
        $product = Product::create($data);
        StoreProductJob::dispatchAfterResponse($product);

        return response([]);
    }
}
