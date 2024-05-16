<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => "required|max:255|min:2",
            "description" => "required|max:1000|min:10",
            'delivered_at' => "date",
            "image" => "required|file|image|mimes:jpg,png,jpeg|max:10024",
            "stock" => "required|numeric",
            "price_ht" => "required|numeric|min:0",
            "manufacturer_id" => "required|exists:App\Models\Manufacturer,id",
            "categories" => "required",
            "reviews_mean" => "numeric|max:5",
        ];
    }
}
