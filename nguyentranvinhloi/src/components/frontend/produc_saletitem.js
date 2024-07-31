import { Link } from 'react-router-dom';
import './ProductStyle.css'
import { urlImage } from '../../config';
import { useCart } from 'react-use-cart';
//import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

function ProductSaleItem(props) {

    const { addItem } = useCart();
    const addToCart = () => {
        addItem(props.product);
    }
    return (
        <div className="col-md-2 mb-3">
            <div className="product-item bg-white">
                <figure className="card-product-grid card-sm">
                    <div className="product-image">
                        <Link to={"/chi-tiet-san-pham/" + props.product.slug}>
                            <img src={urlImage + "product/" + props.product.image} className="img-fluid" alt={props.product.image} />
                        </Link>
                    </div>
                    <div className="product-name p-2">
                        <h3 className="text-center fs-6 text-primary">
                            <Link className="nav-link" to={"/chi-tiet-san-pham/" + props.product.slug}>
                                {props.product.name}
                            </Link>
                        </h3>
                    </div>
                    <div className="product-pice p-2 fs-4 ">
                        {/* <div className="row"> */}
                        <div className="col-6 text-center">
                            <strong className="text-danger fs-5">{props.product.price_sale}90.000vnđ</strong>
                            {/* <del className="text fs-5">{props.product.price}00.000vnđ</del> */}
                        </div>
                        <div className="col-6 text-end">
                            <del className="text fs-5">{props.product.price}00.000vnđ</del>
                        </div>
                        {/* </div> */}
                    </div>
                    {/* <div className=" nav-link"><Link className="text-primary nav-link" to={"/chi-tiet-san-pham/"+props.product.slug}>Chi tiết</Link></div> */}

                    <div className="text-center">
                        <Link to={"/chi-tiet-san-pham/" + props.product.slug}><button onClick={() => addToCart()} className="btn btn-success mb-2 me-2"><i className="fa fa-eye"></i></button></Link>
                        <Link to={"/cart"}><button onClick={() => addToCart()} className="btn btn-secondary mb-2"><i className="fa fa-shopping-cart"></i></button></Link>
                    </div>


                </figure>
            </div>


        </div>

    );
}
export default ProductSaleItem;