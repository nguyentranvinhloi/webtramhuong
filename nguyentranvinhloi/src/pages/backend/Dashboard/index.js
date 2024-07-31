import { urlImage } from '../../../config';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import quangdac from "../../../assets/images/logo don le.jpg";
import userservice from '../../../services/UserService'
import * as XLSX from 'xlsx';

import RevenueChart from './charts';
import orderservice from '../../../services/OrderService';

function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Trang quản trị';
    }, []);

    useEffect(() => {
        let token = localStorage.getItem("token2");
        if (token) {
            navigate("/admin", { replace: true });
        }
        else {
            //alert('Bạn hãy đăng nhập trước đã!');
            navigate("/admin/login", { replace: true });
        }
    }, [])

    function logout() {
        alert('Đăng xuất thành công!');
        navigate("/admin/login", { replace: true });
        localStorage.removeItem("token2");
    }

    const [Data, setData] = useState([]);
    useEffect(() => {
        (async function () {
            try {
                const result = await orderservice.trash();
                let chartData = [];
                if (Array.isArray(result.data.orders) && result.data.orders.length > 0) {
                    chartData = result.data.orders.map(item => ({
                        Ngày: item.date,
                        Tổng: item.total
                    }));
                }
                setData(chartData);
            } catch (error) {
                console.error('Error fetching order chart data:', error);
            }
        })();
    }, []);
    function exportToExcel() {
        const worksheet = XLSX.utils.json_to_sheet(Data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
        const lastRow = XLSX.utils.sheet_add_aoa(worksheet, [['Ghi chú: Tổng tiền trên biểu đồ được tính bằng đơn vị triệu đồng']], { origin: -1 });
        XLSX.writeFile(workbook, 'data.xlsx');
    }
    return (
        <section className=' bg-light'>
            <div className="row">
                <div className="col-md-6">
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
                </div>
                <div className="col-md-6">
                    <div className="text-end col-md-12">
                        <Link to="/admin/login" className="btn btn-sm btn-info" onClick={logout}>
                            Đăng xuất
                        </Link>
                    </div>
                </div>
            </div>


            <h2 className="text-center text-primary">༺TRANG QUẢN TRỊ༻</h2>
            <h1 className="text-center text-danger">༺SHOP TRẦM HƯƠNG ĐẮC LỢI༻</h1>

            <div className='row'>
                <div className="col-md-8">
                    <RevenueChart />
                    <h6 className="text-center">Ghi chú: Tổng tiền trên biểu đồ được tính bằng đơn vị triệu đồng</h6>
                    <button onClick={exportToExcel} className="btn btn-success text-center">Xuất Excel</button>
                </div>
                <div className="col-md-4">
                    <img src={quangdac} alt="hinh" width='300px' height='300px' />
                </div>

            </div>
        </section>
    );
}

export default Dashboard;