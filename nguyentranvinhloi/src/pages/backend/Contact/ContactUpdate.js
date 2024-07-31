import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import contactservice from "../../../services/ContactService";

function ContactUpdate() {
  const navigate = useNavigate();

  //khai báo state
  const [user_id, setUserId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState(1);
  //chi tiết mẫu tin có id
  const { id } = useParams("id");
  useEffect(function () {
    (async function () {
      await contactservice.getById(id)
        .then(function (result) {
          const tmp = result.data.contacts;
          setName(tmp.name);
          setUserId(tmp.user_id);
          setEmail(tmp.email);
          setPhone(tmp.phone);
          setStatus(tmp.status);
          setTitle(tmp.title);
          setContent(tmp.content);
        });
    })();
  }, []);
  //Lấy danh sách
  const [contacts, setContacts] = useState([]);
  useEffect(function () {
    (async function () {
      await contactservice.getAll()
        .then(function (result) {
          setContacts(result.data.contacts);
        });
    })();
  }, []);

  async function contactEdit(event) {
    event.preventDefault();
    // const image=document.querySelector("#image");
    var contact = new FormData();
    contact.append("user_id", user_id);
    contact.append("name", name);
    contact.append("email", email);
    contact.append("phone", phone);
    contact.append("title", title);
    contact.append("content", content);
    contact.append("status", status);

    //update
    await contactservice.update(contact, id)
      .then(function (res) {
        alert(res.data.message)
        navigate('/admin/contact', { replace: true });
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
      <form onSubmit={contactEdit} method="post">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-md-6">
                <strong className="text-danger">Sửa liên hệ</strong>
              </div>
              <div className="col-md-6 text-end">
                <button type="submit" className="btn-sm btn-success me-2">
                  Lưu
                </button>
                <Link to="/admin/contact" className="btn btn-sm btn-info">
                  Về danh sách
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
                  {/* <div className="mb-3">
                  <label htmlFor="replay_id">Mã replay</label>
                  <input
                    type="text"
                    name="replay_id"
                    value={replay_id}
                    onChange={(e) => setReplayId(e.target.value)}
                    className="form-control"
                  />
                </div> */}
                  <div className="mb-3">
                    <label htmlFor="user_id">Mã khách hàng</label>
                    <input
                      type="text"
                      name="user_id"
                      value={user_id}
                      onChange={(e) => setUserId(e.target.value)}
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
                    <label htmlFor="phone">Điện thoại</label>
                    <input
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="title">Tiêu đề</label>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="content">Nội dung</label>
                  <textarea
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
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
                    <option value="1">Xuất bản</option>
                    <option value="2">Chưa xuất bản</option>
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

export default ContactUpdate;
