import React from 'react';
import { Button, Container, Col, Row, Table } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { FaRegTrashAlt } from "react-icons/fa";
import { BsCartCheck, BsCartX } from 'react-icons/bs';
import { urlImage } from '../../../config';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
//import orderservice from '../../../services/OrderService';

const Cart = () => {

    const navigate = useNavigate()
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    useEffect(() => {
		document.title = 'Giỏ hàng';
	  }, []);
    // async function Checkout() {
    //     var order = new FormData();
    //     order.append("name", "Nguyen Tran Vinh Loi");
    //     order.append("gender", "Nam");
    //     order.append("phone", '0932293748');
    //     order.append("email", "Nguyentranvinhloi12@gmail.com");
    //     order.append("user_id", 1);
    //     order.append("address", "22A đường 147");
    //     order.append("note", "note");
    //     order.append("status", 1);
    //     await orderservice.create(order).then(function (res) {
    //         emptyCart();
    //         alert('Xác nhận đơn hàng thành công');
    //         Navigate("/", { replace: true });
    //     });

    // }
    function Checkout() {
        //let cart = localStorage.getItem("react-use-cart");
        if (isEmpty) {
            alert('Bạn chưa có sản phẩm nào!');
            navigate("/cart", { replace: true });
            
        }
        else {
            navigate("/cash", { replace: true });
        }
    }

    return (
        <Container className="py-4 mt-5">
            <h1 className={` my-5 text-center text-danger`}>
                {isEmpty ? '༺Giỏ hàng của bạn chưa có sản phẩm nào!༻' : '༺Giỏ hàng༻'}
            </h1>
            <Row className="justify-content-center">
                <Table responsive="sm" striped bordered hover variant="" className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">Hình ảnh</th>
                            <th className="text-center">Tên sản phẩm</th>
                            <th className="text-center">Giá</th>
                            <th className="text-center">Số lượng</th>
                            <th className="text-center">Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <div style={{
                                            background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                            justifyContent: 'center', alignItems: 'center'
                                        }}>
                                            <div style={{ padding: '.5rem' }}>
                                                <img src={urlImage + 'product/' + item.image} style={{ width: '5rem' }} alt={item.title} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <Link className="nav-link" to={"/chi-tiet-san-pham/" + item.slug}>
                                        <h6 style={{ width: '26rem', overflow: 'hidden', textOverFlow: 'ellipsis' }}>
                                            {item.name}
                                        </h6>
                                        </Link>
                                    </td>
                                    <td className="text-center">{item.price}00.000vnđ</td>
                                    <td className="text-center">
                                        <Button onClick={() => updateItemQuantity(item.id, (item.quantity>1)?item.quantity - 1:item.quantity)} min="1" className="ms-2 me-2">-</Button>
                                        {item.quantity}
                                        <Button onClick={() => updateItemQuantity(item.id,(item.quantity<5)?item.quantity + 1:item.quantity)} max="10" className="ms-2">+</Button>
                                    </td>
                                    <td className="text-center">

                                        <Button variant="danger" onClick={() => removeItem(item.id)} className="ms-2"> <FaRegTrashAlt /></Button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </Table>
                {/* {!isEmpty &&
                    <Row
                        style={{ position: 'fixed', bottom: 0 }}
                        className={`justify-content-center w-100 bg-light`}
                    >
                        <Col className="py-2">
                            <h4 className="text-danger">Tổng tiền: {cartTotal}00.000vnđ</h4>
                        </Col>
                        <Col className="p-0" md={6}>
                            <Link to="/">
                                <Button variant="primary"
                                    className="m-2"
                                >
                                    Tiếp tục mua sắm
                                </Button>
                            </Link>
                            <Button variant="danger"
                                className="m-2"
                                onClick={() => emptyCart()}
                            >
                                <BsCartX size="1.7rem" />
                                Xóa giỏ hàng
                            </Button>
                            <Link to="/cash">
                                <Button variant="success"
                                    className="m-2"
                                // onClick={() => Checkout()}
                                >
                                    <BsCartCheck size="1.7rem" />
                                    Thanh toán
                                </Button>
                            </Link>
                        </Col>
                    </Row>} */}
            </Row>
            <Row

                className={`justify-content-center w-100 bg-light`}
            >
                <Col className="py-2">
                    <h4 className="text-danger">Tổng tiền: {cartTotal}00.000vnđ</h4>
                </Col>
                <Col className="p-0" md={6}>
                    <Link to="/">
                        <Button variant="primary"
                            className="m-2"
                        >
                            Tiếp tục mua sắm
                        </Button>
                    </Link>
                    <Button variant="danger"
                        className="m-2"
                        onClick={() => emptyCart()}
                    >
                        <BsCartX size="1.7rem" />
                        Xóa giỏ hàng
                    </Button>

                    <Button variant="success"
                        className="m-2"
                        onClick={() => Checkout()}
                    >
                        <BsCartCheck size="1.7rem" />
                        Thanh toán
                    </Button>



                </Col>
            </Row>
        </Container>
    );
};

export default Cart;