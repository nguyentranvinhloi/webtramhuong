<?php

namespace App\Http\Controllers\Api;
use App\Models\Contact;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class ContactController extends Controller
{
     /*lay danh sach*/
     public function index(){
        $contacts = Contact::where('status', 1)
        ->orderBy('created_at', 'DESC')
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'contacts'=>$contacts],200);
    }

    /*lay bang id -> chi tiet */
    public function show($id){
        $contact = Contact::find($id);
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'contacts'=>$contact],200);
    }

    /* them */
    public function store(Request $request){
        $contact = new Contact();
        $contact->user_id = $request->user_id;//form
        $contact->name = $request->name; //form
        $contact->email = $request->email; //form
        $contact->phone = $request->phone; //form
        $contact->title = $request->title; //form
        $contact->content = $request->content; //form
        $contact->created_at = date('Y-m-d H:i:s');
        $contact->created_by = 1;
        $contact->status = $request->status; //form
        $contact->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thêm thành công!', 'data' => $contact],201);
    }

    /*update*/
    public function update(Request $request,$id){
        $contact = Contact::find($id);
        $contact->user_id = $contact->user_id;//form
        $contact->name = $request->name; //form
        $contact->email = $request->email; //form
        $contact->phone = $request->phone; //form
        $contact->title = $request->title; //form
        $contact->content = $request->content; //form
        $contact->created_at = date('Y-m-d H:i:s');
        $contact->created_by = 1;
        $contact->status = $request->status; //form
        $contact->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Cập nhật thành công!', 'data' => $contact],200);
    }

    /* xoa */
    public function destroy($id)
    {
        $contact = Contact::find($id);
        if($contact==null)
        {
            return response()->json(
                ['success' => false, 'message' => 'Xóa không thành công!', 'contact' => null], 404
            );
        }
        $contact->delete();
        return response()->json(
            ['success' => true, 'message' => 'Xóa thành công!', 'id' => $contact], 200
        );
    }

    //Hiển thị thùng rác
    public function trash()
    {
        $contacts=Contact::where('status',2)
        ->orderBy('created_at', 'DESC')
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'contacts'=>$contacts],200);
    }
    //Xóa vào thùng rác
    public function delete(Request $request,$id)
    {
        $contact = Contact::find($id);
        $contact->status = 2; 
        $contact->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Đã chuyển vào thùng rác!', 'data' => $contact],200);
    }
    //Khôi phục
    public function restore(Request $request,$id)
    {
        $contact=Contact::find($id);
        $contact->status=1;
        $contact->save();
        return response()->json(['success' => true, 'message' => 'Khôi phục thành công', 'data' => $contact],201);
    }
}
