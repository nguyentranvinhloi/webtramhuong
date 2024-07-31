import { useEffect } from "react";

function PurchasePolicy() {
    useEffect(() => {
		document.title = 'Chính sách mua hàng';
	  }, []);
    return ( 
        <section className="container">
            <h2 className="text-danger mt-2">༺CHÍNH SÁCH MUA HÀNG༻</h2><br/>
            <h4>Ưu đãi</h4>
            <p>
                - Khách sỉ lấy đơn hàng lần đầu từ 10 sản phẩm sẽ được tính giá sỉ giá sỉ sẽ có giá cho từng sản phẩm vui lòng chát với nhân viên tư vấn để hỏi giá sỉ 
                (lưu ý: đơn hàng sỉ khách không thử từng sản phẩm như khách mua lẻ nhưng có thể thử 1 hoặc 2 sản phẩm)
            </p>
            <p>
                - Đồng giảm 10% cho tất cả sản phẩm khi mua trực tiếp tai cửa hàng; 5% khi mua online.
            </p>
            <h4>Hình thức thanh toán</h4>
            <p>
            - Quý khách có thể thanh toán tiền mặt trực tiếp khi mua hàng tại cửa hàng TRẦM HƯƠNG Đắc Lợi tại địa chỉ:<br/>
            👉 HCM: 40/2 đường 147, Phường Phước Long B, Thành Phố Thủ Đức, TP Hồ Chí Minh(từ 8h đến 21h)
            </p>
            <p>
            - Thanh toán tiền mặt khi nhận hàng (C.O.D)
            </p>
            
           <h6>- Chuyển khoản qua ngân hàng:</h6>
           <p>
           Ngân hàng MB; <br/>
           Tên chủ tài khoản: NGUYEN TRAN VINH LOI<br/>
           Số tài khoản: 9744678765
            </p>
            <p>
            Ghi chú: Sau khi chuyển khoản, quý khách vui lòng thông báo cho chúng tôi việc chuyển tiền và số tài khoản của quý khách 
            (bằng điện thoại, email, facebook …) để thuận tiện trong việc kiểm tra.
            </p>
        </section>  
    );
}

export default PurchasePolicy;