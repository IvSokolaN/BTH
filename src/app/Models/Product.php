<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'article',
        'title',
        'status',
        'data',
    ];

    protected $casts = [
        'data' => 'array',
    ];

    /**
     * @param Builder $query
     * @return void
     */
    public function scopeAvailable(Builder $query): void
    {
        $query->where('status', 'Доступен');
    }
}
