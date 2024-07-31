<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UserController extends Controller
{
    /*lay danh sach */
    public function index()
    {
        $users = User::where('status', 1)
        ->orderBy('created_at', 'DESC')
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'users'=>$users],200);
    }

    /*lay id -> chi tiet */
    public function show($id){
        $user = User::find($id);
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'users'=>$user],200);
    }

    /*lay dulieu login */
    public function find($username){
        $user = User::where('username', $username)
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'users'=>$user],200);
    }

    

    /* them */
    public function store(Request $request){
        $user = new User();
        $user->name = $request->name; //form
        $user->gender = $request->gender; //form
        $user->email = $request->email; //form
        $user->phone = $request->phone; //form
        $user->username = $request->username; //form
        $user->password = $request->password; //form
        $user->address = $request->address; //form
        // $user->image = $request->name;
         //upload hình ảnh
         $files=$request->image;
         if ($files != null) {
             $extension = $files->getClientOriginalExtension();
             if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                 $filename = $user->name . '.' . $extension;
                 $user->image = $filename;
                 $files->move(public_path('images/user'), $filename);
             }
         }
         //
        $user->roles = $request->roles;
        $user->created_at = date('Y-m-d H:i:s');
        //$user->status = $request->status; //form
        $user->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thêm thành công!', 'data' => $user],201); 
    }

    /*update*/
    public function update(Request $request,$id){
        $user = User::find($id);
        $user->name = $request->name; //form
        $user->gender = $request->gender; //form
        $user->email = $request->email; //form
        $user->phone = $request->phone; //form
        $user->username = $request->username; //form
        $user->password = $request->password; //form
        $user->address = $request->address; //form
        // $user->image = $request->name;
        //upload hình ảnh
        $files=$request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $user->name . '.' . $extension;
                $user->image = $filename;
                $files->move(public_path('images/user'), $filename);
            }
        }
        //
        $user->roles = $request->roles;
        $user->created_at = date('Y-m-d H:i:s'); 
        //$user->status = $request->status; //form
        $user->save(); //Luuu vao CSDL
          return response()->json(['success' => true, 'message' => 'Cập nhật thành công!', 'data' => $user],200);
    }

    /* xoa */
    public function destroy($id)
    {
        $user = User::find($id);
        if($user==null)
        {
            return response()->json(
                ['success' => false, 'message' => 'Xóa không thành công!', 'user' => null], 404
            );
        }
        $user->delete();
        return response()->json(
            ['success' => true, 'message' => 'Xóa thành công!', 'id' => $user], 200
        );
    }
    //--------------------------------------------
    public function Login(Request $request)
    {
        $arg=[
            ['username','=',$request->username],
            ['password','=',$request->password],
            ['status','=',1],
        ];
        $user = User::where($arg)->get();
        if(count($user)>0)
        {
            return response()->json(
                ['success' => true, 'message' => 'Đăng nhập thành công!', 'data' => $user], 200
            );
        }
        else
        {
            return response()->json(
                ['success' => false, 'message' => 'Sai tài khoản hoặc mật khẩu, vui lòng nhập lại!', 'data' =>null ], 200
            );
        }
    }
    //--------------------------------------------
    public function LoginAdmin(Request $request)
    {
        $arg=[
            ['username','=',$request->username],
            ['password','=',$request->password],
            ['status','=',1],
            ['roles','admin'],
        ];
        $user = User::where($arg)->get();
        if(count($user)>0)
        {
            return response()->json(
                ['success' => true, 'message' => 'Đăng nhập thành công!', 'data' => $user], 200
            );
        }
        else
        {
            return response()->json(
                ['success' => false, 'message' => 'Sai tài khoản hoặc mật khẩu, vui lòng nhập lại!', 'data' =>null ], 200
            );
        }
    }

    /*lay dulieu login */
    public function findUser($email){
        $user = User::where('email', $email)
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'users'=>$user],200);
    }
    public function changePassword(Request $request)
    {
        $request->validate([
            'old_password' => 'required',
            'new_password' => 'required|confirmed',
            'otp' => 'required'
        ]);

        $user = auth()->user();

        // Kiểm tra mật khẩu cũ
        if (!Hash::check($request->old_password, $user->password)) {
            return response()->json(['error' => 'Mật khẩu cũ không đúng'], 400);
        }

        // Kiểm tra mã OTP
        if (!$this->verifyOTP($user, $request->otp)) {
            return response()->json(['error' => 'Mã OTP không hợp lệ'], 400);
        }

        // Cập nhật mật khẩu mới
        $user->password = Hash::make($request->new_password);
        $user->save();

        return response()->json(['message' => 'Đổi mật khẩu thành công']);
    }
    //------------------------------------------------------------------------
    private function verifyOTP($user, $otp)
    {
        $otpRecord = OtpLog::where('user_id', $user->id)
            ->where('otp', $otp)
            ->where('expired_at', '>', now())
            ->first();

        if ($otpRecord) {
            // Mã OTP hợp lệ, xóa bản ghi OTP sau khi sử dụng
            $otpRecord->delete();
            return true;
        } else {
            return false;
        }
    }
//--------------------------------------------------------------------------------
    //Hiển thị thùng rác
    public function trash()
    {
        $users=User::where('status',2)
        ->orderBy('created_at', 'DESC')
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'users'=>$users],200);
    }
    //Xóa vào thùng rác
    public function delete(Request $request,$id)
    {
        $user = User::find($id);
        $user->status = 2; 
        $user->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Đã chuyển vào thùng rác!', 'data' => $user],200);
    }
    //Khôi phục
    public function restore(Request $request,$id)
    {
        $user=User::find($id);
        $user->status=1;
        $user->save();
        return response()->json(['success' => true, 'message' => 'Khôi phục thành công', 'data' => $user],201);
    }


}
