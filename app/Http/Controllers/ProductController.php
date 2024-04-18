<?php

namespace App\Http\Controllers;


use App\Http\Requests\CreateproductRequest;
use App\Http\Requests\UpdateproductRequest;
use Illuminate\Support\Facades\Storage;
use App\Models\Product;
use App\Models\Category;
use App\Models\Manufacturer;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::paginate(10);
        return view('product.index', ["product" => $products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('product.create', ["categories" => Category::all(), "manufacturers" => Manufacturer::all()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateProductRequest $request)
    {
        $request->file("image")->store("public/images");

        try {
            $request->validate($request->rules());
        } catch (\Exception $e) {
            return response()->json(["error" => $e->getMessage()], 400);
        }

        $product = new Product();
        $product->name = $request->input("name");
        $product->description = $request->input("description");
        $product->stock = $request->input("stock");
        $product->delivered_at = $request->input("delivered_at");
        $product->price_ht = $request->input("price_ht") * 100;
        $product->image = $request->file("image")->hashName();
        $product->manufacturer_id = $request->input("manufacturer_id");
        $product->reviews_sum = 0;
        $product->save();

        foreach ($request->input("categories") as $category) {
            $product->categories()->attach($category);
        }

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
        $product = $product->price_ht / 100;
        return view('product.edit', compact("product"), ["categories" => Category::all(), "manufacturers" => Manufacturer::all()]);
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

        $request->input("categories") 
            ? $product->categories()->sync($request->input("categories")) 
            : $product->categories()->detach();

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
