//import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import postservice from "../../../services/PostService";
import topicservice from "../../../services/TopicService";

function PostCreate() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(function () {
    (async function () {
      await postservice.getAll().then(function (result) {
        setPosts(result.data.posts);
      });
    })();
  }, []);

  //lấy dữ liệu topic
  const [topics, setTopics] = useState([]);
  useEffect(function () {
    (async function () {
      await topicservice.getAll().then(function (result) {
        setTopics(result.data.topics);
      });
    })();
  }, []);

  const [topic_id, setTopicId] = useState(0);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [type, setType] = useState("");
  const [metakey, setMetakey] = useState("");
  const [metadesc, setMetadesc] = useState("");
  const [status, setStatus] = useState(1);

  async function postStore(event) {
    event.preventDefault();
    const image = document.querySelector("#image");
    var post = new FormData();
    post.append("topic_id", topic_id);
    post.append("title", title);
    post.append("type", type);
    post.append("detail", detail);
    post.append("metakey", metakey);
    post.append("metadesc", metadesc);
    post.append("status", status);
    //xử lý ảnh
    if (image.files.length === 0) {
      post.append("image", "");
    } else {
      post.append("image", image.files[0]);
    }

    await postservice.create(post).then(function (res) {
      alert(res.data.message);
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
    <form onSubmit={postStore} method="post">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">Thêm bài viết</strong>
            </div>
            <div className="col-md-6 text-end">
              <button type="submit" className="btn-sm btn-success me-2">
                Lưu
              </button>
              <Link to="/admin/post" className="btn btn-sm btn-info">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              {/* <div className="mb-3">
                <label htmlFor="topic_id">Mã chủ đề</label>
                <select
                  name="topic_id"
                  className="form-control"
                  value={topic_id}
                  onChange={(e) => setTopicId(e.target.value)}
                >
                  <option value="0">None</option>
                  {topics.map(function (top, index) {
                    return (
                      <option key={index} value={top.id}>
                        {top.id}
                      </option>
                    );
                  })}
                </select>
              </div> */}
              <div className="mb-3">
                <label htmlFor="title">Tiêu đề</label>
                <input
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                />
              </div>
              

              <div className="mb-3">
                <label htmlFor="type">Loại</label>
                <input
                  name="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="metakey">Từ khóa</label>
                <textarea
                  name="metakey"
                  value={metakey}
                  onChange={(e) => setMetakey(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="metadesc">Mô tả</label>
                <textarea
                  name="metadesc"
                  value={metadesc}
                  onChange={(e) => setMetadesc(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="detail">Chi tiết</label>
                <textarea
                  name="detail"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image">Hình ảnh</label>
                <input type="file" id="image" className="form-control" />
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

export default PostCreate;
