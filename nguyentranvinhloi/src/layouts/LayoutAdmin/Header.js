import { Link } from "react-router-dom";
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { useNavigate } from 'react-router-dom';

function Header() {

  
  return (
    <section className="Header bg-dark m-2">
      <div className="container-fluid">
        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> */}
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand text-white" to="/admin">
             TRANG QUẢN TRỊ
            </Link>
            <button
              className="navbar-toggler text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* <h5 className="text-center text-white">༺SHOP TRẦM HƯƠNG ĐẮC LỢI༻</h5> */}
            {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-white"
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
              
            </div> */}
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Header;
