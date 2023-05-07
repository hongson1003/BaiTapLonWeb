var list = [
    'Video bóng đá Man City - Leeds United: Kịch tính cuối trận, người hùng hóa tội đồ (Ngoại hạng Anh),Video bóng đá Man City - Leeds United: Kịch tính cuối trận, người hùng hóa tội đồ (Ngoại hạng Anh) (Vòng 35 Ngoại hạng Anh) Gundogan suýt chút nữa từ người hùng biến thành tội đồ của Man City khi bỏ lỡ cơ hội lập hat-trick trên chấm phạt đền.',
    'Video bóng đá Bournemouth - Chelsea: Bùng nổ cuối trận, chiến thắng quý giá (Ngoại hạng Anh) Chelsea bước vào trận đấu với Bournemouth bằng áp lực nặng nề. Đoàn quân của HLV Frank Lampard đang khao khát chiến thắng hơn bao giờ hết.' ,
    'Video bóng đá Tottenham - Crystal Palace: Kane khắc tên lịch sử, chiến quả gian khó (Ngoại hạng Anh), (Tottenham Hotspur - Crystal Palace, vòng 35 giải Ngoại hạng Anh) Khoảnh khắc chớp thời cơ ở phút đá bù giờ của Harry Kane đã tạo nên sự khác biệt trong trận derby thủ đô London.',
    'Video bóng đá Wolverhampton - Aston Villa: Khởi đầu như mơ, chạm mốc an toàn (Ngoại hạng Anh) (Vòng 35 Ngoại hạng Anh) Wolverhampton tạo ra khác biệt lớn trước Aston Villa dù thi đấu lép vế so với đối thủ.',
    'Tường thuật bóng đá Liverpool - Brentford: Nỗ lực bất thành (Ngoại hạng Anh) (Hết giờ) (Vòng 35 Ngoại hạng Anh) Brentford chẳng thể tìm được đường vào khung thành Liverpool dù nỗ lực rất nhiều.',
    'Tường thuật bóng đá Bournemouth - Chelsea: Felix ấn định chiến thắng (Hết giờ) (Bournemouth - Chelsea, Ngoại hạng Anh) Các pha lập công quý như vàng của Badiashile và Felix giúp Chelsea có 2 bàn cuối trận. Nhờ vậy, đội bóng Tây London giành chiến thắng 3-1.',
    'Messi xin lỗi PSG tránh "vết xe đổ" Ronaldo, MU hưởng lợi nhờ Arsenal đấu Newcastle (Clip 1 phút Bóng đá 24H) Messi hành động khôn ngoan nhắm tránh hệ quả khôn lường, MU chờ đợi Newcastle sảy chân ở đại chiến với Arsenal.'

];
chuChay();
setInterval(function(){
    chuChay();
}, 10000);
function chuChay(){
    var text = document.getElementById('text');
    var random = Math.floor(Math.random() * 10) -3;
    if (random<0)
        random = 0;
    text.innerText = list[random];
}