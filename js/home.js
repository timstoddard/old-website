'use strict';

$(function() {

    // $('.shadow-header').html('tim stoddard');
    // positionShadow(true);
    
    var css = `
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
  • https://tstoddard.com/bingo
  • https://tstoddard.com/heap
  • https://tstoddard.com/forecast`, css, css, css, css, css, css, css, '');
});

// function positionShadow(init = false) {
//     var header = $('.header');
//     var x = header.position().left;
//     var y = header.position().top;
//     var wid = header.width();
//     var hgt = header.height();
//     $('.shadow-header').css({
//         top: init ? y + hgt * 0.208 : y + hgt * 0.2,
//         left: init ? x + wid * 0.195 : x + wid * 0.14
//     });
// }

// $(window).resize(function() {
//     positionShadow();
// });
