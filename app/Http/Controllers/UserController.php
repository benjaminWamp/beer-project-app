<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRoleRequest;
use App\Http\Requests\UserRequest;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::paginate(15);
        return view("users.index", ["users" => $users]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('users.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request)
    {

        $hashedPassword = Hash::make($request->input("password"));

        $user = User::create([
            "name" => $request->input("name"),
            "email" => $request->input("email"),
            "password" => $hashedPassword,
            "role" => $request->input("role"),
            "number" => $request->input("number"),
            "street" => $request->input("street"),
            "city" => $request->input("city"),
            "zip_code" => $request->input("zip_code"),
        ]);

        $request->session()->flash("success", "Vous avez bien créé un nouvel utilisateur");

        return redirect()->route("users.index");

    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function editRole(User $user)
    {

        return view("users.updateRole", compact("user"));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRoleRequest $request, User $user)
    {

        $user->update($request->validated());
        return redirect()->route("users.editRole", $user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
