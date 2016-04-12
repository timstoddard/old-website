"use strict";

$(function() {
    
    $('.outer-right').hide();
    $('#c1-menu-items, #c2-menu-items, #c3-menu-items, #c4-menu-items').hide();
    
    $(window).keydown(function(event) {
        var key = event.which;
        if (key === 83) { // 's' key
            if (($('#myModal').data('bs.modal') || {}).isShown) {
                return;
            }
            showModalText();
            $('#myModal').modal();
            $('#name-input').focus();
            setTimeout(function() { $('#name-input').val(''); }, 0);
            $('.outer-right').hide();
        } else if (key === 87) { // 'w' key
            if (!$('#myModal').is(':visible')) {
                $('.outer-right').toggle();
            }
        } else if (key === 27) { // esc key
            $('.outer-right').hide();
        }
    });
    
    $('#name-input').keypress(function (event) {
        var keynum = event.which;
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
    {'key': 'i', 'url': 'http://www.imdb.com/find?s=all&q=', 'name': 'IMDb'},
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
    if (index === -1) return;
    
    let name = url.substring(index + 1).trim();
    if (name.length == 0) return;
    
    try { name = decodeURIComponent(name); }
    catch(err) { return; }
    
    $('#welcome').html(`Welcome, ${name}!`);
}

/**********   CALL METHODS HERE   **********/
checkForCustomName();
showTime();
showWeather();
// NOTE: Lat/long data lasts for an hour before it is refreshed. Weather data lasts for 30 mins.
/*******************************************/

function hasLatAndLongInLocalStorage() {
    return localStorage.getItem('lat') !== null
        && localStorage.getItem('long') !== null
        && localStorage.getItem('latLongTimestamp') !== null;
}

function hasWeatherDataInLocalStorage() {
    return localStorage.getItem('weatherData') !== null
        && localStorage.getItem('weatherDataTimestamp') !== null
        && localStorage.getItem('weatherDataType') !== null;
}

function dateDiffMins(date1, date2) {
    return Math.floor(Math.abs(date2 - date1) / (60 * 1000));
}

function showWeather() { // time before update: 30m
    if (hasWeatherDataInLocalStorage()) {
        if (dateDiffMins(localStorage.getItem('weatherDataTimestamp'), Date.now()) <= 30) {
            showWeatherData(JSON.parse(localStorage.getItem('weatherData')));
        } else {
            showWeatherByLocation();
        }
    } else {
        showWeatherByLocation();
    }
}

function showTime() {
    var now = new Date();
    $('#time').html(formatTime(now));
    $('#date').html(formatDay(now));
    
    var millis = now.getMilliseconds();
    setTimeout('showTime()', 1000 - millis < 10 ? 1000 : 1000 - millis);
}

function showWeatherByLocation() {
    let posErrCount = 0;
    if (hasLatAndLongInLocalStorage()
            && dateDiffMins(localStorage.getItem('latLongTimestamp'), Date.now()) <= 60) {
        getWeatherData(`${localStorage.getItem('lat')},${localStorage.getItem('long')}`);
        return;
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (pos) {
                var currLat = pos.coords.latitude;
                var currLong = pos.coords.longitude;
                if (hasLatAndLongInLocalStorage()) {
                    var lat = localStorage.getItem('lat');
                    var long = localStorage.getItem('long');
                    var epsilon = 0.001;
                    if (Math.abs(lat - currLat) > epsilon
                            || Math.abs(long - currLong) > epsilon) {
                        getWeatherData(`${currLat},${currLong}`);
                        localStorage.setItem('lat', currLat);
                        localStorage.setItem('long', currLong);
                        localStorage.setItem('latLongTimestamp', Date.now());
                    } else {
                        getWeatherData(`${lat},${long}`);
                    }
                } else {
                    getWeatherData(`${currLat},${currLong}`);
                    localStorage.setItem('lat', currLat);
                    localStorage.setItem('long', currLong);
                    localStorage.setItem('latLongTimestamp', Date.now());
                }
            },
            function (err) {
                console.log(err);
                if (posErrCount > 0) return;
                posErrCount++;
                var zip = prompt('There was an error determining your location.\nPlease enter your zip code.');
                if (!zip) {
                    $('#weather-content').html('Weather data failed to load');
                    $('#weather-forecast').html('Weather forecast failed to load');
                    return;
                }
                getWeatherData(zip.replace(/[^0-9]/g, ''));
            }, {enableHighAccuracy: false, timeout: 8000, maximumAge: 0});
    } else {
        if (posErrCount > 0) return;
        posErrCount++;
        var zip = prompt('There was an error determining your location.\nPlease enter your zip code.');
        if (zip === null) {
            $('#weather-content').html('Weather data failed to load');
            $('#weather-forecast').html('Weather forecast failed to load');
            return;
        }
        getWeatherData(zip.replace(/[^0-9]/g, ''));
    }
}

function getWeatherData(locationData) {
    //getWeatherResultData('data.json', true);
    getWeatherResultData(`http://api.wunderground.com/api/8d7d14e295f9150a/conditions/forecast10day/q/${locationData}.json`);
}

function getWeatherResultData(url) {
    if (hasWeatherDataInLocalStorage() && dateDiffMins(localStorage.getItem('weatherDataTimestamp'), Date.now()) <= 30) {
        showWeatherData(JSON.parse(localStorage.getItem('weatherData')));
        return;
    }
    jQuery.ajax({
        url: url,
        type: 'GET',
        success: function(resultData) {
            if (hasWeatherDataInLocalStorage()) {
                if (dateDiffMins(localStorage.getItem('weatherDataTimestamp'), Date.now()) > 30) {
                    localStorage.setItem('weatherData', JSON.stringify(resultData));
                    localStorage.setItem('weatherDataTimestamp', Date.now());
                    localStorage.setItem('weatherDataType', 'Regular');
                }
            } else {
                localStorage.setItem('weatherData', JSON.stringify(resultData));
                localStorage.setItem('weatherDataTimestamp', Date.now());
                localStorage.setItem('weatherDataType', 'Regular');
            }
            showWeatherData(resultData);
        },
        error : function(jqXHR, textStatus, errorThrown) {
            $('#weather-content').html('Weather data failed to load');
            $('#weather-forecast').html('Weather forecast failed to load');
        },
        timeout: 10000
    });
}

function showWeatherData(resultData) {
    
    // current weather --> resultData.current_observation

    $('#weather-header').html(`<div class="weather-title">Weather in ${resultData.current_observation.display_location.city}</div>`);
    $('#weather-content').html(`
        <img src="${resultData.current_observation.icon_url}">
        <div class="current-temp">Temp: ${resultData.current_observation.temp_f}&deg;F
        ${Math.abs(resultData.current_observation.temp_f - resultData.current_observation.feelslike_f) > 2 ?
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
        <div class="weather-title"><a href="../forecast.html" data-toggle="tooltip" data-placement="right" title="See Full Forecast">Forecast</a></div>
        <div id="weather-forecast-data">
            <table>
                <thead>${header}</thead>
                <tbody>${body}</tbody>
            </table>
        </div>`);
    $('[data-toggle="tooltip"]').tooltip();
}

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