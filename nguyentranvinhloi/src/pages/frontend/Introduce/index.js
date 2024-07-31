import { useEffect } from "react";

function Introduce() {
    useEffect(() => {
		document.title = 'Giới thiệu';
	  }, []);
    return ( 
        <section className="container mb-5">
            <h2 className="text-danger mt-3">༺GIỚI THIỆU༻</h2><br/>
            <div className="row">
                <div className="content">
                    <p>
                    Sau 49 ngày thiền định, khi sao mai vừa lên, thái tử Tất đạt đa giác ngộ đại đạo và dưới cội bồ đề 
                    thuyết bài pháp đầu tiên cho 5 anh em Kiều Trần Như. Tam thiên đại thiên thế giới chư Phật tập hợp. 
                    Chư thiên trỗi nhạc rải hoa cúng dường, ca ngợi công đức. Sự giác ngộ của Thái tử Tất Đạt Đa 
                    như vầng mặt nguyệt tỏ sáng trong đêm tối. Từng lời như trận mưa pháp tưới mát quần sanh, 
                    như mây báu trải khắp mười phương, không chỗ phân biệt. 
                    Người đời sau nhớ ơn Phật, ghi nhớ công đức, tạo tôn tượng Người để chiêm bái,
                    phát tâm kiên trì tinh tấn, tỉnh giác trên con đường đời, đường đạo. 
                    </p>
                </div>
                <div>
                    <p>
                    TRẦM HƯƠNG ĐẮC LỢI được thành lập với khởi nguồn phước lành biết đến với Phật giáo. 
                    Có duyên đến với Phật giáo, có thể phát tâm Bồ đề, cảm thọ được niềm an lạc âu cũng là 
                    duyên lành khó gặp, thế nên TRẦM HƯƠNG ĐẮC LỢI một lòng muốn đem cái tâm an lạc ấy trải rộng 
                    tới muôn trùng để Người người an lạc, Xứ xứ đều vui!
                    </p>
                </div>
                <div>
                    <p>
                    Đến TRẦM HƯƠNG ĐẮC LỢI, Qúy vị sẽ được chiêm ngưỡng không gian phước báu nhiệm màu, nơi những tác phẩm 
                    nghệ thuật mang đậm màu sắc Phật giáo Đông phương, những vòng gỗ trầm hương giá trị, là tinh hoa của đất trời. Ở đó, ta thấy tinh hoa của trời đất là đất, là đá, là ngọc, 
                    là ánh sáng, là không khí và cả giọt mồ hôi của người nghệ nhân trong giây phút được thể nhập vào Chân Như.
                    </p>
                </div>
                <div>
                    <p>
                    Đến với TRẦM HƯƠNG ĐẮC LỢI, Quý vị có thể chọn sản phẩm trầm hương, để dùng hay 
                    dành tặng cho những đạo hữu đồng tâm. TRẦM HƯƠNG ĐẮC LỢI là nơi gieo mối duyên lành với Phật giáo, 
                    hay chỉ đơn giản là chốn phước lành, nơi gặp những người tri kỉ, cùng uống một tách trà, cùng mỉm cười 
                    với Phật.
                    </p>
                </div>
                <div>
                    <p>
                    TRẦM HƯƠNG ĐẮC LỢI nguyện là “Nơi tôn trí đức tướng vi diệu của chư Phật, chư Bồ tát và những tác phẩm nghệ thuật về trà. 
                    Nơi gieo mầm cho các vị Bồ tát tương lai, nơi kiến tạo nên các tác phẩm và không gian nghệ thuật Phật giáo, giúp kết nối con người
                    với đời sống tinh thần, sự an lạc và giác ngộ."
                    </p>
                </div>
                <div>
                    <h3 className="text-danger mt-3 mb-3">༺Chi tiết liên hệ༻</h3>
                    <div>
                        <h4>༺Trầm hương Đắc Lợi༻</h4>
                        <p>Địa chỉ: 40/2 đường 147, Phường Phước Long B, Thành Phố Thủ Đức, TP Hồ Chí Minh</p>
                        <p>Email: Nguyentranvinhloi12@gmail.com</p>
                        <p>Số điện thoại: 0932293748</p>
                        <p>Facebook: Nguyễn Vĩnh Lợi</p>
                        <p>Instagram: decloi_03</p>
                        <p>Youtube: Nguyễn Vĩnh Lợi</p>
                        <p>Zalo: Đắc Lợi</p>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Introduce;