import { Link, useNavigate, useParams } from "react-router-dom";
import {FaEdit, FaRegTrashAlt } from "react-icons/fa";
import userservice from "../../../services/UserService";
import { useEffect, useState } from "react";
import {urlImage} from '../../../config';

function UserShow() {
  const navigate = useNavigate();

    const {id} = useParams("id");
    const [user,setUser]=useState([]);
    useEffect(function(){
        (async function(){
          await userservice.getById(id)
          .then(function(result)
          {
            setUser(result.data.users);
          });
        })();
      },[]);
      function userDelete(id)
    {
      userservice.remove(id).then(function(result){
        alert(result.data.message);
        navigate("/admin/user", { replace: true });
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
            <strong className="text-danger">CHI TIẾT TÀI KHOẢN NGƯỜI DÙNG</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/admin/user"
              className="btn btn-sm btn-success me-1"
            >
             Về danh sách
            </Link>
            <Link
              to={"/admin/user/update/"+user.id}
              className="btn btn-sm btn-primary me-1"
            >
              <FaEdit />Sửa
            </Link>
            <button onClick={()=>userDelete(user.id)} className="btn btn-sm btn-danger">
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
                    <th>Gía trị</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Mã người dùng</th>
                    <td>{user.id}</td>
                </tr>
               
                <tr>
                    <th>Tên người dùng</th>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <th>Giới tính</th>
                    <td>{user.gender}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{user.email}</td>
                </tr>
                <tr>
                    <th>Điện thoại</th>
                    <td>{user.phone}</td>
                </tr>
                <tr>
                    <th>Tài khoản</th>
                    <td>{user.username}</td>
                </tr>
                <tr>
                    <th>Mật khẩu</th>
                    <td>{user.password}</td>
                </tr>
                <tr>
                    <th>Địa chỉ</th>
                    <td>{user.address}</td>
                </tr>
                <tr>
                    <th>Vai trò</th>
                    <td>{user.roles}</td>
                </tr>
               
                <tr>
                    <th>Ngày tạo</th>
                    <td>{user.created_at}</td>
                </tr>
                <tr>
                    <th>Hình ảnh</th>
                    <td>
                        <img src={urlImage+"user/"+user.image} alt="hinh" className="img-fluid" style={{maxWidth:200}}/>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default UserShow;
