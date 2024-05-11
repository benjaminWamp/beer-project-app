<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    public function show(Request $request)
    {
        return $request->user();
    }

    public function updateUser(Request $request)
    {
        try {
            if (!Auth::check()) {
                return response()->json(["message" => "Veuillez vous authentifier"], 401);
            }

            $request->user()->update(
                $request->validate([
                    "name" => "required|max:255|min:2",
                    "email" => "required|email",
                    "number" => "numeric",
                    "street" => "max:1000",
                    "city" => "max:1000",
                    "zip_code" => "max:5|min:5"
                ])
            );
            return response()->json(["message" => "Vos informations ont été mise à jour"], 200);
        } catch (ValidationException $e) {
            return response()->json(['errors' => $e->errors()], 422);
        }
    }

    public function showReviews(Request $request)
    {
        $user = $request->user();
        return $user->reviews;
    }

    public function changePassword(Request $request)
    {
        try {
            $request->validate([
                'currentPassword' => 'required',
                'newPassword' => 'required|confirmed|min:6',
            ]);

            if (!Hash::check($request->currentPassword, $request->user()->password)) {
                throw ValidationException::withMessages([
                    'message' => 'Un problème est survenue avec la vérification de votre mot de passe, veuillez réessayer',
                ]);
            }

            $request->user()->update([
                'password' => Hash::make($request->newPassword),
            ]);


            return response()->json(['message' => 'Mot de passe mis à jour avec succès']);
        } catch (ValidationException $e) {
            return response()->json(['errors' => $e->errors()], 422);
        }
    }

    public function removeUser(Request $request)
    {
        try {
            $user = $request->user();

            $user->update([
                'name' => "Utilisateur supprimé",
                'email' => null,
                'password' => null,
                'number' => null,
                'street' => null,
                'city' => null,
                'zip_code' => null,
            ]);

            return response()->json(['message' => 'Utilisateur supprimé avec succès']);
        } catch (QueryException $e) {
            // Obtenir des informations sur l'erreur avec $e->getMessage()
            return response()->json([$e->getMessage(), 'error' => 'Un erreur sur le serveur est survenue'], 500);
        }
    }
}
