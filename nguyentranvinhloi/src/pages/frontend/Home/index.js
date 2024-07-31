import { useEffect, useState } from "react";
//import ProductItem from "../../../components/frontend/productitem";
//import productData from "../../../datatest/product.json";
// import slider1 from "../../../assets/images/banners/slide1.jpg"
// import slider2 from "../../../assets/images/banners/slide2.jpg"
// import slider3 from "../../../assets/images/banners/slide3.jpg"
// import quanam from "../../../assets/images/quanam.jpg"
// import quangdac2 from "../../../assets/images/vongnu.jpg"
// import quangdac1 from "../../../assets/images/vongnam.jpg"
// import quangdac3 from "../../../assets/images/chuoitruong.jpg"
// import quangdac4 from "../../../assets/images/philip.jpg"
// import quangdac5 from "../../../assets/images/Indonesia.jpg"
// import quangdac6 from "../../../assets/images/co-viet-nam-2.jpg"
import categoryservice from "../../../services/CategoryService";
import ProductHome from "./ProductHome";
// import Slider from '../../../pages/frontend/Home/Slider';

import PostNew from "./PostNew";
// import ListCategory from "../../../layouts/LayoutSite/ListCategory";
// import ListBrand from "../../../layouts/LayoutSite/ListBrand";
// import ListPost from "../../../layouts/LayoutSite/ListPost";
import ProductNew from "./ProductNew";
import { urlImage } from "../../../config";
import sliderservice from "../../../services/SliderService";
import { Link } from "react-router-dom";
import ProductSale from "./ProductSale";
import brandservice from "../../../services/BrandService";

