import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaRegTrashAlt } from "react-icons/fa";
//import ListOrder from "../../../datatest/order.json";
import orderservice from "../../../services/OrderService";
import { useEffect, useState } from "react";
import {urlImage} from '../../../config';
import { BsFillSignTurnLeftFill } from "react-icons/bs";

function OrderTrash() {
  const [statusdel,setStatusDelete]=useState([]);

  const [orders,setOrders]=useState([]);
  useEffect(function(){
    (async function(){
      await orderservice.trash()
      .then(function(result)
      {
        setOrders(result.data.orders);
      });
    })();
  },[statusdel]);

  function orderDelete(id)
    {
      orderservice.remove(id).then(function(result){
        alert(result.data.message);
        setStatusDelete(result.data.id)
      });
    }
    function orderRestore(id)
    {
      orderservice.restore(id).then(function(result){
        alert(result.data.message);
        setStatusDelete(result.data.id)
      });
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-dark"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Các bảng
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/admin/product">
                      Tất cả sản phẩm
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/admin/category">
                      Danh mục
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/admin/brand">
                      Thương hiệu
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/admin/menu">
                      Các mục
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/admin/contact">
                      Liên hệ
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/admin/order">
                      Đơn hàng
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/admin/slider">
                      Thanh trượt
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/admin/post">
                      Bài đăng
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/admin/user">
                      Tài khoản người dùng
                    </Link>
                  </li>

                </ul>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong className="text-danger">THÙNG RÁC ĐƠN HÀNG</strong>
          </div>
          <div className="col-md-6 text-end">
          <Link to="/admin/order" className="btn btn-sm btn-info me-1">
                Về danh sách
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
              <th style={{ width: 30 }} className="text-center">
                Mã khách hàng
              </th>
              <th className="text-center">Tên khách hàng</th>
              <th className="text-center">Giới tính</th>
              <th className="text-center">Email</th>
              <th className="text-center">Điện thoại</th>
              <th className="text-center">Địa chỉ</th>
              <th className="text-center">Ghi chú</th>
              <th style={{ width: 130 }} className="text-center">
                Ngày tạo
              </th>
              <th style={{ width: 130 }} className="text-center">
                Chức năng
              </th>
              <th style={{ width: 30 }} className="text-center">
                ID
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map(function (order, index) {
              return (
                <tr key={index}>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="text-center">{order.user_id}</td>
                  <td>{order.name}</td>
                  <td>{order.gender}</td>
                  <td>{order.email}</td>
                  <td>{order.phone}</td>
                  <td>{order.address}</td>
                  <td>{order.note}</td>
                  <td className="text-center">{order.created_at}</td>
                  <td className="text-center">
                    <Link
                      to={"/admin/order/show/"+order.id}
                      className="btn btn-sm btn-success me-2"
                    >
                      <FaRegEye />
                    </Link>
                    {/* <Link
                      to={"/admin/order/update/"+order.id}
                      className="btn btn-sm btn-primary me-2"
                    >
                      <FaEdit />
                    </Link> */}
                    <button onClick={()=>orderRestore(order.id)} className="btn btn-sm btn-primary me-1">
                    <BsFillSignTurnLeftFill />
                    </button>
                    <button onClick={()=>orderDelete(order.id)} className="btn btn-sm btn-danger">
                      <FaRegTrashAlt />
                    </button>
                  </td>
                  <td className="text-center">{order.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default OrderTrash;
