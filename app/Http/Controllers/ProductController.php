<?php

namespace App\Http\Controllers;


use App\Http\Requests\CreateproductRequest;
use App\Http\Requests\UpdateproductRequest;
use Illuminate\Support\Facades\Storage;
use App\Models\Product;
use Illuminate\Http\Request;

class productController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::orderBy('created_at', 'desc')->paginate(10);
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
    public function store(CreateProductRequest $request)
    {
        $request->file("image")->store("public/images");

        $product = Product::create(
            [
                ...$request->validated(),
                "image" => $request->file("image")->hashName(),
                "price_ht" => $request->input("price_ht") * 100,
                'manufacturer_id' => 1,
                'reviews_sum' => 1,
            ]
        );

        return redirect()->route("product.show", $product);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return view('product.show', compact("product"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return view('product.edit', compact("product"),);
    }

    public function search(Request $request)
    {
        $query = $request->input('query');

        // Rechercher des produits par nom ou description
        $products = Product::where('name', 'LIKE', "%{$query}%")
        ->orWhere('description', 'LIKE', "%{$query}%")
        ->orderBy('created_at', 'desc')
        ->paginate(10)
        ->appends(['query' => $query]);

        return view('product.search', compact('products', 'query'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        if ($request->hasFile("image")) {
            Storage::delete("public/images/" . $product->image);
            $request->file("image")->store("public/images");
            $product->update([
                ...$request->validated(),
                "image" => $request->file("image")->hashName(),
                "price_ht" => $request->input("price") * 100
            ]);
        } else {
            $product->update(
                $request->validated()
            );
        };
        return redirect()->route("product.show", $product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route("product.index");
    }
}