function Home(props) {
	const [sliders, setSliders] = useState([]);
	useEffect(() => {
		document.title = 'Trang chủ';
	}, []);
	useEffect(function () {
		(async function () {
			await sliderservice.getByPosition("slideshow")
				.then(function (result) {
					setSliders(result.data.sliders);
				});
		})();
	}, []);
	//------------------------------------------------------------------------------
	const [categorys, setCategorys] = useState([]);
	useEffect(function () {
		(async function () {
			await categoryservice.getShowHome()
				.then(function (result) {
					setCategorys(result.data.categorys);
				});
		})();
	}, []);
	//------------------------------------------------------------------------------
	const [brands, setBrands] = useState([]);
	useEffect(function () {
		(async function () {
			await brandservice.getShowHome()
				.then(function (result) {
					setBrands(result.data.brands);
				});
		})();
	}, []);
	return (
		<div className="">
			<section className="section-main padding-y">
				<main className="card">
					<div className="card-body">
						<div className="row">

							<div className="col-md d-none d-lg-block flex-grow-1">
								<aside className="special-home-right">
									<h6 className="bg-blue text-center text-white mb-0 p-2">Danh mục phổ biến</h6>
									{categorys.map(function (category, index) {
										return (
											<div key={index} className="card-banner border-bottom">
												<div className="py-3" width='80%'>
													<Link to={"/danh-muc-san-pham/" + category.slug} className="nav-link">
														<h6 className="card-title">{category.name}</h6>
													</Link>
													{/* <Link to="/danh-muc-san-pham/vong-tay-nam" className="btn btn-secondary btn-sm"> Xem thêm</Link> */}
												</div>
												<Link to={"/danh-muc-san-pham/" + category.slug}><img src={urlImage + "category/" + category.image} height="60" width="80" className="img-bg" /></Link>
											</div>
										);
									})}


									{/* <div className="card-banner border-bottom">
										<div className="py-3" width='80%'>
											<h6 className="card-title">Vòng tay nữ</h6>
											<Link to="/danh-muc-san-pham/vong-tay-nu" className="btn btn-secondary btn-sm"> Xem thêm</Link>
										</div>
										<Link to="/danh-muc-san-pham/vong-tay-nu"><img src={quangdac2} height="60" className="img-bg" /></Link>
									</div>

									<div className="card-banner border-bottom">
										<div className="py-3" width='80%'>
											<h6 className="card-title">Chuỗi trường</h6>
											<Link to="/danh-muc-san-pham/chuoi-truong" className="btn btn-secondary btn-sm"> Xem thêm</Link>
										</div>
										<Link to="/danh-muc-san-pham/chuoi-truong"><img src={quangdac3} height="60" className="img-bg" /></Link>
									</div> */}
								</aside>
							</div>
							<div className="col-md-9 col-xl-8 col-lg-8">

								<div className="slider mt-2">
									<div
										id="carouselExampleCaptions"
										className="carousel slide"
										data-bs-ride="carousel"
									>
										<div className="carousel-indicators">
											<button
												type="button"
												data-bs-target="#carouselExampleCaptions"
												data-bs-slide-to="0"
												className="active"
												aria-current="true"
												aria-label="Slide 1"
											></button>
											<button
												type="button"
												data-bs-target="#carouselExampleCaptions"
												data-bs-slide-to="1"
												aria-label="Slide 2"
											></button>
											<button
												type="button"
												data-bs-target="#carouselExampleCaptions"
												data-bs-slide-to="2"
												aria-label="Slide 3"
											></button>
										</div>
										<div className="carousel-inner">
											{sliders.map(function (slider, index) {
												if (index === 0) {
													return (
														<div className="carousel-item active ms-2">
															<img
																src={urlImage + "slider/" + slider.image}
																width="770px"
																height="400px"
																className="d-block w-80 "
																alt={slider.image}
															/>
														</div>
													);
												} else {
													return (
														<div className="carousel-item ms-2">
															<img
																src={urlImage + "slider/" + slider.image}
																width="770px"
																height="400px"
																className="d-block w-80 "
																alt={slider.image}
															/>
														</div>
													);
												}
											})}
										</div>
									</div>
								</div>
							</div>

							<aside className="col-lg col-md-2 flex-lg-grow-0">
								<nav className="nav-home-aside">
									<h6 className="title-category">Thương hiệu </h6>
									<ul className="menu-category">
										{brands.map(function (brand, index) {
											return (
												<li key={index}>
													<Link className="nav-link" to={"/thuong-hieu/" + brand.slug}>{brand.name}</Link>
													<Link to={"/thuong-hieu/" + brand.slug}><img src={urlImage + "brand/" + brand.image} height="60" width="80" className="img-bg ms-5" /></Link>
												</li>
											);
										})}

										{/* <li><Link to="/thuong-hieu/indo">Indonesia</Link>
											<Link to="/thuong-hieu/indo"> <img src={quangdac5} height="60" width="80" className="img-bg ms-5" /></Link>
										</li>
										<li><Link to="/thuong hieu/viet-nam">Việt Nam</Link>
											<Link to="/thuong-hieu/viet-nam"> <img src={quangdac6} height="60" width="80" className="img-bg ms-5" /></Link>
										</li> */}
									</ul>
								</nav>
							</aside>
						</div>

					</div>
				</main>

			</section>

			<section className="padding-bottom-sm">
				<ProductNew />
			</section>
			{/* <section className="padding-bottom-sm">
				<ProductSale />
			</section> */}
			{categorys.map(function (category, index) {
              return <ProductHome key={index} category={category} />
            }
            )}
			<section className="padding-bottom-sm">
				<PostNew />
			</section>


		</div >
	);
}
export default Home;

// function Home() {
//   const [categorys, setCategorys] = useState([]);
//   useEffect(function () {
//     (async function () {
//       await categoryservice.getCategoryByParentId(0).then(function (result) {
//         setCategorys(result.data.categorys);
//       });
//     })();
//   }, []);
//   return (
//     <section className="maincontent">
//       <Slider />
//       <div className="container my-4">
//         <div className="row">

