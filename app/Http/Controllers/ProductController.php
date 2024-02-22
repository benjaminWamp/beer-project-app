<?php

namespace App\Http\Controllers;


use App\Http\Requests\CreateproductRequest;
use App\Http\Requests\UpdateproductRequest;
use App\Models\product;
use Illuminate\Http\Request;

class productController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = product::all();
        return view('product.index', ["product" => $products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('product.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateproductRequest $request)
    {
        $request->file("image")->store("public/images");

        $product = product::create(
            [
                ...$request->validated(),
                "image" => $request->file("image")->hashName(), 
                'manufacturer_id' => 1,
                'reviews_sum' => 1,
            ]
        );

        return redirect()->route("product.show", $product);
    }

    /**
     * Display the specified resource.
     */
    public function show(product $product)
    {
        return view('product.show', compact("product"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(product $product)
    {
        return view('product.edit', compact("product"),);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateproductRequest $request, product $product)
    {
        /*dd($request->all(), $Beer);*/
        $product->update($request->validated());
        return redirect()->route("product.show", $product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(product $product)
    {
        $product->delete();
        return redirect()->route("product.index");
    }
}
