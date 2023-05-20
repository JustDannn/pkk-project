$(document).ready(()=>{
    $(".menuOpen").click(()=>{
        $('.menu-wrapper').addClass('active')
    })

    $('.menuClose').click(()=>{
        $('.menu-wrapper').removeClass('active')
    })
})