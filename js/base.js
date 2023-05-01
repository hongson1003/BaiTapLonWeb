//  hieu ung load khi bam vao logo
var logo = document.getElementById('logo');
logo.addEventListener('click', function(){
    location.reload();
})

// tao hieu ung cuộn lên khi trang dưới 800px
const scrolltop = document.getElementsByClassName('scrollontop')[0];
window.addEventListener('scroll', function(){
    if (window.pageYOffset > 800)
        scrolltop.classList.add('show');
    else   
        scrolltop.classList.remove('show');
})

