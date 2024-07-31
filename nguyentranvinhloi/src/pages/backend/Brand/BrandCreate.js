//import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import brandservice from "../../../services/BrandService";

function BrandCreate() {
  const navigate = useNavigate();
  const [brands, setBrands] = useState([]);
  useEffect(function () {
    (async function () {
      await brandservice.getAll()
        .then(function (result) {
          setBrands(result.data.brands);
        });
    })();
  }, []);
  const [name, setName] = useState("");
  const [metakey, setMetakey] = useState("");
  const [metadesc, setMetadesc] = useState("");
  const [sort_order, setSortOrrder] = useState(0);
  const [status, setStatus] = useState(1);
  const [showhome, setShowhome] = useState(0);

  async function brandStore(event) {
    event.preventDefault();
    const image = document.querySelector("#image");
    var brand = new FormData();
    brand.append("name", name);
    brand.append("metakey", metakey);
    brand.append("metadesc", metadesc);
    brand.append("sort_order", sort_order);
    brand.append("status", status);
    brand.append("showhome", showhome);
    //xử lý ảnh
    if (image.files.length === 0) {
      brand.append("image", "");
    }
    else {
      brand.append("image", image.files[0]);
    }

    await brandservice.create(brand).then(function (res) {
      alert(res.data.message);
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
      <form onSubmit={brandStore} method="post">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-md-6">
                <strong className="text-danger">Thêm thương hiệu</strong>
              </div>
              <div className="col-md-6 text-end">
                <button type="submit" className="btn-sm btn-success me-2">
                  Lưu
                </button>
                <Link to="/admin/brand" className="btn btn-sm btn-info">
                  Về danh sách
                </Link>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-9">
                <div className="mb-3">
                  <label htmlFor="name">Tên thương hiệu</label>
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
                    {brands.map(function (bra, index) {
                      return (
                        <option key={index} value={bra.sort_order + 1}>
                          Sau: {bra.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="image">Logo</label>
                  <input type="file" id="image" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="showhome">Thương hiệu nổi bật</label>
                  <select
                    name="showhome"
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

export default BrandCreate;
