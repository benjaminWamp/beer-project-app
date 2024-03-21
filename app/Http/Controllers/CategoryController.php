<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;

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
        Category::create($request->validate());

        return redirect()->route("category.show");
    }

    public function show(Category $category)
    {
        return view('category.show', compact("category"));
    }

    public function edit(Category $category)
    {
        return view('category.edit');
    }

    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $category->update(
            $request->validated()
        );

        return redirect()->route("category.show");
    }

    public function destroy(Category $category)
    {

        $category->delete();
        return redirect()->route("category.index");
    }
}
