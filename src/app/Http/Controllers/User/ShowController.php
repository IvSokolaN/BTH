<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\User\UserResource;

class ShowController extends Controller
{
    /**
     * @return UserResource
     */
    public function __invoke(): UserResource
    {
        $user = auth()->user();

        return new UserResource($user);
    }
}
