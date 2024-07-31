import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menuservice from "../../services/MenuService";

function MenuItem(props) {
  const [menus, setMenus] = useState([]);
  const rowmenu = props.menu;

  useEffect(function () {
    (async function () {
      try {
        const result = await menuservice.getByParentId("mainmenu", rowmenu.id);
        setMenus(result.data.menus);
      } catch (error) {
        console.error("Error fetching menus:", error);
        alert("Có chút lỗi xảy ra khi tải danh sách menu, bạn hãy tiếp tục");
      }
    })();
  }, []);

  // useEffect(function () {
  //   (async function () {
  //     await menuservice
  //       .getByParentId("mainmenu", rowmenu.id)
  //       .then(function (result) {
  //         setMenus(result.data.menus);
  //       });
  //   })();
  // }, []);
  if (menus == null) {
    return (
      <li className="nav-item ms-4">
        <Link className="nav-link" to={rowmenu.link}>
          {rowmenu.name}
        </Link>
      </li>
    );
  }
  else {
    return (
      <li className="nav-item dropdown ms-5">
        <Link
          className="nav-link dropdown-toggle"
          to="{rowmenu.link}"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {rowmenu.name}
        </Link>
        <ul className="dropdown-menu">
          {menus.map(function (menu1, index) {
            return <li key={index}>
              <Link className="dropdown-item" to={menu1.link}>{menu1.name}</Link>
            </li>
          })}

        </ul>
      </li>
    );
  }
}

export default MenuItem;
