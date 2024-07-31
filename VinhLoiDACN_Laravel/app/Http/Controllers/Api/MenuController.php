<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class MenuController extends Controller
{
    /*lay danh sach*/
    public function index()
    {
        $menus = Menu::where('status', 1)
        ->orderBy('created_at', 'DESC')
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'menus'=>$menus],200);
    }
    
    /*lay bang id -> chi tiet */
    public function show($id){
        $menu = Menu::find($id);
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'menus'=>$menu],200);
    }
    
        /* them */
        public function store(Request $request){
            $menu = new Menu();
            $menu->name = $request->name; //form
            $menu->link = $request->link; //form
            //$menu->table_id = $request->table_id; //form
            $menu->parent_id = $request->parent_id; //form
            $menu->position = $request->position; //form
            $menu->sort_order = $request->sort_order; //form
            //$menu->type = $request->type; //form
            $menu->created_at = date('Y-m-d H:i:s');
            $menu->created_by = 1;
            $menu->status = $request->status; //form
            $menu->save(); //Luuu vao CSDL
            return response()->json(['success' => true, 'message' => 'Thêm thành công!', 'data' => $menu],201); 
        }
    
        /*update*/
        public function update(Request $request,$id){
            $menu = Menu::find($id);
            $menu->name = $request->name; //form
            $menu->link = $request->link; //form
            //$menu->table_id = $request->table_id; //form
            $menu->parent_id = $request->parent_id; //form
            $menu->position = $request->position; //form
            $menu->sort_order = $request->sort_order; //form
            //$menu->type = $request->type; //form
            $menu->created_at = date('Y-m-d H:i:s');
            $menu->created_by = 1;
            $menu->status = $request->status; //form
            $menu->save(); //Luuu vao CSDL
            return response()->json(['success' => true, 'message' => 'Cập nhật thành công!', 'data' => $menu],200);
        }
    
       /* xoa */
    public function destroy($id)
    {
        $menu = Menu::find($id);
        if($menu==null)
        {
            return response()->json(
                ['success' => false, 'message' => 'Xóa không thành công!', 'menu' => null], 404
            );
        }
        $menu->delete();
        return response()->json(
            ['success' => true, 'message' => 'Xóa thành công!', 'id' => $menu], 200
        );
    }

        /*Lay du lieu len trang frontend */

        public function menu_list($position, $parent_id = 0)
    {
        $args = [
            ['position', '=', $position],
            ['parent_id', '=', $parent_id],
            ['status', '=', 1]
        ];
        $menus = Menu::where($args)
            ->orderBy('sort_order', 'ASC')
            ->get();
        if(count($menus))
        {
            return response()->json(
                [
                    'success' => true,
                    'message' => 'Tải dữ liệu thành công',
                    'menus' => $menus
                ],
                200
            );
        }
        else
        {
            return response()->json(
                [
                    'success' => false,
                    'message' => 'Tải dữ liệu không thành công',
                    'menus' => null
                ],
                200
            );
        }
       
    }
   
    //Hiển thị thùng rác
    public function trash()
    {
        $menus=Menu::where('status',2)
        ->orderBy('created_at', 'DESC')
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'menus'=>$menus],200);
    }
    //Xóa vào thùng rác
    public function delete(Request $request,$id)
    {
        $menu = Menu::find($id);
        $menu->status = 2; 
        $menu->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Đã chuyển vào thùng rác!', 'data' => $menu],200);
    }
    //Khôi phục
    public function restore(Request $request,$id)
    {
        $menu=Menu::find($id);
        $menu->status=1;
        $menu->save();
        return response()->json(['success' => true, 'message' => 'Khôi phục thành công', 'data' => $menu],201);
    }
}
