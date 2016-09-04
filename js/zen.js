'use strict';

$(function() {
    var sides = 80;
    var html = '';
    for (var i = 0; i < sides; i++) {
        html += '<div class="row">';
        for (var j = 0; j < sides; j++) {
            html += '<div id="' + i + '-' + j + '" class="col"></div>';
        }
        html += '</div>';
    }
    $('body').html(html);
    $('.row').css({ 'height': (100 / sides) + 'vh' });
    $('.col').css({ 'width': (100 / sides) + 'vw' });
    createMove(sides).start();
});

var createMove = function(sides) {
    return {
        moveInterval: null,
        start: function () {
            this.moveInterval = setInterval(this.move.bind(this), 6);
            $(window).click(function(event) {
                this.togglePause();
                var css = {
                    'background-color': 'white',
                    'transition': 'background-color 3s ease'
                };
                $('#' + this.x1 + '-' + this.y1).css(css);
                $('#' + this.x2 + '-' + this.y2).css(css);
            }.bind(this));
            $(window).keydown(function(event) {
                if (event.key === ' ') {
                    this.togglePause();
                }
            }.bind(this));
        },
        paused: false,
        togglePause: function() {
            this.paused = !this.paused;
            if (this.paused) {
                clearInterval(this.moveInterval);
            } else {
                this.moveInterval = setInterval(this.move.bind(this), 6);
            }
        },
        x1: null,
        y1: null,
        x2: null,
        y2: null,
        center: sides / 2,
        radius: 4,
        radiusChangeSpeed: 0.02,
        minRadius: 4,
        maxRadius: (sides - 1) / 2,
        radiusIncr: true,
        theta: 0,
        thetaChangeSpeed: Math.PI / 360,
        move: function() {
            // update old tile
            var css = {
                'background-color': 'black',
                'boxShadow': 'none',
                'transition': 'all 3s ease'
            }
            $('#' + this.x1 + '-' + this.y1).css(css);
            $('#' + this.x2 + '-' + this.y2).css(css);
            // update radius
            if (this.radiusIncr) {
                this.radius += this.radiusChangeSpeed;
                if (this.radius >= this.maxRadius) {
                    this.radius = this.maxRadius - this.radiusChangeSpeed;
                    this.radiusIncr = false;
                }
            } else {
                this.radius -= this.radiusChangeSpeed;
                if (this.radius <= this.minRadius) {
                    this.radius = this.minRadius + this.radiusChangeSpeed;
                    this.radiusIncr = true;
                }
            }
            // increment theta value
            this.theta = (this.theta + this.thetaChangeSpeed) % (2 * Math.PI);
            // calculate x and y values
            var sin = Math.sin(this.theta);
            var cos = Math.cos(this.theta);
            this.x1 = this.center + Math.floor(this.radius * cos);
            this.y1 = this.center + Math.floor(this.radius * sin);
            this.x2 = this.center - Math.floor(this.radius * cos);
            this.y2 = this.center - Math.floor(this.radius * sin);
            // update new tile
            var color = this.nextColor(0.5);
            var boxShadow = '0px 0px ' + Math.max(40, this.radius * 1.5) + 'px ' + Math.max(5, this.radius / 2) + 'px ' + color.fullAlpha;
            css = {
                'background-color': 'black',
                'boxShadow': boxShadow,
                'transition': 'none'
            }
            $('#' + this.x1 + '-' + this.y1).css(css);
            $('#' + this.x2 + '-' + this.y2).css(css);
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
        nextColor: function(alpha) {
            var rgba = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + alpha + ')';
            var rgba2 = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + alpha / 2.5 + ')';
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
            return { fullAlpha: rgba, lessAlpha: rgba2 };
        }
    };
};
