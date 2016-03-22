"use strict";

$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $(window).keydown(function(event) {
        if (($('#myModal').data('bs.modal') || {}).isShown) return;
        if (event.which === 83) {
            showModalText();
            $('#myModal').modal();
            $('#name-input').focus();
            setTimeout(function() {$('#name-input').val('')}, 0);
        }
    });
    
    $('.physics-lec, .physics-lab, .calc-4, .cpe-102, .public-speaking').hide();
    
    var c1Timer;
    $('#c1, .physics-lec').on({
        mouseenter: function(e) {
            clearTimeout(c1Timer);
            $('.physics-lec').show();
        },
        mouseleave: function() {
            c1Timer = setTimeout(function() { $('.physics-lec').hide(); }, 10);
        }
    });
    
    var c2Timer;
    $('#c2, .physics-lab').on({
        mouseenter: function(e) {
            clearTimeout(c2Timer);
            $('.physics-lab').show();
        },
        mouseleave: function() {
            c2Timer = setTimeout(function() { $('.physics-lab').hide(); }, 10);
        }
    });
    
    var c3Timer;
    $('#c3, .calc-4').on({
        mouseenter: function(e) {
            clearTimeout(c3Timer);
            $('.calc-4').show();
        },
        mouseleave: function() {
            c3Timer = setTimeout(function() { $('.calc-4').hide(); }, 10);
        }
    });
    
    var c4Timer;
    $('#c4, .cpe-102').on({
        mouseenter: function(e) {
            clearTimeout(c4Timer);
            $('.cpe-102').show();
        },
        mouseleave: function() {
            c4Timer = setTimeout(function() { $('.cpe-102').hide(); }, 10);
        }
    });
    
    var c5Timer;
    $('#c5, .public-speaking').on({
        mouseenter: function(e) {
            clearTimeout(c5Timer);
            $('.public-speaking').show();
        },
        mouseleave: function() {
            c5Timer = setTimeout(function() { $('.public-speaking').hide(); }, 10);
        }
    });
});

// yes its a global #dealwithit
var urls = [
    {'key': 'a', 'url': 'https://www.amazon.com/s?field-keywords=', 'name': 'Amazon'},
    {'key': 'c', 'url': 'http://catalog.calpoly.edu/search/?P=', 'name': 'the Course Catalog'},
    {'key': 'f', 'url': 'https://www.facebook.com/search/people/?q=', 'name': 'Facebook'},
    //{'key': 'fox', 'url': 'http://www.foxnews.com/search-results/search?q=', 'name': 'Fox News'},
    {'key': 'g', 'url': 'https://www.google.com/?gws_rd=ssl#q=', 'name': 'Google'},
    {'key': 'git', 'url': 'https://github.com/search?q=', 'name': 'GitHub'},
    {'key': 'im', 'url': 'http://www.imdb.com/find?s=all&q=', 'name': 'IMDb'},
    {'key': 'sc', 'url': 'https://soundcloud.com/search?q=', 'name': 'Soundcloud'},
    {'key': 'st', 'url': 'https://stackoverflow.com/search?q=', 'name': 'Stack Overflow'},
    {'key': 't', 'url': 'https://twitter.com/search?q=', 'name': 'Twitter'},
    {'key': 'w', 'url': 'https://en.wikipedia.org/wiki/', 'name': 'Wikipedia'},
    {'key': 'y', 'url': 'https://www.youtube.com/results?search_query=', 'name': 'Youtube'}
];

function onKeyPress(e) {
    let keynum = e.which;
    var query = $('#name-input').val();
    if (keynum === 13 && query && query.trim().length > 0) {
        let index = query.indexOf('/');
        if (index === -1) return;
        let type = query.substring(0, index);
        if (!canDoCommand(type)) return;
        window.open(`${urls[getKeyIndex(type)].url}${query.substring(index + 1).trim()}`);
    }
}

