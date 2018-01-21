<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', 'WelcomeController@showContent');
Route::get('about', 'AboutController@showContent');
Route::get('service', 'ServiceController@showContent');
Route::get('overseas', 'StudyController@showContent');
Route::get('overseas/australia', 'StudyController@australia');
Route::get('overseas/switzerland', 'StudyController@switzerland');
Route::get('contact', 'ContactController@showContent');

Route::get('contact', 'ContactController@getEmail');
Route::post('sendmail', function (\Illuminate\Http\Request $request, \Illuminate\Mail\Mailer $mailer){
	$mailer
		->to('info@icedu.id')
		->send(new \App\Mail\MyMail($request->input('name, email, tel, message')));
	return redirect()->back();
})->name('sendmail');