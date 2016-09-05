'use strict';

$(function() {
    createMove().start();
});

var createMove = function() {
    return {
        moveInterval: null,
        ms: $('#ms-adjust').val(),
        start: function () {
            var _this = this;
            $('#ms').html(this.ms);
            this.moveInterval = setInterval(this.move.bind(this), this.ms);
            $('body').click(function(event) {
                if (event.target === this) {
                    _this.togglePause(true);
                }
            });
            $(window).keydown(function(event) {
                if (event.key === ' ') {
                    _this.togglePause(false);
                } else if (event.key === 'a') {
                    $('#options').toggle();
                }
            });
            $('#ms-adjust').on('input change', function() {
                var ms = $(this).val();
                $('#ms').html(ms);
                _this.ms = ms;
                if (!_this.paused) {
                    clearInterval(_this.moveInterval);
                    _this.moveInterval = setInterval(_this.move.bind(_this), ms);
                }
            });
        },
        paused: false,
        togglePause: function(toggleOptions) {
            this.paused = !this.paused;
            if (this.paused) {
                if (toggleOptions) {
                    $('#options').show();
                }
                $('body').css({ 'background-color': 'white' });
                clearInterval(this.moveInterval);
            } else {
                if (toggleOptions) {
                    $('#options').hide();
                }
                this.moveInterval = setInterval(this.move.bind(this), this.ms);
            }
        },
        move: function() {
            $('body').css({ 'background-color': this.nextColor() });
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
