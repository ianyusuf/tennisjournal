<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function showContent()
	{
		return view('contact-us.index');
	}
}