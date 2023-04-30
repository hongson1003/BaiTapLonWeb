// slide show avatar nhan xet cua khach hang
var n = 0;
var ad = document.getElementById('client');

function renderSlide(avatar, ten, comments, client, circleleft, circleright){
    // ad.style.animation = 'none';
    


    if (n==client.length || n>client.length)
        n=0;
    if (n<0)
        n=0;
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
    danhgia.src = '../image/5Start-removebg-preview.png';
    var cicleLeft = document.getElementById('control-left');
    var cicleRight = document.getElementById('control-right');
    var controlTrai = document.getElementById('control-trai');
    var controlPhai = document.getElementById('control-phai');
    controlTrai.addEventListener('click', function(e){
        e.preventDefault();
        console.log(controlTrai);
        renderSlide(avatar, ten, comments, client, cicleLeft, cicleRight);
        console.log(n);
    })
    controlPhai.addEventListener('click',function(e){
        e.preventDefault();
        renderSlide(avatar, ten, comments, client, cicleLeft, cicleRight);
        console.log(n);

    })
    var client = [
        {
            name: 'Nguyễn Hồng Sơn',
            avatar: '../image/avatardoraemon.jpg',
            comments: 'Cà phê chỉ có một màu đen quen thuộc nhưng tùy tâm trạng mà người uống có thể cảm nhận nó ngọt hay đắng.'
        },
        {
            name: 'Võ Trần Quốc Bảo',
            avatar: '../image/quocbao.jpg',
            comments: 'Mỗi đồ uống sẽ phù hợp với tâm trạng khác nhau, trà cho thanh thản, rượu cho nỗi đau và cà phê cho nỗi buồn.'
        },
        {
            name: 'Nguyễn Thành Tài',
            avatar: '../image/thanhtai.jpg',
            comments: 'Thêm chút đường cà phê có ngọt? Thêm chút tình mình có thuộc về nhau?'
        },
        {
            name: 'Võ Thanh Tuấn', 
            avatar: '../image/thanhtuan.jpg',
            comments: 'Ta tìm gì trong một tách cà phê: một chút tỉnh táo, một chút lãng du nghênh ngang ngồi lại bất động giữa phố thị cứ vồn vã trôi đi, tìm giây phút lặng yên cạnh ai đó, cái thở dài trước ngày cứ trôi qua hay một nỗi nhớ ngọt đắng vơi đầy.'
        }
    ] ;

    renderSlide(avatar, ten, comments, client, cicleLeft, cicleRight);
    setInterval(function(){
        renderSlide(avatar, ten, comments, client, cicleLeft, cicleRight);
    }, 3000);
}
nhanxetcuakhachhang();