//import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import orderservice from "../../../services/OrderService";
import userservice from "../../../services/UserService";
import productservice from "../../../services/ProductService";

function OrderCreate() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  useEffect(function () {
    (async function () {
      await orderservice.getAll().then(function (result) {
        setOrders(result.data.orders);
      });
    })();
  }, []);

  //lấy dữ liệu user
  const [users,setUsers]=useState([]);
  useEffect(function(){
    (async function(){
      await userservice.getAll()
      .then(function(result)
      {
        setUsers(result.data.users);
      });
    })();
  },[]);

  const [products, setProducts] = useState([]);
  useEffect(function () {
    (async function () {
      await productservice.getAll()
      .then(function (result) {
        setProducts(result.data.products);
      });
    })();
  }, []);

  const [user_id, setUserId] = useState("");
  const [product_id, setProductId] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState(1);
  const [status, setStatus] = useState(1);

  async function orderStore(event) {
    event.preventDefault();
    var order = new FormData();
    order.append("user_id", user_id);
    order.append("product_id", product_id);
    order.append("name", name);
    order.append("gender", gender);
    order.append("phone", phone);
    order.append("email", email);
    order.append("address", address);
    order.append("note", note);
    order.append("price", price);
    order.append("total", total) ;
    order.append("qty", qty);
    order.append("status", status);

    await orderservice.create(order).then(function (res) {
      alert(res.data.message);
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
    <form onSubmit={orderStore} method="post">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">Thêm đơn hàng</strong>
            </div>
            <div className="col-md-6 text-end">
              <button type="submit" className="btn-sm btn-success me-2">
                Lưu
              </button>
              <Link to="/admin/order" className="btn btn-sm btn-info">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label htmlFor="user_id">Mã user</label>
                <select
                  name="user_id"
                  className="form-control"
                  value={user_id}
                  onChange={(e) => setUserId(e.target.value)}
                >
                  <option value="0">0</option>
                  {users.map(function (user, index) {
                    return (
                      <option key={index} value={user.id}>
                        {user.id}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="product_id">Mã sản phẩm</label>
                <select
                  name="product_id"
                  className="form-control"
                  value={product_id}
                  onChange={(e) => setProductId(e.target.value)}
                >
                  <option value="0">0</option>
                  {products.map(function (product, index) {
                    return (
                      <option key={index} value={product.id}>
                        {product.id}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="name">Tên khách hàng</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
                <div className="mb-3">
                  <label htmlFor="gender">Giới tính</label>
                  <input
                    type="text"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone">Điện thoại</label>
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="address">Địa chỉ</label>
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="note">Ghi chú</label>
                <textarea
                  name="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price">Giá</label>
                <input
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="qty">Số lượng</label>
                <input
                  name="qty"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="total">Tổng tiền</label>
                <input
                  name="total"
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="status">Trạng thái</label>
                <select
                  name="status"
                  className="form-control"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="1">Đã tiếp nhận</option>
                  <option value="2">Đang vận chuyển</option>
                  <option value="3">Thành công</option>
                  
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    </div>
  );
}

export default OrderCreate;
//----------------------------------------------------------

/*import { useEffect, useState } from "react";
import orderservice from "../../../services/OrderService";
import { Link, useNavigate } from "react-router-dom";

function OrderCreate() {
  const Navigate = useNavigate();
  const [orders, setOrder] = useState([]);
  useEffect(function () {
    (async function () {
      await orderservice.getAll().then(function (result) {
        setOrder(result.data.orders);
      });
    })();
  }, []);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState(2);
  const [user_id, setUser_id] = useState(1);

  async function orderStore(event) {
    event.preventDefault();
    const order = new FormData();
    order.append("name", name);
    order.append("phone", phone);
    order.append("email", email);
    order.append("address", address);
    order.append("note", note);
    order.append("status", status);
    order.append("user_id", user_id);

    await orderservice.create(order).then(function (res) {
      alert(res.data.message);
      Navigate("../../admin/order", { replace: true });
    });
  }

  return (
    <form onSubmit={orderStore} method="post">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">Thêm Order</strong>
            </div>
            <div className="col-md-6 text-end">
              <button type="submit" className="btn btn-sm btn-success me-2">
                Lưu
              </button>
              <Link to="/admin/order" className="btn btn-sm btn-info">
                Quay lại
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="md-3">
                <label htmlFor="name">Tên user</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  value={name}
                  className="form-control"
                />
              </div>

              <div className="md-3">
                <label htmlFor="phone">Điện thoại</label>
                <textarea
                  onChange={(e) => setPhone(e.target.value)}
                  name="phone"
                  value={phone}
                  className="form-control"
                ></textarea>
              </div>
              <div className="md-3">
                <label htmlFor="email">Email</label>
                <textarea
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  value={email}
                  className="form-control"
                ></textarea>
              </div>
              <div className="md-3">
                <label htmlFor="address">Địa chỉ</label>
                <textarea
                  onChange={(e) => setAddress(e.target.value)}
                  name="address"
                  value={address}
                  className="form-control"
                ></textarea>
              </div>
              <div className="md-3">
                <label htmlFor="note">Ghi chú</label>
                <textarea
                  onChange={(e) => setNote(e.target.value)}
                  name="note"
                  value={note}
                  className="form-control"
                ></textarea>
              </div>
              <div className="md-3">
                <label htmlFor="user_id">Mã khách hàng</label>
                <textarea
                  onChange={(e) => setUser_id(e.target.value)}
                  name="user_id"
                  value={user_id}
                  className="form-control"
                ></textarea>
              </div>
            </div>{" "}
            <div className="md-3">
              <label htmlFor="status">Trạng thái</label>
              <textarea
                onChange={(e) => setStatus(e.target.value)}
                name="status"
                value={status}
                className="form-control"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default OrderCreate;*/