//           <div className="col-md-2">
//             <ListCategory />
//             <ListBrand />
//             <ListPost />
//             <div className="text-center">
//                 <img src={quanam} alt="hinh" width='150px' height='400px' />
//             </div>
//             <div className="text-center mt-3">
//                 <img src={quangdac1} alt="hinh" width='150px' height='400px' />
//             </div>
//             <div className="text-center mt-3">
//                 <img src={quangdac2} alt="hinh" width='150px' height='400px' />
//             </div>
//             <div className="text-center mt-3">
//                 <img src={quangdac3} alt="hinh" width='150px' height='400px' />
//             </div>
//             <div className="text-center mt-3">
//                 <img src={quangdac4} alt="hinh" width='150px' height='400px' />
//             </div>
//             <div className="text-center mt-3">
//                 <img src={quangdac5} alt="hinh" width='150px' height='400px' />
//             </div>
//           </div>

//           <div className="col-md-10">
//             <ProductNew/>
//             {/* <ProductSale/> */}
//             {categorys.map(function (category, index) {
//               return <ProductHome key={index} category={category} />
//             }
//             )}

//             <PostNew />

//           </div>
//         </div>

//       </div>
//       {/* <Slider/>

//     {categorys.map(function(category,index){
//       return <ProductHome key={index} category={category}/>
//       }
//     )}
//     <PostNew/> */}

//     </section>);
// }

// export default Home;


