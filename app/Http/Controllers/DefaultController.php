<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DefaultController extends Controller
{
    public function index()
    {
        return Inertia::render('App');
    }

    public function  about() {
        return Inertia::render('About');
    }
}
