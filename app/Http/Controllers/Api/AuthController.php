<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        //Vérifie que l'email et le mdp correspond
        if (!Auth::attempt($credentials)) {
            return response()->json(["message" => "Invalid credentials"], 401);
        }
        //Permet de faire fonctionné le createToken dans VSCode, le com permet de paramétrer le type var $user
        /** @var User $user */
        $user = Auth::user();
        $token = $user->createToken("auth_token");
        return ["token" => $token->plainTextToken];
    }
}
