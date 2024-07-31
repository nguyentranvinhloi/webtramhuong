import { useEffect, useState } from "react";
import ProductItem from "../../../components/frontend/productitem";
import productservice from "../../../services/ProductService";
import { useParams } from "react-router-dom";
import categoryservice from "../../../services/CategoryService";
import ListCategory from "../../../layouts/LayoutSite/ListCategory";
import ListBrand from "../../../layouts/LayoutSite/ListBrand";
import ListPost from "../../../layouts/LayoutSite/ListPost";

function ProductCategory() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(12);
  const [title, setTitle] = useState("");
  useEffect(() => {
		document.title = 'Sản phẩm theo loại';
	  }, []);
  // useEffect(
  //   function () {
  //     (async function () {
  //       try {
  //       const infocategory = await categoryservice.getById(slug);
  //       const catid = infocategory.data.category.id;
  //       console.log(infocategory);
  //       setTitle(infocategory.data.category.name);
  //       const infoproduct = await productservice.getProductByCategoryId(
  //         catid,
  //         limit
  //       );
  //       setProducts(infoproduct.data.products);
  //       } catch (error) {
  //          console.error(error);
  //        }
  //     })();
  //   },
  //   [limit,slug]
  // );
  useEffect(
    function () {
      (async function () {
        try {
            const result_category = await categoryservice.getById(slug);
            const categoryid=result_category.data.categorys.id;
            const result = await productservice.getProductByCategoryId(categoryid,limit);
            setProducts(result.data.products);
            setTitle(result_category.data.category.name);
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

export default ProductCategory;
