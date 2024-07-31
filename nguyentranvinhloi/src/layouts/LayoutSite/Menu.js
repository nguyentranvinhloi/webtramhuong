import { useEffect } from "react";
import menuservice from "../../services/MenuService";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
  const [menus, setMenus] = useState([]);
  // useEffect(function () {
  //   (async function () {
  //     await menuservice.getByParentId("mainmenu", 0).then(function (result) {
  //       setMenus(result.data.menus);
  //     });
  //   })();
  // }, []);
  useEffect(function () {
    (async function () {
      try {
        const result = await menuservice.getByParentId("mainmenu", 0);
        setMenus(result.data.menus);
      } catch (error) {
        console.error("Error fetching menus:", error);
        alert("Có chút lỗi xảy ra khi tải danh sách menu, bạn hãy tiếp tục");
      }
    })();
  }, []);
  return (
    <section className="bg-white ">
      <nav className="navbar navbar-main navbar-expand-lg border-bottom">
        <div className="container text-black">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav"
            aria-controls="main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="nav-link d-md-none d-sm-block" to="/">
            Trầm hương
          </Link>
          <div className="collapse navbar-collapse ms-5" id="main_nav">
            <ul className="navbar-nav  ">
                {menus.map(function (menu, index) {
                  return <MenuItem key={index} menu={menu} />;

              })}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
export default Menu;

{/* <section className="mainmenu bg-dark ms-2 me-2">
      <div className="container">
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <Link className="navbar-brand text-white d-md-none d-sm-block" to="/">
              Trầm hương
            </Link>
            <button
              className="navbar-toggle text-white d-md-none d-sm-block"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggle-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

                {menus.map(function (menu, index) {
                  return <MenuItem key={index} menu={menu} />;

                })}

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section> */}






/*
{menus.map(function(menu,index){
                  return (
                    <li className='nav-item' key={index}>
                      <Link className='nav-link text-white' aria-current='page' to={MediaElementAudioSourceNode.link}>
                        {menu.name}
                      </Link>
                    </li>
                  );
                }     
                )}
                <li className='nav-item text-white'>
                <Link className="dropdown-item" to='/san-pham'>
                  Sản Phẩm
                </Link>
                </li>
                <li className='nav-item text-white ms-2'>
                <Link className="dropdown-item" to='/lien-he'>
                  Liên hệ
                </Link></li>*/
/*
<li className="nav-item text-white  nav-link" key={index}>
                      <Link
                        className="nav-link text-white"
                        aria-current="page"
                        to={menu.link}
                      >
                        {menu.name}
                      </Link>
                    </li>*/ 