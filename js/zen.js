'use strict';

$(function() {
    var sides = 1;
    var html = '';
    for (var i = 0; i < sides; i++) {
        html += '<div class="row">';
        for (var j = 0; j < sides; j++) {
            html += '<div id="' + i + '-' + j + '" class="col"></div>';
        }
        html += '</div>';
    }
    $('#zen').html(html);
    $('.row').css({ 'height': (100 / sides) + 'vh' });
    $('.col').css({ 'width': (100 / sides) + 'vw' });
    createMove(sides).start();
});

var createMove = function(sides) {
    return {
        x: Math.floor(Math.random() * sides),
        y: Math.floor(Math.random() * sides),
        start: function () {
            setInterval(this.move.bind(this), 100);
        },
        move: function() {
            // $('#' + this.x + '-' + this.y).css({
            //     'background-color': 'white',
            //     'transition': 'background-color 5s ease'
            // });
            if (Math.random() < 1/3) {
                this.x++;
                if (this.x >= sides) {
                    this.x -= 2;
                }
            } else if (Math.random() < 2/3) {
                this.x--;
                if (this.x < 0) {
                    this.x += 2;
                }
            }
            if (Math.random() < 1/3) {
                this.y++;
                if (this.y >= sides) {
                    this.y -= 2;
                }
            } else if (Math.random() < 2/3) {
                this.y--;
                if (this.y < 0) {
                    this.y += 2;
                }
            }
            $('#' + this.x + '-' + this.y).css({
                'background-color': this.nextColor()//,
                // 'transition': 'none'
            });
        },
        r: 255,
        g: 0,
        b: 0,
        incr: {
            r: false,
            g: true,
            b: false
        },
        decr: {
            r: false,
            g: false,
            b: false
        },
        colorChangeSpeed: 1,
        emitStrobe: true,
        nextColor: function() {
            var rgb = this.emitStrobe ? 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')' : 'black';
            console.log(rgb)
            this.emitStrobe = !this.emitStrobe;
            if (this.incr.g) { // red to yellow
                this.g += this.colorChangeSpeed;
                if (this.g >= 255) {
                    this.g = 255;
                    this.incr.g = false;
                    this.decr.r = true;
                }
            } else if (this.decr.r) { // yellow to green
                this.r -= this.colorChangeSpeed;
                if (this.r <= 0) {
                    this.r = 0;
                    this.decr.r = false;
                    this.incr.b = true;
                }
            } else if (this.incr.b) { // green to blue-green
                this.b += this.colorChangeSpeed;
                if (this.b >= 255) {
                    this.b = 255;
                    this.incr.b = false;
                    this.decr.g = true;
                }
            } else if (this.decr.g) { // blue-green to blue
                this.g -= this.colorChangeSpeed;
                if (this.g <= 0) {
                    this.g = 0;
                    this.decr.g = false;
                    this.incr.r = true;
                }
            } else if (this.incr.r) { // blue to purple
                this.r += this.colorChangeSpeed;
                if (this.r >= 255) {
                    this.r = 255;
                    this.incr.r = false;
                    this.decr.b = true;
                }
            } else if (this.decr.b) { // purple to red
                this.b -= this.colorChangeSpeed;
                if (this.b <= 0) {
                    this.b = 0;
                    this.decr.b = false;
                    this.incr.g = true;
                }
            }
            return rgb;
        }
    };
};
