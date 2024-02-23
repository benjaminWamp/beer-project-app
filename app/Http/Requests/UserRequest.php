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
            "password" => "required",
            "numero" => "numeric",
            "rue" => "max:1000|min:10",
            "ville" => "max:1000|min:10",
            "code_postal" => "max:5|min:5"
        ];
    }
}
