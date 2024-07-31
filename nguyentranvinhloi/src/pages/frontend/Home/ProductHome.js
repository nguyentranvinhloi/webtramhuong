//import listProduct from "../../../datatest/product.json";
import { useEffect, useState } from "react";
import ProductItem from "../../../components/frontend/productitem";
import productservice from "../../../services/ProductService";
import { Link } from "react-router-dom";
import quangdac from "../../../assets/images/logo don le.jpg";

function ProductHome(props) {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    (async function () {
      await productservice.getProductHome(6, props.category.id).then(function (result) {
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
      
      <div className="product-category ">
        <h3 className="text-center text-danger">༺{props.category.name}༻</h3>
      </div>
      <div className="row mt-3">
        {products.map(function (product, index) {
          return <ProductItem key={index} product={product} />;
        })}
      </div>
      <div className="text-center my-3">
        <Link to={"danh-muc-san-pham/" + props.category.slug} className="btn btn-success">༺Xem thêm༻</Link>
      </div>
    </div>
  );
}

export default ProductHome;
