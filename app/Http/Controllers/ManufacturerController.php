<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateManufacturerRequest;
use App\Http\Requests\UpdateManufacturerRequest;
use App\Models\Manufacturer;
use Illuminate\Http\Request;

class ManufacturerControler extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $Manufacturer = Manufacturer::all();
        return view('Manufacturer.index', ["Manufacturer" => $Manufacturer]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('Manufacturer.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateManufacturerRequest $request)
    {
        $Manufacturer = Manufacturer::create(
            $request->validated()
        );

        return redirect()->route("Manufacturer.show", $Manufacturer);
    }

    /**
     * Display the specified resource.
     */
    public function show(Manufacturer $Manufacturer)
    {
        return view('Manufacturer.show', compact("Manufacturer"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Manufacturer $Manufacturer)
    {
        return view('Manufacturer.edit', compact("Manufacturer"),);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateManufacturerRequest $request, Manufacturer $Manufacturer)
    {
        /*dd($request->all(), $Manufacturer);*/
        $Manufacturer->update($request->validated());
        return redirect()->route("Manufacturer.show", $Manufacturer);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Manufacturer $Manufacturer)
    {
        $Manufacturer->delete();
        return redirect()->route("Manufacturer.index");
    }
}
