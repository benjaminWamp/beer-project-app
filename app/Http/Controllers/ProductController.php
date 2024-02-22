<?php

namespace App\Http\Controllers;


use App\Http\Requests\CreateProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductControler extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $Beers = Product::all();
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
    public function store(CreateProductRequest $request)
    {
        $product = Product::create(
            $request->validated()
        );

        return redirect()->route("Beer.show", $product);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return view('Beer.show', compact("product"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return view('Beer.edit', compact("Beer"),);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        /*dd($request->all(), $Beer);*/
        $product->update($request->validated());
        return redirect()->route("Beer.show", $product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route("Beer.index");
    }
}
