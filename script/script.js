$(document).ready(()=>{
    $(".menuOpen").click(()=>{
        $('.menu-wrapper').addClass('active')
    })

    $('.menuClose').click(()=>{
        $('.menu-wrapper').removeClass('active')
    })

    $(document).scroll(()=> {
        $('.navbar').toggleClass('active', $(this).scrollTop() > $('.navbar').height())
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

var swiper = new Swiper(".mySwiperProduct", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
    nextEl: ".bxs-chevron-right-circle",
    prevEl: ".bxs-chevron-left-circle",
    },
    breakpoints:{
        576:{
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768:{
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});