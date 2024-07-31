<?php

namespace App\Http\Controllers\Api;

use App\Models\Orderdetail;
use App\Models\Order;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class OrderdetailController extends Controller
{
    /*lay danh sach*/
    public function index(){
        $orderdetails = Orderdetail::all();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'orderdetails'=>$orderdetails],200);
    }
        
        /*lay bang id -> chi tiet */
    public function show($id){
        $orders = Order::where('user_id','=',$id)
        ->orderBy('created_at', 'DESC')
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'orders'=>$orders],200);
    }
        
        /* them */
        public function store(Request $request){
            $orderdetail = new Orderdetail();
            $orderdetail->product_id = $request->product_id; //form
            $orderdetail->price = $request->price; //form
            $orderdetail->discount = $request->discount; //form
            $orderdetail->qty = $request->qty; //form
            $orderdetail->amount = $request->amount; //form
            $orderdetail->save(); //Luuu vao CSDL
            return response()->json(['success' => true, 'message' => 'Thành công', 'data' => $orderdetail],201); 
        }
        
        /*update*/
        public function update(Request $request,$id){
            $orderdetail = Orderdetail::find($id);
            $orderdetail->product_id = $request->product_id; //form
            $orderdetail->price = $request->price; //form
            $orderdetail->discount = $request->discount; //form
            $orderdetail->qty = $request->qty; //form
            $orderdetail->amount = $request->amount; //form
            $orderdetail->save(); //Luuu vao CSDL
            return response()->json(['success' => true, 'message' => 'Thành công', 'data' => $orderdetail],200);
        }
        
            /* xoa */
    public function destroy($id)
    {
        $orderdetail = Orderdetail::find($id);
        if($orderdetail==null)
        {
            return response()->json(
                ['success' => false, 'message' => 'Xóa không thành công', 'orderdetail' => null], 404
            );
        }
        $orderdetail->delete();
        return response()->json(
            ['success' => true, 'message' => 'Xóa thành công', 'id' => $orderdetail], 200
        );
    }

    //Hiển thị thùng rác
    public function trash()
    {
        $orderdetails=Orderdetail::where('status',2)
        ->orderBy('created_at', 'DESC')
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'orderdetails'=>$orderdetails],200);
    }
    //Xóa vào thùng rác
    public function delete(Request $request,$id)
    {
        $orderdetail = Orderdetail::find($id);
        $orderdetail->status = 2; 
        $orderdetail->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Đã chuyển vào thùng rác!', 'data' => $orderdetail],200);
    }
    //Khôi phục
    public function restore(Request $request,$id)
    {
        $orderdetail=Orderdetail::find($id);
        $orderdetail->status=1;
        $orderdetail->save();
        return response()->json(['success' => true, 'message' => 'Khôi phục thành công', 'data' => $orderdetail],201);
    }
}
