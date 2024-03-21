<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateManufacturerRequest extends FormRequest
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
            "adress" => "required|max:1000|min:10",
            "description" => "required|max:1000|min:10",
        ];
    }
}
