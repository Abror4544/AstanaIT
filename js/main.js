let dot = document.querySelector('.subtoggle');
let target = document.querySelector('.submenu');

dot.addEventListener('mouseenter', () => {
    target.classList.add('visible');
});

dot.addEventListener('mouseleave', () => {
    target.classList.remove('visible');
});

$(function () {
    $('.openForm').click( () => {
        $('.formWrapper').css('display', 'flex');
    })
    $('.closeForm').click( () => {
        $('.formWrapper').css('display', 'none');
    })
    if ($(window).width() < 767) {
        $('.menu_li').removeClass('subtoggle');
        $('.submenu').removeClass('subtoggle');
        $('.parent').addClass('mobParent');
    }
    $('.menu_btn_bars').click(function () {
        $('.menu_btn_bars').hide();
        $('.menu_btn_bars').css('transform', 'rotate(180deg)');
        $('.menu_btn_close').show();
        $('.menu_ul').css('transform', 'translateY(0%)');
    })
    $('.menu_btn_close').click(function () {
        $('.menu_btn_close').hide();
        $('.menu_btn_bars').show();
        $('.menu_ul').css('transform', 'translateY(-100%)');
    })
    $('.mobParent').click(()=>{
        $('.submenu').show();
    })
})