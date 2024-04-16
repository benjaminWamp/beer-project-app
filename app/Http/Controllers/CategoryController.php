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
        $categories = Category::paginate(10);
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
            "slug" => Str::slug($request->name),
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

    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $category->update([
            ...$request->validated(),
            "slug" => Str::slug($request->slug),
        ]);

        return redirect()->route("category.show", $category);
    }

    public function destroy(Category $category)
    {

        $category->delete();
        return redirect()->route("category.index");
    }
}
