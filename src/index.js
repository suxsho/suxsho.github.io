$(function(){



    var introHeight = $(window).height() - $('nav').outerHeight();
    $('#intro').css('height', introHeight + 'px');
    $('#intro').happyLine();
    $(window).on('resize', function(){
        var introHeight = $(window).height() - $('nav').outerHeight();
        $('#intro').css('height', introHeight + 'px');
    });

    $('.my-carousel').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000
    });


});