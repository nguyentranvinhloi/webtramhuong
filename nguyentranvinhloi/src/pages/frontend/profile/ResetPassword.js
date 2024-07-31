import React from 'react';
import axios from 'axios';
import item1 from '../../../assets/images/quangdac.jpg'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { urlImage } from '../../../config';
import orderservice from '../../../services/OrderService';
import { FaRegEye } from "react-icons/fa";
import userservice from '../../../services/UserService';

function ResetPassword() {
	const navigate = useNavigate();
	const [orders, setOrders] = useState([]);

	//const [id, setUserId] = useState("");
	const [user_id, setUserId] = useState("");

	const [name, setName] = useState("");
	const [gender, setGender] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const [image, setImage] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [roles, setRoles] = useState("");

	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmNewPassword, setConfirmNewPassword] = useState('');

	useEffect(() => {
		document.title = 'Đổi mật khẩu';
	  }, []);

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
			const layusername = lay[0].username;
			setUsername(layusername);
			const laypassword = lay[0].password;
			setPassword(laypassword);
			const layimage = lay[0].image;
			setImage(layimage);
			const layrole = lay[0].roles;
			setRoles(layrole);

			//console.log(id);
		};
	}, []);
	useEffect(() => {
		let token1 = localStorage.getItem("token1");
		if (token1) {
			const lay = JSON.parse(token1);
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
			const layimage = lay[0].image;
			setImage(layimage);
			//setId(user_id);
			//console.log(id);
		};
	}, []);

	//-----------------------------------------------------------------------------------------------

	function logout() {
		localStorage.removeItem("token");
		localStorage.removeItem("token1");
		localStorage.removeItem("tokengoogle");
		alert("Đăng xuất thành công!");
	}
	//--------------------------------------------------------------------------
	async function ResetPassword(event) {
		event.preventDefault();
		const image = document.querySelector("#image");
		var user = new FormData();
		user.append("name", name);
		user.append("gender", gender);
		user.append("email", email);
		user.append("phone", phone);
		user.append("username", username);
		user.append("password", newPassword);
		user.append("address", address);
		user.append("roles", roles);

		//xử lý ảnh
		if (image && image.files.length === 0) {
			user.append("image", "");
		} else if (image && image.files.length > 0) {
			user.append("image", image.files[0]);
		}
		//update
		if (currentPassword === password && confirmNewPassword === newPassword) {
			await userservice.update(user, user_id).then(function (res) {
				//alert(res.data.message);
				alert("Đổi mật khẩu thành công! Bạn vui lòng đăng nhập lại để xác minh!");
				logout();
				navigate("/login", { replace: true });
			});
		}
		else {
			alert("Bạn nhập sai mật khẩu cũ hoặc nhập lại mật khẩu mới không đúng, vui lòng thử lại!");
			navigate("/setting", { replace: true });
		}
	}
	//--------------------------------------------------------------------------
	// function ressetPassword() {
	// 	if (currentPassword === password && confirmNewPassword === newPassword) {
	// 		userEdit();
	// 		// alert("Đổi mật khẩu thành công!");
	// 	}
	// 	else {
	// 		alert("Bạn nhập sai mật khẩu cũ hoặc nhập lại mật khẩu mới không đúng, vui lòng thử lại!");
	// 	}

	// }

	return (
		<section className="section-content padding-y bg-light">
			<div className="container">

				<div className="row">
					<aside className="col-md-3">
						<nav className="list-group">
							<Link className="list-group-item" to="/profile"> Tổng quan  </Link>
							<Link className="list-group-item" to="/setting"> Đổi mật khẩu </Link>
							<Link className="list-group-item" to="/" onClick={logout}> Đăng xuất </Link>
						</nav>
					</aside>
					<main className="col-md-9">

						<article className="card mb-3">
							<div className="card-body">

								<figure className="icontext">
									<div className="icon">
										<img className="rounded-circle img-sm border"
											src={urlImage + 'user/' + image} alt="hinh"
											width="100px" height="100px"
										/>
									</div>
									<div className="text">
										<strong> {name} </strong>
										<p className="mb-2"> {gender} </p>
									</div>
								</figure>
								<p>
									<i className="fa fa-map-marker text-muted"></i> &nbsp; Email: <t />
									{email}
								</p>
								<p>
									<i className="fa fa-map-marker text-muted"></i> &nbsp; Điện thoại: <t />
									{phone}
								</p>
								<p>
									<i className="fa fa-map-marker text-muted"></i> &nbsp; Địa chỉ: <t />
									{address}
									<t />
									<Link to="/edit" className="btn-link ms-5"> Chỉnh sửa thông tin</Link>
								</p>
							</div>
						</article>
						<article className="card  mb-3">
							<form onSubmit={ResetPassword} method="post">
								<div className="card-body">
									<div className="row">
										<div className="col-md-6">
											<strong className="text-danger">Đổi mật khẩu</strong>
											<div className="mb-3">
												<label htmlFor="name">Mật khẩu cũ:</label>
												<input
													type="password"
													value={currentPassword}
													placeholder={password}
													onChange={(e) => setCurrentPassword(e.target.value)}
													className="form-control"
												/>
											</div>
											<div className="mb-3">
												<label htmlFor="name">Mật khẩu mới:</label>
												<input
													type="password"
													value={newPassword}
													onChange={(e) => setNewPassword(e.target.value)}
													className="form-control"
												/>
											</div>
											<div className="mb-3">
												<label htmlFor="name">Nhập lại mật khẩu mới:</label>
												<input
													type="password"
													value={confirmNewPassword}
													onChange={(e) => setConfirmNewPassword(e.target.value)}
													className="form-control"
												/>
											</div>
											<button className="btn btn-success" type="submit" >Đổi mật khẩu</button>
											{/* <button className="btn btn-success" onClick={ressetPassword}>Đổi mật khẩu</button> */}
										</div>
										<div className="col-md-6">


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
export default ResetPassword;
