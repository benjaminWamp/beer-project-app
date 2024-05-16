<?php

namespace App\Http\Controllers;


use App\Http\Requests\CreateproductRequest;
use App\Http\Requests\UpdateproductRequest;
use App\Models\Category;
use App\Models\Manufacturer;
use Illuminate\Support\Facades\Storage;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::orderBy('created_at', 'desc')->paginate(10);
        return view('product.index', ["product" => $products]);
    }

    public function search(Request $request)
    {
        $query = $request->input('query');

        $products = Product::where('name', 'LIKE', "%{$query}%")
            ->orWhere('description', 'LIKE', "%{$query}%")
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->appends(['query' => $query]);

        return view('product.search', compact('products', 'query'));
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
        $categories = Category::whereHas("products", function ($query) use ($product) {
            $query->where("product_id", $product->id);
        })->get();

        // Créer une chaîne de noms de catégories séparés par une virgule
        $categoriesName = $categories->pluck('name')->implode(', ');
        return view('product.show', compact("product", "categoriesName"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $product->price_ht = $product->price_ht / 100;

        $selectedCategories = $product->categories->pluck("id")->toArray(); // dd() is a function that dumps the variable and ends the script
        return view('product.edit', compact("product"), ["categories" => Category::all(), "manufacturers" => Manufacturer::all(), "selectedCategories" => $selectedCategories]);
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
                "price_ht" => ($request->input("price_ht") * 100)
            ]);
        } else {
            $product->update([
                ...$request->validated(),
                "price_ht" => ($request->input("price_ht") * 100)
            ]);
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
