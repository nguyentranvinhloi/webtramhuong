import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-solid-svg-icons'

const Content=()=>(
	<section className="section-content padding-y bg-light">
	<div className="card mx-auto" style={{width:520, margintop:40}}>
      <article className="card-body">
		<header className="mb-4"><h4 className="card-title text-danger">Đăng ký</h4></header>
		
			
		</article>
    </div> 
    <p className="text-center mt-4">Bạn đã có tài khoản? <Link to="/login" className="text-danger">Đăng nhập</Link></p>

</section>
);
export default Content;


{/* <form>
				<div className="form-row">
					<div className="col form-group">
						<label>Họ tên</label>
					  	<input type="text" className="form-control" placeholder=""/>
					</div> 
					
				</div>
				<div className="form-group">
					<label>Email</label>
					<input type="email" className="form-control" placeholder=""/>
					<small className="form-text text-muted"></small>
				</div> 
				<div className="form-group">
					<label className="custom-control custom-radio custom-control-inline me-3">
					  <input className="custom-control-input" type="radio" name="gender" value="option1"/>
					  <span className="custom-control-label"> Nam </span>
					</label>
					<label className="custom-control custom-radio custom-control-inline">
					  <input className="custom-control-input" type="radio" name="gender" value="option2"/>
					  <span className="custom-control-label"> Nữ </span>
					</label>
				</div>
				<div className="form-row">
					<div className="form-group col-md-6">
					  <label>Thành phố</label>
					  <input type="text" className="form-control " placeholder="Thành phố Hồ Chí Minh"/>
					</div> 
					<div className="form-group col-md-6">
					  <label>Quận</label>
					  <select id="inputState" className="form-control">
					    <option> Chọn...</option>
					      <option>Quận 1</option>
					      <option>Quận 3</option>
						  <option>Quận 4</option>
						  <option>Quận 5</option>
						  <option>Quận 6</option>
						  <option>Quận 7</option>
						  <option>Quận 8</option>
						  <option>Quận 10</option>
						  <option>Quận 11</option>
						  <option>Quận 12</option>
						  <option>Quận Bình Thạnh</option>
						  <option>Quận Gò Vấp</option>
						  <option>Quận Tân Bình</option>
						  <option>Quận Tân Phú</option>
						  <option>Quận Bình Tân</option>
						  <option>Huyện Củ Chi</option>
						  <option>Huyện Cần Giờ</option>
						  <option>Huyện Bình Chánh</option>
						  <option>Huyện Nhà Bè</option>
					      <option selected="">Thành phố Thủ Đức</option>
					  </select>
					</div>
				</div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label>Mật khẩu</label>
					    <input className="form-control" type="password"/>
					</div>
					<div className="form-group col-md-6">
						<label>Nhập lại mật khuẩu</label>
					    <input className="form-control" type="password"/>
					</div> 
				</div>
			    <div className="form-group">
			        <button type="submit" className="btn btn-primary btn-block"> Đăng ký  </button>
			    </div>       
			    <div className="form-group"> 
		            <label className="custom-control custom-checkbox "> <input type="checkbox" 
					className="custom-control-input me-2" value="option3"/> 
					Tôi đồng ý với <a href="#">các điều khoản và điều kiện</a>  </label>
		        </div>           
			</form> */}