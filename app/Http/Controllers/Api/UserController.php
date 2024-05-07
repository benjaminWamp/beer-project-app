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
        if (!Auth::check()) {
            return response()->json(["message" => "Unauthorized1"], 401);
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

        return $request->user();
    }

    public function showReviews(Request $request)
    {
        $user = $request->user();
        return $user->reviews;
    }

    public function changePassword(Request $request)
    {
        $request->validate([
            'currentPassword' => 'required',
            'newPassword' => 'required|confirmed|min:6',
        ]);

        if (!Hash::check($request->currentPassword, $request->user()->password)) {
            throw ValidationException::withMessages([
                'currentPassword' => 'The current password is incorrect.',
            ]);
        }

        $request->user()->update([
            'password' => Hash::make($request->newPassword),
        ]);


        return response()->json(['message' => 'Password updated successfully']);
    }

    public function removeUser(Request $request)
    {
        try {
            $user = $request->user();

            $user->update([
                'name' => null,
                'email' => null,
                'password' => null,
                'number' => null,
                'street' => null,
                'city' => null,
                'zip_code' => null,
            ]);

            return response()->json(['message' => 'User deleted successfully']);
        } catch (QueryException $e) {
            // Vous pouvez obtenir des informations sur l'erreur en accédant à $e->getMessage()
            return response()->json(['error' => 'An error occurred while deleting user data.'], 500);
        }
    }
}
