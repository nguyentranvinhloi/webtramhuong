import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaRegTrashAlt } from "react-icons/fa";
//import ListSlider from "../../../datatest/slider.json";
import sliderservice from "../../../services/SliderService";
import { useEffect, useState } from "react";
import {urlImage} from '../../../config';
import { BsFillSignTurnLeftFill } from "react-icons/bs";

function SliderTrash() {
  const [statusdel,setStatusDelete]=useState([]);

  const [sliders,setSliders]=useState([]);
  useEffect(function(){
    (async function(){
      await sliderservice.trash()
      .then(function(result)
      {
        setSliders(result.data.sliders);
      });
    })();
  },[statusdel]);

  function sliderDelete(id)
    {
      sliderservice.remove(id).then(function(result){
        alert(result.data.message);
        setStatusDelete(result.data.id)
      });
    }
    function sliderRestore(id)
    {
      sliderservice.restore(id).then(function(result){
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
            <strong className="text-danger">THÙNG RÁC THANH TRƯỢT</strong>
          </div>
          <div className="col-md-6 text-end">
          <Link to="/admin/slider" className="btn btn-sm btn-info me-1">
                Về danh sách
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
              <th style={{ width: 130 }} className="text-center">
                Liên kết
              </th>
              <th className="text-center">Tên thanh trượt</th>
              <th className="text-center">Vị trí</th>
              <th style={{ width: 150 }} className="text-center">
                Ngày tạo
              </th>
              <th style={{ width: 130 }} className="text-center">
               Chức năng
              </th>
              <th style={{ width: 20 }} className="text-center">
                ID
              </th>
              
            </tr>
          </thead>
          <tbody>
            {sliders.map(function (slider, index) {
              return (
                <tr key={index}>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="text-center">
                    <img className="img-fluid" src={urlImage+'slider/'+slider.image} alt="hinh" />
                  </td>
                  <td>{slider.link}</td>
                  <td>{slider.name}</td>
                  <td>{slider.position}</td>
                  <td className="text-center">{slider.created_at}</td>
                  <td className="text-center">
                    <Link
                      to={"/admin/slider/show/"+slider.id}
                      className="btn btn-sm btn-success me-2"
                    >
                      <FaRegEye />
                    </Link>
                    {/* <Link
                      to={"/admin/slider/update/"+slider.id}
                      className="btn btn-sm btn-primary me-2"
                    >
                      <FaEdit />
                    </Link> */}
                    <button onClick={()=>sliderRestore(slider.id)} className="btn btn-sm btn-primary me-1">
                    <BsFillSignTurnLeftFill />
                    </button>
                    <button onClick={()=>sliderDelete(slider.id)} className="btn btn-sm btn-danger">
                      <FaRegTrashAlt />
                    </button>
                  </td>
                  <td className="text-center">{slider.id}</td>
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

export default SliderTrash;
