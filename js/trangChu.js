// slide show avatar nhan xet cua khach hang
var n = 0;
var ad = document.getElementById('client');

function renderSlide(avatar, ten, comments, client, circleleft, circleright){
    var box = document.getElementById('client');
    box.classList.add('hide');
        setTimeout(() => {
            box.classList.remove('slideleft');
        }, 1000);
        box.classList.add('slideleft');
        box.classList.remove('hide');

    if (n==client.length || n>client.length)
        n=0;
    if (n<0)
        n=client.length-1;
;
    avatar.src = client[n].avatar;
    ten.innerHTML = client[n].name;
    comments.innerHTML = client[n].comments;
    if (n%2==0){
        circleright.style.backgroundColor = '';
        circleleft.style.backgroundColor = 'violet';
    }else{
        circleleft.style.backgroundColor = '';
        circleright.style.backgroundColor = 'violet';
    }
    
    n++;
}
function nhanxetcuakhachhang(){
    var avatar = document.getElementById('avt');
    var ten = document.getElementById('ten');
    var danhgia = document.getElementById('danhgia');
    danhgia.src = 'image/5Start-removebg-preview.png';
    var cicleLeft = document.getElementById('control-left');
    var cicleRight = document.getElementById('control-right');
    var controlTrai = document.getElementById('control-trai');
    var controlPhai = document.getElementById('control-phai');
    controlTrai.addEventListener('click', function(e){
        e.preventDefault();
        n-=2;
        renderSlide(avatar, ten, comments, client, cicleLeft, cicleRight);
    })
    controlPhai.addEventListener('click',function(e){
        e.preventDefault();
        renderSlide(avatar, ten, comments, client, cicleLeft, cicleRight);

    })
    var client = [
        {
            name: 'Nguyễn Hồng Sơn',
            avatar: 'image/avatardoraemon.jpg',
            comments: 'Cà phê chỉ có một màu đen quen thuộc nhưng tùy tâm trạng mà người uống có thể cảm nhận nó ngọt hay đắng.'
        },
        {
            name: 'Võ Trần Quốc Bảo',
            avatar: 'image/quocbao.jpg',
            comments: 'Mỗi đồ uống sẽ phù hợp với tâm trạng khác nhau, trà cho thanh thản, rượu cho nỗi đau và cà phê cho nỗi buồn.'
        },
        {
            name: 'Nguyễn Thành Tài',
            avatar: 'image/thanhtai.jpg',
            comments: 'Thêm chút đường cà phê có ngọt? Thêm chút tình mình có thuộc về nhau?'
        },
        {
            name: 'Võ Thanh Tuấn', 
            avatar: 'image/thanhtuan.jpg',
            comments: 'Ta tìm gì trong một tách cà phê: một chút tỉnh táo, một chút lãng du nghênh ngang ngồi lại bất động giữa phố thị cứ vồn vã trôi đi, tìm giây phút lặng yên cạnh ai đó, cái thở dài trước ngày cứ trôi qua hay một nỗi nhớ ngọt đắng vơi đầy.'
        }
    ] ;

    renderSlide(avatar, ten, comments, client, cicleLeft, cicleRight);
    setInterval(function(){
        renderSlide(avatar, ten, comments, client, cicleLeft, cicleRight);
    }, 5000);
}
nhanxetcuakhachhang();
// su dung jquerry de cuon xuong trong đăng ký tư vấn
$(document).ready(function() {
    $('a[href^="#formregister"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
});


// thuc hien animation for myproducts
document.addEventListener('scroll', function() {
    // Tìm phần tử HTML cần thực hiện animation
    const elements = document.querySelectorAll('.mycart');
    var products = document.getElementsByClassName('myproducts-content')[0];
    // Lấy vị trí của phần tử cần thực hiện animation
    const rect = products.getBoundingClientRect();
  
    // Tính toán ngưỡng của cửa sổ trình duyệt
    const windowHeight = window.innerHeight;
    const threshold = windowHeight - rect.height / 2;
  
    // Kiểm tra nếu phần tử có animation nằm trong ngưỡng của cửa sổ trình duyệt
    if (rect.top < threshold && rect.bottom > 0) {
      // Thêm lớp CSS để kích hoạt animation
    for (var i=0;i<elements.length;i++){
        elements[i].classList.add('mycart-animation');
    }
    }
  });

//   form dang ky tu van, regex
var form = document.getElementById('formdangkytuvan');
var inputName = document.getElementById('inputName');
var inputEmail = document.getElementById('inputEmail');
var phonenumber = document.getElementById('phonenumber');
var texttuvan = document.getElementById('texttuvan');
var btndangky = document.getElementById('dangky');
var myModal = document.getElementById('myModal');
var modaljs = document.getElementById('modaljs');
var btnclose = document.getElementById('btnclose');
var mymodaltitle = document.getElementsByClassName('mymodaltitle')[0];
var textmodal = document.getElementsByClassName('textmodal')[0];
btnclose.addEventListener('click', function(){
    modaljs.style.display =  'none';
    textmodal.innerHTML = ''
})

var xclose = document.getElementById('xclose');
xclose.addEventListener('click',function(){
    modaljs.style.display = 'none';
    textmodal.innerHTML = ''

})

window.addEventListener('click', function(event){
    if (event.target == myModal){
        modaljs.style.display = 'none';
        textmodal.innerHTML = ''
    }
})
form.addEventListener('submit', function(event){
    event.preventDefault();
})
btndangky.addEventListener('click', function(event){
    modaljs.style.display = 'block';
    event.preventDefault();
    const regex = /^.{20,}$/; 
    const inputEvent = new Event('input');
    texttuvan.dispatchEvent(inputEvent);
    var textarea = regex.test(texttuvan.value)
    var check = (inputName.checkValidity() && inputEmail.checkValidity() && phonenumber.checkValidity() && textarea);
    if (check){
        mymodaltitle.classList.remove('error');
        mymodaltitle.innerText = 'Success!'
        mymodaltitle.classList.add('success');
        var temp = 'Chúng tôi sẽ cố gắng phản hồi bạn sớm nhất, cảm ơn quý khách đã ủng hộ cà phê Bảo Sơn'
        textmodal.innerHTML = `<p>${temp}</p>`
        form.reset();

    }else{
        mymodaltitle.classList.remove('success');
        mymodaltitle.innerText = 'Error';
        mymodaltitle.classList.add('error');
        if (inputName.checkValidity()==false){
            var pname = document.createElement('p');
            pname.innerText = 'Bạn đã nhập sai họ tên!';
            textmodal.appendChild(pname);
        }
        if (inputEmail.checkValidity()==false){
            var pemail = document.createElement('p');
            pemail.innerText = 'Bạn đã nhập sai địa chỉ email!';
            textmodal.appendChild(pemail);
        }
        if (phonenumber.checkValidity()==false){
            var pphone = document.createElement('p');
            pphone.innerText = 'Bạn đã nhập sai số điện thoại!';
            textmodal.appendChild(pphone);
        }
        if (textarea==false){
            var ptext = document.createElement('p');
            ptext.innerText = 'Nội dung cần giải đáp chưa đủ điều kiện!';
            textmodal.appendChild(ptext);
        }
    }
})




  
  


  