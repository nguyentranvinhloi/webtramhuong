<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;
use App\Models\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class ProductController extends Controller
{
     /*lay danh sach*/
     public function index(){
        $products = Product::where('status', 1)
        ->orderBy('created_at', 'DESC')
        ->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'products'=>$products],200);
    }

    /*lay bang id -> chi tiet */
    public function show($id){
        $product = Product::find($id);
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'products'=>$product],200);
    }

    /* them */
    public function store(Request $request){
        $product = new Product();
        $product->category_id = $request->category_id; //form
        $product->brand_id = $request->brand_id; //form
        $product->name = $request->name; //form
        $product->slug = Str::of($request->name)->slug('-');
        // $product->image = $request->name;
        //upload hình ảnh
        $files=$request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $product->slug . '.' . $extension;
                $product->image = $filename;
                $files->move(public_path('images/product'), $filename);
            }
        }
        //
        $product->price = $request->price;//form
        $product->price_sale = $request->price_sale;//form
        $product->qty = $request->qty;//form
        $product->detail = $request->detail;//form
        $product->metakey = $request->metakey; //form
        $product->metadesc = $request->metadesc; //form
        $product->created_at = date('Y-m-d H:i:s');
        $product->created_by = 1;
        $product->status = $request->status; //form
        $product->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thêm thành công!', 'products' => $product],201); 
    }

    /*update*/
    public function update(Request $request,$id){
        $product = Product::find($id);
        $product->category_id = $request->category_id; //form
        $product->brand_id = $request->brand_id; //form
        $product->name = $request->name; //form
        $product->slug = Str::of($request->name)->slug('-');
         //upload hình ảnh
         $files=$request->image;
         if ($files != null) {
             $extension = $files->getClientOriginalExtension();
             if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                 $filename = $product->name . '.' . $extension;
                 $product->image = $filename;
                 $files->move(public_path('images/product'), $filename);
             }
         }
         //
        $product->price = $request->price;//form
        $product->price_sale = $request->price_sale;//form
        $product->qty = $request->qty;//form
        $product->detail = $request->detail;//form
        $product->metakey = $request->metakey; //form
        $product->metadesc = $request->metadesc; //form
        $product->created_at = date('Y-m-d H:i:s');
        $product->created_by = 1;
        $product->status = $request->status; //form
        $product->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Cập nhật thành công!', 'products' => $product],200);
    }

    /* xoa */
    public function destroy($id)
    {
        $product = Product::find($id);
        if($product==null)
        {
            return response()->json(
                ['success' => false, 'message' => 'Xóa không thành công!', 'product' => null], 404
            );
        }
        $product->delete();
        return response()->json(
            ['success' => true, 'message' => 'Xóa thành công1', 'id' => $product], 200
        );
    }
//-------------------------------------------------------------------------------------------------------------------------------------------------
    //Tai san pham trang home
    public function product_home($limit, $category_id = 0)
    {
        $listid = array();
        array_push($listid, $category_id + 0);
        $args_cat1 = [
            ['parent_id', '=', $category_id + 0],
            ['status', '=', 1]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1) {
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
        $products = Product::where('status', '=', 1)
            ->whereIn('category_id', $listid)
            ->orderBy('created_at', 'DESC')
            ->limit($limit)
            ->get();
            if(count($products)>0){
                return response()->json(
                    [
                        'success' => true,
                        'message' => 'Tải dữ liệu thành công',
                        'products' => $products
                    ],
                    200
                );
            }
            else{
                return response()->json(
                    [
                        'success' => false,
                        'message' => 'Tải dữ liệu không thành công',
                        'products' => null
                    ],
                    404
                );
            }
    }
//----------------------------------------------------------------------------------------
    public function product_all($limit, $page = 1)
    {
        $offset = ($page - 1) * $limit;
        $products = Product::where('status', 1)
            ->orderBy('created_at', 'DESC')
            ->offset($offset)
            ->limit($limit)
            ->get();
            return response()->json(
                [
                    'success' => true,
                    'message' => 'Tải dữ liệu thành công',
                    'products' => $products
                ],
                200
            );
        }
//---------------------------------------------------------------------------------------------
    public function product_detail($slug)
    {
        $product=Product::where([['slug','=',$slug],['status','=',1]])->first();
        if($product==null)
        {
            return response()->json(
                [
                    'success' => false,
                    'message' => 'Không tìm thấy dữ liệu',
                    'product' => null
                ],
                404
            );
        }
        $listid = array();
        array_push($listid, $product->category_id);
        $args_cat1 = [
            ['parent_id', '=', $product->category_id],
            ['status', '=', 1]
        ];
        $list_category1 = Category::where($args_cat1)
        ->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1) {
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
    //----------------------------------------------------------------------------------
        $product_other=Product::where([['id','!=',$product->id],['status','=',1]])
        ->whereIn('category_id',$listid)
        ->orderBy('created_at','DESC')
        ->limit(6)
        ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'product' => $product,
                'product_other'=>$product_other
            ],
            200
        );
    }
    //------------------------------------------------------------------------------------------

    // public function product_category($category_id, $limit)
    // {
    //     $listid = array();
    //     array_push($listid, $category_id);
    //     $args_cat1 = [
    //         ['parent_id', '=', $category_id],
    //         ['status', '=', 1]
    //     ];
    //     $list_category1 = Category::where($args_cat1)->get();
    //     if (count($list_category1) > 0) {
    //         foreach ($list_category1 as $row1) {
    //             array_push($listid, $row1->id);
    //             $args_cat2 = [
    //                 ['parent_id', '=', $row1->id],
    //                 ['status', '=', 1]
    //             ];
    //             $list_category2 = Category::where($args_cat2)->get();
    //             if (count($list_category2) > 0) {
    //                 foreach ($list_category2 as $row2) {
    //                     array_push($listid, $row2->id);
    //                 }
    //             }
    //         }
    //     }
    //     $products = Product::where('status', 1)
    //         ->whereIn('category_id', $listid)
    //         ->orderBy('created_at', 'DESC')
    //         ->limit($limit)
    //         ->get();
    //     if(count($products)>0){
    //         return response()->json(
    //             [
    //                 'success' => true,
    //                 'message' => 'Tải dữ liệu thành công',
    //                 'products' => $products
    //             ],
    //             200
    //         );
    //     }
    //     else
    //     {
    //         return response()->json(
    //             [
    //                 'success' => false,
    //                 'message' => 'Tải dữ liệu không thành công',
    //                 'products' => null
    //             ],
    //             404
    //         );
    //     }
    // }
