import { Link, useNavigate, useParams } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import orderservice from "../../../services/OrderService";
import { useEffect, useState } from "react";
import { urlImage } from '../../../config';

function OrderShow() {
  const { id } = useParams("id");
  const navigate = useNavigate();

  const [order, setOrder] = useState([]);
  useEffect(function () {
    (async function () {
      await orderservice.getById(id)
        .then(function (result) {
          setOrder(result.data.orders);
        });
    })();
  }, []);
  function orderDelete(id) {
    orderservice.remove(id).then(function (result) {
      alert(result.data.message);
      navigate("/admin/order", { replace: true });
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
            <strong className="text-danger">CHI TIẾT HÓA ĐƠN</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/admin/order"
              className="btn btn-sm btn-success me-1"
            >
              Về danh sách
            </Link>
            <Link
              to={"/admin/order/update/" + order.id}
              className="btn btn-sm btn-primary me-1"
            >
              <FaEdit />Sửa
            </Link>
            {/* <button onClick={() => orderDelete(order.id)} className="btn btn-sm btn-danger">
              <FaRegTrashAlt />Xóa
            </button> */}
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className=" table table-bordered">
          <thead>
            <tr>
              <th style={{ width: 300 }}>Tên trường</th>
              <th>Giá trị</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>ID</th>
              <td>{order.id}</td>
            </tr>
            <tr>
              <th>Mã khách hàng</th>
              <td>{order.user_id}</td>
            </tr>
            <tr>
              <th>Mã sản phẩm</th>
              <td>{order.product_id}</td>
            </tr>
            <tr>
              <th>Tên khách hàng</th>
              <td>{order.name}</td>
            </tr>
            <tr>
              <th>Giới tính</th>
              <td>{order.gender}</td>
            </tr>
            <tr>
              <th>email</th>
              <td>{order.email}</td>
            </tr>
            <tr>
              <th>Điện thoại</th>
              <td>{order.phone}</td>
            </tr>
            <tr>
              <th>Địa chỉ</th>
              <td>{order.address}</td>
            </tr>
            <tr>
              <th>Giá</th>
              <td>{order.price}</td>
            </tr>
            <tr>
              <th>Số lượng</th>
              <td>{order.qty}</td>
            </tr>
            <tr>
              <th>Tổng tiền</th>
              <td>{order.total}</td>
            </tr>
            <tr>
              <th>Ghi chú</th>
              <td>{order.note}</td>
            </tr>
            <tr>
              <th>Ngày tạo</th>
              <td>{order.created_at}</td>
            </tr>
            <tr>
              <th>Trạng thái</th>
              <td>
                <select
                  name="status"
                  className="form-control"
                  style={{width:180}}
                  value={order.status}
                  disabled
                >
                  <option value="1">Đã tiếp nhận</option>
                  <option value="2">Đang vận chuyển</option>
                  <option value="3">Thành công</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default OrderShow;
