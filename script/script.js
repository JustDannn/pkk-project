$(document).ready(()=>{
    $(".menuOpen").click(()=>{
        $('.menu-wrapper').addClass('active')
    })

    $('.menuClose').click(()=>{
        $('.menu-wrapper').removeClass('active')
    })
});

var swiper = new Swiper(".mySwiperHome", {
    slidesPerView : "auto",
    conteredSlides: true,
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay:{
        delay: 2000
    }
});