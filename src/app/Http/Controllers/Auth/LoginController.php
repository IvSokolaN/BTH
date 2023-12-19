<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;


class LoginController extends Controller
{
    public function __invoke(LoginRequest $loginRequest)
    {
        $data = $loginRequest->validated();

        if (Auth::attempt($data)) {
            $loginRequest->session()->regenerate();

            return response()->json([
                'id' => Auth::user()->id,
                'email' => Auth::user()->email,
                'role' => Auth::user()->getRole(),
            ]);
        }

        return response()->json([
            'message' => 'Неверно введен E-Mail или пароль',
        ])->setStatusCode(422);
    }
}
