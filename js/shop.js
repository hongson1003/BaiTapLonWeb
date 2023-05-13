var list = [
    {
        image: '../image/capherangxay.jpg',
        name: 'Cà phê rang xay 1',
        coin: '120,000 đ',
        source: 'Uc',
        status: 'Discount'
    },
    {
        image: '../image/capherangxay2.jpg',
        name: 'Cà phê rang xay 2',
        coin: '150,000 đ',
        source: 'Uc',
        status: 'New'
    },
    {
        image: '../image/imga6a.jpg',
        name: 'Culi coffee',
        coin: '320,000 đ',
        source: 'Viet Nam',
        status: 'Best Sheller'
    },
    {
        image: '../image/imga5a.jpg',
        name: 'Cà phê Moka',
        coin: '720,000 đ',
        source: 'Phap',
        status: 'New'
    },
    {
        image: '../image/imga7a.jpg',
        name: 'Cà phê Cherry',
        coin: '550,000 đ',
        source: 'Uc',
        status: ''
    },
    {
        image: '../image/imga4a.jpg',
        name: 'Rebusta coffee',
        coin: '250,000 đ',
        source: 'Trung Nguyen',
        status: ''
    },
    {
        image: '../image/img9a1.jpg',
        name: 'Cà phê con chồn',
        coin: '850,000 đ',
        source: 'Uc',
        status: 'Best Sheller'
    },
    {
        image: '../image/g7.jpg',
        name: 'G7 Trung Nguyên',
        coin: '100,000 đ',
        source: 'Viet Nam',
        status: 'New'
    },
    {
        image: '../image/sangtao8.jpg',
        name: 'Trung Nguyên',
        coin: '399,000 đ',
        source: 'Trung Nguyen',
        status: ''
    },
    {
        image: '../image/super.png',
        name: 'Super coffee',
        coin: '399,000 đ',
        source: 'Uc',
        status: ''
    },
    {
        image: '../image/arabica.jpg',
        name: 'Arabica',
        coin: '999,000 đ',
        source: 'Phap',
        status: 'New'
    },
    {
        image: '../image/rangxoay3.jpg',
        name: 'Rang xoay 3',
        coin: '429,000 đ',
        source: 'Uc',
        status: 'New'
    },
    {
        image: '../image/rangxoay3.jpg',
        name: 'Rang xoay 3',
        coin: '429,000 đ',
        source: 'Uc',
        status: 'Discount'
    },
    {
        image: '../image/maccca.jpg',
        name: 'Macca Coffee',
        coin: '129,000 đ',
        source: 'Trung Nguyen',
        status: ''
    },
    {
        image: '../image/dakha.jpg',
        name: 'Dakha Daklak',
        coin: '529,000 đ',
        source: 'Viet Nam',
        status: 'New'
    },
    {
        image: '../image/peets.png',
        name: 'Peets',
        coin: '1229,000 đ',
        source: 'Phap',
        status: 'Discount'
    },
    
];
// gán id
for (var i=0;i<list.length;i++)
    list[i].id = i+1;
// ==================


function renderProduct(myproducts, object){
    var cart = document.createElement('div');
    cart.innerHTML = `
        <div class="card-body mycardbody">
            <img src="${object.image}" alt="">
        </div>
        <div class="card-footer d-flex align-items-center flex-column">
            <p class="name">${object.name}</p>
            <p class="coin">${object.coin}</p>
        </div>
        <div class="item-new ${object.status}">
            <p>${object.status}</p>
        </div>
    `;
    cart.style.width = '272px';
    cart.style.height = '320px';
    cart.classList.add('card');
    cart.classList.add('coffee-products-cart');
    cart.id = `product-${object.id}`;
    var backgroundImageValue = "linear-gradient(0, #c6ffdd, #fbd786, #f7797d)";

    cart.style.backgroundImage = backgroundImageValue
    cart.addEventListener('mouseover', function(){
        var strs = '';
        if (object.status=='New')
            strs = 'New--red';
        else if(object.status=='Best Sheller')
            strs = 'Sheller--blue';
        else if (object.status == 'Discount')
            strs = 'Discount--tim';
        else
            strs = 'none';
        cart.style.transition = '0.5s';

        cart.classList.add(strs);
})

    cart.addEventListener('mouseout', function(){
        var strs = '';
        if (object.status=='New')
            strs = 'New--red';
        else if(object.status=='Best Sheller')
            strs = 'Sheller--blue';
        else if (object.status == 'Discount')
            strs = 'Discount--tim';
         else
            strs = 'none';

        cart.style.transition = '0.5s';
        cart.classList.remove(strs);
    })
    myproducts.appendChild(cart);
    detailProduct();
}

