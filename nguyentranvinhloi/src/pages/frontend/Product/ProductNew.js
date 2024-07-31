//import ProductItem from "../../../components/frontend/productitem";
//import productData from "../../../datatest/product.json";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import productservice from "../../../services/ProductService";
import ProductItem from "../../../components/frontend/productitem";
import { useForm } from "react-hook-form";


function ProductNew() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(12);

  useEffect(() => {
		document.title = 'Tất cả sản phẩm';
	  }, []);

    useEffect(function () {
      (async function () {
        await productservice.getProductNew(50).then(function (result) {
          setProducts(result.data.products);
        });
      })();
    }, []);

  
  /*--------------------------------------------------*/


  return (
    <section className="maincontent m-3">
      <strong><h3 className="text-center text-danger">
        ༺ 阿彌陀佛 ༻  Tất cả sản phẩm mới ༺ 以戒為師 ༻
      </h3></strong>
      
      <div className="row my-3">
        {products.map(function (product, index) {
          return <ProductItem product={product} key={index} />;
        })}
      </div>
      <div className="row">
        <div className="col-12 text-center">

        </div>
      </div>
      <button className="btn btn-success" onClick={() => setLimit(limit + 12)}>༺Xem thêm༻</button>

    </section>
  );
}

export default ProductNew;
