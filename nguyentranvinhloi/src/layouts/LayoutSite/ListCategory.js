import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import categoryservice from "../../services/CategoryService";

function ListCategory() {
  const [categorys, setCategorys] = useState([]);
  useEffect(function () {
    (async function () {
      try {
        const result = await categoryservice.getCategoryByParentId(0);
        setCategorys(result.data.categorys);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <aside className="col-lg col-md-3 flex-lg-grow-0 me-5">
      <nav className="nav-home-aside">
        <ul className="menu-category">
          <li className="has-submenu"><h6 className="title-category">Danh mục sản phẩm<i className="d-md-none icon fa fa-chevron-down"></i></h6>
            <ul className="submenu">
              {categorys.map(function (cat, index) {
                return (
                  <li key={index}>
                    <Link className="nav-link" to={"/danh-muc-san-pham/" + cat.slug}>{cat.name}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </nav>
    </aside>

    // <div className="listcategory mb-5"> 
    //   <h4 className="head">DANH MỤC SẢN PHẨM</h4>
    //   <ul className="ul">
    //     {categorys.map(function (cat, index) {
    //       return (
    //         <li key={index}>
    //           <Link className="nav-link" to={"/danh-muc-san-pham/" + cat.slug}>{cat.name}</Link>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>
  );
}

export default ListCategory;
