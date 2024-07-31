import { useEffect } from "react";

function ShippingPolicy() {
    useEffect(() => {
		document.title = 'Chính sách vận chuyển';
	  }, []);
    return ( 
        <section className="container">
            <h2 className="text-danger mt-2">༺CHÍNH SÁCH VẬN CHUYỂN༻</h2><br/>
            <p>- Trầm hương Đắc Lợi Giao hàng và thanh toán tận nơi trên phạm vi toàn quốc 
                ( Nhận hàng mới thanh toán tiền )
            </p>
            <p>- Sau khi bạn đặt hàng, trong vòng 24 giờ chúng tôi sẽ liên lạc lại để kiểm tra 
                thông tin và thỏa thuận thêm những điều khoản khác có liên quan.
            </p>
            <p>- Một số trường hợp đặc biệt như giá trị đơn hàng quá lớn & thời gian giao hàng vào buổi tối, 
                địa chỉ giao hàng trong ngõ hoặc có thể dẫn đến nguy hiểm. 
                Chúng tôi sẽ chủ động liên lạc với quý khách để thống nhất lại thời gian giao hàng cụ thể.
            </p>
            <p>- Trong trường hợp giao hàng chậm trễ mà không báo trước, quý khách có thể từ chối nhận 
                hàng và chúng tôi sẽ hoàn trả toàn bộ số tiền mà quý khách trả trước (nếu có) trong vòng 7 ngày.
            </p>
            <p>- Trầm hương Đắc Lợi cam kết tất cả hàng hóa gởi đến quý khách đều là hàng chuẩn 
             100% mang thương hiệu độc quyền tại Trầm hương Đắc Lợi.
            </p>
            <div>
                <p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    
                </p>
            </div>
        </section> 
    );
}

export default ShippingPolicy;