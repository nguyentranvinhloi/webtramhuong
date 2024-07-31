import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import postservice from "../../../services/PostService";
import { useEffect, useState } from "react";
import {urlImage} from '../../../config';

function PostList() {
  const [statusdel,setStatusDelete]=useState([]);
  const [posts,setPosts]=useState([]);
  useEffect(function(){
    (async function(){
      await postservice.getAll()
      .then(function(result)
      {
        setPosts(result.data.posts);
      });
    })();
  },[statusdel]);
  function postDelete(id)
    {
      postservice.deleted(id).then(function(result){
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
            <strong className="text-danger">DANH SÁCH BÀI ĐĂNG</strong>
          </div>
          <div className="col-md-6 text-end">
          <Link to="/admin/post/trash" className="btn btn-sm btn-primary me-1">
              <FaRegTrashAlt /> Thùng rác
            </Link>
            <Link to="/admin/post/create" className="btn btn-sm btn-success">
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
              <th className="text-center">Tiêu đề</th>
              {/* <th className="text-center">Slug</th> */}
              {/* <th style={{ width: 130 }} className="text-center">
                Chi tiết
              </th> */}
              <th style={{ width: 130 }} className="text-center">
                Loại
              </th>
              {/* <th style={{ width: 130 }} className="text-center">
                Từ khóa
              </th> */}
              <th style={{ width: 200 }} className="text-center">
                Mô tả
              </th>
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
            {posts.map(function (post, index) {
              return (
                <tr key={index}>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="text-center">
                  <img className="" width="100px" height="100px"
                    src={urlImage+'post/'+post.image} alt="hinh" />
                  </td>
                  <td>{post.title}</td>
                  {/* <td>{post.slug}</td> */}
                  {/* <td className="text-center">{post.detail}</td> */}
                  <td className="text-center">{post.type}</td>
                  {/* <td className="text-center">{post.metakey}</td> */}
                  <td className="text-center">{post.metadesc}</td>
                  <td className="text-center">{post.created_at}</td>
                  <td className="text-center">
                    <Link
                      to={"/admin/post/show/"+post.id}
                      className="btn btn-sm btn-success me-2"
                    >
                      <FaRegEye />
                    </Link>
                    <Link
                      to={"/admin/post/update/"+post.id}
                      className="btn btn-sm btn-primary me-2"
                    >
                      <FaEdit />
                    </Link>
                    <button onClick={()=>postDelete(post.id)} className="btn btn-sm btn-danger">
                      <FaRegTrashAlt />
                    </button>
                  </td>
                  <td className="text-center">{post.id}</td>
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

export default PostList;
