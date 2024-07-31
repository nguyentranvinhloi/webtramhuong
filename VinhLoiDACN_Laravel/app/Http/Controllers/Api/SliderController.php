<?php

namespace App\Http\Controllers\Api;
use App\Models\Slider;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class SliderController extends Controller
{
    /*lay danh sach*/
    public function index(){
        $sliders = Slider::where('status', 1)
        ->orderBy('created_at', 'DESC')
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'sliders'=>$sliders],200);
    }
    
    /*lay bang id -> chi tiet */
    public function show($id){
    $slider = Slider::find($id);
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'sliders'=>$slider],200);
    }
    
    /* them */
    public function store(Request $request){
        $slider = new Slider();
        $slider->name = $request->name; //form
         //upload hình ảnh
         $files=$request->image;
         if ($files != null) {
             $extension = $files->getClientOriginalExtension();
             if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                 $filename = $slider->name . '.' . $extension;
                 $slider->image = $filename;
                 $files->move(public_path('images/slider'), $filename);
             }
         }
        $slider->link = $request->link; //form
        $slider->sort_order = $request->sort_order; //form
        $slider->position = $request->position; //form
        $slider->created_at = date('Y-m-d H:i:s');
        $slider->status = $request->status; //form
        $slider->save(); //Luuu vao CSDL
            return response()->json(['success' => true, 'message' => 'Thêm thành công!', 'data' =>$slider],201); 
        }
    
    /*update*/
    public function update(Request $request,$id){
        $slider = Slider::find($id);
        $slider->name = $request->name; //form
         //upload hình ảnh
         $files=$request->image;
         if ($files != null) {
             $extension = $files->getClientOriginalExtension();
             if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                 $filename = $slider->name . '.' . $extension;
                 $slider->image = $filename;
                 $files->move(public_path('images/slider'), $filename);
             }
         }
         //
        $slider->link = $request->link; //form
        $slider->sort_order = $request->sort_order; //form
        $slider->position = $request->position; //form
        $slider->created_at = date('Y-m-d H:i:s');
        $slider->status = $request->status; //form
        $slider->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Cập nhật thành công!', 'data' =>$slider],200);
    }
    
    /* xoa */
    public function destroy($id)
    {
        $slider = Slider::find($id);
        if($slider==null)
        {
            return response()->json(
                ['success' => false, 'message' => 'Xóa không thành công!', 'slider' => null], 404
            );
        }
        $slider->delete();
        return response()->json(
            ['success' => true, 'message' => 'Xóa thành công!', 'id' => $slider], 200
        );
    }

    /* lay du len trang frontend */
    public function slider_list($position)
    {
        $args = [
            ['position', '=', $position],
            ['status', '=', 1]
        ];
        $sliders = Slider::where($args)
            ->orderBy('sort_order', 'ASC')
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'sliders' => $sliders
            ],
            200
        );
    }

    //Hiển thị thùng rác
    public function trash()
    {
        $sliders=Slider::where('status',2)
        ->orderBy('created_at', 'DESC')
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'sliders'=>$sliders],200);
    }
    //Xóa vào thùng rác
    public function delete(Request $request,$id)
    {
        $slider = Slider::find($id);
        $slider->status = 2; 
        $slider->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Đã chuyển vào thùng rác!', 'data' => $slider],200);
    }
    //Khôi phục
    public function restore(Request $request,$id)
    {
        $slider=Slider::find($id);
        $slider->status=1;
        $slider->save();
        return response()->json(['success' => true, 'message' => 'Khôi phục thành công', 'data' => $slider],201);
    }
}
