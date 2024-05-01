<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

    public function removeUser(Request $request)
    {
        $user = $request->user();

        if (Auth::id() !== $user->id) {
            return response()->json(["error" => "Vous n'êtes pas autorisé à supprimer cet utilisateur"], 403);
        }

        $user->delete();
        return response()->json(["message" => "User deleted successfully"], 200);
    }
}
