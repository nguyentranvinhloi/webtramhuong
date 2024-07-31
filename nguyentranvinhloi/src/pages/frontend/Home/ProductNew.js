//import listProduct from "../../../datatest/product.json";
import { useEffect, useState } from "react";
import ProductItem from "../../../components/frontend/productitem";
import productservice from "../../../services/ProductService";
//import { Link } from "react-router-dom";
import quangdac from "../../../assets/images/logo don le.jpg";
import { Link } from "react-router-dom";

function ProductNew(props) {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    (async function () {
      await productservice.getProductNew(6).then(function (result) {
        setProducts(result.data.products);
      });
    })();
  }, []);
  if (products == null) {
  }
  return (
    <div className="container-category ms-3 me-3 mt-4">
      <div className="text-center">
        <img src={quangdac} alt="hinh" width='100px' height='100px' />
      </div>
      {/* <h3 className="text-center text-danger mt-3">༺SẢN PHẨM MỚI NHẤT༻</h3> */}
      <div className="section-heading heading-line">
        <h4 className="text-center title-section text-danger ">༺SẢN PHẨM MỚI NHẤT༻</h4>
      </div>
      <div className="row mt-3">
        {products.map(function (product, index) {
          return <ProductItem key={index} product={product} />;
        })}
      </div>
      <div className="text-center my-3">
        <Link to="san-pham/" className="btn btn-success">༺Xem thêm༻</Link>
      </div>
    </div>
  );
};

export default ProductNew;
