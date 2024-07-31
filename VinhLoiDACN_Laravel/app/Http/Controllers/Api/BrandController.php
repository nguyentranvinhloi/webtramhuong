<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BrandController extends Controller
{
    /*lay danh sach thuong hieu*/
    public function index()
    {
        $brands = Brand::where('status', 1)
        ->orderBy('created_at', 'DESC')
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'brands'=>$brands],200);
    }

    /*lay thuong hieu bang id -> chi tiet */
    public function show($id){
        if(is_numeric($id))
        {
            $brand = Brand::find($id);
        }
        else
        {
            $brand = Brand::where('slug',$id)->first();
        }
        return response()->json(
            ['success'=>true,
            'message'=>"Tải dữ liệu thành công",
            'brands'=>$brand
            ],200);
    }

    /* them thuong hieu */
    public function store(Request $request){
        $brand = new Brand();
        $brand->name = $request->name; //form
        $brand->slug = Str::of($request->name)->slug('-');
        // $brand->image = $request->name;
        //upload hình ảnh
        $files=$request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $brand->slug . '.' . $extension;
                $brand->image = $filename;
                $files->move(public_path('images/brand'), $filename);
            }
        }
        //
        $brand->sort_order = $request->sort_order; //form
        $brand->metakey = $request->metakey; //form
        $brand->metadesc = $request->metadesc; //form
        $brand->created_at = date('Y-m-d H:i:s');
        $brand->created_by = 1;
        $brand->status = $request->status; //form
        $brand->showhome = $request->showhome; //form
        $brand->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thêm thành công!', 'data' => $brand],201); 
    }

    /*update*/
    public function update(Request $request,$id){
        $brand = Brand::find($id);
        $brand->name = $request->name; // form
        $brand->slug = Str::of($request->name)->slug('-');
        // $brand->image = $request->name;
        //upload hình ảnh
        $files=$request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $brand->slug . '.' . $extension;
                $brand->image = $filename;
                $files->move(public_path('images/brand'), $filename);
            }
        }
        //
        $brand->sort_order = $request->sort_order; //form
        $brand->metakey = $request->metakey; //form
        $brand->metadesc = $request->metadesc; //form
        $brand->updated_at = date('Y-m-d H:i:s');
        $brand->updated_by = 1;
        $brand->showhome = $request->showhome;
        $brand->status = $request->status; //form
        $brand->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Cập nhật thành công!', 'data' => $brand],200);
    }

    /* xoa */
    public function destroy($id)
    {
        $brand = Brand::find($id);
        if($brand==null)
        {
            return response()->json(
                ['success' => false, 'message' => 'Xóa không thành công', 'brand' => null], 404
            );
        }
        $brand->delete();
        return response()->json(
            ['success' => true, 'message' => 'Xóa thành công', 'id' => $brand], 200
        );
    }

    public function showhome()
    {
        $brands = Brand::where('showhome', 1)
        ->orderBy('created_at', 'DESC')
        ->limit(3)
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'brands'=>$brands],200);
    }

    //---------------------------------------------------------------------------------------------------
    // //Thay đổi trạng thái
    // public function status(string $id)
    // {
    //     $brand=Brand::find($id);
    //     if($brand==null)
    //     {
    //         toastr()->error('Không tồn tại mẫu tin!', 'Thông báo!');
    //         return redirect()->route('brand.index');
    //     }
    //     $brand->status=($brand->status==1)?2:1;
    //     $brand->updated_at=date('Y-m-d H:i:s');
    //     $brand->updated_by=Auth::id()??1;
    //     $brand->save();
    //     toastr()->success('Thay đổi trạng thái thành công!', 'Thông báo!');
    //         return redirect()->route('brand.index');
    //}
    //Hiển thị thùng rác
    public function trash()
    {
        $brands=Brand::where('status',2)
        ->orderBy('created_at', 'DESC')
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'brands'=>$brands],200);
    }
    //Xóa vào thùng rác
    public function delete(Request $request,$id)
    {
        $brand = Brand::find($id);
        $brand->status = 2; 
        $brand->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Đã chuyển vào thùng rác!', 'data' => $brand],200);
    }
    //Khôi phục
    public function restore(Request $request,$id)
    {
        $brand=Brand::find($id);
        $brand->status=1;
        $brand->save();
        return response()->json(['success' => true, 'message' => 'Khôi phục thành công', 'data' => $brand],201);
    }
}
