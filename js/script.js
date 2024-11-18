$(function () {
    // 헤더

    $('nav>ul>li').mouseenter(function () {
        $('.sub').stop().slideDown();
        $('.n_back').stop().slideDown();
    })

    $('nav>ul>li').mouseleave(function () {
        $('.sub').stop().slideUp();
        $('.n_back').stop().slideUp();
    })
    $('nav>ul>li').focusin(function () {
        $('.sub').stop().slideDown();
        $('.n_back').stop().slideDown();
        $(this).children('a').addClass('on');
    })

    $('nav>ul>li').focusout(function () {
        $('.sub').stop().slideUp();
        $('.n_back').stop().slideUp();
        $(this).children('a').removeClass('on');
    })

    $('.sub>li').focusin(function () {
        $(this).children('a').addClass('on');
    })
    $('.sub>li').focusout(function () {
        $(this).children('a').removeClass('on');
    })




    // 슬라이드
    function slide() {
        $('.slide>ul').animate({ top: '-350px' }, 1000, function () {
            $(this).append($('.slide>ul>li').first());
            $('.slide>ul').css({ top: '0' });
        })
    }
    setInterval(slide, 3000)

    // 팝업
    $('.pop_on').click(function () {
        $('.pop').show();
    })
    $('.pop_off').click(function () {
        $('.pop').hide();
    })

})