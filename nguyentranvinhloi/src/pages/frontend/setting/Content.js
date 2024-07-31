import React from 'react';
import avt from '../../../assets/images/quangdac.jpg'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { urlImage } from '../../../config';
import userservice from '../../../services/UserService';


function Content() {
	const navigate = useNavigate();
	 //khai báo state
	 const [name, setName] = useState("");
	 const [gender, setGender] = useState("");
	 const [email, setEmail] = useState("");
	 const [phone, setPhone] = useState("");
	 const [username, setUsername] = useState("");
	 const [password, setPassword] = useState("");
	 const [address, setAddress] = useState("");
	 const [roles, setRoles] = useState("");

	 //chi tiết mẫu tin có id
	//  const { id } = useParams("id");
	//  useEffect(function () {
	//    (async function () {
	// 	 await userservice.getById(id).then(function (result) {
	// 	   const tmp = result.data.users;
	// 	   setName(tmp.name);
	// 	   setGender(tmp.gender);
	// 	   setEmail(tmp.email);
	// 	   setPhone(tmp.phone);
	// 	   setUsername(tmp.username);
	// 	   setPassword(tmp.password);
	// 	   setAddress(tmp.address);
	// 	   setRoles(tmp.roles);
	// 	 });
	//    })();
	//  }, []);
	//  //Lấy danh sách
	//  const [users, setUsers] = useState([]);
	//  useEffect(function () {
	//    (async function () {
	// 	 await userservice.getAll().then(function (result) {
	// 	   setUsers(result.data.users);
	// 	 });
	//    })();
	//  }, []);

	const { id } = useParams("id");
	useEffect(() => {
		let token = localStorage.getItem("token");
		if (token) {
			const lay = JSON.parse(token);
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
			const layuser = lay[0].username;
			setUsername(layuser);
			const laypass = lay[0].password;
			setPassword(laypass);
			const layrole = lay[0].roles;
			setRoles(layrole);
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
	   await userservice.update(user, id).then(function (res) {
		 alert(res.data.message);
		 navigate("/admin/user", { replace: true });
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
							{/* <Link className="list-group-item" to="/address"> Địa chỉ của tôi </Link>
							<Link className="list-group-item" to="/order"> Đơn hàng của tôi </Link>
							<Link className="list-group-item" to="/wishlist"> Sản phẩm yêu thích </Link> */}

							{/* <Link className="list-group-item" to="/setting"> Cài đặt </Link> */}
							<Link className="list-group-item" onClick={logout} to="/"> Đăng xuất </Link>
						</nav>
					</aside>

					<main className="col-md-9">
						<form onSubmit={userEdit} method="post">
							<div className="card">
								<div className="card-header">
									<div className="row">
										<div className="col-md-6">
											<strong className="text-danger">Cập nhật tài khoản người dùng</strong>
										</div>
										<div className="col-md-6 text-end">
											<button type="submit" className="btn-sm btn-success me-2">
												Lưu
											</button>
											<Link to="/admin/user" className="btn btn-sm btn-info">
												Về danh sách
											</Link>
										</div>
									</div>
								</div>
								<div className="card-body">
									<div className="row">
										<div className="col-md-9">
											<div className="mb-3">
												<label htmlFor="name">Tên người dùng</label>
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
						</form>

					</main>
				</div>

			</div>
		</section>
	);
}
export default Content;
// {/*--------------------------------------------------------------------- */}
// <div className="col-md-9">
// {/*----------------------*/}
// <div className="form-row">
// 	<div className="col form-group">
// 		<label>Tên</label>
// 		<input type="text" className="form-control" value={name} />
// 	</div>
// 	<div className="col form-group">
// 		<label>Email</label>
// 		<input type="email" className="form-control" value={email} />
// 	</div>
// </div>
// {/*----------------------*/}
// <div className="form-row">
// 	<div className="col form-group">
// 		<label>Địa chỉ</label>
// 		<input type="email" className="form-control" value={address} />
// 	</div>
// </div>
// {/*----------------------*/}
// <div className="form-row">

// 	<div className="form-group col-md-6">
// 		<label>Điện thoại</label>
// 		<input type="text" className="form-control" value={phone} />
// 	</div>
// {/*----------------------*/}
// </div>
// <button type="submit" className="btn-sm btn-success me-2">
// 	Lưu
// </button>
// {/* <button className="btn btn-light">Đổi mật khẩu</button> */}
// </div>
// {/*---------------Hình----------------------------------------------- */}


{/* <div className="form-row">
											<div className="form-group col-md-6">
												<label>Tỉnh</label>
												<select id="inputState" className="form-control">
													<option> Chọn...</option>
													<option>TP Hồ Chí Minh</option>
													<option>Đồng Nai</option>
													<option selected="1">Bình Thuận</option>
													<option>Bình Dương</option>
													<option>Khác thì nhập vào</option>
												</select>
											</div>
											<div className="form-group col-md-6">
												<label>Huyện</label>
												<input type="text" className="form-control" />
											</div>
										</div> */}


// 				<form onSubmit={userEdit} method="post">
// 	<div className="card">
// 		<div className="card-body">
// 			<form className="row">
// 				{/*--------------------------------------------------------------------- */}
// 				<div className="col-md-9">
// 					{/*----------------------*/}
// 					<div className="form-row">
// 						<div className="col form-group">
// 							<label htmlFor="name">Tên người dùng</label>
// 							<input
// 								type="text"
// 								name="name"
// 								value={name}
// 								onChange={(e) => setName(e.target.value)}
// 								className="form-control"
// 							/>
// 						</div>
// 						<div className="col form-group">
// 							<label htmlFor="email">Email</label>
// 							<input
// 								type="text"
// 								name="email"
// 								value={email}
// 								onChange={(e) => setEmail(e.target.value)}
// 								className="form-control"
// 							/>
// 						</div>
// 					</div>
// 					{/*----------------------*/}
// 					<div className="form-row">
// 						<div className="col form-group">
// 							<label htmlFor="address">Địa chỉ</label>
// 							<input
// 								type="text"
// 								name="address"
// 								value={address}
// 								onChange={(e) => setAddress(e.target.value)}
// 								className="form-control"
// 							/>
// 						</div>
// 					</div>
// 					{/*----------------------*/}
// 					<div className="form-row">

// 						<div className="form-group col-md-6">
// 							<label htmlFor="phone">Điện thoại</label>
// 							<input
// 								name="phone"
// 								value={phone}
// 								onChange={(e) => setPhone(e.target.value)}
// 								className="form-control"
// 							/>
// 						</div>
// 						{/*----------------------*/}
// 					</div>
// 					<button type="submit" className="btn-sm btn-success me-2">
// 						Lưu
// 					</button>
// 					{/* <button className="btn btn-light">Đổi mật khẩu</button> */}
// 				</div>
// 				{/*---------------Hình----------------------------------------------- */}
// 				<div className="col-md">
// 					<img src={urlImage + 'user/' + image} alt="hinh" width="100px" height="100px" className="img-md rounded-circle border" />
// 				</div>
// 			</form>
// 		</div>
// 	</div>
// </form>