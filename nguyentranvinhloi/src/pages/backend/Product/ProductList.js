import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaRegTrashAlt } from "react-icons/fa";
//import ListProduct from "../../../datatest/product.json";
import productservice from "../../../services/ProductService";
import { useEffect, useState } from "react";
import { urlImage } from '../../../config';

function ProductList() {
  const [statusdel, setStatusDelete] = useState([]);

  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(12);
  useEffect(function () {
    (async function () {
      await productservice.getProductAll(limit, 1).then(function (result) {
        setProducts(result.data.products);
      });
    })();
  }, [limit], [statusdel]);
  // useEffect(function(){
  //   (async function(){
  //     await productservice.getAll()
  //     .then(function(result)
  //     {
  //       setProducts(result.data.products);
  //     });
  //   })();
  // },[statusdel]);
  function productDelete(id) {
    productservice.deleted(id).then(function (result) {
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
            <strong className="text-danger">DANH SÁCH SẢN PHẨM</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/admin/product/trash" className="btn btn-sm btn-primary me-1">
              <FaRegTrashAlt /> Thùng rác
            </Link>
            <Link to="/admin/product/create" className="btn btn-sm btn-success">
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
              <th style={{ width: 130 }} className="text-center">
                Hình ảnh
              </th>
              <th className="text-center">Tên sản phẩm</th>
              <th className="text-center">Slug</th>
              {/* <th style={{ width: 130 }} className="text-center">
                Giá
              </th>
              <th style={{ width: 130 }} className="text-center">
                Chi tiết
              </th> */}
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
            {products.map(function (product, index) {
              return (
                <tr key={index}>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="text-center">
                    <img className=""
                      width="100px" height="100px"
                      src={urlImage + 'product/' + product.image} alt="hinh" />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.slug}</td>
                  {/* <td className="text-center">{product.price}</td>
                  <td className="text-center">{product.detail}</td> */}
                  <td className="text-center">{product.created_at}</td>
                  <td className="text-center">
                    <Link
                      to={"/admin/product/show/" + product.id}
                      className="btn btn-sm btn-success me-2"
                    >
                      <FaRegEye />
                    </Link>
                    <Link
                      to={"/admin/product/update/" + product.id}
                      className="btn btn-sm btn-primary me-2"
                    >
                      <FaEdit />
                    </Link>
                    <button onClick={() => productDelete(product.id)} className="btn btn-sm btn-danger">
                      <FaRegTrashAlt />
                    </button>
                  </td>
                  <td className="text-center">{product.id}</td>
                </tr>
              );
            })}
          </tbody>
          <div>
            <button className="text-center btn btn-success" onClick={() => setLimit(limit + 12)}>༺Thêm༻</button>
          </div>
        </table>
      </div>
    </div>
    </div>
  );
}

export default ProductList;
