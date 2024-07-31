
import Content from "./Content"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userservice from "../../../services/UserService";

function Register() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
		document.title = 'Đăng ký';
	  }, []);

  useEffect(function () {
    (async function () {
      await userservice.getAll().then(function (result) {
        setUsers(result.data.users);
      });
    })();
  }, []);

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [roles, setRoles] = useState("user");

  async function userStore(event) {
    event.preventDefault();
    const image = document.querySelector("#image");
    var user = new FormData();
    user.append("name", name);
    user.append("gender", gender);
    user.append("email", email);
    user.append("phone", phone);
    user.append("username", username);
    user.append("password", password);
    user.append("address", address);
    user.append("roles", roles);

    //xử lý ảnh
    // if (image.files.length === 0) {
    //   user.append("image", "");
    // } else {
    //   user.append("image", image.files[0]);
    // }

    await userservice.create(user).then(function (res) {
      alert(res.data.message);
      navigate("/login", { replace: true });
    });
  }
  return (
    <section className="section-conten padding-y bg-light " style={{ height: 600 }}>
      <div className="mt-2 card mx-auto" style={{ width: 550, margintop: 100 }}>
        <div className="card-body">
          <h4 className="card-title mb-4 text-danger">Đăng ký</h4>
          <form className="form" onSubmit={userStore}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Họ tên</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Giới tính</label>
                  <input
                    type="text"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Điện thoại</label>
                  <input
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="address">Địa chỉ</label>
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Tài khoản</label>
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Mật khẩu</label>
                  <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
            </div>



            <div className="row form-group">
              <label className=" custom-control custom-checkbox">
              </label>
            </div>
            <div className="form-group text-center" >
              <button type="submit" className="btn btn-primary btn-block" style={{ width: 100 }} > Đăng ký  </button>
            </div>
          </form>
        </div>
      </div>
      <p className="text-center mt-4">Bạn đã có tài khoản? <Link to="/login" className=" text-danger">Đăng nhập</Link></p>
    </section>
  );
}

export default Register;


{/* <form onSubmit={userStore} method="post">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">Đăng ký tài khoản</strong>
            </div>
            <div className="col-md-6 text-end">
              <button type="submit" className="btn-sm btn-success me-2">
                Hoàn tất đăng ký
              </button>
              <Link to="/login" className="btn btn-sm btn-info">
                Thoát
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label htmlFor="name">Họ tên</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="gender">Giới tính</label>
                <input
                  type="text"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone">Điện thoại</label>
                <input
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="address">Địa chỉ</label>
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-3">
            

              <div className="mb-3">
                <label htmlFor="username">Tài khoản</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password">Mật khẩu</label>
                <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </div>
             
               <div className="mb-3">
                <label htmlFor="roles">Vai trò</label>
                <input
                  type="text"
                  name="roles"
                  value={roles}
                  onChange={(e) => setRoles(e.target.value)}
                  className="form-control"
                />
              </div> 
              
              <div className="mb-3">
                <label htmlFor="image">Hình ảnh</label>
                <input type="file" id="image" className="form-control" />
              </div>   
            </div>
          </div>
        </div>
      </div>
    </form> */}