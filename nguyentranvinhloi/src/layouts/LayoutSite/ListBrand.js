import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import brandservice from "../../services/BrandService";
import "./List.css";

function ListBrand() {
  const [brands, setBrands] = useState([]);
  useEffect(function () {
    (async function () {
      try {
        const result = await brandservice.getAll();
        setBrands(result.data.brands);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <aside className="col-lg col-md-3 flex-lg-grow-0 ms-5">
      <nav className="nav-home-aside">
        <ul className="menu-category">
          <li className="has-submenu"><h6 className="title-category">Thương hiệu<i className="d-md-none icon fa fa-chevron-down"></i></h6>
            <ul className="submenu">
            {brands.map(function (br, index) {
           return (
             <li key={index}>
               <Link className="nav-link" to={"/thuong-hieu/" + br.slug}>{br.name}</Link>
             </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </nav>
    </aside>

    // <div className="listbrand mb-5">
    //   <h4 className="head">THƯƠNG HIỆU</h4>
    //   <ul className="ul">
    //     {brands.map(function (br, index) {
    //       return (
    //         <li key={index}>
    //           <Link className="nav-link" to={"/thuong-hieu/" + br.slug}>{br.name}</Link>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>
  );
}

export default ListBrand;
