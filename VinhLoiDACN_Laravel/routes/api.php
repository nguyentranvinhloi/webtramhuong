<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\MenuController;
use App\Http\Controllers\Api\SliderController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\OrderdetailController;
use App\Http\Controllers\Api\TopicController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\OnlineCheckoutController;

//  Route::middleware('auth:sanctum')->get('\user', function (Request $request) {
//      return $request->user();
//  });
// Route::prefix('brand')->group-(function(){
//     Route::get('index',[BrandController::class,'index']);
//     Route::get('show/{id}',[BrandController::class,'show']);
//     Route::post('store',[BrandController::class,'store']);
//     Route::post('update/{id}',[BrandController::class,'update']);
//     Route::delete('destroy/{id}',[BrandController::class,'destroy']);
// });
//frontend-------------------------------------------------------------------------------------
Route::get('menu_list/{position}/{parent_id?}', [MenuController::class, 'menu_list']);
Route::get('slider_list/{position}', [SliderController::class, 'slider_list']);
Route::get('category_list/{parent_id?}', [CategoryController::class, 'category_list']);

Route::get('product_home/{limit}/{category_id?}', [ProductController::class, 'product_home']);
Route::get('product_all/{limit}/{page?}', [ProductController::class, 'product_all']);
Route::get('product_category/{category_id}/{limit}', [ProductController::class, 'product_category']);
Route::get('product_brand/{brand_id}/{limit}', [ProductController::class, 'product_brand']);
Route::get('product_detail/{slug}', [ProductController::class, 'product_detail']);
Route::get('product_other/{id}/{limit}', [ProductController::class, 'product_other']);
Route::get('product_list/{limit}', [ProductController::class, 'product_list']);
Route::get('product_sale/{limit}', [ProductController::class, 'product_sale']);
Route::get('product/search', [ProductController::class, 'search']);

Route::get('post_list/{limit}', [PostController::class, 'post_list']);
Route::get('post_all/{limit}', [PostController::class, 'post_all']);
Route::get('post_topic/{topic_id}/{limit}', [PostController::class, 'post_topic']);
Route::get('post_detail/{slug}', [PostController::class, 'post_detail']);
Route::get('post_other/{id}/{limit}', [PostController::class, 'post_other']);

Route::post('online_checkout', [OnlineCheckoutController::class, 'online_checkout']);

//backend--------------------------------------------------------------------------------------
Route::get('brand/index',[BrandController::class,'index']);
Route::get('brand/showhome',[BrandController::class,'showhome']);
Route::get('brand/show/{id}', [BrandController::class, 'show']);
Route::post('brand/store', [BrandController::class, 'store']);
Route::post('brand/update/{id}', [BrandController::class, 'update']);
Route::delete('brand/destroy/{id}', [BrandController::class, 'destroy']);
Route::get('brand/trash',[BrandController::class,'trash']);
Route::post('brand/status/{id}', [BrandController::class, 'status']);
Route::post('brand/delete/{id}', [BrandController::class, 'delete']);
Route::post('brand/restore/{id}', [BrandController::class, 'restore']);

Route::get('category/index',[CategoryController::class,'index']);
Route::get('category/showhome',[CategoryController::class,'showhome']);
Route::get('category/show/{id}', [CategoryController::class, 'show']);
Route::post('category/store', [CategoryController::class, 'store']);
Route::post('category/update/{id}', [CategoryController::class, 'update']);
Route::delete('category/destroy/{id}', [CategoryController::class, 'destroy']);
Route::get('category/trash',[CategoryController::class,'trash']);
Route::post('category/delete/{id}', [CategoryController::class, 'delete']);
Route::post('category/restore/{id}', [CategoryController::class, 'restore']);

Route::get('product/index',[ProductController::class,'index']);
Route::get('product/show/{id}', [ProductController::class, 'show']);
Route::post('product/store', [ProductController::class, 'store']);
Route::post('product/update/{id}', [ProductController::class, 'update']);
Route::delete('product/destroy/{id}', [ProductController::class, 'destroy']);
Route::get('product/trash',[ProductController::class,'trash']);
Route::post('product/delete/{id}', [ProductController::class, 'delete']);
Route::post('product/restore/{id}', [ProductController::class, 'restore']);

Route::get('menu/index',[MenuController::class,'index']);
Route::get('menu/show/{id}', [MenuController::class, 'show']);
Route::post('menu/store', [MenuController::class, 'store']);
Route::post('menu/update/{id}', [MenuController::class, 'update']);
Route::delete('menu/destroy/{id}', [MenuController::class, 'destroy']);
Route::get('menu/trash',[MenuController::class,'trash']);
Route::post('menu/delete/{id}', [MenuController::class, 'delete']);
Route::post('menu/restore/{id}', [MenuController::class, 'restore']);

