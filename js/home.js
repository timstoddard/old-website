'use strict';

$(function() {

    $('.shadow-header').html('TIM STODDARD');
    if ($().slideToggle) {
        $('.detail-text').hide();
        $('td > span').addClass('glyphicon-chevron-down');
    }
    initPositionShadow();
    
    var url = window.location.href;
    if (url.charAt(url.length - 1) === '#') {
        window.location.href = url.substr(0, url.length - 1);
    }
    
    var css1 = `
        background:
            linear-gradient(45deg, #445 12%, transparent 0, transparent 88%, #445 0),
            linear-gradient(135deg, transparent 37%, #99a 0, #99a 63%, transparent 0),
            linear-gradient(45deg, transparent 37%, #445 0, #445 63%, transparent 0) blue;
        background-size: 25px 25px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: "Lucida Console", Monaco, monospace;
        font-size: 30px;`;

    console.log(
`%cHi, %cI\'m %cTim.
%cWelcome %cto %cmy %cwebsite!
%c
Some cool things I've made:
  • https://timstoddard.github.io/bingo
  • https://timstoddard.github.io/heap
  • https://timstoddard.github.io/forecast`, css1, css1, css1, css1, css1, css1, css1, '');
});

$(window).resize(function() {
    positionShadow();
});

function initPositionShadow() {
    var header = $('.reg-header');
    var x = header.offset().left;
    var y = header.offset().top;
    var wid = header.width();
    var hgt = header.height();
    $('.shadow-header').css({
        top: y + hgt * 0.11,
        left: x + wid * 0.324
    });
}

function positionShadow() {
    var header = $('.reg-header');
    var x = header.position().left;
    var y = header.position().top;
    var wid = header.width();
    var hgt = header.height();
    $('.shadow-header').css({
        top: y + hgt * 0.2,
        left: x + wid * 0.14
    });
}

$('td > span').click(function() {
    if ($('.detail-text').is(':visible')) {
        $('.detail-text').slideToggle(
            {
                duration: 500,
                progress: function(anim, prog) {
                    $('td > span').css({
                        '-webkit-transform': `rotate(${180 - prog * 180}deg)`,
                        '-moz-transform': `rotate(${180 - prog * 180}deg)`,
                        '-ms-transform': `rotate(${180 - prog * 180}deg)`,
                        '-o-transform': `rotate(${180 - prog * 180}deg)`,
                        'transform': `rotate(${180 - prog * 180}deg)`
                    });
                    positionShadow();
                },
                done: function() {
                    // $('td > span').addClass('hover-wiggle');
                    $('td > span').addClass('semi-transparent');
                }
            });
    } else {
        $('td > span').removeClass('hover-wiggle');
        $('td > span').removeClass('semi-transparent');
        $('.detail-text').slideToggle(
            {
                duration: 500,
                progress: function(anim, prog) {
                    $('td > span').css({
                        '-webkit-transform': `rotate(${prog * 180}deg)`,
                        '-moz-transform': `rotate(${prog * 180}deg)`,
                        '-ms-transform': `rotate(${prog * 180}deg)`,
                        '-o-transform': `rotate(${prog * 180}deg)`,
                        'transform': `rotate(${prog * 180}deg)`
                    });
                    positionShadow();
                }
            });
    }
});
