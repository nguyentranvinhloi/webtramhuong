import { useEffect, useState } from "react";
import productservice from "../../../services/ProductService";
import { useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import ProductItem from "../../../components/frontend/productitem";
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import { BsCartPlus } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

function ProductDetail(props) {
  const { addItem } = useCart();
  const { quantity } = useState(1);
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  const [product_other, setProductOther] = useState([]);

  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  useEffect(() => {
		document.title = 'Chi tiết sản phẩm';
	  }, []);

  useEffect(function () {
    (function () {
      productservice.getProductBySlug(slug).then(function (result) {
        if (result.data.success === true) {
          setProduct(result.data.product);
          setProductOther(result.data.product_other);
        }
      });
    })()
  }, [slug])
  return (
    <section>
      <section className="section-content bg-light padding-y m-3">
        <div className="ms-3">
          <div className="row ">
            <aside className="col-md-5 ms-5">
              <div className="">
                <img
                  src={urlImage + "product/" + product.image}
                  alt="hinh"
                  height="300px" width="350px"
                  className=" "
                />
              </div>
            </aside>
            <main className="col-md-6">
              <article className="product-info-aside">
                <h3 className="title mt-3">{product.name}</h3>

                <div className="rating-wrap my-3">
                  <ul className="rating-stars">
                    <li style={{ width: 80 }} className="stars-active">
                      <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  {/* <small className="label-rating text-muted">132 Đánh giá</small>
                  <small className="label-rating text-success">
                    {" "}
                    <i className="fa fa-clipboard-check"></i> 154 đặt hàng{" "}
                  </small> */}
                </div>

                <div className="mb-3">
                  <var className=" h4 text-danger">{product.price}90.000.vnđ</var>
                </div>

                <p>
                  {product.description}
                </p>

                <dl className="row">
                  {/* <dt className="col-sm-3">Xuất xứ</dt>
                  <dd className="col-sm-9">
                    <a href="#">Đài Loan</a>
                  </dd> */}
                  <dt className="col-sm-3">Mô tả</dt>
                  <dd className="col-sm-9">{product.metadesc}</dd>

                  <dt className="col-sm-3">Bảo hành</dt>
                  <dd className="col-sm-9">12 tháng</dd>

                  <dt className="col-sm-3">Giao hàng</dt>
                  <dd className="col-sm-9">3-4 ngày (tùy khu vực)</dd>

                </dl>

                <div className="form-row  mt-4">
                  <div className="form-group col-md flex-grow-0">
                    <div className="input-group mb-3 input-spinner">
                      {/* <div className="input-group-prepend">
                        <Button onClick={() => updateItemQuantity(product.id, product.quantity - 1)} className="ms-2">-</Button>
                        <input type="text" className="form-control" value="1"/>
                        <Button onClick={() => updateItemQuantity(product.id, product.quantity + 1)} className="ms-2">+</Button>
                      </div> */}
                    </div>
                  </div>
                  <div className="form-group col-md">
                    <Link to={"/cart"}>
                      <Button
                        onClick={() => addItem(product)}
                        className="bg-success"
                      >
                        <BsCartPlus size="1.8rem" />
                        Thêm vào giỏ hàng
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            </main>
            <dl className="row mt-3">
              {/* <dt className="col-sm-3">Xuất xứ</dt>
                  <dd className="col-sm-9">
                    <a href="#">Đài Loan</a>
                  </dd> */}
              <dt className="col-sm-3">Chi tiết sản phẩm:</dt>
              <dd className="col-sm-9">{product.detail}</dd>
            </dl>

            <h4 className=" text-center text-danger mt-5">༺SẢN PHẨM LIÊN QUAN༻</h4>
            <div className="row">
              {product_other.map(function (product, index) {
                return <ProductItem key={index} product={product} />
              }
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
    // <section className="maincontent">
    //   <div className="">
    //     <div className="row">
    //       <div className="col-md-5">
    //         <img
    //           src={urlImage + "product/" + product.image}
    //           alt="hinh"
    //           className="img-fluid w-70"
    //         />
    //       </div>
    //       <div className="col-md-7">
    //         <div className="row">
    //           <h4 className="text-success ">- Tên sản phẩm:</h4>
    //           <h3 className="text-primary ">{product.name}</h3>
    //         </div>
    //         <div className="row mt-3">
    //           <h4 className="text-success col-md-2">- Giá:</h4>
    //           <h4 className="text-danger col-md-3">{product.price}90.000vnđ</h4>
    //         </div>
    //         <div className="row mt-3">
    //           <h4 className="text-success col-md-3">- Mô tả:</h4>
    //           <h5 className="text-primary col-md-9">{product.metadesc}</h5>
    //         </div>
    //         <div className=" mt-5">
    //             <Link to={"/cart"}>
    //               <Button
    //                   onClick={() => addItem(product)}      
    //                  className="bg-success"
    //                   >
    //                   <BsCartPlus size="1.8rem" />
    //                   Thêm vào giỏ hàng
    //               </Button>
    //             </Link>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col-md-12">
    //         <h5 className="text-danger mt-3">Chi tiết sản phẩm:</h5>
    //         <h5>{product.detail}</h5>
    //       </div>
    //     </div>
    //     <h4 className=" text-center text-danger mt-5">༺SẢN PHẨM LIÊN QUAN༻</h4>
    //     <div className="row">
    //       {product_other.map(function(product,index){
    //         return <ProductItem key={index} product={product}/>
    //       }
    //       )}
    //     </div>
    //   </div>
    // </section>
  );
}

export default ProductDetail;
