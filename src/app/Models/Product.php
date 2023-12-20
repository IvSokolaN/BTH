<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Notifications\Notification;

class Product extends Model
{
    use SoftDeletes;
    use Notifiable;

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

    /**
     * @return string
     */
    public function routeNotificationForMail(): string
    {
        return config('products.email');
    }
}
