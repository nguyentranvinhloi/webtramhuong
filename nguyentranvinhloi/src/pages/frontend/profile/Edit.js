import React from 'react';
import item1 from '../../../assets/images/quangdac.jpg'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { urlImage } from '../../../config';
import orderservice from '../../../services/OrderService';
import userservice from '../../../services/UserService';

function Edit() {
    const navigate = useNavigate();

    useEffect(() => {
		document.title = 'Chỉnh sửa';
	  }, []);
      
    const [orders, setOrders] = useState([]);

    const [user_id, setUserId] = useState("");
    //const { id } = useParams("id");

    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //const [image, setImage] = useState("");
    const [roles, setRoles] = useState("");




    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            const lay = JSON.parse(token);
            const layid = lay[0].id;
            setUserId(layid);
            const layten = lay[0].name;
            setName(layten);
            const laygt = lay[0].gender;
            setGender(laygt);
            const layemail = lay[0].email;
            setEmail(layemail);
            const layaddress = lay[0].address;
            setAddress(layaddress);
            const layphone = lay[0].phone;
            setPhone(layphone);
            // const layimage = lay[0].image;
            // setImage(layimage);
            const layrole = lay[0].roles;
            setRoles(layrole);
            const layusername = lay[0].username;
            setUsername(layusername);
            const laypassword = lay[0].password;
            setPassword(laypassword);

            //console.log(user_id);

        };
    }, []);

    async function userEdit(event) {
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
        if (image.files.length === 0) {
            user.append("image", "");
        } else {
            user.append("image", image.files[0]);
        }
        //update
        await userservice.update(user, user_id).then(function (res) {
            alert(res.data.message);
            alert("Để hiển thị thông tin của bạn vừa chỉnh sửa xong thì bạn nên đăng nhập lại!");
            logout();
            navigate("/login", { replace: true });
        });
    }

    function logout() {
        localStorage.removeItem("token");
    }

    return (
        <section className="section-content padding-y bg-light">
            <div className="container">

                <div className="row">
                    <aside className="col-md-3">
                        <nav className="list-group">
                            <Link className="list-group-item" to="/profile"> Tổng quan  </Link>
                            {/* <Link className="list-group-item" to="/address"> Địa chỉ của tôi </Link> */}
                            {/* <Link className="list-group-item" to="/order"> Đơn hàng của tôi </Link> */}
                            {/* <Link className="list-group-item" to="/wishlist"> Sản phẩm yêu thích </Link> */}
                            {/* <Link className="list-group-item" to="/setting"> Cài đặt </Link> */}
                            <Link className="list-group-item" to="/" onClick={logout}> Đăng xuất </Link>
                        </nav>
                    </aside>
                    <main className="col-md-9">
                        <article className="card mb-3">
                            <form onSubmit={userEdit} method="post">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <strong className="text-danger">Chỉnh sửa thông tin</strong>
                                            </div>
                                            <div className="col-md-6 text-end">
                                                <button type="submit" className="btn-sm btn-success me-2">
                                                    Lưu
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="name">Tên</label>
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

                                            </div>
                                            <div className="col-md-6">
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
                                                <div className="mb-3">
                                                    <label htmlFor="image">Hình ảnh</label>
                                                    <input type="file" id="image" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </article>

                    </main>
                </div>

            </div>
        </section>
    );
}
export default Edit;
