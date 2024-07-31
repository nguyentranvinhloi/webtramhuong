function ImagesItem(props) {
    return (
        <div className="col-md-3 mb-3"  >
            <div className="product-item border">
                <div className="product-image">
                    <img src={props.product.image} className="img-fluid" alt="san pham" />
                </div>
                <div className="product-name p-2">
                    <h3 className="text-center fs-4">{props.product.name}</h3>
                </div>
                <div className="product-pice p-2 fs-4 ">
                    <div className="row">
                        <div className="col-6">
                            <strong className="text-danger fs-4">{props.product.pricesale}<sup>đ</sup></strong>
                        </div>
                        <div className="col-6 text-end">
                            <del className="text fs-4">{props.product.price}</del><sup>đ</sup>
                        </div></div>
                </div>
                <div className="link-detail">Chi tiết</div>
            </div>


        </div>
    );
}
export default ProductItem;