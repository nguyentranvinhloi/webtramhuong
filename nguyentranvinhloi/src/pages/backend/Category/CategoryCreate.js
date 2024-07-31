//import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import categoryservice from "../../../services/CategoryService";

function CategoryCreate() {
  const navigate = useNavigate();
  const [categorys, setCategorys] = useState([]);
  useEffect(function () {
    (async function () {
      await categoryservice.getAll().then(function (result) {
        setCategorys(result.data.categorys);
      });
    })();
  }, []);
  const [name, setName] = useState("");
  const [metakey, setMetakey] = useState("");
  const [metadesc, setMetadesc] = useState("");
  const [parent_id, setParentId] = useState(0);
  const [sort_order, setSortOrrder] = useState(0);
  const [status, setStatus] = useState(1);
  const [showhome, setShowhome] = useState(0);

  async function categoryStore(event) {
    event.preventDefault();
    const image = document.querySelector("#image");
    var category = new FormData();
    category.append("name", name);
    category.append("metakey", metakey);
    category.append("metadesc", metadesc);
    category.append("parent_id", parent_id);
    category.append("sort_order", sort_order);
    category.append("status", status);
    category.append("showhome", showhome);
    //xử lý ảnh
    if (image.files.length === 0) {
      category.append("image", "");
    } else {
      category.append("image", image.files[0]);
    }

    await categoryservice.create(category).then(function (res) {
      alert(res.data.message);
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
      <form onSubmit={categoryStore} method="post">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-md-6">
                <strong className="text-danger">Thêm danh mục</strong>
              </div>
              <div className="col-md-6 text-end">
                <button type="submit" className="btn-sm btn-success me-2">
                  Lưu
                </button>
                <Link to="/admin/category" className="btn btn-sm btn-info">
                  Về danh sách
                </Link>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-9">
                <div className="mb-3">
                  <label htmlFor="name">Tên danh mục</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    name="metakey"
                    value={metadesc}
                    onChange={(e) => setMetadesc(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="parent_id">Danh mục cha</label>
                  <select
                    name="parent_id"
                    className="form-control"
                    value={parent_id}
                    onChange={(e) => setParentId(e.target.value)}
                  >
                    <option value="0">Danh mục cha</option>
                    {categorys.map(function (cat, index) {
                      return (
                        <option key={index} value={cat.id}>
                          {cat.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                
                <div className="mb-3">
                  <label htmlFor="sort_order">Sắp xếp</label>
                  <select
                    name="sort_order"
                    className="form-control"
                    value={sort_order}
                    onChange={(e) => setSortOrrder(e.target.value)}
                  >
                    <option value="0">None</option>
                    {categorys.map(function (cat, index) {
                      return (
                        <option key={index} value={cat.sort_order + 1}>
                          Sau: {cat.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="image">Hình đại diện</label>
                  <input type="file" id="image" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="status">Danh mục nổi bật</label>
                  <select
                    name="status"
                    className="form-control"
                    value={showhome}
                    onChange={(e) => setShowhome(e.target.value)}
                  >
                    <option value="0">Không nổi bật</option>
                    <option value="1">Nổi bật</option>
                  </select>
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

export default CategoryCreate;
