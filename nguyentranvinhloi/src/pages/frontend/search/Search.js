import React, { useState } from "react";
import { useEffect } from "react";
import productservice from "../../../services/ProductService";
import ProductItem from "../../../components/frontend/productitem";

const Search = (props) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    document.title = 'Tìm kiếm';
  }, []);

  useEffect(function () {
    (async function () {
      await productservice.getAll().then(function (result) {
        setProduct(result.data.products);
      });
    })();
  }, []);

  const [wordEntered, setWordEntered] = useState("");
  const [filteredData, setFilteredData] = useState("");
  const [search, setSearch] = useState(false);
  /*--------------------------------------------------*/
  useEffect(() => {
    const newFilter = product.filter((value) => {
      return (
        value.slug.toLowerCase().includes(wordEntered.toLowerCase()) ||
        value.name.toLowerCase().includes(wordEntered.toLowerCase())
      );
    });
    if (wordEntered === "") {
      setFilteredData([]);
    }
    else {
      setFilteredData(newFilter);
    }
  }, [wordEntered])
  return (
    <section className="maincontent m-3 mb-5" >
      <form>
        {/* <input type="text" name="keyword" className="" autoComplete="off" 
        placeholder="Nhập tên sản phẩm cần tìm..." 
        onChange={(e) => setWordEntered(e.target.value)} value={wordEntered} 
        style={{width:"300px"}}/> */}
        <div class="input-group">
          <div class="form-outline" data-mdb-input-init>
            <input type="text" name="keyword" className="" autoComplete="off"
              placeholder="Nhập tên sản phẩm cần tìm..." style={{width:"260px"}}
              onChange={(e) => setWordEntered(e.target.value)} value={wordEntered} class="form-control" />   
          </div>
        </div>
      </form>
      {filteredData.length !== 0 && (
        <div className="row my-3">
          {filteredData.slice(0.15).map((value, index) => {
            return <ProductItem key={index} product={value} />;
          })}
        </div>)}
      <div style={{ height: "150px" }}></div>
    </section>
  );
};

export default Search;


// import React, { useState } from "react";

// const Search = (props) => {
//   const [search, setSearch] = useState(props.keyword);

//   /**
//    * Thay đổi text khi nhập dữ liệu
//    * @param {string} event
//    */
//   const changeSearch = (event) => {
//     setSearch(event.target.value);
//   };

//   /**
//    * Xử lý xự kiện khi click button Tìm kiếm
//    */
//   const searchHandle = () => {
//     this.changeHandleSearch(search);
//   };

//   /**
//    *  Bắt sự kiện Enter trong text input
//    * @param {string} event
//    */

//   const searchKeyDown = (event) => {
//     if (event.key === "Enter") {
//       props.changeHandleSearch(search);
//     }
//   };

//   const changeHandleSearch = (q) => {
//     const params = {
//       page: 1,
//       q: q,
//     };
//     setKeyword(q);
//     dispatch(getAll(params));
//   };

//   return (
//     <div className="input-group mb-3">
//       <input
//         type="text"
//         className="form-control"
//         placeholder="Vui lòng nhập tên"
//         aria-label="Recipient's username"
//         onChange={changeSearch}
//         onKeyDown={searchKeyDown}
//         value={search}
//       />
//       <button
//         className="btn btn-outline-secondary"
//         type="button"
//         onClick={searchHandle}
//       >
//         Tìm kiếm
//       </button>
//     </div>
//   );
// };

// export default Search;