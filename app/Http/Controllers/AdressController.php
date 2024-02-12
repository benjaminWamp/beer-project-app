<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateAdressRequest;
use App\Http\Requests\UpdateAdressRequest;
use App\Models\Adress;
use Illuminate\Http\Request;

class AdressControler extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $Adress = Adress::all();
        return view('Adress.index', ["Adress" => $Adress]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('Adress.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateAdressRequest $request)
    {
        $Adress = Adress::create(
            $request->validated()
        );

        return redirect()->route("Adress.show", $Adress);
    }

    /**
     * Display the specified resource.
     */
    public function show(Adress $Adress)
    {
        return view('Adress.show', compact("Adress"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Adress $Adress)
    {
        return view('Adress.edit', compact("Adress"),);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAdressRequest $request, Adress $Adress)
    {
        /*dd($request->all(), $Adress);*/
        $Adress->update($request->validated());
        return redirect()->route("Adress.show", $Adress);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Adress $Adress)
    {
        $Adress->delete();
        return redirect()->route("Adress.index");
    }
}