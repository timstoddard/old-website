'use strict';

/** Lat/long data stays until manually reset */
function hasLocationDataInLocalStorage() {
    return get('locationData') !== null;
}

function hasWeatherDataInLocalStorage() {
    return get('weatherData') !== null
        && get('weatherDataTimestamp') !== null;
}

/**
 * Returns true if the timestamp is more than an
 * hour old, or if a new hour has started since
 * the timestamp was set; false otherwise.
 */
function needNewWeatherData() {
    var time1 = Date.now();
    var time2 = get('weatherDataTimestamp');
    if (Math.floor(Math.abs(time2 - time1) / (60 * 1000)) >= 60) {
        return true;
    }
    return new Date(time1).getHours() !== new Date(time2).getHours();
}

function showWeather(extended) {
    if (hasLocationDataInLocalStorage()) {
        if (hasWeatherDataInLocalStorage() && !needNewWeatherData()) {
            showWeatherData(JSON.parse(get('weatherData')));
        } else {
            getWeatherData(get('locationData'), extended);
        }
    } else {
        getLocation(extended);
    }
}

function getLocation(extended) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (pos) {
                var locationData = `${pos.coords.latitude},${pos.coords.longitude}`;
                getWeatherData(locationData, extended);
                localStorage.setItem('locationData', locationData);
            },
            function (err) {
                console.log(err);
                if (hasLocationDataInLocalStorage()) {
                    getWeatherData(get('locationData'), extended);
                } else {
                    getPostalCode(extended);
                }
            }, { enableHighAccuracy: true, timeout: 30000, maximumAge: 0 });
    } else {
        if (hasLocationDataInLocalStorage()) {
                getWeatherData(get('locationData'), extended);
            } else {
            getPostalCode(extended);
        }
    }
}

function getPostalCode(extended) {
    var postalCode = prompt('There was an error determining your location.\nPlease enter your postal code.');
    if (postalCode === null) {
        $('#forecast-title').html('Loading failed.');
        $('#weather-content').html('Weather data failed to load');
        $('#weather-forecast').html('Weather forecast failed to load');
    } else {
        while (!(postalCode.match(/\d{5}/) || postalCode.match(/\d{5}-\d{4}/))) {
            postalCode = prompt('The postal code you entered is invalid.\nPlease enter your 5 digit postal code.');
        }
        getWeatherData(postalCode, extended);
        localStorage.setItem('locationData', postalCode);
    }
}

function getWeatherData(locationData, extended) {
    if (extended) {
        getWeatherDataAjax(`https://api.wunderground.com/api/8d7d14e295f9150a/conditions/forecast10day/astronomy/hourly10day/q/${locationData}.json`, extended);
    } else {
        getWeatherDataAjax(`https://api.wunderground.com/api/8d7d14e295f9150a/conditions/forecast10day/astronomy/q/${locationData}.json`, extended);
    }
}

function getWeatherDataAjax(url, extended) {
    jQuery.ajax({
        url: url,
        type: 'GET',
        success: function(resultData) {
            localStorage.setItem('weatherData', JSON.stringify(resultData));
            localStorage.setItem('weatherDataTimestamp', Date.now());
            showWeatherData(resultData);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $('#forecast-title').html('Loading failed.');
            $('#weather-content').html('Weather data failed to load');
            $('#weather-forecast').html('Weather forecast failed to load');
        },
        timeout: 30000
    });
}

function reloadData() {
    localStorage.clear();
    getLocation(true);
    $('#reload').hide(); // remove this???
}

/* WEATHER IMAGE/ICON FUNCTIONS */

function secureImg(img) {
    return `https://icons.wxug.com/i/c/v4/${img}.svg`;
}

function get(key) {
    return localStorage.getItem(key);
}
