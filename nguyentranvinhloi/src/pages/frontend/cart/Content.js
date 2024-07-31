import React from 'react';
import item1 from '../../../assets/images/lanphai.jpg'
import item2 from '../../../assets/images/cuctrai.jpg'

const Content=()=>(
	<section className="section-content padding-y bg-light">
	<div className="container">
	
	<div className="row">
		<main className="col-md-9">
	<div className="card">
	
	<table className="table table-borderless table-shopping-cart">
	<thead className="text-muted">
	<tr className="small text-uppercase">
	  <th scope="col">Sản phẩm</th>
	  <th scope="col" width="120">Số lượng</th>
	  <th scope="col" width="120">Giá</th>
	  <th scope="col" className="text-right" width="200"> </th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>
			<figure className="itemside">
				<div className="aside"><img src={item1} className="img" width="100px" height="100px"/></div>
				<figcaption className="info">
					<a href="#" className="title text-dark">Vòng tay trầm hương bọc vàng 18k VT137</a>
					<p className="text-muted small">Size: 16li</p>
				</figcaption>
			</figure>
		</td>
		<td> 
			<select className="form-control">
				<option>1</option>
				<option>2</option>	
				<option>3</option>	
				<option>4</option>	
			</select> 
		</td>
		<td> 
			<div className="price-wrap"> 
				<var className="price">17.000.000vnđ</var> 
			</div>
		</td>
		<td className="text-right"> 
		<a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light" data-toggle="tooltip"> <i className="fa fa-heart"></i></a> 
		<a href="" className="btn btn-light"> Xóa</a>
		</td>
	</tr>
	<tr>
		<td>
			<figure className="itemside">
				<div className="aside"><img src={item2} className="img-sm" width="100px" height="100px"/></div>
				<figcaption className="info">
					<a href="#" className="title text-dark">Vòng trầm hương 6ly 108 hạt CH6</a>
					<p className="text-muted small">Size: 14li</p>
				</figcaption>
			</figure>
		</td>
		<td> 
			<select className="form-control">
				<option>1</option>
				<option>2</option>	
				<option>3</option>	
				<option>4</option>	
			</select> 
		</td>
		<td> 
			<div className="price-wrap"> 
				<var className="price">10.000.000vnđ</var> 
			</div> 
		</td>
		<td className="text-right"> 
		<a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light" data-toggle="tooltip"> <i className="fa fa-heart"></i></a> 
		<a href="" className="btn btn-light btn-round"> Xóa</a>
		</td>
	</tr>
	<tr>
		<td>
			<figure className="itemside">
				<div className="aside"><img src={item1} className="img-sm" width="100px" height="100px"/></div>
				<figcaption className="info">
					<a href="#" className="title text-dark">Vòng tay trầm hương tỳ hưu VT150</a>
					<p className="small text-muted">Size: 18li</p>
				</figcaption>
			</figure>
		</td>
		<td> 
			<select className="form-control">
				<option>1</option>
				<option>2</option>	
				<option>3</option>	
			</select> 
		</td>
		<td> 
			<div className="price-wrap"> 
				<var className="price">520.000vnđ</var> 
			</div>
		</td>
		<td className="text-right"> 
			<a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light" data-toggle="tooltip"> <i className="fa fa-heart"></i></a> 
			<a href="" className="btn btn-light btn-round"> Xóa</a>
		</td>
	</tr>
	</tbody>
	</table>
	
	<div className="card-body border-top">
		<a href="#" className="btn btn-primary float-md-right">Mua hàng<i className="fa fa-chevron-right"></i> </a>
		<a href="#" className="btn btn-light"> <i className="fa fa-chevron-left"></i> Tiếp tục mua sắm </a>
	</div>	
	</div>
	
	<div className="alert alert-success mt-3">
		<p className="icontext"><i className="icon text-success fa fa-truck"></i> Giao hàng miễn phí trong vòng 1-2 tuần</p>
	</div>
	
		</main>
		<aside className="col-md-3">
			<div className="card mb-3">
				<div className="card-body">
				<form>
					<div className="form-group">
						<label>Mã giảm Giá</label>
						<div className="input-group">
							<input type="text" className="form-control" name="" placeholder="Mã giảm giá"/>
							<span className="input-group-append"> 
								<button className="btn btn-primary">Chấp nhận</button>
							</span>
						</div>
					</div>
				</form>
				</div> 
			</div> 
			<div className="card">
				<div className="card-body">
						<dl className="dlist-align">
						  <dt>Tổng tiền:</dt>
						  <dd className="text-right text-danger">27.530.000vnđ</dd>
						</dl>
						
						
						<p className="text-center mb-3">
							<img src={item2} height="26"/>
						</p>
						
				</div>
			</div> 
		</aside> 
	</div>
	
	</div>
	</section>
);
export default Content;