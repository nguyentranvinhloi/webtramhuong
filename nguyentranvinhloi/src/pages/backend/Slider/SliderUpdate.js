import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import sliderservice from "../../../services/SliderService";
import categoryservice from "../../../services/CategoryService";

function SliderUpdate() {
  const navigate = useNavigate();

  //khai báo state
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [sort_order, setSortOrder] = useState(0);
  const [position, setPosition] = useState(0);
  const [status, setStatus] = useState(1);
  //chi tiết mẫu tin có id
  const { id } = useParams("id");
  useEffect(function () {
    (async function () {
      await sliderservice.getById(id).then(function (result) {
        const tmp = result.data.sliders;
        setName(tmp.name);
        setLink(tmp.link);
        setSortOrder(tmp.sort_order);
        setPosition(tmp.position);
        setStatus(tmp.status);
      });
    })();
  }, []);
  //Lấy danh sách
  const [sliders, setSliders] = useState([]);
  useEffect(function () {
    (async function () {
      await sliderservice.getAll().then(function (result) {
        setSliders(result.data.sliders);
      });
    })();
  }, []);


    //lấy dữ liệu category
    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
      (async function () {
        await categoryservice.getAll().then(function (result) {
          setCategorys(result.data.categorys);
        });
      })();
    }, []);

  async function sliderEdit(event) {
    event.preventDefault();
    const image = document.querySelector("#image");
    var slider = new FormData();
    slider.append("name", name);
    slider.append("link", link);
    slider.append("sort_order", sort_order);
    slider.append("position", position);
    slider.append("status", status);
    //xử lý ảnh
    if(image.files.length===0){
      slider.append("image","");
  }
  else
  {
      slider.append("image",image.files[0]);
  }

    //update
    await sliderservice.update(slider, id).then(function (res) {
      alert(res.data.message);
      navigate("/admin/slider", { replace: true });
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
    <form onSubmit={sliderEdit} method="post">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">Thêm thanh trượt</strong>
            </div>
            <div className="col-md-6 text-end">
              <button type="submit" className="btn-sm btn-success me-2">
                Lưu
              </button>
              <Link to="/admin/slider" className="btn btn-sm btn-info">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label htmlFor="name">Tên thanh trượt</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="link">Liên kết</label>
                <input
                  name="link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sort_order">Sắp xếp</label>
                <select
                  name="sort_order"
                  className="form-control"
                  value={sort_order}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="0">None</option>
                  {sliders.map(function (sli, index) {
                    return (
                      <option key={index} value={sli.sort_order + 1}>
                        Sau: {sli.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="position">Vị trí</label>
                <input
                  name="position"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className="form-control"
                />
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
      </div>
    </form>
    </div>
  );
}

export default SliderUpdate;