//-------------------------------------------------------------------------------------------------
    public function product_category($product_id, $limit)
    {
        $products = Product::where([['category_id', '=', $product_id], ['status', '=', 1]])
            ->orderBy('created_at', 'DESC')
            ->limit($limit)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ],
            200
        );
    }
//---------------------------------------------------------------------------------------------------
    public function product_brand($product_id, $limit)
    {
        $products = Product::where([['brand_id', '=', $product_id], ['status', '=', 1]])
            ->orderBy('created_at', 'DESC')
            ->limit($limit)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ],
            200
        );
    }
//---------------------------------------------------------------------------------------------------
    function product_list($limit)//Product_new
    {
        $args = [
            ['status', '=', 1]
        ];
        $products = Product::where($args)
            ->orderBy('created_at', 'DESC')
            ->limit($limit)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ],
            200
        );
    }

//-----------------------------------------------------------
function product_sale($limit)
{
    $args = [
        ['status', '=', 1],
        ['price_sale','!=',0]
    ];
    $products = Product::where($args)
        ->orderBy('created_at', 'DESC')
        ->limit($limit)
        ->get();
    return response()->json(
        [
            'success' => true,
            'message' => 'Tải dữ liệu thành công',
            'products' => $products
        ],
        200
    );
}

//Hiển thị thùng rác
public function trash()
{
    $products=Product::where('status',2)
    ->orderBy('created_at', 'DESC')
    ->get();
    return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'products'=>$products],200);
}
//Xóa vào thùng rác
public function delete(Request $request,$id)
{
    $products = Product::find($id);
    $products->status = 2; 
    $products->save(); //Luuu vao CSDL
    return response()->json(['success' => true, 'message' => 'Đã chuyển vào thùng rác!', 'data' => $products],200);
}
//Khôi phục
public function restore(Request $request,$id)
{
    $products=Product::find($id);
    $products->status=1;
    $products->save();
    return response()->json(['success' => true, 'message' => 'Khôi phục thành công', 'data' => $products],201);
}
// public function search($id){
//     $products = Product::find($id)
//     ->orderBy('created_at', 'DESC')
//     ->get();
//     return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'products'=>$products],200);
// }
// public function search($name){
//     $product = Product::where(['name','=',$name])->get();
//     return response()->json(
//         [
//             'success' => true,
//             'message' => 'Tải dữ liệu thành công',
//             'products' => $products
//         ],
//         200
//     );
// }
public function search(Request $request)
    {
        $query = $request->input('q');
        $products = Product::where('name', 'like', $query)
                           ->get();

        return response()->json($products);
    }
//--------------------------------------------------------------------------------------------------
    /*Lay du lieu len frontend */
    //  public function product_list($limit,$category_id=0,$status=1){
    //      $listid = array();
    //      array_push($listid,$category_id + 0);
    //      $args_cat1=[
    //          ['parent_id','=',$category_id+0],
    //          ['status','=',$status]
    //      ];
    //      $list_category1=Category::where($args_cat1)->get();
    //      if(count($list_category1)>0){
    //          foreach($list_category1 as $row1){
    //              array_push($listid,$row1->id);
    //              $args_cat2=[
    //                  ['parent_id', '=', $row1->id],
    //                  ['status', '=', $status]
    //              ];
    //              $list_category2 = Category::where($args_cat2)->get();
    //              if (count($list_category2) > 0) {
    //                  foreach ($list_category2 as $row2) {
    //                      array_push($listid, $row2->id);
    //                  }
    //              }    
    //          }
    //      }
    //      $data = Product::where('status', '=', $status)->whereIn('category_id', $listid)->orderBy('created_at', 'DESC')->limit($limit)->get();
    //      return response()->json($data, 200);
    //  }

}
