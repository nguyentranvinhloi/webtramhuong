import { useEffect, useState } from "react";
import ListBrand from "../../../layouts/LayoutSite/ListBrand";
import ListCategory from "../../../layouts/LayoutSite/ListCategory";
import brandservice from "../../../services/BrandService";
import productservice from "../../../services/ProductService";
import ProductItem from "../../../components/frontend/productitem";
import { useParams } from "react-router-dom";
import ListPost from "../../../layouts/LayoutSite/ListPost";

function BrandCategory() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(12);
  const [title, setTitle] = useState("");

  useEffect(() => {
		document.title = 'Sản phẩm theo thương hiệu';
	  }, []);

  useEffect(
    function () {
      (async function () {
        try {
            const result_brand = await brandservice.getById(slug);
            const branid=result_brand.data.brands.id;
            const result = await productservice.getProductByBrandId(branid,limit);
            setProducts(result.data.products);
            setTitle(result_brand.data.brand.name);
        } catch (error) {
           console.error(error);
         }
      })();
    },
    [limit,slug]
  );

    return ( 
        <section className="maincontent m-3">    
          <div className="">
            <div className="row m-5">
              <div className="mb-3"><h3 className="text-danger">Lọc theo:</h3> </div>
              <ListCategory />
              <ListBrand />
              {/* <ListPost/> */}
            </div>
            <div className="">
              <h3 className="text-center text-danger">{title}</h3>
              <div className="row">
                {products.map(function (product, index) {
                  return <ProductItem product={product} key={index} />;
                })}
              </div>
              <div className="row">
                <div className="col-12 text-center">
                  <button
                    className="btn btn-success"
                    onClick={() => setLimit(limit + 12)}
                  >
                    ༺Xem thêm༻
                  </button>
                </div>
              </div>
            </div>
          </div>
 
      </section>
        );
}

export default BrandCategory;