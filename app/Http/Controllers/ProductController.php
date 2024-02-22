<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateBeerRequest;
use App\Http\Requests\UpdateBeerRequest;
use App\Models\Beer;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $beer = Beer::all();
        return view('Product.index', ["beer" => $beer]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('Product.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateBeerRequest $request)
    {
        $product = Beer::create(
            $request->validated()
        );

        return redirect()->route("Product.show", $product);
    }

    /**
     * Display the specified resource.
     */
    public function show(Beer $product)
    {
        dd($product);
        return view('Product.show', compact("beer"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Beer $beer)
    {
        return view('Product.edit', compact("beer"),);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBeerRequest $request, Beer $beer)
    {
        /*dd($request->all(), $Product);*/
        $beer->update($request->validated());
        return redirect()->route("Product.show", $beer);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Beer $beer)
    {
        $beer->delete();
        return redirect()->route("Product.index");
    }
}