function inProducts(){
    var myproducts = document.getElementById('listproducts');

    var i=0
    for (i;i<3;i++)
        renderProduct(myproducts, list[i]);


// bat su kien voi button xem them
var xemThem = document.getElementById('btnxemthem');
xemThem.addEventListener('click', function(){
    var n = i+3;
    for (i;i< n && i< list.length;i++)
        renderProduct(myproducts, list[i]);
    if (i>=list.length){
        xemThem.style.display = 'none';
    }
});
    
}
inProducts();

// chuc nang liet ke toan bo san pham theo select
var select = document.getElementById('myselect');
select.addEventListener('change', function(){
    var value = this.value;

    var myproducts = document.getElementById('listproducts');
    myproducts.innerHTML = '';
    console.log(value)
    for (var i=0;i<list.length;i++){
        if (list[i].status == value || list[i].source == value)
            renderProduct(myproducts, list[i]);
    }   
})
var listContent = [
    {
            //caffe rang xay 1
         ul: `
            <li>Màu đậm, vị cà phê đậm, đắng mạnh, nguyên chất 100%</li>
            <li>Màu nâu đỏ, vị cà phê mộc mạc, đắng vừa, nguyên chất 100%</li>
            <li>Màu nâu đỏ, mùi thơm quyến rũ, nguyên chất 100%</li>
            <li>Màu nâu đậm, vị cà phê đậm, thơm vừa, đắng dịu, nguyên chất 100%</li>
            <li>Vị thanh toát, mùi thơm tương tự như cà phê pha máy, chua nhẹ, hậu giữ lại lâu trong miệng</li>
            <li>Chuyên dùng để pha cafe sữa vị béo thơm nồng quyến rũ đặc trưng</li>
        `
    },
    {
        // cà phê rang xay 2
        ul: `
            
            <li>Vị đắng gắt, hàm lượng caffeine cao, nước màu đen sóng sánh</li>
            <li> Thông thường một trái cà phê đều có 2 nhân (2 hạt cà phê) và hạt cà phê có hình dạng dẹp, nhưng do đột biến mà cây cà phê cho quả cà phê chỉ có 1 nhân (1 hạt)</li>
            <li>Màu nâu đậm, vị cà phê đậm, thơm vừa, đắng dịu, nguyên chất 100%</li>
            <li>Vị thanh toát, mùi thơm tương tự như cà phê pha máy, chua nhẹ, hậu giữ lại lâu trong miệng</li>
            <li>Chuyên dùng để pha cafe sữa vị béo thơm nồng quyến rũ đặc trưng</li>
        `
    },
    {
        //culi caffle
        ul: `
            <li>Culi là những hạt Cà phê no tròn (thường gọi là cafe Bi) và trong một trái chỉ có duy nhất một hạt</li>
            <li>Vị đắng gắt, hàm lượng caffeine cao, nước màu đen sóng sánh. Thông thường một trái cà phê đều có 2 nhân (2 hạt cà phê) và hạt cà phê có hình dạng dẹp</li>
            <li>, nhưng do đột biến mà cây cà phê cho quả cà phê chỉ có 1 nhân (1 hạt).</li>
            <li>Hương vị của cà phê Culi</li>
            <li>Độc đáo, tinh tế, có hậu vị, có chiều sâu, có “cá tính”, có nét riêng… nổi bật hơn hẳn so với các hạt cà phê thông thường khác</li>
            <li>Do sản lượng hiếm hoi, và nhất là do hương vị quý giá, độc đáo, nên cà phê Culi được những tín đồ cà phê gọi là hạt “trân châu” trong vương quốc cà phê</li>
            <li>Cà phê đột biến Culi tương đối hiếm, chiếm tỷ lệ khoảng 2 - 4% trong vụ mùa.</li>
        `
    },
    {
        // cà phê moka
        ul: `
            <li>Cà phê Moka là một chủng loại thuộc giống Arabica. Moka cùng họ với những loại cà phê nổi tiếng như: Typica, Bourbon, Icatu hay Mundo Novo</li>
            <li>Cafe Moka là một giống cây khó trồng, dễ bị sâu bệnh và mất rất nhiều công chăm sóc</li>
            <li>Vì vậy nó cũng có những đặc điểm riêng biệt về hình dạng cây, quả và hương vị đặc trưng.</li>
            <li>Những ly cafe Moka nguyên nhất 100% sẽ mang theo mình vị đắng nhẹ, xem lẫn trong đó là một chút chua thanh và vị béo của phần dầu bên trong hạt cà phê.</li>
            <li>Khi uống, cái đắng lan tỏa trong miệng rồi xuống cuống họng, nhưng chỉ vài giây sau mùi hương nồng nàn và vị ngọt mới xuất hiện.</li>
            <li>VCó 2 cách để pha một ly cafe Moka ngon là sử dụng cà phê nguyên chất hoặc có thể phối trộn với một số loại khác.</li>
            <li>Mỗi cách pha đều có những hương vị đặc trưng riêng nhưng vị của cafe Moka vẫn là chủ đạo</li>
        `
    },
    { 
        // cà phê chery
        ul: `
            <li>Cà phê Cherry hay cà phê mít thuộc họ Thiến Thảo và có tên khoa học là Coffea Liberica hay Coffea Excelsa.</li>
            <li> Loại cà phê này có thể sinh trưởng và phát triển trong nhiều loại khí hậu và cũng có khả năng kháng sâu bệnh rất tốt.</li>
            <li>Cà phê Cherry khi ở thị trường Việt Nam không được trồng nhiều tại các vùng đại ngàn như Buôn Ma Thuột hay Đắk Lắk mà lại được trồng chủ yếu tại Kon Tum, Gia Lai và Nghệ An.</li>
            <li>Hương vị của cà phê Cherry có những nét đặc trưng rất riêng mà không thể kiếm tìm ở bất kỳ loại cà phê nào khác.</li>
            <li>Hương thơm thoang thoảng tựa hương mít hòa quyện cùng vị chua nhè nhẹ mang tới cho người uống một cảm giác khó miêu tả bằng lời.</li>
            <li>Phái nữ thường bị thu hút bởi cafe Cherry bởi lẽ nó không đắng gắt mà chỉ nhè nhẹ, quyến rũ.</li>
        `
    },
    {
        // Rebusta coffee
        ul: `
            <li>Robusta hay còn gọi là cà phê vối thuộc giống Coffea canephora, cùng với C.Arabica đây là một trong hai loại cà phê được trồng thương mại chủ yếu trên thế giới.</li>
            <li>Robusta còn là giống chủ lực của ngành cà phê Việt Nam, góp phần giữ vị trí thứ 2 về sản lượng cà phê</li>
            <li>Hương vị của cà phê Robusta luôn được đánh giá là kém cạnh hơn so với Arabica từ trước đến nay.</li>
            <li>Chất vị nhìn chung đậm, chát và đắng hơn nhiều so với Arabica.</li>
            <li>Thêm vào đó các khu vực trồng và chế biến cà phê Robusta hầu hết tập trung chế biến khô (thay vì chế biến ướt như các giống Arabica)</li>
            <li>Dẫn đến hương vị càng chát đắng hơn, có mùi từ ngũ cốc đến gỗ, đất sau khi rang.</li>
        `
    },
    {
            // cà phê chồn
        ul: `
            <li>Cà phê chồn còn được gọi là cà phê phân chồn, chính là loại loại cà phê được chế biến từ phân thải ra của chồn hương.</li>
            <li>Các hạt cà phê chín sau khi hái xong thì người ta mang cho chồn ăn, bằng khả năng khứu giác mà chồn hương sẽ lựa những hạt cà phê ngon, chúng sẽ nhả bỏ lớp vỏ bên ngoài và chỉ nuốt phần thịt và hạt bên trong.</li>
            <li> Cà phê chồn còn được người Hà Lan gọi theo một cái tên khác là Kopi Luwak.</li>
            <li>Vị cà phê chồn dịu nhẹ, không đắng gắt nhưng đủ mạnh để làm bạn phải ngạc nhiên.</li>
            <li>Trong và sau khi thưởng thức cà phê chồn bạn sẽ cảm nhận ở cổ họng luôn có chút dư vị ngọt ngào, lưu luyến.</li>
            <li>Đặc biệt, hương thơm của cà phê chồn chia ra nhiều tầng hương. Tầng hương đầu tiên là mùi hoa quả chín, thần thứ hai là sự hòa quyện giữa mùi cà phê hòa lẫn cùng mùi chocolate và mạch nha.</li>
        `
    },
    {
        // G7 TRUNG NGUYTEEN
        ul: `
            <li>G7 hòa tan đen Trung nguyên, sản phẩm không đường không sữa, chiết xuất trực tiếp từ những hạt cà phê xanh, sạch, thuần khiết từ vùng đất bazan huyền thoại Buôn Ma Thuột</li>
            <li>cà phê G7 hòa tan đen dành cho những người thích hương vị cà phê đậm đà, mạnh như cà phê rang xay.</li>
            <li>G7 đã chiến thắng áp đảo với tỉ lệ 89% người tiêu dùng bình chọn là sản phẩm yêu thích tại Dinh Thống Nhất năm 2003. Và là sản phẩm cà phê duy nhất được phục vụ trong các hội nghị APEC, ASEM5.</li>
            <li>Cà phê hòa tan G7 hội tụ những yếu tố đặc biêt nhất thế giới: Nguyên liệu tốt nhất, công nghệ sản xuất hiện đại, bí quyết Phương Đông độc đáo.</li>
        `
    },
    {
        //Trung nguyen
        ul: `
            <li>Màu đậm, vị cà phê đậm, đắng mạnh, nguyên chất 100%</li>
            <li>Màu nâu đỏ, vị cà phê mộc mạc, đắng vừa, nguyên chất 100%</li>
            <li>Màu nâu đỏ, mùi thơm quyến rũ, nguyên chất 100%</li>
            <li>Màu nâu đậm, vị cà phê đậm, thơm vừa, đắng dịu, nguyên chất 100%</li>
            <li>Vị thanh toát, mùi thơm tương tự như cà phê pha máy, chua nhẹ, hậu giữ lại lâu trong miệng</li>
            <li>Chuyên dùng để pha cafe sữa vị béo thơm nồng quyến rũ đặc trưng</li>
        `
    },
    {
        // super coffe
        ul: `
            <li>Cà phê trắng White Coffee Super 3 in 1 - Classic (Truyền thống): Hương vị cà phê truyền thống với hạt cà phê được rang bằng than một cách tuyệt hảo làm dậy lên mùi hương và có hương vị hoàn hảo.</li>
            <li>Hương vị đích thực cho những người yêu thích cà phê - Dòng cà phê được rang bằng than và lấy cảm hứng từ văn hóa cà phê truyền thống ở Ipoh, Malaysia vào thế kỷ 19. </li>
            <li>Cà phê trắng Super White Coffee có kỹ thuật rang và sự pha trộn độc đáo, giúp giữ nguyên vẹn mùi thơm của cà phê kết hợp với vị bơ thực vật hảo hạng, mang đến cho bạn trải nghiệm cà phê hoàn toàn khác biệt, nó sẽ nhắc bạn về những gì bạn yêu thích về cuộc sống.</li>
            <liThưởng thức hương vị mịn màng cùng kem, cà phê và mùi hương hài hoà cho sự kết hợp hoàn hảo của cà phê đông lạnh cao cấp Robusta và Arabica, hương vị cà phê hoài cổ này sẽ mang lại cho người hâm mộ cà phê những khoảnh khắc tốt đẹp của cuộc sống.</li>
        `
    },
    {
        // aribica
        ul: `
            <li>Cà phê Arabica có tên khoa học là Coffea Arabica. Ở Việt Nam dòng cafe có tên gọi khác là cà phê Chè.</li>
            <li>Arabica có hương vị phong phú, chua thanh, vị trái cây, hậu vị ngọt và thể chất cân bằng. Thành phần caffeine trong hạt cà phê này chỉ chiếm từ 1 – 2 %, thấp hơn nhiều so với Robusta.</li>
            <li>Cafe Arabica rất đa dạng chủng loại. Có khoảng 125 giống cà phê thuộc chi Arabica. </li>
            <li>Các dòng phổ biến và được nhiều người biến đến như: Typica, Bourbon, Heirloom, Catimor hay Catuai. Mỗi dòng Arabica sẽ có những đặc điểm hương vị khi thưởng thức.</li>
            <li>Theo đánh giá của các chuyên gia, cà phê Arabica có vị chua thanh được hòa cùng chút đắng nhẹ. Mùi hương thoang thoảng, thanh tao</li>
            <li>Khi pha, nước cafe sẽ có màu nâu nhạt và hơi nghiêng về hổ phách. Thực tế cho thấy, hương vị của cà phê Arabica sẽ có sự ảnh hưởng của các yếu tố thổ nhưỡng, khí hậu. </li>
        `
    },
    {
        // cà phê rang xay 3
        ul: `
            <li>Màu đậm, vị cà phê đậm, đắng mạnh, nguyên chất 100%</li>
            <li>Màu nâu đỏ, vị cà phê mộc mạc, đắng vừa, nguyên chất 100%</li>
            <li>Màu nâu đỏ, mùi thơm quyến rũ, nguyên chất 100%</li>
            <li>Màu nâu đậm, vị cà phê đậm, thơm vừa, đắng dịu, nguyên chất 100%</li>
            <li>Vị thanh toát, mùi thơm tương tự như cà phê pha máy, chua nhẹ, hậu giữ lại lâu trong miệng</li>
            <li>Chuyên dùng để pha cafe sữa vị béo thơm nồng quyến rũ đặc trưng</li>
        `
    },
    {
        // cà phê rang xay 3
        ul: `
            <li>Màu đậm, vị cà phê đậm, đắng mạnh, nguyên chất 100%</li>
            <li>Màu nâu đỏ, vị cà phê mộc mạc, đắng vừa, nguyên chất 100%</li>
            <li>Màu nâu đỏ, mùi thơm quyến rũ, nguyên chất 100%</li>
            <li>Màu nâu đậm, vị cà phê đậm, thơm vừa, đắng dịu, nguyên chất 100%</li>
            <li>Vị thanh toát, mùi thơm tương tự như cà phê pha máy, chua nhẹ, hậu giữ lại lâu trong miệng</li>
            <li>Chuyên dùng để pha cafe sữa vị béo thơm nồng quyến rũ đặc trưng</li>
        `
    },
    {
        // macca caphe
        ul: `
            <li>Cây sâm Maca Peru, tên khoa học là Lepidium meyenii thuộc họ Brassicaceae đã được chứng minh có tác dụng tăng cường thể lực, tăng sự dẻo dai, chống mệt mỏi, .</li>
            <li>tăng khả năng hoạt động tình dục ở cả nam và nữ, cải thiện các triệu chứng tiền mãn kinh, giảm phì đại tuyến tiền liệt</li>
            <li>Hạt Guarana thu từ cây Paullinia cupana trồng phổ biến ở Brasil, được Cục quản lý thuốc và thực phẩm Hoa Kỳ và Viện Pasteur đánh giá là thực phẩm tốt cho sức khỏe</li>
            <li> với các công dụng như duy trì sức khỏe và sự tỉnh táo, chống oxy hóa, tốt cho tiêu hóa và bệnh đau nửa đầu.</li>

        `
    },
    {
        // Dakha
        ul: `
            <li>Sự rang xay cà phê  độc đáo từ vùng Tây Nguyên giúp  tốt cho hệ tim mạch cũng đồng thời  mang đến cho bạn mùi vị thật quyến rũ của hương vị đắng của vùng Tây Nguyên.</li>
            <li>Cà phê Đắk Hà chế phin cao cấp là sản phẩm được chiết xuất từ 100% hạt cà phê từ vùng nguyên liệu Đắk Hà . </li>
            <li>Có tác dụng thư giản trong khoảng thời gian làm việt mệt mỏi  và tốt cho hệ thống tim mặt .</li>
            <li> Ngoài ra sản phẩm còn giúp cho bạn tỉnh táo trong lúc mệt mỏi, buồn ngủ. Cà phê Đắk Hà phù hợp với mọi lứa tuổi vị thành niên</li>
           
        `
    },
     {
        // peets
        ul: `
            <li>Một hỗn hợp được rang chín và cực kỳ thỏa mãn Một khách hàng trung thành và một sĩ quan quân đội đã nghỉ hưu tên là Key Dickason </li>
            <li>ban đầu đã đưa ý tưởng về thứ sẽ trở thành cà phê bán chạy nhất mọi thời đại của Peet cho Alfred Peet vào năm 1969. </li>
            <li>Trong nhiều năm, sự pha trộn có hương vị, được rang đậm và không thể vượt trội này đã trở thành hình ảnh thu nhỏ cho hương vị của Peet's Coffee. </li>
            <li>Chúng tôi đánh dấu mỗi túi Peet’s bằng ngày rang để bạn biết chính xác thời điểm rang. Chúng tôi tuân theo các tiêu chuẩn về độ tươi cao hơn những người khác vì chúng tôi tin rằng cà phê không ngon hơn theo tuổi tác, nó sẽ bị thiu.</li>
        `
    },
   
    
];

