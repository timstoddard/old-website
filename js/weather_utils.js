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

/* WEATHER IMAGE/ICON FUNCTIONS */

function parseIconUrl(str) {
    var start = str.lastIndexOf('/');
    var end = str.lastIndexOf('.');
    return str.substring(start + 1, end);
}

function secureImg(str) {
    if (str.indexOf('http') > -1 && str.indexOf('https') === -1) {
        return `https${str.substring(4, str.length)}`;
    }
}

function iconMap(str) {
    switch(str) {
        // clear
        case 'clear':
        case 'sunny':
            return 'day-sunny';
        case 'mostlysunny':
        case 'partlysunny':
            return 'day-sunny-overcast';
        case 'nt_clear':
        case 'nt_sunny':
            return 'night-clear';
        // cloudy
        case 'cloudy':
        case 'mostlycloudy':
        case 'partlycloudy':
            return 'day-cloudy';
        case 'nt_cloudy':
        case 'nt_mostlycloudy':
        case 'nt_partlycloudy':
            return 'night-alt-cloudy';
        // flurries
        case 'flurries':
        case 'chanceflurries':
            return 'day-snow-wind';
        case 'nt_flurries':
        case 'nt_chanceflurries':
            return 'night-alt-snow-wind';
        // hazy
        case 'hazy':
            return 'day-haze';
        case 'nt_hazy':
            return 'night-alt-cloudy';
        // rain
        case 'rain':
            return 'day-rain';
        case 'chancerain':
            return 'day-showers';
        case 'nt_rain':
            return 'night-rain';
        case 'nt_chancerain':
            return 'night-alt-showers';
        // sleet
        case 'sleat':
        case 'chancesleat':
            return 'day-sleet';
        case 'nt_sleat':
        case 'nt_chancesleat':
            return 'night-alt-sleet';
        // snow
        case 'snow':
        case 'chancesnow':
            return 'snow';
        case 'nt_snow':
        case 'nt_chancesnow':
            return 'night-alt-snow';
        // thunderstorms
        case 'tstorms':
        case 'chancetstorms':
            return 'thunderstorm';
        case 'nt_tstorms':
        case 'nt_chancetstorms':
            return 'night-alt-thunderstorm';
        // default
        default:
            if (str.substr(0, 2) === 'nt') {
                return 'night-clear';
            } else {
                return 'day-sunny';
            }
    }
}

function get(key) {
    return localStorage.getItem(key);
}