function canDoCommand(key) {
    var can = false;
    urls.forEach(function(element) {
        if (element.key === key) can = true;
    });
    return can;
}

function getKeyIndex(key) {
    var index = -1;
    urls.forEach(function(element, i) {
        if (element.key === key) index = i;
    });
    return index; // should always return a value >= 0
}

function showModalText() {
    var data = '';
    urls.forEach(function(element) {
        data += `<div>'${element.key}/' to search ${element.name}</div>`
    });
    $('#modalText').html(data);
}

function checkForCustomName() {
    let url = window.location.href;
    let index = url.indexOf('?');
    if (index === -1) {
        $('#welcome').html('Timothy');
        return;
    }
    let name = url.substring(index + 1).trim();
    if (name.length == 0) {
        $('#welcome').html('Timothy');
        return;
    }
    try {
        name = decodeURIComponent(name);
    }
    catch(err) {
        $('#welcome').html('Timothy');
        return;
    }
    $('#welcome').html(name);
}

/**********   CALL METHODS HERE   **********/
checkForCustomName();
showTime();
checkLocalStorage();
showWeatherByLocation();
/*******************************************/

function checkLocalStorage() {
    if (hasLatAndLongInLocalStorage()) {
        getAllWeatherData(`lat=${localStorage.getItem('lat')}&lon=${localStorage.getItem('long')}`);
    }
}

function hasLatAndLongInLocalStorage() {
    var lat = localStorage.getItem('lat');
    var long = localStorage.getItem('long');
    return lat != null && long != null;
}

function showTime() {
    var now = new Date();
    document.getElementById('time').innerHTML = currTime(now);
    document.getElementById('date').innerHTML = currDay(now);
    
    var millis = now.getMilliseconds();
    setTimeout('showTime()', 1000 - millis < 10 ? 1000 : 1000 - millis);
}

function showWeatherByLocation() {
    if (navigator.geolocation) {
        let zip = 93410;
        navigator.geolocation.getCurrentPosition(
            function (pos) {
                if (hasLatAndLongInLocalStorage()) {
                    var lat = localStorage.getItem('lat');
                    var long = localStorage.getItem('long');
                    var epsilon = 0.001;
                    if (Math.abs(lat - pos.coords.latitude) > epsilon || Math.abs(long - pos.coords.longitude) > epsilon) {
                        getAllWeatherData(`lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`);
                        localStorage.setItem('lat', pos.coords.latitude);
                        localStorage.setItem('long', pos.coords.longitude);
                    }
                } else {
                    getAllWeatherData(`lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`);
                    localStorage.setItem('lat', pos.coords.latitude);
                    localStorage.setItem('long', pos.coords.longitude);
                }
            },
            function (err) {
                getAllWeatherData(`zip=${zip},us`);
            },
            {enableHighAccuracy: false, timeout: 8000, maximumAge: 0});
    } else {
        getAllWeatherData(`zip=${zip},us`);
    }
}

function getAllWeatherData(locationData) {
    getWeatherData(`http://api.openweathermap.org/data/2.5/weather?${locationData}&units=imperial&APPID=b14b4595be25f378d5f28c8d44ccd3ea`, 'current');
    getWeatherData(`http://api.openweathermap.org/data/2.5/forecast/city?${locationData}&units=imperial&APPID=3f9835cccb9c523227adf305a40a7fdb`, 'forecast'); // created a second api key (app id) so to prevent 429 error
}

function getWeatherData(url, type) {
    jQuery.ajax({
        url: url,
        type: 'GET',
        success: function(resultData) {
            console.log(type);
            console.log(resultData);
            if (type === 'current') {
                showCurrentData(resultData);
            } else if (type === 'forecast') {
                showForecastData(resultData);
            }
        },
        error : function(jqXHR, textStatus, errorThrown) {
            if (type === 'current') {
                document.getElementById('weather-content').innerHTML = 'Weather data failed to load';
            } else if (type === 'forecast') {
                document.getElementById('weather-forecast').innerHTML = 'Weather forecast failed to load';
            }
        },
        timeout: 10000
    });
}

