<?php

namespace App\Http\Controllers;


use App\Http\Requests\CreateProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $Products = Product::all();
        return view('Product.index', ["product" => $Products]);
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
    public function store(CreateProductRequest $request)
    {
        $product = Product::create(
            [
                ...$request->validated(),
                'manufacturer_id' => 1,
                'reviews_sum' => 1,
            ]
        );

        return redirect()->route("Product.show", $product);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return view('Product.show', compact("product"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return view('Product.edit', compact("product"),);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        /*dd($request->all(), $Beer);*/
        $product->update($request->validated());
        return redirect()->route("Product.show", $product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route("Product.index");
    }
}
