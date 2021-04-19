let dot = document.querySelector('.subtoggle');
let target = document.querySelector('.submenu');
let form = document.querySelector('.formWrapper');
let body = document.querySelector('body')

dot.addEventListener('mouseenter', () => {
    target.classList.add('visible');
});

dot.addEventListener('mouseleave', () => {
    target.classList.remove('visible');
});



$(function () {
    $('.openForm').click( () => {
        $('.formWrapper').css('display', 'flex');
        $('body').css('overflow', 'hidden');
    })
    $('.closeForm').click( () => {
        $('.formWrapper').css('display', 'none');
        $('body').css('overflow', 'auto');
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
        $('body').css('overflow', 'hidden');
        $('.menu_ul').css('transform', 'translateY(0%)');
    })
    $('.menu_btn_close').click(function () {
        $('.menu_btn_close').hide();
        $('.menu_btn_bars').show();
        $('body').css('overflow', 'auto');
        $('.menu_ul').css('transform', 'translateY(-100%)');
    })
    $('.mobParent').click(()=>{
        $('.submenu').show();
    })

})
