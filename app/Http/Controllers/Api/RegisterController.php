<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function register(Request $request)
    {

        $validated = $request->validate([
            "name" => "required",
            "email" => "required|email",
            "password" => "required|confirmed"
        ]);


        $hashedPassword = Hash::make($validated["password"]);

        $user = User::create([
            "name" => $validated["name"],
            "email" => $validated["email"],
            "password" => $validated["password"],
            "role" => "customer",
        ]);

        Auth::login($user);

        return response()->json(["message" => "Compte créé avec succès"], 200);
    }
}
