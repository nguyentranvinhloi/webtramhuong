//import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import menuservice from "../../../services/MenuService";
//import categoryservice from "../../../services/CategoryService";

function MenuCreate() {
  const navigate = useNavigate();
  const [menus, setMenus] = useState([]);
  useEffect(function () {
    (async function () {
      await menuservice.getAll().then(function (result) {
        setMenus(result.data.menus);
      });
    })();
  }, []);

  /*const [categorys,setCategorys]=useState([]);
  useEffect(function(){
    (async function(){
      await categoryservice.getAll()
      .then(function(result)
      {
        setCategorys(result.data.categorys);
      });
    })();
  },[]);*/

  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [parent_id, setParentId] = useState(0);
  const [position, setPosition] = useState("mainmenu");
  const [sort_order, setSortOrder] = useState("");
  const [status, setStatus] = useState(1);

  async function menuStore(event) {
    event.preventDefault();
    const image = document.querySelector("#image");
    var menu = new FormData();
    menu.append("name", name);
    menu.append("link", link);
    menu.append("parent_id", parent_id);
    menu.append("position", position);
    menu.append("sort_order", sort_order);
    menu.append("status", status);

    await menuservice.create(menu).then(function (res) {
      alert(res.data.message);
      navigate("/admin/menu", { replace: true });
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
      <form onSubmit={menuStore} method="post">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-md-6">
                <strong className="text-danger">Thêm mục</strong>
              </div>
              <div className="col-md-6 text-end">
                <button type="submit" className="btn-sm btn-success me-2">
                  Lưu
                </button>
                <Link to="/admin/menu" className="btn btn-sm btn-info">
                  Về danh sách
                </Link>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-9">
                <div className="mb-3">
                  <label htmlFor="name">Tên mục</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="link">Liên kết</label>
                  <input
                    name="link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="form-control"
                  />
                </div>
                {/* <div className="mb-3">
                <label htmlFor="type">Loại</label>
                <input
                  name="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="form-control"
                />
              </div> */}
                <div className="mb-3">
                  <label htmlFor="position">Vị trí</label>
                  <input
                    name="position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3">
                {/* <div className="mb-3">
                <label htmlFor="table_id">Mã bảng</label>
                <input
                  name="table_id"
                  value={table_id}
                  onChange={(e) => setTableId(e.target.value)}
                  className="form-control"
                />
                </div> */}
                <div className="mb-3">
                  <label htmlFor="parent_id">Mã cha</label>
                  <select
                    name="parent_id"
                    className="form-control"
                    value={parent_id}
                    onChange={(e) => setParentId(e.target.value)}
                  >
                    <option value="0">Cha</option>
                    {menus.map(function (me, index) {
                      return (
                        <option key={index} value={me.id}>
                          {me.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="sort_order">Sắp xếp</label>
                  <select
                    name="sort_order"
                    className="form-control"
                    value={sort_order}
                    onChange={(e) => setSortOrder(e.target.value)}
                  >
                    <option value="0">None</option>
                    {menus.map(function (me, index) {
                      return (
                        <option key={index} value={me.sort_order + 1}>
                          Sau: {me.name}
                        </option>
                      );
                    })}
                  </select>
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

export default MenuCreate;
