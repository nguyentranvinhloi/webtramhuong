import { Link, useNavigate, useParams } from "react-router-dom";
import {FaEdit, FaRegTrashAlt } from "react-icons/fa";
import productservice from "../../../services/ProductService";
import { useEffect, useState } from "react";
import {urlImage} from '../../../config';

function ProductShow() {
  const navigate = useNavigate();

    const {id} = useParams("id");
    const [product,setProduct]=useState([]);
    useEffect(function(){
        (async function(){
          await productservice.getById(id)
          .then(function(result)
          {
            setProduct(result.data.products);
          });
        })();
      },[]);
      function productDelete(id)
    {
      productservice.remove(id).then(function(result){
        alert(result.data.message);
        navigate("/admin/product", { replace: true });
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
            <strong className="text-danger">CHI TIẾT SẢN PHẨM</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/admin/product"
              className="btn btn-sm btn-success me-1"
            >
             Về danh sách
            </Link>
            <Link
              to={"/admin/product/update/"+product.id}
              className="btn btn-sm btn-primary me-1"
            >
              <FaEdit />Sửa
            </Link>
            <button onClick={()=>productDelete(product.id)} className="btn btn-sm btn-danger">
              <FaRegTrashAlt />Xóa
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className=" table table-bordered">
            <thead>
                <tr>
                    <th style={{ width:300 }}>Tên trường</th>
                    <th>Giá trị</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Mã sản phẩm</th>
                    <td>{product.id}</td>
                </tr>
                <tr>
                    <th>Mã thương hiệu</th>
                    <td>{product.brand_id}</td>
                </tr>
                <tr>
                    <th>Mã danh mục</th>
                    <td>{product.category_id}</td>
                </tr>
                <tr>
                    <th>Tên sản phẩm</th>
                    <td>{product.name}</td>
                </tr>
                <tr>
                    <th>Slug</th>
                    <td>{product.slug}</td>
                </tr>
                <tr>
                    <th>Giá</th>
                    <td>{product.price}</td>
                </tr>
                <tr>
                    <th>Giá khuyến mãi</th>
                    <td>{product.price_sale}</td>
                </tr>
                <tr>
                    <th>Số lượng</th>
                    <td>{product.qty}</td>
                </tr>
                <tr>
                    <th>Chi tiết</th>
                    <td>{product.detail}</td>
                </tr>
                <tr>
                    <th>Từ khóa</th>
                    <td>{product.metakey}</td>
                </tr>
                <tr>
                    <th>Mô tả</th>
                    <td>{product.metadesc}</td>
                </tr>
                <tr>
                    <th>Ngày tạo</th>
                    <td>{product.created_at}</td>
                </tr>
                <tr>
                    <th>Trạng thái</th>
                    <td>{product.status}</td>
                </tr>
                <tr>
                    <th>Hình ảnh</th>
                    <td>
                        <img src={urlImage+"product/"+product.image} alt="hinh" className="img-fluid" style={{maxWidth:200}}/>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default ProductShow;