// Viet js ap dung chi tiet san pham
function showChiTiet(objects){
    var opacity = document.getElementsByClassName('opacity')[0];

    var block = document.getElementsByClassName('listproducts-content')[0];
    for (var i=0;i<objects.length;i++){
        objects[i].addEventListener('click', function(){
            var strcart = this.outerHTML;
            block.innerHTML = strcart + block.innerHTML;
            var coffee = block.getElementsByClassName('coffee-products-cart')[0];
            var id =''+ coffee.getAttribute('id');
            var index = id.length-1;
            var idLast = parseInt(id[index--]);
            while(id[index]>='0' && id[index]<='9')
                idLast = (parseInt(id[index--]))*10 + idLast;
            idLast--;
            block.innerHTML = strcart + `
                <div class="content-Product">
                    <p>${list[idLast].name}</p>
                    <p>${list[idLast].coin}</p>
                    <ul>
                        ${listContent[idLast].ul}
                    </ul>
                </div>
            `   + `
                <div>
                    <button id="closetimes" class="btn btn-danger">&times;</button>
                </div>
            `;

            var itemNews = block.getElementsByClassName('item-new');
            for (var i=0;i<itemNews.length;i++){
                itemNews[i].innerHTML = '';
                itemNews[i].classList.remove('item-new');
            }
            block.style.display = 'flex';
            block.style.zIndex = 100;
            opacity.classList.add('show');

            var productClose = document.getElementById('closetimes');
            productClose.addEventListener('click', function(){
                console.log('la vay ta')
                block.innerHTML = '';
                block.style.display = 'none';
                opacity.classList.remove('show');
         });
        })
    }




}

function detailProduct(){
    var xemThem = document.getElementById('btnxemthem');
    var productList = document.querySelectorAll('.coffee-products-cart');
    showChiTiet(productList);
    xemThem.addEventListener('click', function(){
        productList = document.querySelectorAll('.coffee-products-cart');
        showChiTiet(productList);
    });
    
}
    detailProduct();

