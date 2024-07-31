import { Link, useNavigate, useParams } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import brandservice from "../../../services/BrandService";
import { useEffect, useState } from "react";
import { urlImage } from '../../../config';

function BrandShow() {
  const navigate = useNavigate();
  const { id } = useParams("id");
  const [brand, setBrand] = useState([]);
  useEffect(function () {
    (async function () {
      await brandservice.getById(id)
        .then(function (result) {
          setBrand(result.data.brands);
        });
    })();
  }, []);

  function brandDelete(id) {
    brandservice.remove(id).then(function (result) {
      alert(result.data.message);
      navigate("/admin/brand", { replace: true });
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
              <strong className="text-danger">CHI TIẾT THƯƠNG HIỆU</strong>
            </div>
            <div className="col-md-6 text-end">
              <Link to="/admin/brand"
                className="btn btn-sm btn-success me-1"
              >
                Về danh sách
              </Link>
              <Link
                to={"/admin/brand/update/" + brand.id}
                className="btn btn-sm btn-primary me-1"
              >
                <FaEdit />Sửa
              </Link>
              <button onClick={() => brandDelete(brand.id)} className="btn btn-sm btn-danger">
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
                <td>{brand.id}</td>
              </tr>
              <tr>
                <th>Tên thương hiệu</th>
                <td>{brand.name}</td>
              </tr>
              <tr>
                <th>Slug</th>
                <td>{brand.slug}</td>
              </tr>
              <tr>
                <th>Ngày tạo</th>
                <td>{brand.created_at}</td>
              </tr>
              <tr>
                <th>Nổi bật</th>
                <td>{brand.showhome}</td>
              </tr>
              <tr>
                <th>Trạng thái</th>
                <td>{brand.status}</td>
              </tr>
              <tr>
                <th>Hình ảnh</th>
                <td>
                  <img src={urlImage + "brand/" + brand.image} alt="hinh" className="img-fluid" style={{ maxWidth: 200 }} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BrandShow;
