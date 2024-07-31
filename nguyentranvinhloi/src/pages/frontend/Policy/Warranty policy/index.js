import { useEffect } from "react";

function WarrantyPolicy() {
    useEffect(() => {
		document.title = 'Chính sách bảo hành';
	  }, []);
    return ( 
    <section className="container">
        <h2 className="text-danger mt-2">༺CHÍNH SÁCH BẢO HÀNH༻</h2><br/>
        <h3>Điều kiện bảo hành</h3><br/>
        <p>- Các điều khoản bảo hành này được áp dụng cho chuỗi trầm mới do Trầm hương Đắc Lợi 
            cung cấp và chỉ có giá trị tại Việt Nam.
        </p>

        <p>- Sản phẩm còn trong thời gian bảo hành tại thời điểm bảo hành.
        </p>
        <p>- Sản phẩm còn nguyên vẹn, nguyên tem, không có dấu hiệu cạo sửa hay tẩy xóa.
        </p>
        <p>- Lỗi xác định bảo hành là lỗi kỹ thuật/thẩm mỹ do xưởng và theo quy định của shop.
        </p>
        <p>- Thời hạn bảo hành tùy thuộc vào từng loại sản phẩm, Qúy khách sẽ được trao đổi khi mua hàng.
        </p>
        <p>- Mọi thắc mắc xin vui lòng liên hệ tại cửa hàng hoặc qua số điện thoại 0932293748.
        </p>
        <br/>
        <br/>
        <br/>
        <br/>

    </section>
    );
}

export default WarrantyPolicy;