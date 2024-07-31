import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import userservice from '../../services/UserService'

function Login() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
      document.title = 'Đăng nhập';
      }, []);

    useEffect(function () {
      (async function () {
        await userservice.getAll()
        .then(function (result) 
        {
            setUsers(result.data.users);
        });
      })();
    }, []);
    const [username, setUser] = useState("");
    const [password, setPassword] = useState("");

  async function Login(event) {
    event.preventDefault();
    const user = new FormData();
    user.append("username", username);
    user.append("password", password);

    await userservice.LoginAdmin(user).then(function (res) {
      if (res.data.success === true) {
        userservice.find(username).then(function (use) {
          //localStorage.removeItem("token");
          localStorage.setItem("token2", JSON.stringify(use.data.users));
        });
        alert(res.data.message);
        navigate("/admin", { replace: true });
      }
      else {
        alert(res.data.message);
        navigate("/admin/login", { replace: true });
      }
      
    });
  }
  return(
    <section className="section-conten padding-y bg-light mt-3 mb-3" style={{ height:480 }}>
    <div className="mt-5 card mx-auto" style={{ width: 350, margintop: 100 }}>
      <div className="card-body">
        <h4 className="card-title mb-4 text-danger">Đăng nhập</h4>
        <form className="form" onSubmit={Login}>
          {/* <a href="#" className="btn btn-facebook btn-info btn-block mb-2 " >  <i className="fab fa-facebook-f"></i>  Đăng nhập bằng facebook</a>
          <a href="#" className="btn btn-google btn-danger btn-block mb-4 "> <i className="fab fa-google"></i>  Đăng nhập bằng  Google </a> */}
          <div className="form-group">
            <input onChange={(e)=>setUser(e.target.value)} value={username} className="form-control" placeholder="Tài khoản" type="text" />
          </div>
          <div className="form-group">
            <input onChange={(e)=>setPassword(e.target.value)} value={password} className="form-control" placeholder="Mật khẩu" type="password" />
          </div>

          <div className="row form-group">  
            <label className=" custom-control custom-checkbox">
              {/* <input type="checkbox" className="col-md-1 float-left custom-control-input" value="option" />  Ghi nhớ */}
              {/* <a href="#" className="text-center nav-link text-danger ">Quên mật khẩu?</a> */}
            </label>
          </div>
          <div className="form-group text-center" >
            <button type="submit" className="btn btn-primary btn-block" > Đăng nhập  </button>
          </div>
        </form>
      </div>
    </div>

    {/* <p className="text-center mt-4">Bạn không có tài khoản? <Link to="/register" className=" text-danger">Đăng ký</Link></p> */}
  </section>
  );
};
export default Login;