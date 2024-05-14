<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function show()
    {
        return view("auth.login");
    }

    public function authenticate(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            if (Auth::user()->role === 'admin') {
                $request->session()->regenerate();
                return redirect()->intended('/admin');
            } else {
                // Déconnexion de l'utilisateur si le rôle n'est pas admin
                Auth::logout();
                return back()->withErrors([
                    'email' => 'Vous n\'avez pas les permissions nécessaires pour accéder à cette section.',
                ])->onlyInput('email');
            }
        }

        return back()->withErrors([
            'email' => 'Une erreur est survenue, vérifiez votre email et mot de passe.',
        ])->onlyInput('email');
    }
}
