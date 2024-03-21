<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateManufacturerRequest;
use App\Http\Requests\UpdateManufacturerRequest;
use App\Models\Manufacturer;
use Illuminate\Http\Request;

class ManufacturerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $manufacturers = Manufacturer::paginate(10);
        return view('manufacturer.index', ["manufacturers" => $manufacturers]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('manufacturer.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateManufacturerRequest $request)
    {
        $Manufacturer = Manufacturer::create(
            $request->validated()
        );

        return redirect()->route("manufacturer.show", $Manufacturer);
    }

    /**
     * Display the specified resource.
     */
    public function show(Manufacturer $manufacturer)
    {
        return view('manufacturer.show', compact("manufacturer"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Manufacturer $manufacturer)
    {
        return view('manufacturer.edit', compact("manufacturer"),);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateManufacturerRequest $request, Manufacturer $manufacturer)
    {
        /*dd($request->all(), $Manufacturer);*/
        $manufacturer->update($request->validated());
        return redirect()->route("manufacturer.show", $manufacturer);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Manufacturer $manufacturer)
    {
        $manufacturer->delete();
        return redirect()->route("manufacturer.index");
    }
}