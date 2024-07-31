import { Link, useNavigate, useParams } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import menuservice from "../../../services/MenuService";
import { useEffect, useState } from "react";
import { urlImage } from '../../../config';

function MenuShow() {
  const navigate = useNavigate();

  const { id } = useParams("id");
  const [menu, setMenu] = useState([]);
  useEffect(function () {
    (async function () {
      await menuservice.getById(id)
        .then(function (result) {
          setMenu(result.data.menus);
        });
    })();
  }, []);
  function menuDelete(id) {
    menuservice.remove(id).then(function (result) {
      alert(result.data.message);
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
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">CHI TIẾT CÁC MỤC</strong>
            </div>
            <div className="col-md-6 text-end">
              <Link to="/admin/menu"
                className="btn btn-sm btn-success me-1"
              >
                Về danh sách
              </Link>
              <Link
                to={"/admin/menu/update/" + menu.id}
                className="btn btn-sm btn-primary me-1"
              >
                <FaEdit />Sửa
              </Link>
              <button onClick={() => menuDelete(menu.id)} className="btn btn-sm btn-danger">
                <FaRegTrashAlt />Xóa
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className=" table table-bordered">
            <thead>
              <tr>
                <th style={{ width: 300 }}>Tên trường</th>
                <th>Gía trị</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Id</th>
                <td>{menu.id}</td>
              </tr>
              <tr>
                <th>Tên mục</th>
                <td>{menu.name}</td>
              </tr>
              {/* <tr>
                    <th>Loại</th>
                    <td>{menu.type}</td>
                </tr>
                <tr>
                    <th>Mã bảng</th>
                    <td>{menu.table_id}</td>
                </tr> */}
              <tr>
                <th>Mã cha</th>
                <td>{menu.parent_id}</td>
              </tr>
              <tr>
                <th>Vị trí</th>
                <td>{menu.position}</td>
              </tr>
              <tr>
                <th>Mã cha</th>
                <td>{menu.parent_id}</td>
              </tr>
              <tr>
                <th>Liên kết</th>
                <td>{menu.link}</td>
              </tr>
              <tr>
                <th>Trạng thái</th>
                <td>{menu.status}</td>
              </tr>
              <tr>
                <th>Ngày tạo</th>
                <td>{menu.created_at}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MenuShow;
