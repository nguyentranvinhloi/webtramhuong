import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import orderservice from "../../../services/OrderService";
import userservice from "../../../services/UserService";
import productservice from "../../../services/ProductService";

function OrderUpdate() {
  const navigate = useNavigate();

  //khai báo state
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
  //chi tiết mẫu tin có id
  const { id } = useParams("id");

  useEffect(function () {
    (async function () {
      await orderservice.getById(id).then(function (result) {
        const tmp = result.data.orders;
        setName(tmp.name);
        setGender(tmp.gender);
        setUserId(tmp.user_id);
        setProductId(tmp.product_id);
        setPhone(tmp.phone);
        setEmail(tmp.email);
        setAddress(tmp.address);
        setNote(tmp.note);
        setPrice(tmp.price);
        setQty(tmp.qty);
        setTotal(tmp.total);
        setStatus(tmp.status);
      });
    })();
  }, []);

  //lấy dữ liệu user
  const [users, setUsers] = useState([]);
  useEffect(function () {
    (async function () {
      await userservice.getAll().then(function (result) {
        setUsers(result.data.users);
      });
    })();
  }, []);
  const [products, setProducts] = useState([]);
  useEffect(function () {
    (async function () {
      await productservice.getAll()
      .then(function (result) {
        setProducts(result.data.products);
      });
    })();
  }, []);
  async function orderEdit(event) {
    event.preventDefault();
    const image = document.querySelector("#image");
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

    //update
    await orderservice.update(order, id).then(function (res) {
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
    <form onSubmit={orderEdit} method="post">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">Sửa đơn hàng</strong>
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
            <div className="col-md-8">
              <div className="mb-3">
                <label htmlFor="user_id">Mã user</label>
                <input
                    type="text"
                    name="user_id"
                    value={user_id}
                    disabled
                    className="form-control"
                  />
                {/* <select
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
                </select> */}
              </div>
              <div className="mb-3">
                <label htmlFor="product_id">Mã sản phẩm</label>
                <input
                    type="text"
                    name="product_id"
                    value={product_id}
                    disabled
                    className="form-control"
                  />
                {/* <select
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
                </select> */}
              </div>
              <div className="mb-3">
                <label htmlFor="name">Tên khách hàng</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  //onChange={(e) => setName(e.target.value)}
                  disabled
                  className="form-control"
                />
                <div className="mb-3">
                  <label htmlFor="gender">Giới tính</label>
                  <input
                    type="text"
                    name="gender"
                    value={gender}
                    //onChange={(e) => setGender(e.target.value)}
                    disabled
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone">Điện thoại</label>
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    //onChange={(e) => setPhone(e.target.value)}
                    disabled
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    //onChange={(e) => setEmail(e.target.value)}
                    disabled
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="address">Địa chỉ</label>
                <input
                  type="text"
                  name="address"
                  value={address}
                  //onChange={(e) => setAddress(e.target.value)}
                  disabled
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="note">Ghi chú</label>
                <textarea
                  name="note"
                  value={note}
                  //onChange={(e) => setNote(e.target.value)}
                  disabled
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price">Giá</label>
                <input
                  name="price"
                  value={price}
                  //onChange={(e) => setPrice(e.target.value)}
                  disabled
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="qty">Số lượng</label>
                <input
                  name="qty"
                  value={qty}
                  //onChange={(e) => setQty(e.target.value)}
                  disabled
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="total">Tổng tiền</label>
                <input
                  name="total"
                  value={total}
                  //onChange={(e) => setTotal(e.target.value)}
                  disabled
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

export default OrderUpdate;
