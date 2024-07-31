//import listProduct from "../../../datatest/product.json";
import { useEffect, useState } from "react";
import ProductSaleItem from "../../../components/frontend/produc_saletitem";
import productservice from "../../../services/ProductService";
//import { Link } from "react-router-dom";
import quangdac from "../../../assets/images/logo don le.jpg";
import { Link } from "react-router-dom";

function ProductSale(props) {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    (async function () {
      await productservice.getProductSale(12).then(function (result) {
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
    
      <div className="section-heading heading-line">
        <h4 className="text-center title-section text-danger ">༺SẢN PHẨM KHUYẾN MÃI༻</h4>
      </div>
      <div className="row mt-3">
        {products.map(function (product, index) {
          return <ProductSaleItem key={index} product={product} />;
        })}
      </div>
      <div className="text-center my-3">
        <Link to="/san-pham/sale" className="btn btn-success">༺Xem thêm༻</Link>
      </div>
    </div>
  );
};

export default ProductSale;
