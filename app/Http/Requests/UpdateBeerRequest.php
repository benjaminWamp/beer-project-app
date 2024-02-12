<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBeerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
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
            "published_at" => "required|date",
            "image" => "required|url",
            "price" => "required|numeric|min:0",
            "editor_id" => "required|exists:App\Models\Editor,id",
        ];
    }
}
