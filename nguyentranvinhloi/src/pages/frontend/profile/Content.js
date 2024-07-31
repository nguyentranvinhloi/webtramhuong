import React from 'react';
import item1 from '../../../assets/images/quangdac.jpg'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { urlImage } from '../../../config';
import orderservice from '../../../services/OrderdetailService';
import userservice from '../../../services/UserService';
import { FaRegEye } from "react-icons/fa";
import axios from 'axios';

// Thêm interceptor vào axios
// axios.interceptors.request.use(
// 	(config) => {
// 	  config.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
// 	  return config;
// 	},
// 	(error) => {
// 	  return Promise.reject(error);
// 	}
//   );
function Content() {
	const navigate = useNavigate();

	const [orders, setOrders] = useState([]);

	const [user, setUser] = useState([]);

	const [user_id, setUserId] = useState("");
	const { id } = useParams();

	const [name, setName] = useState("");
	const [gender, setGender] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const [image, setImage] = useState("");

	const [emailgoogle, setEmailGoogle] = useState("");

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
			const layimage = lay[0].image;
			setImage(layimage);
			//setId(user_id);
			//console.log(id);
		}
		// else{
		// 	const layid = user[0].id;
		// 	setUserId(layid);
		// 	const layten = user[0].name;
		// 	setName(layten);
		// 	const laygt = user[0].gender;
		// 	setGender(laygt);
		// 	const layemail = user[0].email;
		// 	setEmail(layemail);
		// 	const layaddress = user[0].address;
		// 	setAddress(layaddress);
		// 	const layphone = user[0].phone;
		// 	setPhone(layphone);
		// 	const layimage = user[0].image;
		// 	setImage(layimage);
		// }
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
	//GOOGLE
	useEffect(() => {
		let tokengoogle = localStorage.getItem("tokengoogle");
		if (tokengoogle) {
			const lay = JSON.parse(tokengoogle);
			const layemail = lay.email;
			setEmailGoogle(layemail);
			console.log(layemail);
		};
	}, []);
	useEffect(function () {
		(async function () {
			await userservice.findUser(emailgoogle)
				.then(function (result) {
					localStorage.setItem("token1", JSON.stringify(result.data.users));
					//console.log(user);
				});
		})();
	}, [emailgoogle]);

	// useEffect(function () {
	// 	(async function () {
	// 		await orderservice.getById(user_id)
	// 			.then(function (result) {
	// 				setOrders(result.data.orders);
	// 			});
	// 	})();
	// }, [user_id]);
	

	useEffect(function () {
		(async function () {
			try {
				const result = await orderservice.getById(user_id);
				setOrders(result.data.orders);
			} catch (error) {
				if (error.response) {
					// Xử lý lỗi từ server
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					// Xử lý lỗi khi không nhận được response từ server
					console.log(error.request);
				} else {
					// Xử lý các lỗi khác
					console.log('Error', error.message);
				}
				// Bạn có thể thêm các hành động khác, chẳng hạn như hiển thị thông báo lỗi cho người dùng
			}
		})();
	}, [user_id]);

	function logout() {
		localStorage.removeItem("token");
		localStorage.removeItem("token1");
		localStorage.removeItem("tokengoogle");
		alert("Đăng xuất thành công!");
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
										{/* <p className="mb-2">Email: {email} </p> */}
										{/* <a href="#" className="btn btn-light btn-sm">Chỉnh sửa</a> */}
									</div>
								</figure>
								<p>
									<i className="fa fa-map-marker text-muted"></i> &nbsp; Email: <t />
									{email}
									{/* <a href="#" className="btn-link"> Chỉnh sửa</a> */}
								</p>
								<p>
									<i className="fa fa-map-marker text-muted"></i> &nbsp; Điện thoại: <t />
									{phone}
									{/* <a href="#" className="btn-link"> Chỉnh sửa</a> */}
								</p>
								<p>
									<i className="fa fa-map-marker text-muted"></i> &nbsp; Địa chỉ: <t />
									{address}
									<t />
									<Link to="/edit" className="btn-link ms-5"> Chỉnh sửa thông tin</Link>
								</p>



								{/* <article className="card-group card-stat">
								<figure className="card bg">
									<div className="p-3">
										<h4 className="title">38</h4>
										<span>Đơn đặt hàng</span>
									</div>
								</figure>
								 <figure className="card bg">
									<div className="p-3">
										<h4 className="title">5</h4>
										<span>Yêu thích</span>
									</div>
								</figure> 
								<figure className="card bg">
									<div className="p-3">
										<h4 className="title">12</h4>
										<span>Đợi giao hàng</span>
									</div>
								</figure>
								<figure className="card bg">
									<div className="p-3">
										<h4 className="title">50</h4>
										<span>Đã giao</span>
									</div>
								</figure>
							</article> */}


							</div>
						</article>

						<article className="card  mb-3">
							<div className="card-body">
								<h5>Lịch sử đơn hàng của bạn</h5>
								<table className="table table-striped table-bordered table-hover">
									<thead>
										<tr>
											<th className="text-center">Tên đặt hàng</th>
											<th style={{ width: 80 }} className="text-center">Email</th>
											<th className="text-center">Điện thoại</th>
											<th className="text-center">Địa chỉ</th>
											<th style={{ width: 80 }} className="text-center">
												Xem
											</th>
										</tr>
									</thead>
									<tbody>
										{orders.map(function (order, index) {
											return (
												<tr key={index}>
													<td>{order.name}</td>
													<td>{order.email}</td>
													<td>{order.phone}</td>
													<td>{order.address}</td>
													<td className="text-center">
														<Link
															to={"/profile/show/" + order.id}
															className="btn btn-sm btn-success me-2"
														>
															<FaRegEye />
														</Link>
													</td>
												</tr>
											);
										})}
									</tbody>
								</table>


							</div>
						</article>

					</main>
				</div>

			</div>
		</section>
	);
}
export default Content;

{/* <div className="col-md-6">
										<figure className="itemside  mb-3">
											<div className="aside"><img src={item1} width="100px" height="100px" className="border img-sm" /></div>
											<figcaption className="info">
												<time className="text-muted"><i className="fa fa-calendar-alt"></i> 12.09.2019</time>
												<p> {item.name} </p>
											</figcaption>
										</figure>
									</div> */}