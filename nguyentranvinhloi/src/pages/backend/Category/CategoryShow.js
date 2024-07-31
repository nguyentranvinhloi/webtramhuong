import { Link, useNavigate, useParams } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import categoryservice from "../../../services/CategoryService";
import { useEffect, useState } from "react";
import { urlImage } from '../../../config';

function CategoryShow() {
  const navigate = useNavigate();
  const { id } = useParams("id");
  const [category, setCategory] = useState([]);
  useEffect(function () {
    (async function () {
      await categoryservice.getById(id)
        .then(function (result) {
          setCategory(result.data.categorys);
        });
    })();
  }, []);

  function categoryDelete(id) {
    categoryservice.remove(id).then(function (result) {
      alert(result.data.message);
      navigate("/admin/category", { replace: true });
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
              <strong className="text-danger">CHI TIẾT DANH MỤC</strong>
            </div>
            <div className="col-md-6 text-end">
              <Link to="/admin/category"
                className="btn btn-sm btn-success me-1"
              >
                Về danh sách
              </Link>
              <Link
                to={"/admin/category/update/" + category.id}
                className="btn btn-sm btn-primary me-1"
              >
                <FaEdit />Sửa
              </Link>
              <button onClick={() => categoryDelete(category.id)} className="btn btn-sm btn-danger">
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
                <th>Giá trị</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Id</th>
                <td>{category.id}</td>
              </tr>
              <tr>
                <th>Tên danh mục</th>
                <td>{category.name}</td>
              </tr>
              <tr>
                <th>Slug</th>
                <td>{category.slug}</td>
              </tr>
              <tr>
                <th>Ngày tạo</th>
                <td>{category.created_at}</td>
              </tr>
              <tr>
                <th>Danh mục nổi bật</th>
                <td>{category.showhome}</td>
              </tr>
              <tr>
                <th>Trạng thái</th>
                <td>{category.status}</td>
              </tr>
              <tr>
                <th>Hình ảnh</th>
                <td>
                  <img src={urlImage + "category/" + category.image} alt="hinh" className="img-fluid" style={{ maxWidth: 200 }} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CategoryShow;
