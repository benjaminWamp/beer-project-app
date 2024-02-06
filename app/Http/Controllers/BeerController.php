<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateBeerRequest;
use App\Http\Requests\UpdateBeerRequest;
use App\Models\Beer;
use Illuminate\Http\Request;

class BeerControler extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $Beers = Beer::all();
        return view('Beer.index', ["Beers" => $Beers]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('Beer.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateBeerRequest $request)
    {
        $Beer = Beer::create(
            $request->validated()
        );

        return redirect()->route("Beer.show", $Beer);
    }

    /**
     * Display the specified resource.
     */
    public function show(Beer $Beer)
    {
        return view('Beer.show', compact("Beer"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Beer $Beer)
    {
        return view('Beer.edit', compact("Beer"),);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBeerRequest $request, Beer $Beer)
    {
        /*dd($request->all(), $Beer);*/
        $Beer->update($request->validated());
        return redirect()->route("Beer.show", $Beer);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Beer $Beer)
    {
        $Beer->delete();
        return redirect()->route("Beer.index");
    }
}