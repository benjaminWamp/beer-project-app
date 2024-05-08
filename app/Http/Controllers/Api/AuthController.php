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
        // Auth::login();
        return ["token" => $token->plainTextToken, "user" => $user->id];
    }

    public function logout(Request $request)
    {
        $user = $request->user();

        // Vérifie si l'utilisateur est authentifié
        if ($user) {
            // Révoque tous les jetons d'authentification de l'utilisateur
            $user->tokens()->delete();

            return response()->json(["message" => "Utilisateur déconnecté avec succès"], 200);
        } else {
            return response()->json(["message" => "Aucun utilisateur connecté"], 401);
        }
    }
}
