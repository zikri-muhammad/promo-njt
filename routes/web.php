<?php

use App\Http\Controllers\DefaultController;
use Illuminate\Support\Facades\Route;

Route::get('/', 'DefaultController@index')->name('');
Route::get('/about', 'DefaultController@about')->name('about');

