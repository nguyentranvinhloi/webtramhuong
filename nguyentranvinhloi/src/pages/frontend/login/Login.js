import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import userservice from '../../../services/UserService'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function Login() {
  const navigate = useNavigate();
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");


  // const [users, setUsers] = useState([]);
  // useEffect(function () {
  //   (async function () {
  //     await userservice.getAll()
  //     .then(function (result) 
  //     {
  //         setUsers(result.data.users);
  //     });
  //   })();
  // }, []);



  // const Login = async (event) => {
  //   if (!username || !password) {
  //     toast.error("Username/Password is required!");
  //     return;
  //   }
  //   setLoadingAPI(true);
  //   let res = await loginApi(username,password);
  //   if (res && res.token) {
  //     localStorage.setItem("token", "res.token");
  //      navigate("/", { replace: true });
  //    } else {
  //      if (res && res.status === 400) {
  //        toast.error(res.data.error);
  //      }
  //   }
  //   //console.log("check login: ",res);
  //   setLoadingAPI(false);
  // }
  useEffect(() => {
    document.title = 'Đăng nhập';
  }, []);

  useEffect(() => {
    let token = localStorage.getItem("token");
    let tokengoogle = localStorage.getItem("tokengoogle");

    if (token || tokengoogle) {
      navigate("/profile", { replace: true });
    }
    else {
      //alert('Bạn hãy đăng nhập trước đã!');
      navigate("/login", { replace: true });
    }
  }, [])


  async function Login(event) {
    event.preventDefault();
    const user = new FormData();
    user.append("username", username);
    user.append("password", password);

    await userservice.Login(user).then(function (res) {
      if (res.data.success === true) {
        userservice.find(username).then(function (use) {
          //localStorage.removeItem("token");
          localStorage.setItem("token", JSON.stringify(use.data.users));
        });
        alert(res.data.message);
        navigate("/", { replace: true });
      }
      else {
        alert(res.data.message);
        navigate("/login", { replace: true });
      }

    });
  }
  return (
    <section className="section-conten padding-y bg-light" style={{ minheight: 84 }}>
      <div className="card mx-auto" style={{ width: 350, margintop: 100 }}>
        <div className="card-body">
          <h4 className="card-title mb-4 text-danger">Đăng nhập</h4>
          <form className="form" onSubmit={Login}>
            {/* <a href="#" className="btn btn-facebook btn-info btn-block mb-2 " >  <i className="fab fa-facebook-f"></i>  Đăng nhập bằng facebook</a> */}
            {/* <a href="#" className="btn btn-google btn-danger btn-block mb-4 "> <i className="fab fa-google"></i>  Đăng nhập bằng  Google </a> */}
            <div className="form-group">
              <input onChange={(e) => setUser(e.target.value)} value={username} className="form-control" placeholder="Tài khoản" type="text" />
            </div>
            <div className="form-group">
              <input onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" placeholder="Mật khẩu" type="password" />
            </div>

            <div className="row form-group">
              <label className=" custom-control custom-checkbox">
                {/* <input type="checkbox" className="col-md-1 float-left custom-control-input" value="option" />  Ghi nhớ */}
                {/* <a href="#" className="text-center nav-link text-danger ">Quên mật khẩu?</a> */}
              </label>
            </div>
            <div className="form-group text-center" >
              <button type="submit" className="btn btn-primary btn-block" >Đăng nhập  </button>
              {/* <a href="#" className="btn btn-google btn-danger btn-block mb-4 "> <i className="fab fa-google"></i>  Đăng nhập bằng  Google </a> */}
              
            </div>
            <div className="ms-4">
            <GoogleLogin
                onSuccess={credentialResponse => {
                  //let tokengoogle = localStorage.getItem("tokengoogle");
                  const decoded = jwtDecode(credentialResponse?.credential);
                  localStorage.setItem("tokengoogle", JSON.stringify(decoded));
                  // const lay = JSON.parse(tokengoogle);
                  // const layemail = lay.email;
                  alert("Đăng nhập thành công!");
                  navigate("/", { replace: true });
                  //console.log(layemail);
                }}
                onError={() => {
                  alert("Đăng nhập không thành công! Bạn vui lòng đăng nhập lại.");
                  navigate("/login", { replace: true });
                  // console.log('Login Failed');
                }}
              />
            </div>
          </form>
        </div>
      </div>

      <p className="text-center mt-4">Bạn không có tài khoản? <Link to="/register" className=" text-danger">Đăng ký</Link></p>




    </section>
  );
};
export default Login;