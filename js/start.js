"use strict";

$(function() {
    
    $('.outer-right').hide();
    $('#c1-menu-items, #c2-menu-items, #c3-menu-items, #c4-menu-items').hide();
    
    $('[data-toggle="tooltip"]').tooltip();
    
    $(window).keydown(function(event) {
        var key = event.which;
        if (key === 83) { // 's' key
            if (($('#myModal').data('bs.modal') || {}).isShown) return;
            showModalText();
            $('#myModal').modal();
            $('#name-input').focus();
            setTimeout(function() {$('#name-input').val('')}, 0);
            $('.outer-right').hide();
        } else if (key === 87) { // 'w' key
            if (!$('#myModal').is(':visible')) {
                $('.outer-right').toggle();
            }
        } else if (key === 27) {
            $('.outer-right').hide();
        }
    });
    
    $('#name-input').keypress(function (event) {
        let keynum = event.which;
        var query = $('#name-input').val();
        if (keynum === 13 && query && query.trim().length > 0) {
            let index = query.indexOf('/');
            if (index === -1) return;
            let type = query.substring(0, index);
            if (!canDoCommand(type)) return;
            window.open(`${urls[getKeyIndex(type)].url}${query.substring(index + 1).trim()}`);
            }
        }
    );
    
    var c1Timer;
    $('#c1, #c1-menu-items').on({
        mouseenter: function(e) {
            clearTimeout(c1Timer);
            $('#c1-menu-items').show();
        },
        mouseleave: function() {
            c1Timer = setTimeout(function() { $('#c1-menu-items').hide(); }, 10);
        }
    });
    
    var c2Timer;
    $('#c2, #c2-menu-items').on({
        mouseenter: function(e) {
            clearTimeout(c2Timer);
            $('#c2-menu-items').show();
        },
        mouseleave: function() {
            c2Timer = setTimeout(function() { $('#c2-menu-items').hide(); }, 10);
        }
    });
    
    var c3Timer;
    $('#c3, #c3-menu-items').on({
        mouseenter: function(e) {
            clearTimeout(c3Timer);
            $('#c3-menu-items').show();
        },
        mouseleave: function() {
            c3Timer = setTimeout(function() { $('#c3-menu-items').hide(); }, 10);
        }
    });
    
    var c4Timer;
    $('#c4, #c4-menu-items').on({
        mouseenter: function(e) {
            clearTimeout(c4Timer);
            $('#c4-menu-items').show();
        },
        mouseleave: function() {
            c4Timer = setTimeout(function() { $('#c4-menu-items').hide(); }, 10);
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
showWeatherByLocation();
/*******************************************/

function hasLatAndLongInLocalStorage() {
    return localStorage.getItem('lat') != null && localStorage.getItem('long') != null;
}

function showTime() {
    var now = new Date();
    $('#time').html(formatTime(now));
    $('#date').html(formatDay(now));
    
    var millis = now.getMilliseconds();
    setTimeout('showTime()', 1000 - millis < 10 ? 1000 : 1000 - millis);
}

function showWeatherByLocation(extended = false) {
    if (extended && hasLatAndLongInLocalStorage()) {
        showMoreWeatherData(`${localStorage.getItem('lat')},${localStorage.getItem('long')}`);
        return;
    }
    if (navigator.geolocation) {
        let zip = 93410; // fallback in case lat/long doesn't work
        navigator.geolocation.getCurrentPosition(
            function (pos) {
                var currLat = pos.coords.latitude;
                var currLong = pos.coords.longitude;
                if (hasLatAndLongInLocalStorage()) {
                    var lat = localStorage.getItem('lat');
                    var long = localStorage.getItem('long');
                    var epsilon = 0.001;
                    if (Math.abs(lat - currLat) > epsilon || Math.abs(long - currLong) > epsilon) {
                        getInitialWeatherData(`${currLat},${currLong}`);
                        localStorage.setItem('lat', currLat);
                        localStorage.setItem('long', currLong);
                    } else {
                        getInitialWeatherData(`${lat},${long}`);
                    }
                } else {
                    if (!extended) {
                        getInitialWeatherData(`${currLat},${currLong}`);
                    } else {
                        showMoreWeatherData(`${currLat},${currLong}`);
                    }
                    localStorage.setItem('lat', currLat);
                    localStorage.setItem('long', currLong);
                }
            },
            function (err) {
                if (!extended) {
                    getInitialWeatherData(`${zip}`);
                } else {
                    showMoreWeatherData(`${zip}`);
                }
            },
            {enableHighAccuracy: false, timeout: 8000, maximumAge: 0});
    } else {
        if (!extended) {
            getInitialWeatherData(`${zip}`);
        } else {
            showMoreWeatherData(`${zip}`);
        }
    }
}

function getInitialWeatherData(locationData) {
    //getWeatherData(''); // need to change url to './data.json' to use this
    getWeatherData(`http://api.wunderground.com/api/8d7d14e295f9150a/conditions/forecast10day/q/${locationData}.json`);
}

function showMoreWeatherData(locationData) {
    //getWeatherData('', true); // need to change url to './data.json' to use this
    getWeatherData(`http://api.wunderground.com/api/8d7d14e295f9150a/hourly10day/q/${locationData}.json`, true);
}

function getWeatherData(url, extended = false) {
    jQuery.ajax({
        url: url,
        type: 'GET',
        success: function(resultData) {
            delete resultData.response;
            showWeatherData(resultData, extended);
        },
        error : function(jqXHR, textStatus, errorThrown) {
            console.log('error');
            $('#weather-content').html('Weather data failed to load');
            $('#weather-forecast').html('Weather forecast failed to load');
        },
        timeout: 10000
    });
}

function showWeatherData(resultData, extended = false) {

    if (!extended) {
    
        // current weather --> resultData.current_observation

        $('#weather-header').html(`<div class="weather-title">Weather in ${resultData.current_observation.display_location.city}</div>`);
        $('#weather-content').html(`
            <img src="${resultData.current_observation.icon_url}">
            <div class="current-temp">Temp: ${resultData.current_observation.temp_f}&deg;F
            ${Math.abs(resultData.current_observation.temp_f - resultData.current_observation.feelslike_f) > 1 ?
                `(Feels like ${resultData.current_observation.feelslike_f}&deg;F)` : ''}</div>
            <div class="current-humidity">Humidity: ${resultData.current_observation.relative_humidity}</div>
            <div class="current-wind">${resultData.current_observation.wind_mph > 0 ?
                `Wind: ${resultData.current_observation.wind_mph} mph ${resultData.current_observation.wind_dir}` : ''}</div>`);

        // forecast --> resultData.forecast.simpleforecast.forecastday[0-9]

        var header = '<tr>';
        var body = '<tr>';
        for (let i = 0; i < resultData.forecast.simpleforecast.forecastday.length; i++) {
            header += `<td class="pred-header">${formatForecastDay(resultData.forecast.simpleforecast.forecastday[i].date, true)}</td>`;
            body += `
                <td>
                    <img class="forecast-icon" src="${resultData.forecast.simpleforecast.forecastday[i].icon_url}">
                    <div class="temperature">${resultData.forecast.simpleforecast.forecastday[i].low.fahrenheit}-${resultData.forecast.simpleforecast.forecastday[i].high.fahrenheit}&deg;F</div>
                    <div class="humidity">Hum: ${resultData.forecast.simpleforecast.forecastday[i].avehumidity}%</div>
                </td>`;
        }
        header += '</tr>';
        body += '</tr>';

        $('#weather-forecast').html(`
            <div>
                <span class="weather-title">Forecast</span>
                <span class="show-more-parent">(<a id="show-more">Show complete forecast</a>)</span>
            </div>
            <div id="weather-forecast-data">
                <table>
                    <thead>${header}</thead>
                    <tbody>${body}</tbody>
                </table>
            </div>`);
        
    } else {
        
        // hourly forecast --> resultData.hourly_forecast[0-239]

        let lastDate = formatHourlyForecastDay(resultData.hourly_forecast[0].FCTTIME);
        body += '<td class="pred-first-day pred-detail-top">';
        for (let i = 0; i < resultData.hourly_forecast.length; i++) {
            if (resultData.hourly_forecast[i].FCTTIME.mday - (new Date()).getDate() > 9) {
                body += '</td>';
                break;
            }
            let tempDate = formatHourlyForecastDay(resultData.hourly_forecast[i].FCTTIME);
            if (tempDate !== lastDate) {
                body += '</td><td class="pred-other-days pred-detail-top">';
            }
            body += `<img src="${resultData.hourly_forecast[i].icon_url}"><br>`;
            lastDate = tempDate;
        }
        
        var tableBody = $('#weather-forecast > #weather-forecast-data > table > tbody');
        tableBody.html(`${tableBody.html()}${body}`);
    }
}

$('#weather-forecast').on('click', '#show-more', function() {
    showWeatherByLocation(true);
    $(this).closest('span').remove();
});

function formatHours(date) {
    var hr = date.hour;
    return `${hr > 12 ? hr - 12 : (hr > 0 ? hr : 12)}${date.ampm}`;
}

function formatTime(date, short = false) { // pass in a JavaScript date object
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if (short) {
        return `${hours > 12 ? hours - 12 : (hours > 0 ? hours : 12)}${minutes < 10 ? ':0' : ':'}${minutes}${hours >= 12 ? ' PM' : ' AM'}`;
    } else {
        var seconds = date.getSeconds();
        return `${hours > 12 ? hours - 12 : (hours > 0 ? hours : 12)}${minutes < 10 ? ':0' : ':'}${minutes}${seconds < 10 ? ':0' : ':'}${seconds}${hours >= 12 ? ' PM' : ' AM'}`;
    }
}

function formatDay(date, short = false) { // pass in a JavaScript date object
    var dayOfWeek = date.getDay();
    var month = date.getMonth();
    var day = date.getDate();
    if (short) {
        return `${dayString(dayOfWeek, true)} ${month}/${day}`;
    } else {
        return `${dayString(dayOfWeek)} ${monthString(month)} ${day}, ${date.getFullYear()}`;
    }
}

function formatForecastDay(date) {
    return `${date.weekday_short} ${date.month}/${date.day}`;
}

function formatHourlyForecastDay(date) {
    return `${date.weekday_name_abbrev} ${date.mon}/${date.mday}`;
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