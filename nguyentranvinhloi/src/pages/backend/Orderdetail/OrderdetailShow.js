import { Link, useNavigate, useParams } from "react-router-dom";
import {FaEdit, FaRegTrashAlt } from "react-icons/fa";
import orderdetailservice from "../../../services/OrderdetailService";
import { useEffect, useState } from "react";

function OrderdetailShow() {
  const navigate = useNavigate();

    const {id} = useParams("id");
    const [orderdetail,setOrderdetail]=useState([]);
    useEffect(function(){
        (async function(){
          await orderdetailservice.getById(id)
          .then(function(result)
          {
            setOrderdetail(result.data.orderdetails);
          });
        })();
      },[]);
      function orderdetailDelete(id)
    {
      orderdetailservice.remove(id).then(function(result){
        alert(result.data.message);
        navigate("/admin/orderdetail", { replace: true });
      });
    }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong className="text-danger">CHI TIẾT CHI TIẾT ĐƠN HÀNG</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/admin/orderdetail"
              className="btn btn-sm btn-success me-1"
            >
             Về danh sách
            </Link>
            <Link
              to={"/admin/orderdetail/update/"+orderdetail.id}
              className="btn btn-sm btn-primary me-1"
            >
              <FaEdit />Sửa
            </Link>
            <button onClick={()=>orderdetailDelete(orderdetail.id)} className="btn btn-sm btn-danger">
              <FaRegTrashAlt />Xóa
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className=" table table-bordered">
            <thead>
                <tr>
                    <th style={{ width:300 }}>Tên trường</th>
                    <th>Giá trị</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>ID</th>
                    <td>{orderdetail.id}</td>
                </tr>
               
                <tr>
                    <th>Mã sản phẩm</th>
                    <td>{orderdetail.product_id}</td>
                </tr>
                <tr>
                    <th>Số lượng</th>
                    <td>{orderdetail.qty}</td>
                </tr>
                <tr>
                    <th>Giá</th>
                    <td>{orderdetail.price}</td>
                </tr>
                <tr>
                    <th>Giá giảm</th>
                    <td>{orderdetail.discount}</td>
                </tr>
                <tr>
                    <th>Tổng hóa đơn</th>
                    <td>{orderdetail.amount}</td>
                </tr>
    
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderdetailShow;
