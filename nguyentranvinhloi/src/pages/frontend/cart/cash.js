import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import orderservice from '../../../services/OrderService';
import userservice from "../../../services/UserService";
import cartservice from "../../../services/CartService";
import { useCart } from 'react-use-cart';
import cod from '../../../assets/images/cod.png'
import { BsFillSignTurnLeftFill } from "react-icons/bs";

const Cash = () => {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  //let item = localStorage.getItem("react-use-cart");
  //const layy = JSON.parse(item);
  useEffect(() => {
    document.title = 'Thanh toán';
  }, []);

  const navigate = useNavigate();

  const [user_id, setUserId] = useState("");
  const [product_id, setProductId] = useState();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState(cartTotal);
  const [qty, setQty] = useState("");
  const [status, setStatus] = useState(1);

  useEffect(() => {
    if (items) {
      items.forEach(item => {
        const id = item.id;
        setProductId(id);
        const price = item.price;
        setPrice(price);
        const qty = item.quantity;
        setQty(qty);

        // console.log(`Name: ${item.name}`);

      });
    };
  }, []);


  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      const lay = JSON.parse(token);
      const layid = lay[0].id;
      setUserId(layid);
      const layten = lay[0].name;
      setName(layten);
      const laygt = lay[0].gender;
      setGender(laygt);
      const layemail = lay[0].email;
      setEmail(layemail);
      const layaddress = lay[0].address;
      setAddress(layaddress);
      const layphone = lay[0].phone;
      setPhone(layphone);
    };
  }, []);
  useEffect(() => {
    let token1 = localStorage.getItem("token1");
    if (token1) {
      const lay = JSON.parse(token1);
      const layid = lay[0].id;
      setUserId(layid);
      const layten = lay[0].name;
      setName(layten);
      const laygt = lay[0].gender;
      setGender(laygt);
      const layemail = lay[0].email;
      setEmail(layemail);
      const layaddress = lay[0].address;
      setAddress(layaddress);
      const layphone = lay[0].phone;
      setPhone(layphone);
    };
  }, []);


  useEffect(() => {
    let token = localStorage.getItem("token");
    let token1 = localStorage.getItem("token1");
    if (token || token1) {
      navigate("/cash", { replace: true });
    }
    else {
      alert('Bạn vui lòng đăng nhập để được đặt hàng!');
      navigate("/login", { replace: true });
    }
  }, [])


  const [orders, setOrders] = useState([]);
  useEffect(function () {
    (async function () {
      await orderservice.getAll().then(function (result) {
        setOrders(result.data.orders);
      });
    })();
  }, []);
  //lấy dữ liệu user
  const [users, setUsers] = useState([]);
  useEffect(function () {
    (async function () {
      await userservice.getAll()
        .then(function (result) {
          setUsers(result.data.users);
        });
    })();
  }, []);



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
    order.append("total", total);
    order.append("qty", qty);
    order.append("status", status);


    await orderservice.create(order).then(function (res) {
      emptyCart();
      alert('Xác nhận đặt hàng?');
      navigate("/", { replace: true });
    });
  }
  //const sendMail = require('./sendmail')
  const handleCheckout = async (e, type) => {
    e.preventDefault();
    //kiem tra type, neu nhu type === 'COD', thi chay them don hang vao luon con ko thi chay duoi
    if (type === "COD") {
      e.preventDefault();
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
      order.append("total", total);
      order.append("qty", qty);
      order.append("status", status);


      await orderservice.create(order).then(function (res) {
        alert('Xác nhận đặt hàng?');
        emptyCart();
        alert('Đặt hàng thành công!');
        // sendMail({
        //   email: order.email,
        //   subject: "CHUC MUNG BAN DAT HANG THANH CONG!",
        //   html: `
        //     <h1 style="color: red">Cam on ban da dat hang!</h1>
        //     <ul>
        //       <li>
        //         Name:${order.name}
        //       </li>
        //     </ul>
        //   `
        // })
        navigate("/", { replace: true });
      });
    } else {
      var info = new FormData();
      info.append('type', type);
      const result = await orderservice.checkout(info);
      //orderStore(e);
      //kiem tra tinh trang cua ham checkout
      if (result.status === 200) {
        //neu nhu co vnpay thi phai kiem tra luon ca type
        //if(type === "VNPAY" && result.data.data)
        //Chay logic them don hang vao day
        e.preventDefault();
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
        order.append("total", total);
        order.append("qty", qty);
        order.append("status", status);

        await orderservice.create(order).then(function (res) {
          alert('Xác nhận đặt hàng?');
          emptyCart();
        });
        //if(type === "MOMO" && result.data.data)
        //Chay logic them don hang vao day
        //chay xong logic thi chay chuyen huong trang

        //VNPAY là result.data.data | MOMO là result.data.payUrl

        //chuyen huong trang
        window.location.replace(result.data.payUrl);
      }
    }


  }
  return (
    <form method="post">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">Hoàn tất thanh toán đơn hàng</strong>
            </div>
            <div className="col-md-6 text-end">
              {/* <button type="submit" className="btn-sm btn-success me-2">
                Đến phương thức thanh toán
              </button> */}
              <Link to="/cart" className="btn btn-sm btn-info">
                <BsFillSignTurnLeftFill />
                Quay lại
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">

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
              </div>
            </div>

            <div className="col-md-3">

              <div className="mb-3">
                <label htmlFor="note">Ghi chú</label>
                <textarea
                  name="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="form-control"
                />
              </div>
              {/* {items.map((item) => (
                <div>
                  <div className="mb-3">
                    <label htmlFor="product_id">Mã sản phẩm</label>
                    <input
                      type="text"
                      name="product_id"
                      value={product_id}
                      //placeholder={(e) => setProductId(e.target.value)}
                      onChange={(e) => setProductId(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="price">Giá</label>
                    <input
                      name="price"
                      value={price}
                      //placeholder={(e) => setPrice(e.target.value)}
                      onChange={(e) => setPrice(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="qty">Số lượng</label>
                    <input
                      name="qty"
                      value={qty}
                      //placeholder={item.quantity}
                      onChange={(e) => setQty(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
              ))} */}
              <div className="mb-3">
                <label htmlFor="total">Tổng tiền (Đơn vị: triệu vnđ)</label>
                <input
                  name="total"
                  value={total}
                  //onChange={(e) => setTotal(e.target.value)}
                  className="form-control"
                />
              </div>
              <button onClick={(e) => handleCheckout(e, 'COD')} className="btn btn-danger text-center">
                <i className="fa fa-shopping-cart white"></i> Hoàn tất đặt hàng (COD)
              </button>
              <div><p>Lưu ý: Phương thức thanh toán hiện tại bên shop hỗ trợ đó là thanh toán khi nhận hàng(COD).</p></div>
              <div><img src={cod} width="200px" height="150px" /></div>
              {/* <button onClick={(e) => handleCheckout(e, 'MOMO')} className="btn btn-danger">Thanh toán Momo</button> */}
              {/* <div className="mb-3">
                <label htmlFor="status">Trạng thái</label>
                <select
                  name="status"
                  className="form-control"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="1">Xuất bản</option>
                  <option value="2">Chưa xuất bản</option>
                </select>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </form>
  );

};
export default Cash;