import { Link } from "react-router-dom";
import bocongthuong from "../../assets/images/bocongthuong.jpg"

function Footer(){
    return(
        <section className="footer bg-secondary mt-2">
            <div className="row container-fluid text-white">
                <div className="col-md-3 mt-5">
                    <h6>༺TRẦM HƯƠNG ĐẮC LỢI༻</h6>
                    <p>
                        ✈ 40/2 đường 147, Phường Phước Long B, Thành Phố Thủ Đức, TPHCM
                    </p>
                    <p>☎ 0932293748</p>
                    <p>✉ Nguyentranvinhloi12@gmail.com</p>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2 mt-5"> 
                    <h6>༺Liên kết༻</h6>
                    <Link className="nav-link text-white" to="/gioi-thieu" >Giới thiệu</Link>
                    <Link className="nav-link text-white" to="/danh-muc-san-pham/vong-tay-nam" >Vòng tay nam</Link>
                    <Link className="nav-link text-white" to="/danh-muc-san-pham/vong-tay-nam" >Vòng tay nữ</Link>
                    <Link className="nav-link text-white" to="/danh-muc-san-pham/vong-chuoi-truong" >Chuỗi trường</Link>
                    <Link className="nav-link text-white" to="/lien-he" >Liên hệ</Link>
                </div>
                <div className="col-md-3 mt-5">
                    <h6>༺Chính sách༻</h6>
                    <Link className="nav-link text-white" to="/chinh-sach-mua-hang" >Chính sách mua hàng</Link>
                    <Link className="nav-link text-white" to="/chinh-sach-bao-hanh" >Chính sách bảo hành</Link>
                    <Link className="nav-link text-white" to="/chinh-sach-van-chuyen" >Chính sách vận chuyển</Link>
                    <Link className="nav-link text-white" to="/chinh-sach-doi-tra" >Chính sách đổi trả</Link>
                </div>
                <div className="col-md-3 mt-5">
                    
                    <img src={bocongthuong}
                    width="200px"
                    height="20px"
                    className="img-fluiddd "
                    alt="hinh"/>
                </div>
            </div>

            <div className="container-fluid text-error text-center p-3">
            ༺Thiết kế bởi: Nguyễn Trần Vĩnh Lợi -- Mã sinh viên: 2121110302༻
            </div>
        </section>
        );
    }
export default Footer;