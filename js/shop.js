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
        ul: `
            <li>Màu đậm, vị cà phê đậm, đắng mạnh, nguyên chất 100%</li>
            <li>Màu nâu đỏ, vị cà phê mộc mạc, đắng vừa, nguyên chất 100%</li>
            <li>Màu nâu đỏ, mùi thơm quyến rũ, nguyên chất 100%</li>
            <li>Màu nâu đậm, vị cà phê đậm, thơm vừa, đắng dịu, nguyên chất 100%</li>
            <li>Vị thanh toát, mùi thơm tương tự như cà phê pha máy, chua nhẹ, hậu giữ lại lâu trong miệng</li>
            <li>Chuyên dùng để pha cafe sữa vị béo thơm nồng quyến rũ đặc trưng</li>
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

