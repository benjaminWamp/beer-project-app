<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try {
            $credentials = $request->validate([
                'email' => ['required', 'email'],
                'password' => ['required'],
            ]);

            //Vérifie que l'email et le mdp correspond
            if (!Auth::attempt($credentials)) {
                return response()->json(["message" => "Votre email ou mot de passe est incorrect"], 401);
            }
            //Permet de faire fonctionné le createToken dans VSCode, le com permet de paramétrer le type var $user
            /** @var User $user */
            $user = Auth::user();

            $token = $user->createToken("auth_token");
            // Auth::login();
            return ["token" => $token->plainTextToken, "user" => $user->id];
        } catch (ValidationException $e) {
            // Renvoie une réponse JSON avec les erreurs de validation
            return response()->json(['errors' => $e->errors()], 422);
        }
    }

    public function logout(Request $request)
    {

        try {
            $user = $request->user();
            // Vérifie si l'utilisateur est authentifié
            if ($user) {
                // Révoque tous les jetons d'authentification de l'utilisateur
                $user->tokens()->delete();

                return response()->json(["message" => "Utilisateur déconnecté avec succès"], 200);
            } else {
                return response()->json(["message" => "Aucun utilisateur connecté"], 401);
            }
        } catch (ValidationException $e) {

            return response()->json(['errors' => $e->errors()], 422);
        }
    }
}
