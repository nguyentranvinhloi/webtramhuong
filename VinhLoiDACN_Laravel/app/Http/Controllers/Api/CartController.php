<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CartController extends Controller
{
    /*lay danh sach gio hang*/
    public function addcart($id)
    {
        $product = Product::find($id);
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'products'=>$product],200);
    }


    public function online_checkout(){
        if(isset($_POST['cod'])){
            return('cod');
        }elseif(isset($_POST['momo'])){
            return('momo');
        }
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'brands'=>$brands],200);
    }
    
}
