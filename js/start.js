'use strict';

/*
CNN API
key: 7xbttr55w6h9hncp2wytg3f2
url: https://developer.cnn.com/io-docs
 */

$(function() {

    $.ajax({
        url: 'https://www.reddit.com/r/quotes/.json',
        type: 'GET',
        success: function(data) {
            var children = data.data.children;
            console.log(children);
            var index = Math.floor(Math.random() * 25) + 1;
            var rawQuote = children[index].data.title;
            rawQuote = rawQuote.trim().replace(/^["”]\s*/, '"').replace(/”/, '"');
            $('#quote').html(rawQuote);
            // for (var i = 1; i <= 25; i++) {
            //     console.log(children[i].data.title);
            // }
        },
        error: function(error) {
            console.error(error);
        },
        timeout: 10000
    });
    
    // $('.btn[data-tooltip]').tooltip();
    
    // $(window).keydown(function(event) {
    //     if (event.key === 's') {
    //         if (($('#myModal').data('bs.modal') || {}).isShown) {
    //             return;
    //         }
    //         showModalText();
    //         $('#myModal').modal();
    //         $('#name-input').focus();
    //         setTimeout(function() { $('#name-input').val(''); }, 0);
    //     }
    // });
    
    // $('#name-input').keypress(function (event) {
    //     var query = $('#name-input').val();
    //     if (event.key === 'Enter' && query && query.trim().length > 0) {
    //         var index = query.indexOf('/');
    //         if (index === -1) return;
    //         var type = query.substring(0, index);
    //         if (!canDoCommand(type)) return;
    //         window.open(`${urls[getKeyIndex(type)].url}${query.substring(index + 1).trim()}`);
    //         }
    //     }
    // );
});

// var urls = [
//     {'key': 'a',    'url': 'https://www.amazon.com/s?field-keywords=',      'name': 'Amazon'},
//     {'key': 'c',    'url': 'http://catalog.calpoly.edu/search/?P=',         'name': 'Cal Poly Course Catalog'},
//     {'key': 'f',    'url': 'https://www.facebook.com/search/people/?q=',    'name': 'Facebook'},
//     {'key': 'g',    'url': 'https://www.google.com/?gws_rd=ssl#q=',         'name': 'Google'},
//     {'key': 'git',  'url': 'https://github.com/search?q=',                  'name': 'GitHub'},
//     {'key': 'i',    'url': 'http://www.imdb.com/find?s=all&q=',             'name': 'IMDb'},
//     {'key': 'sc',   'url': 'https://soundcloud.com/search?q=',              'name': 'Soundcloud'},
//     {'key': 'so',   'url': 'https://stackoverflow.com/search?q=',           'name': 'Stack Overflow'},
//     {'key': 't',    'url': 'https://twitter.com/search?q=',                 'name': 'Twitter'},
//     {'key': 'w',    'url': 'https://en.wikipedia.org/wiki/',                'name': 'Wikipedia'},
//     {'key': 'y',    'url': 'https://www.youtube.com/results?search_query=', 'name': 'Youtube'}
// ];

// function canDoCommand(key) {
//     var can = false;
//     urls.forEach(function(element) {
//         if (element.key === key) can = true;
//     });
//     return can;
// }

// function getKeyIndex(key) {
//     var index;
//     urls.forEach(function(element, i) {
//         if (element.key === key) index = i;
//     });
//     return index; // should always return a value
// }

// function showModalText() {
//     var data = '';
//     urls.forEach(function(element) {
//         data += `<div>'${element.key}/' to search ${element.name}</div>`
//     });
//     $('#modalText').html(data);
// }

function checkForCustomName() {
    var url = window.location.href;
    var index = url.indexOf('?');
    if (index === -1) return;
    
    var name = url.substring(index + 1).trim();
    if (name.length == 0) return;
    
    try {
        name = decodeURIComponent(name);
    } catch(e) {
        return;
    }
    
    localStorage.setItem('name', name);
}

/**********   CALL METHODS HERE   **********/
checkForCustomName();
showTime();
// daysTillBday();
if (location.protocol === 'http:' || location.protocol === 'https:') {
    showWeather(false);   
} else if (location.protocol === 'file:') {
    document.title = `${document.title} (dev)`;
    var n = true ? getDayData() : getNightData();
    console.log(n)
    setTimeout(() => {showWeatherData(n)}, 1000);
}

function showTime() {
    var now = new Date();
    $('#time').html(formatTime(now));
    $('#date').html(formatDay(now));
    var name = localStorage.getItem('name');
    name = name ? ', ' + name : '';
    $('#welcome').html('Good ' + formatTimeOfDay(now) + name + '!');
    
    var millis = now.getMilliseconds();
    setTimeout('showTime()', 1000 - millis < 10 ? 1000 : 1000 - millis);
}

function showWeatherData(resultData) {

    // figure out if it is daytime or nighttime
    var sunData = resultData.sun_phase; // object[sunrise, sunset]
    var now = new Date();
    var currTime = now.getHours() * 60 + now.getMinutes();
    var sunrise = parseInt(sunData.sunrise.hour) * 60 + parseInt(sunData.sunrise.minute);
    var sunset = parseInt(sunData.sunset.hour) * 60 + parseInt(sunData.sunset.minute);
    var afterSunset = currTime < sunrise || sunset < currTime;
    
    // current weather --> resultData.current_observation

    var curr = resultData.current_observation;
    $('#weather-header').html(`
        <div class="city-title">
            ${curr.display_location.city}: ${curr.temp_f}&deg;F ${Math.abs(curr.temp_f - curr.feelslike_f) > 2 ? `(Feels like ${curr.feelslike_f}&deg;F)` : ''}
        </div>`);
    $('#current-img').html(`<img src="${secureImg(curr.icon)}">`);
    var showReloadIconTimer;
    $('#current-img img').hover(
        function() {
            showReloadIconTimer = setTimeout(function() {
                console.log('hi')
                $('#reload').show();
            }, 800);
        },
        function() {
            console.log('bye')
            clearTimeout(showReloadIconTimer);
            setTimeout(function() {
                console.log('peace')
                $('#reload').hide(); // animate this (fade out)
            }, 3000);
        }
    );
    // $('#weather-content').html(`<div class="current-wind">${curr.wind_mph > 0 ? `Wind: ${curr.wind_mph} mph ${curr.wind_dir}` : ''}</div>`);

    // forecast --> resultData.forecast.simpleforecast.forecastday[0-9]
    
    var forecastDays = resultData.forecast.simpleforecast.forecastday
    var body = '';
    for (var i = 0; i < 6; i++) {
        var day = forecastDays[i];
        body += `
        <div class="col s6 m4 l2">
            <div class="card-panel hoverable">
                <img src="${secureImg(curr.icon)}">
                <div class="divider"></div>
                <div class="card-content">
                    <p>${day.date.weekday}</p>
                    <p>${day.date.month}/${day.date.day}</p>
                    <p>${day.low.fahrenheit}-${day.high.fahrenheit}&deg;F</p>
                </div>
            </div>
        </div>`;
    }

        // <div id="weather-title"><a href="../forecast" data-toggle="tooltip" data-placement="right" title="See Full Forecast">Forecast</a></div>
    $('#weather-forecast').html(`
    <div>
        <div class="light-blue row">
            ${body}
        </div>
    </div>`);
    
    // set background based on whether it is currently day/night
    
    // if (afterSunset) {
    //     $('body').css({ 'background': '#161669' });
    //     $('#page-content').css({
    //         'background': '#161669',
    //         'box-shadow': 'inset 0px 0px 12px 3px #000000'
    //     });
    //     $('#welcome, #time, #date, .city-title, #weather-content, #weather-title a').css({ 'color': '#ACB0BD' });
    //     $('.btn, .btn-lg, .btn-default, td').css({
    //         'background': '#111155',
    //         'border-color': '#ACB0BD',
    //         'color': '#ACB0BD'
    //     })
    //     $('.btn, .btn-lg, .btn-default, td').hover(
    //         function() {$(this).css({ 'background': '#0d0d40' })},
    //         function() {$(this).css({ 'background': '#111155' })}
    //     );
    // }
}

function formatHours(date) { /* TODO: not used anywhere? */
    var hr = date.hour;
    return `${hr > 12 ? hr - 12 : (hr > 0 ? hr : 12)}${date.ampm}`;
}

function formatTime(date) { // pass in a JavaScript date object
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return `${hours > 12 ? hours - 12 : (hours > 0 ? hours : 12)}${minutes < 10 ? ':0' : ':'}${minutes}${seconds < 10 ? ':0' : ':'}${seconds}${hours >= 12 ? ' PM' : ' AM'}`;
    // return `${hours > 12 ? hours - 12 : (hours > 0 ? hours : 12)}${minutes < 10 ? ':0' : ':'}${minutes}${hours >= 12 ? ' PM' : ' AM'}`;
}

function formatTimeOfDay(date) {
    var hours = date.getHours();
    if (hours < 12) {
        return 'Morning';
    } else if (hours < 18) {
        return 'Afternoon';
    } else if (hours < 21) {
        return 'Evening';
    }
    return 'Night';
}

function daysTillBday() {
    var bdayDate = Date.parse('May 13 2016') + 7 * 60 * 60 * 1000; // I was born at 7am
    var now = Date.now();
    if (bdayDate - now < 0) {
        $('#days-till-bday').html('Happy Birthday!');
    }
    
    var days = (bdayDate - now) / (24 * 60 * 60 * 1000);
    var dayStr = `${Math.floor(days)}`;
    
    var hours = (days % 1) * 24;
    var hourStr = `${Math.floor(hours)}`;
    
    var mins = (hours % 1) * 60;
    var minStr = `${Math.floor(mins)}`;
    
    var secs = (mins % 1) * 60;
    var secStr = `${Math.floor(secs)}`;
    
    var millis = (secs % 1) * 1000;
    var milliStr = `${Math.floor(millis)}`;
    
    var dateStr = '';
    if (days >= 1) dateStr += `${dayStr} days `;
    if (hours >= 1 || days > 0 && hours < 1)
        dateStr += `${hourStr.length < 2 ? `0${hourStr}` : `${hourStr}`}h `;
    if (mins >= 1 || days > 0 && hours > 0 && mins < 1)
        dateStr += `${minStr.length < 2 ? `0${minStr}` : `${minStr}`}m `;
    if (secs >= 1 || days > 0 && hours > 0 && mins > 0 && secs < 1)
        dateStr += `${secStr.length < 2 ? `0${secStr}` : `${secStr}`}s `;
    if (millis >= 1)
        dateStr += `${milliStr.length < 3 ? (milliStr.length < 2 ? `00${milliStr}` : `0${milliStr}`) : `${milliStr}`}ms`;
    
    $('#days-till-bday').html(dateStr);
    
    setTimeout('daysTillBday()', 0);
}

function formatDay(date) { // pass in a JavaScript date object
    var dayOfWeek = date.getDay();
    var month = date.getMonth();
    var day = date.getDate();
    return `${dayString(dayOfWeek)} ${monthString(month)} ${day}, ${date.getFullYear()}`;
    // return `${dayString(dayOfWeek, true)} ${month}/${day}`;
}

function formatForecastDay(date) { // use date from results
    return `${date.weekday}</p><p>${date.month}/${date.day}`;
}

function dayString(day) {
    return 'Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday'.split('|')[day];
}

function monthString(month) {
    return 'January|February|March|April|May|June|July|August|September|October|November|December'.split('|')[month];
}
