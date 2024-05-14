<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::orderBy('created_at', 'desc')->paginate(10);
        return view("category.index", compact('categories'));
    }

    public function create()
    {
        return view('category.create');
    }



    public function store(CreateCategoryRequest $request)
    {
        $category = Category::create([
            ...$request->validated(),
        ]);
        return redirect()->route("category.show", $category);
    }

    public function show(Category $category)
    {
        return view('category.show', compact("category"));
    }

    public function edit(Category $category)
    {
        return view('category.edit', compact("category"));
    }

    public function search(Request $request)
    {

        $query = $request->input('query');

        $categories = Category::where('name', 'LIKE', "%{$query}%")
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->appends(['query' => $query]);

        return view('category.search', compact('categories', 'query'));
    }

    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $category->update([
            ...$request->validated(),
        ]);

        return redirect()->route("category.show", $category);
    }

    public function destroy(Category $category)
    {

        $category->delete();
        return redirect()->route("category.index");
    }
}