Route::get('contact/index',[ContactController::class,'index']);
Route::get('contact/show/{id}', [ContactController::class, 'show']);
Route::post('contact/store', [ContactController::class, 'store']);
Route::post('contact/update/{id}', [ContactController::class, 'update']);
Route::get('contact/trash',[ContactController::class,'trash']);
Route::post('contact/delete/{id}', [ContactController::class, 'delete']);
Route::post('contact/restore/{id}', [ContactController::class, 'restore']);

Route::get('order/index',[OrderController::class,'index']);
Route::get('order/show/{id}', [OrderController::class, 'show']);
Route::post('order/store', [OrderController::class, 'store']);
Route::post('order/update/{id}', [OrderController::class, 'update']);
Route::delete('order/destroy/{id}', [OrderController::class, 'destroy']);
Route::get('order/trash',[OrderController::class,'trash']);
Route::get('order/history',[OrderController::class,'history']);
Route::post('order/delete/{id}', [OrderController::class, 'delete']);
Route::post('order/restore/{id}', [OrderController::class, 'restore']);
Route::post('order/status/{id}', [OrderController::class, 'status']);
Route::get('order/chart',[OrderController::class,'chart']);

//Route::get('order/user',[OrderController::class,'user']);

Route::get('orderdetail/index',[OrderdetailController::class,'index']);
Route::get('orderdetail/show/{id}', [OrderdetailController::class, 'show']);
Route::post('orderdetail/store', [OrderdetailController::class, 'store']);
Route::post('orderdetail/update/{id}', [OrderdetailController::class, 'update']);
Route::delete('orderdetail/destroy/{id}', [OrderdetailController::class, 'destroy']);
Route::get('orderdetail/trash',[OrderdetailController::class,'trash']);
Route::post('orderdetail/delete/{id}', [OrderdetailController::class, 'delete']);
Route::post('orderdetail/restore/{id}', [OrderdetailController::class, 'restore']);

Route::get('slider/index',[SliderController::class,'index']);
Route::get('slider/show/{id}', [SliderController::class, 'show']);
Route::post('slider/store', [SliderController::class, 'store']);
Route::post('slider/update/{id}', [SliderController::class, 'update']);
Route::delete('slider/destroy/{id}', [SliderController::class, 'destroy']);
Route::get('slider/trash',[SliderController::class,'trash']);
Route::post('slider/delete/{id}', [SliderController::class, 'delete']);
Route::post('slider/restore/{id}', [SliderController::class, 'restore']);

Route::get('topic/index',[TopicController::class,'index']);
Route::get('topic/show/{id}', [TopicController::class, 'show']);
Route::post('topic/store', [TopicController::class, 'store']);
Route::post('topic/update/{id}', [TopicController::class, 'update']);
Route::delete('topic/destroy/{id}', [TopicController::class, 'destroy']);
Route::get('topic/trash',[TopicController::class,'trash']);
Route::post('topic/delete/{id}', [TopicController::class, 'delete']);
Route::post('topic/restore/{id}', [TopicController::class, 'restore']);

Route::get('post/index',[PostController::class,'index']);
Route::get('post/show/{id}', [PostController::class, 'show']);
Route::post('post/store', [PostController::class, 'store']);
Route::post('post/update/{id}', [PostController::class, 'update']);
Route::delete('post/destroy/{id}', [PostController::class, 'destroy']);
Route::get('post/trash',[PostController::class,'trash']);
Route::post('post/delete/{id}', [PostController::class, 'delete']);
Route::post('post/restore/{id}', [PostController::class, 'restore']);

Route::get('user/index',[UserController::class,'index']);
Route::get('user/show/{id}', [UserController::class, 'show']);
Route::post('user/store', [UserController::class, 'store']);
Route::post('user/update/{id}', [UserController::class, 'update']);
Route::delete('user/destroy/{id}', [UserController::class, 'destroy']);
Route::get('user/trash',[UserController::class,'trash']);
Route::post('user/delete/{id}', [UserController::class, 'delete']);
Route::post('user/restore/{id}', [UserController::class, 'restore']);

Route::post('user/login', [UserController::class, 'Login']);
Route::post('user/changepassword', [UserController::class, 'changePassword']);
Route::get('user/find/{username}', [UserController::class, 'find']);
Route::get('user/find_user/{email}', [UserController::class, 'findUser']);
Route::post('user/loginadmin', [UserController::class, 'LoginAdmin']);

//Route::delete('user/adduser/{user}', [UserController::class, 'AddUser']);
//-----------------------------------------------------------------------------------------------------



