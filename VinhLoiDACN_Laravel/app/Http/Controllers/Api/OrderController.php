<?php

namespace App\Http\Controllers\Api;

use App\Models\Order;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class OrderController extends Controller
{
    /*lay danh sach*/
    public function index(){
        $orders = Order::where('status','!=', 0)
        ->orderBy('created_at', 'DESC')
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'orders'=>$orders],200);
        
    }
        
        /*lay bang id -> chi tiet */
        public function show($id){
            $order = Order::find($id);
            return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'orders'=>$order],200);
        }

        

        /* them */
        public function store(Request $request){
            $order = new Order();
            $order->user_id = $request->user_id; //form
            $order->product_id = $request->product_id; //form
            $order->name = $request->name; //form
            $order->phone = $request->phone; //form
            $order->email = $request->email; //form
            $order->address = $request->address; //form
            $order->note = $request->note; //form
            $order->price = $request->price; //form
            $order->total = $request->total; //form
            $order->qty = $request->qty; //form
            $order->gender = $request->gender; //form
            $order->created_at = date('Y-m-d H:i:s');
            $order->status = $request->status; //form
            $order->save(); //Luuu vao CSDL
            return response()->json(['success' => true, 'message' => 'Thêm thành công!', 'data' => $order],201); 
        }
        
            /*update*/
            public function update(Request $request,$id){
                $order = Order::find($id);
                $order->user_id = $request->user_id; //form
                $order->product_id = $request->product_id; //form
                $order->name = $request->name; //form
                $order->phone = $request->phone; //form
                $order->email = $request->email; //form
                $order->address = $request->address; //form
                $order->note = $request->note; //form
                $order->price = $request->price; //form
                $order->total = $request->total; //form
                $order->qty = $request->qty; //form
                $order->gender = $request->gender; //form
                $order->created_at = date('Y-m-d H:i:s');
                $order->status = $request->status; //form
                $order->save(); //Luuu vao CSDL
                return response()->json(['success' => true, 'message' => 'Cập nhật thành công!', 'data' => $order],200);
            }
        
            /* xoa */
        public function destroy($id)
        {
            $order = Order::find($id);
            if($order==null)
            {
                return response()->json(
                    ['success' => false, 'message' => 'Xóa không thành công!', 'order' => null], 404
                );
            }
            $order->delete();
            return response()->json(
                ['success' => true, 'message' => 'Xóa thành công!', 'id' => $order], 200
            );
    }

    //Hiển thị thùng rác
    // public function trash()
    // {
    //     $orders=Order::where('status',2)
    //     ->orderBy('created_at', 'DESC')
    //     ->get();
    //     return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'orders'=>$orders],200);
    // }
    public function trash()
    {
        $order = Order::selectRaw('DATE(created_at) as date, SUM(total) as total')
        ->groupBy('date')
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'orders'=>$order],200);
    }
    //----------------------------------------------------------------------------------------------------
    public function history()
    {
        $order = Order::selectRaw('DATE(created_at) as date, SUM(total) as total')
        ->groupBy('date')
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'orders'=>$order],200);
    }
    // public function trash($id)
    // {
    //     $orders=Order::find($id)
    //     ->orderBy('created_at', 'DESC')
    //     ->get();
    //     return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'orders'=>$orders],200);
    // }
    
    // public function user()
    // {
    //     $orders=Order::where('status',1)
    //     ->orderBy('created_at', 'DESC')
    //     ->get();
    //     return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'orders'=>$orders],200);
    // }

    //Xóa vào thùng rác
    public function delete(Request $request,$id)
    {
        $order = Order::find($id);
        $order->status = 2; 
        $order->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Đã chuyển vào thùng rác!', 'data' => $order],200);
    }
    //Khôi phục
    public function restore(Request $request,$id)
    {
        $order=Order::find($id);
        $order->status=1;
        $order->save();
        return response()->json(['success' => true, 'message' => 'Khôi phục thành công!', 'data' => $order],201);
    }
    public function statustrash()
    {
        $orders=Order::where('status',2)
        ->orderBy('created_at', 'DESC')
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'orders'=>$orders],200);
    }
     //Thay đổi trạng thái
    public function status(Request $request,$id)
    {
        $order=Order::find($id);
        $order->status=2;
        $order->save();
        return response()->json(['success' => true, 'message' => 'Thay đổi trạng thái thành công!', 'data' => $order],201);
    }
    //-----------------------------------------------
    public function chart(){
        // $order = Order::selectRaw('DATE(created_at) as date, SUM(amount) as total')
        // ->groupBy('date')
        // ->get();
        // return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'orders'=>$order],200);
        $order = Order::where('status','!=', 0)
        ->orderBy('created_at', 'DESC')
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'orders'=>$order],200);
    }
    
}



//----------------------------------------------------------------
