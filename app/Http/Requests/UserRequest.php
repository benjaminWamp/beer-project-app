<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
            "email" => "required|email",
            "password" => "required|confirmed",
            "role" => "required|in:customer,admin",
            "number" => "numeric",
            "street" => "max:1000",
            "city" => "max:1000",
            "zip_code" => "max:5|min:5"
        ];
    }
}
