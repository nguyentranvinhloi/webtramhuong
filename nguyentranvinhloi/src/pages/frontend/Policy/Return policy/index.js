import { useEffect } from "react";

function ReturnPolicy() {
    useEffect(() => {
		document.title = 'Chính sách đổi trả';
	  }, []);
    return ( 
        <section className="container">
            <h2 className="text-danger mt-2">༺CHÍNH SÁCH ĐỔI TRẢ༻</h2><br/>
            <p>
            Như đã cam kết cùng với khách hàng, Trầm hương Đắc Lợi thực hiện chính sách đổi trả thông thoáng nhằm tạo 
            điều kiện cho thật nhiều khách hàng có thể tiếp cận, mua và sử dụng váy đầm của Trầm hương Đắc Lợi. 
            Quý khách hàng vui lòng đọc các Chính Sách Đổi Trả hàng trước khi quyết định đổi hoặc trả hàng lại 
            cho Trầm hương Đắc Lợi nhé!
            </p>
            <p>
            -Hiện Trầm hương Đắc Lợi đang chọn đối tác vận chuyển là VN Post ( Bưu Chính Việt Nam) nên tình trạng giao hàng 
            của tất cả các đơn hàng đi tỉnh sẽ được kiểm tra qua hệ thống của Bưu Điện Việt Nam. Vì vậy để 
            việc đổi trả được diễn ra nhanh chóng Trầm hương Đắc Lợi khuyến cáo khách hàng sử dụng dịch vụ vận chuyển của 
            đơn vị này. 
            </p>
            <p>
            - Đối với khách hàng tại nội thành Hồ Chí Minh, khách hàng sẽ được nhân viên chuyển Fax 
            ( Một đối tác khác của Trầm hương Đắc Lợi) sẽ mang hàng đổi đến và thu sản phẩm được đổi về. 
            </p>
            <p>
            - Quý khách hàng vui lòng chịu phí vận chuyển cho quá trình đổi trả, trong trường hợp sản phẩm 
            Trầm hương Đắc Lợi giao không đúng như đơn hàng đã đặt hoặc sản phẩm bị lỗi, Trầm hương Đắc Lợi sẽ đổi hàng mới lại cho khách
             hàng hoàn toàn Miễn Phí. (Nếu còn hàng)
            </p>
            <p>
            - Quý khách mang hàng muốn đổi ra bưu điện gửi sản phẩm muốn đổi về địa chỉ kho hàng Hồ Chí Minh : 
            40/2 đường 147, Phường Phước Long B, Thành Phố Thủ Đức, TP Hồ Chí Minh<br/>
            ☎ ĐT: 028 71086717 - 0908 766 717 - 0902 549 717 <br/>
            Lưu ý: Chọn phương thức vận chuyển là ship thường cho chi phí rẻ
            </p>
        </section> 
    );
}

export default ReturnPolicy;