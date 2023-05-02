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
    myproducts.appendChild(cart);
}

function inProducts(){
    var myproducts = document.getElementById('listproducts');
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