//-----------------------------------------------------------------------------------------------------
{/* <section className="padding-bottom">
 <div className="card card-deal">
     <div className="col-heading content-body">
      <header className="section-heading">
       <h3 className="section-title">Deals and offers</h3>
       <p>Hygiene equipments</p>
     </header>
     <div className="timer">
       <div> <span className="num">04</span> <small>Days</small></div>
       <div> <span className="num">12</span> <small>Hours</small></div>
       <div> <span className="num">58</span> <small>Min</small></div>
       <div> <span className="num">02</span> <small>Sec</small></div>
     </div>
   </div> 
   <div className="row no-gutters items-wrap">
    <div className="col-md col-6">
     <figure className="card-product-grid card-sm">
      <a href="#" className="img-wrap"> 
       <img src="images/items/3.jpg"/> 
      </a>
      <div className="text-wrap p-3">
       	<a href="#" className="title">Summer clothes</a>
       	<span className="badge badge-danger"> -20% </span>
      </div>
   </figure>
 </div>
 <div className="col-md col-6">
   <figure className="card-product-grid card-sm">
    <a href="#" className="img-wrap"> 
     <img src="images/items/4.jpg"/> 
   </a>
   <div className="text-wrap p-3">
     <a href="#" className="title">Some category</a>
     <span className="badge badge-danger"> -5% </span>
   </div>
 </figure>
</div> 
<div className="col-md col-6">
 <figure className="card-product-grid card-sm">
  <a href="#" className="img-wrap"> 
   <img src="images/items/5.jpg"/> 
 </a>
 <div className="text-wrap p-3">
   <a href="#" className="title">Another category</a>
   <span className="badge badge-danger"> -20% </span>
 </div>
</figure>
</div> 
<div className="col-md col-6">
 <figure className="card-product-grid card-sm">
  <a href="#" className="img-wrap"> 
   <img src="images/items/6.jpg"/> 
 </a>
 <div className="text-wrap p-3">
   <a href="#" className="title">Home apparel</a>
   <span className="badge badge-danger"> -15% </span>
 </div>
</figure>
</div> 
<div className="col-md col-6">
 <figure className="card-product-grid card-sm">
  <a href="#" className="img-wrap"> 
   <img src="images/items/7.jpg"/> 
 </a>
 <div className="text-wrap p-3">
   <a href="#" className="title text-truncate">Smart watches</a>
   <span className="badge badge-danger"> -10% </span>
 </div>
</figure>
</div> 
</div>
</div>

</section>

<section className="padding-bottom">
<header className="section-heading heading-line">
	<h4 className="title-section text-uppercase">Apparel</h4>
</header>

<div className="card card-home-category">
<div className="row no-gutters">
	<div className="col-md-3">
	
	<div className="home-category-banner bg-light-orange">
		<h5 className="title">Best trending clothes only for summer</h5>
		<p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
		<a href="#" className="btn btn-outline-primary rounded-pill">Source now</a>
		<img src="images/items/2.jpg" className="img-bg"/>
	</div>

	</div> 
	<div className="col-md-9">
<ul className="row no-gutters bordered-cols">
	<li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
	<div className="card-body">
		<h6 className="title">Well made women clothes with trending collection  </h6>
		<img className="img-sm float-right" src="images/items/1.jpg"/> 
		<p className="text-muted"><i className="fa fa-map-marker-alt"></i> Guanjou, China</p>
	</div>
</a>
	</li>
	<li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
	<div className="card-body">
		<h6 className="title">Great clothes with trending collection  </h6>
		<img className="img-sm float-right" src="images/items/2.jpg"/> 
		<p className="text-muted"><i className="fa fa-map-marker-alt"></i> Beijing, China</p>
	</div>
</a>
	</li>
	<li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
	<div className="card-body">
		<h6 className="title">Demo clothes with sample collection  </h6>
		<img className="img-sm float-right" src="images/items/3.jpg"/> 
		<p className="text-muted"><i className="fa fa-map-marker-alt"></i> Tokyo, Japan</p>
	</div>
</a>
	</li>
	<li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
	<div className="card-body">
		<h6 className="title">Home and kitchen electronic  stuff collection  </h6>
		<img className="img-sm float-right" src="images/items/4.jpg"/> 
		<p className="text-muted"><i className="fa fa-map-marker-alt"></i> Tashkent, Uzb</p>
	</div>
</a>	
	</li>
	<li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
	<div className="card-body">
		<h6 className="title">Home and kitchen electronic  stuff collection  </h6>
		<img className="img-sm float-right" src="images/items/5.jpg"/> 
		<p className="text-muted"><i className="fa fa-map-marker-alt"></i> London, Britain</p>
	</div>
</a>
	</li>
	<li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
	<div className="card-body">
		<h6 className="title">Home and kitchen electronic  stuff collection  </h6>
		<img className="img-sm float-right" src="images/items/6.jpg"/> 
		<p className="text-muted"><i className="fa fa-map-marker-alt"></i> Guanjou, China</p>
	</div>
</a>
	</li>
	<li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
	<div className="card-body">
		<h6 className="title">Well made clothes with trending collection </h6>
		<img className="img-sm float-right" src="images/items/7.jpg"/> 
		<p className="text-muted"><i className="fa fa-map-marker-alt"></i> Hong Kong, China</p>

	</div>
</a>
	</li>
	<li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
	<div className="card-body">
		<h6 className="title">Home and kitchen interior  stuff collection   </h6>
		<img className="img-sm float-right" src="images/items/6.jpg"/> 
		<p className="text-muted"><i className="fa fa-map-marker-alt"></i> Guanjou, China</p>
	</div>
</a>
	</li>
</ul>
	</div> 
</div> 
</div> 
</section>

<section className="padding-bottom">
<header className="section-heading heading-line">
	<h4 className="title-section text-uppercase">Electronics</h4>
</header>

<div className="card card-home-category">
<div className="row no-gutters">
	<div className="col-md-3">
	
	<div className="home-category-banner bg-light-orange">
		<h5 className="title">Machinery items for manufacturers</h5>
		<p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
		<a href="#" className="btn btn-outline-primary rounded-pill">Source now</a>
		<img src="images/items/14.jpg" className="img-bg"/>
	</div>

	</div> 
	<div className="col-md-9">
<ul className="row no-gutters bordered-cols">
	<li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
	<div className="card-body">
		<h6 className="title">Well made electronic  stuff collection  </h6>
		<img className="img-sm float-right" src="images/items/7.jpg"/> 
		<p className="text-muted"><i className="fa fa-map-marker-alt"></i> Tokyo, Japan</p>
	</div>
</a>
	</li>
	<li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
	<div className="card-body">
		<h6 className="title">Another demo text for item stuff goes here  </h6>
		<img className="img-sm float-right" src="images/items/8.jpg"/> 
		<p className="text-muted"><i className="fa fa-map-marker-alt"></i> Hong Kong, China</p>
	</div>
</a>
	</li>
	<li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
	<div className="card-body">
		<h6 className="title">Home and kitchen electronic  stuff collection  </h6>
		<img className="img-sm float-right" src="images/items/9.jpg"/> 
		<p className="text-muted"><i className="fa fa-map-marker-alt"></i> Tashkent, Uzb</p>
	</div>
</a>
	</li>
	<li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
	<div className="card-body">
		<h6 className="title">Group of electronic  stuff collection  </h6>
		<img className="img-sm float-right" src="images/items/10.jpg"/> 
		<p className="text-muted"><i className="fa fa-map-marker-alt"></i> Guanjou, China</p>
	</div>
</a>	
	</li>
	<li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
	<div className="card-body">
		<h6 className="title">Home and kitchen electronic  stuff collection  </h6>
		<img className="img-sm float-right" src="images/items/11.jpg"/> 
		<p className="text-muted"><i className="fa fa-map-marker-alt"></i> Guanjou, China</p>
	</div>
</a>
	</li>
	<li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
	<div className="card-body">
		<h6 className="title">Home and kitchen electronic  stuff collection  </h6>
		<img className="img-sm float-right" src="images/items/12.jpg"/> 
		<p className="text-muted"><i className="fa fa-map-marker-alt"></i> Guanjou, China</p>
	</div>
</a>
	</li>
	<li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
	<div className="card-body">
		<h6 className="title">Home and kitchen electronic  stuff collection  </h6>
		<img className="img-sm float-right" src="images/items/1.jpg"/> 
		<p className="text-muted"><i className="fa fa-map-marker-alt"></i> Guanjou, China</p>

	</div>
</a>
	</li>
	<li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
	<div className="card-body">
		<h6 className="title">Home and kitchen electronic  stuff collection  </h6>
		<img className="img-sm float-right" src="images/items/2.jpg"/> 
		<p className="text-muted"><i className="fa fa-map-marker-alt"></i> Guanjou, China</p>
	</div>
</a>
	</li>
</ul>
	</div> 
</div> 
</div> 
</section>

<section className="padding-bottom">

<header className="section-heading heading-line">
	<h4 className="title-section text-uppercase">Request for Quotation</h4>
</header>

<div className="row">
	<div className="col-md-8">
<div className="card-banner banner-quote overlay-gradient" >
  <div className="card-img-overlay white">
    <h3 className="card-title">An easy way to send request to suppliers</h3>
    <p className="card-text" max-width='400px'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt.</p>
    <a href="" className="btn btn-primary rounded-pill">Learn more</a>
  </div>
</div>
	</div> 
	<div className="col-md-4">

<div className="card card-body">
	<h4 className="title py-3">One Request, Multiple Quotes</h4>
	<form>
		<div className="form-group">
			<input className="form-control" name="" placeholder="What are you looking for?" type="text"/>
		</div>
		<div className="form-group">
			<div className="input-group">
				<input className="form-control" placeholder="Quantity" name="" type="text"/>
				
				<select className="custom-select form-control">
					<option>Pieces</option>
					<option>Litres</option>
					<option>Tons</option>
					<option>Gramms</option>
				</select>
			</div>
		</div>
		<div className="form-group text-muted">
			<p>Select template type:</p>
			<label className="form-check form-check-inline">
			  <input className="form-check-input" type="checkbox" value="option1"/>
			   <span className="form-check-label">Request price</span>
			</label>
			<label className="form-check form-check-inline">
			  <input className="form-check-input" type="checkbox" value="option2"/>
			  <span className="form-check-label">Request a sample</span>
			</label>
		</div>
		<div className="form-group">
			<button className="btn btn-warning">Request for quote</button>
		</div>
	</form>
</div>

	</div> 
</div> 
</section> */}