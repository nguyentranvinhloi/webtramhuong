import { Link, useNavigate, useParams } from "react-router-dom";
import {FaEdit, FaRegTrashAlt } from "react-icons/fa";
import postservice from "../../../services/PostService";
import { useEffect, useState } from "react";
import {urlImage} from '../../../config';

function PostShow() {
  const navigate = useNavigate();
  const {id} = useParams("id");
  const [post,setPost]=useState([]);
    useEffect(function(){
        (async function(){
          await postservice.getById(id)
          .then(function(result)
          {
            setPost(result.data.post);
          });
        })();
      },[]);
      function postDelete(id)
    {
      postservice.remove(id).then(function(result){
        alert(result.data.message);
        navigate("/admin/post", { replace: true });
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
            <strong className="text-danger">CHI TIẾT BÀI ĐĂNG</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/admin/post"
              className="btn btn-sm btn-success me-1"
            >
             Về danh sách
            </Link>
            <Link
              to={"/admin/post/update/"+post.id}
              className="btn btn-sm btn-primary me-1"
            >
              <FaEdit />Sửa
            </Link>
            <button onClick={()=>postDelete(post.id)} className="btn btn-sm btn-danger">
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
                    <th>Mã bài đăng</th>
                    <td>{post.id}</td>
                </tr>
                <tr>
                    <th>Mã chủ đề</th>
                    <td>{post.topic_id}</td>
                </tr>
                <tr>
                    <th>Tiêu đề</th>
                    <td>{post.title}</td>
                </tr>
                
                <tr>
                    <th>Slug</th>
                    <td>{post.slug}</td>
                </tr>
                <tr>
                    <th>Chi tiết</th>
                    <td>{post.detail}</td>
                </tr>
                <tr>
                    <th>Loại</th>
                    <td>{post.type}</td>
                </tr>
                
                <tr>
                    <th>Từ khóa</th>
                    <td>{post.metakey}</td>
                </tr>
                <tr>
                    <th>Mô tả</th>
                    <td>{post.metadesc}</td>
                </tr>
                <tr>
                    <th>Ngày tạo</th>
                    <td>{post.created_at}</td>
                </tr>
                <tr>
                    <th>Trạng thái</th>
                    <td>{post.status}</td>
                </tr>
                <tr>
                    <th>Hình ảnh</th>
                    <td>
                        <img src={urlImage+"post/"+post.image} alt="hinh" className="img-fluid" style={{maxWidth:200}}/>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default PostShow;
