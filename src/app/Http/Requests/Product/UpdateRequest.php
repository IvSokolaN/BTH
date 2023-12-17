<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'article' => [
                'required',
                'string',
                'alpha_num:ascii',
                'unique:products,article,' . $this->product->id,
            ],
            'title' => [
                'required',
                'string',
                'min:10',
            ],
            'status' => [
                'required',
                'string',
            ],
            'data' => [
                'array',
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'article.required' => 'Необходимо указать артикул.',
            'article.unique' => 'Артикул уже существует.',
            'article.alpha_num' => 'Артикул может содержать только буквы и цифры.',
            'title.required' => 'Необходимо указать название.',
            'title.min' => 'Название должно содержать не менее 10 символов.',
            'status.required' => 'Необходимо указать статус.',
        ];
    }
}
