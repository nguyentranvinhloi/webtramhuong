import { Link, useParams } from "react-router-dom";
import orderservice from "../../../services/OrderService";
import { useEffect, useState } from "react";
//import { urlImage } from '../../../config';

function Show() {
  const { id } = useParams("id");
  //const navigate = useNavigate();

  const [order, setOrder] = useState([]);
  useEffect(function () {
    (async function () {
      await orderservice.getById(id)
        .then(function (result) {
          setOrder(result.data.orders);
        });
    })();
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong className="text-danger">CHI TIẾT ĐƠN HÀNG</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/profile"
              className="btn btn-sm btn-success me-1"
            >
              Trở về
            </Link>
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
              <th>Mã sản phẩm</th>
              <td>{order.product_id}</td>
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
  );
}

export default Show;