function showCurrentData(resultData) {
    document.getElementById('weather-header').innerHTML = `Weather in ${resultData.name}`;
    document.getElementById('weather-content').innerHTML = `
        Currently ${resultData.weather[0].main} (${resultData.weather[0].description})<br>
        Temperature: ${resultData.main.temp}&deg;F<br>
        Wind: ${resultData.wind.speed} mph ${windDir(resultData.wind.deg)}<br>
        Cloudiness: ${resultData.clouds.all}%<br>
        Humidity: ${resultData.main.humidity}%<br>
        Sunrise: ${currTime(new Date(resultData.sys.sunrise * 1000), true)}<br>
        Sunset: ${currTime(new Date(resultData.sys.sunset * 1000), true)}`;
}

function showForecastData(resultData) {
    var idk = '';
    for (var prop in resultData.list) {
        idk += `${resultData.list[prop].weather[0].main} (${resultData.list[prop].weather[0].description})! ${resultData.list[prop].main.temp}&deg;F (${currDate(new Date(resultData.list[prop].dt * 1000), true)})<br>Wind: ${resultData.list[prop].wind.speed} mph ${windDir(resultData.list[prop].wind.deg)}, Humidity: ${resultData.list[prop].main.humidity}%<br><br>`;
    }
    document.getElementById('weather-forecast').innerHTML = `-------------------<br>Forecast:<br>${idk}`;
}

function currTime(date, short = false) { // pass in a JavaScript date object
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if (short) {
        return `${hours > 12 ? hours - 12 : (hours > 0 ? hours : 12)}${minutes < 10 ? ':0' : ':'}${minutes}${hours >= 12 ? ' PM' : ' AM'}`;
    } else {
        var seconds = date.getSeconds();
        return `${hours > 12 ? hours - 12 : (hours > 0 ? hours : 12)}${minutes < 10 ? ':0' : ':'}${minutes}${seconds < 10 ? ':0' : ':'}${seconds}${hours >= 12 ? ' PM' : ' AM'}`;
    }
}

function currDay(date, short = false) { // pass in a JavaScript date object
    var dayOfWeek = date.getDay();
    var month = date.getMonth();
    var day = date.getDate();
    if (short) {
        return `${dayString(dayOfWeek, true)} ${month < 10 ? '0' : ''}${month}/${day < 10 ? '0' : ''}${day}`;
    } else {
        var year = date.getFullYear();
        return `${dayString(dayOfWeek)} ${monthString(month)} ${day}, ${year}`;
    }
}

function currDate(date, short) { // pass in a JavaScript date object
    return `${currTime(date, short)} on ${currDay(date, short)}`
}

function windDir(dir) {
    var directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    dir %= 360;
    for (var i = 0; i < 10; i++) {
        if (45 * i - 22.5 > dir) {
            return directions[(i - 1) % 8];
        }
    }
}

function dayString(day, short = false) {
    switch (day) {
        case 0: return short ? 'Sun' : 'Sunday';
        case 1: return short ? 'Mon' : 'Monday';
        case 2: return short ? 'Tue' : 'Tuesday';
        case 3: return short ? 'Wed' : 'Wednesday';
        case 4: return short ? 'Thu' : 'Thursday';
        case 5: return short ? 'Fri' : 'Friday';
        case 6: return short ? 'Sat' : 'Saturday';
        default: return 'null';
    }
}

function monthString(month) {
    switch (month) {
        case 0: return 'January';
        case 1: return 'February';
        case 2: return 'March';
        case 3: return 'April';
        case 4: return 'May';
        case 5: return 'June';
        case 6: return 'July';
        case 7: return 'August';
        case 8: return 'September';
        case 9: return 'October';
        case 10: return 'November';
        case 11: return 'December';
        default: return 'null';
    }
}