import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import orderdetailservice from "../../../services/OrderdetailService";
import { useEffect, useState } from "react";

function OrderdetailList() {
  const [statusdel,setStatusDelete]=useState([]);

    const [orderdetails,setOrderdetails]=useState([]);
    useEffect(function(){
      (async function(){
        await orderdetailservice.getAll()
        .then(function(result)
        {
          setOrderdetails(result.data.orderdetails); 
        });
      })();
    },[statusdel]);
    function orderdetailDelete(id)
    {
      orderdetailservice.deleted(id).then(function(result){
        alert(result.data.message);
        setStatusDelete(result.data.id)
      });
    }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong className="text-danger">DANH SÁCH CHI TIẾT ĐƠN HÀNG</strong>
          </div>
          <div className="col-md-6 text-end">
          <Link to="/admin/orderdetail/trash" className="btn btn-sm btn-primary me-1">
              <FaRegTrashAlt /> Thùng rác
            </Link>
            <Link to="/admin/orderdetail/create" className="btn btn-sm btn-success">
              <FaPlus /> Thêm
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th style={{ width: 30 }} className="text-center">
                #
              </th>
              
              <th className="text-center">Mã sản phẩm</th>
              <th className="text-center">Giá</th>
              <th className="text-center">Giá giảm</th>
              <th className="text-center">Số lượng</th>
              <th className="text-center">Tổng tiền đơn hàng</th>
              <th style={{ width: 130 }} className="text-center">
                Chức năng
              </th>
              <th style={{ width: 30 }} className="text-center">
                ID
              </th>
            </tr>
          </thead>
          <tbody>
            {orderdetails.map(function (orderdetail, index) {
              return (
                <tr key={index}>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  
                  <td className="text-center">{orderdetail.product_id}</td>
                  <td className="text-center">{orderdetail.price}</td>
                  <td className="text-center">{orderdetail.discount}</td>
                  <td className="text-center">{orderdetail.qty}</td>
                  <td className="text-center">{orderdetail.amount}</td>
                  <td className="text-center">
                    <Link
                      to={"/admin/orderdetail/show/"+orderdetail.id}
                      className="btn btn-sm btn-success me-2"
                    >
                      <FaRegEye />
                    </Link>
                    <Link
                      to={"/admin/orderdetail/update/"+orderdetail.id}
                      className="btn btn-sm btn-primary me-2"
                    >
                      <FaEdit />
                    </Link>
                    <button onClick={()=>orderdetailDelete(orderdetail.id)} className="btn btn-sm btn-danger">
                      <FaRegTrashAlt />
                    </button>
                  </td>
                  <td className="text-center">{orderdetail.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

}

export default OrderdetailList;
