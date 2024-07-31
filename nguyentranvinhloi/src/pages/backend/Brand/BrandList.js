import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaRegTrashAlt } from "react-icons/fa";
//import ListBrand from "../../../datatest/brand.json";
import brandservice from "../../../services/BrandService";
import { useEffect, useState } from "react";
import { urlImage } from '../../../config';

function BrandList() {
  const [statusdel, setStatusDelete] = useState([]);

  const [brands, setBrands] = useState([]);
  useEffect(function () {
    (async function () {
      await brandservice.getAll()
        .then(function (result) {
          setBrands(result.data.brands);
        });
    })();
  }, [statusdel]);

  function brandDelete(id) {
    brandservice.deleted(id).then(function (result) {
      alert(result.data.message);
      setStatusDelete(result.data.id)
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
              <strong className="text-danger">DANH SÁCH THƯƠNG HIỆU</strong>
            </div>
            <div className="col-md-6 text-end">
              <Link to="/admin/brand/trash" className="btn btn-sm btn-primary me-1">
                <FaRegTrashAlt /> Thùng rác
              </Link>
              <Link to="/admin/brand/create" className="btn btn-sm btn-success">
                <FaPlus /> Thêm
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th style={{ width: 30 }} className="text-center">
                  #
                </th>
                {/* <th style={{ width: 130 }} className="text-center">
                Hình ảnh
              </th> */}
                <th className="text-center">Tên thương hiệu</th>
                <th className="text-center">Slug</th>
                <th style={{ width: 130 }} className="text-center">
                  Ngày tạo
                </th>
                <th style={{ width: 140 }} className="text-center">
                  Chức năng
                </th>
                <th style={{ width: 30 }} className="text-center">
                  ID
                </th>
              </tr>
            </thead>
            <tbody>
              {brands.map(function (brand, index) {
                return (
                  <tr key={index}>
                    <td className="text-center">
                      <input type="checkbox" />
                    </td>
                    {/* <td className="text-center">
                    <img className="img-fluid" src={urlImage + 'brand/' + brand.image} alt="hinh" />
                  </td> */}
                    <td>{brand.name}</td>
                    <td>{brand.slug}</td>
                    <td className="text-center">{brand.created_at}</td>
                    <td className="text-center">
                      <Link
                        to={"/admin/brand/show/" + brand.id}
                        className="btn btn-sm btn-success me-2"
                      >
                        <FaRegEye />
                      </Link>
                      <Link
                        to={"/admin/brand/update/" + brand.id}
                        className="btn btn-sm btn-primary me-2"
                      >
                        <FaEdit />
                      </Link>
                      <button onClick={() => brandDelete(brand.id)} className="btn btn-sm btn-danger">
                        <FaRegTrashAlt />
                      </button>
                    </td>
                    <td className="text-center">{brand.id}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}

export default BrandList;
