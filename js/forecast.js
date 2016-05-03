$(function(){ $('#weather-details').hide(); });
showWeather();

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
            if (localStorage.getItem('weatherDataType') !== 'Extended') {
                showWeatherByLocation();
            } else {
                showWeatherData(JSON.parse(localStorage.getItem('weatherData')));
            }
        } else {
            showWeatherByLocation();
        }
    } else {
        showWeatherByLocation();
    }
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
                    $('#forecast-title').html('Loading failed.');
                    $('#weather-content').html('Weather data failed to load');
                    $('#weather-forecast').html('Weather forecast failed to load');
                    return;
                }
                getWeatherData(zip.replace(/[^0-9]/g, ''));
            }, {enableHighAccuracy: false, timeout: 15000, maximumAge: 0});
    } else {
        if (posErrCount > 0) return;
        posErrCount++;
        var zip = prompt('There was an error determining your location.\nPlease enter your zip code.');
        if (zip === null) {
            $('#forecast-title').html('Loading failed.');
            $('#weather-content').html('Weather data failed to load');
            $('#weather-forecast').html('Weather forecast failed to load');
            return;
        }
        getWeatherData(zip.replace(/[^0-9]/g, ''));
    }
}

function getWeatherData(locationData) {
    //getWeatherResultData('../data.json');
    getWeatherResultData(`https://api.wunderground.com/api/8d7d14e295f9150a/conditions/forecast10day/hourly10day/q/${locationData}.json`, true);
}

function getWeatherResultData(url) {
    if (hasWeatherDataInLocalStorage()
            && dateDiffMins(localStorage.getItem('weatherDataTimestamp'), Date.now()) <= 30
            && localStorage.getItem('weatherDataType') === 'Extended') {
        showWeatherData(JSON.parse(localStorage.getItem('weatherData')));
        return;
    }
    jQuery.ajax({
        url: url,
        type: 'GET',
        success: function(resultData) {
            if (hasWeatherDataInLocalStorage()) {
                if (dateDiffMins(localStorage.getItem('weatherDataTimestamp'), Date.now()) > 30
                        || localStorage.getItem('weatherDataType') !== 'Extended') {
                    localStorage.setItem('weatherData', JSON.stringify(resultData));
                    localStorage.setItem('weatherDataTimestamp', Date.now());
                    localStorage.setItem('weatherDataType', 'Extended');
                }
            } else {
                localStorage.setItem('weatherData', JSON.stringify(resultData));
                localStorage.setItem('weatherDataTimestamp', Date.now());
                localStorage.setItem('weatherDataType', 'Extended');
            }
            showWeatherData(resultData);
        },
        error : function(jqXHR, textStatus, errorThrown) {
            $('#forecast-title').html('Loading failed.');
            $('#weather-content').html('Weather data failed to load');
            $('#weather-forecast').html('Weather forecast failed to load');
        },
        timeout: 10000
    });
}

function showWeatherData(resultData) {

    // current weather
    let curr = resultData.current_observation; // object
    $('#weather-city').html(`${curr.display_location.city}: `);
    $('#weather-img').attr('src', secureImg(curr.icon_url));
    $('#current-temp').html(`${curr.temp_f}&deg;F
        ${Math.abs(curr.temp_f - curr.feelslike_f) > 2 ? `(Feels like ${curr.feelslike_f}&deg;F)` : ''}`);
    $('#current-humidity').html(`${curr.relative_humidity}`);
    $('#current-wind').html(`${curr.wind_mph > 0 ? `${curr.wind_mph} mph ${curr.wind_dir}` : ''}`);
    $('#forecast-title').html('Forecast');

    // daily forecast
    let forecast = resultData.forecast.simpleforecast.forecastday; // array[0 - 9]
    var header = '';
    var upperBody = '';
    for (let i = 0; i < forecast.length; i++) {
        header += `<td class="pred-header">${formatForecastDay(forecast[i].date)}</td>`;
        upperBody += `
            <td>
                <img class="forecast-icon" src="${secureImg(forecast[i].icon_url)}">
                <div class="temperature-low">${forecast[i].low.fahrenheit}&deg;F</div>
                <div class="temperature-high">${forecast[i].high.fahrenheit}&deg;F</div>
                <div class="humidity"><span>${forecast[i].avehumidity}%</span></div>
            </td>`;
    }

    $('#forecast-header').html(`<tr>${header}</tr>`);

    // hourly forecast
    let hForecast = resultData.hourly_forecast; // array[0 - 239]
    let lastDate = formatHourlyForecastDay(hForecast[0].FCTTIME);
    let daysCount = 1;
    var lowerBody = '<td class="pred-first-day pred-detail-top">';
    for (let i = 0; i < hForecast.length; i++) {
        if (daysCount > 10) {
            lowerBody += '</td>';
            break;
        }
        let tempDate = formatHourlyForecastDay(hForecast[i].FCTTIME);
        if (tempDate !== lastDate) {
            lowerBody += '</td><td class="pred-other-days pred-detail-top">';
            daysCount++;
        }
        lowerBody += `
            <div class="forecast-img-wrapper"
                onmouseover="
                        $('#weather-details').show();
$('#weather-details').html('<span>${tempDate}</span><span>${formatHours(hForecast[i].FCTTIME)}</span><span><div>${hForecast[i].temp.english}&deg;F</div></span><span><div>${hForecast[i].humidity}%</div></span><span><div>${hForecast[i].wspd.english} mph ${hForecast[i].wdir.dir}</div></span>');"
                    onmouseout="
                        $('#weather-details').hide();
                        $('#weather-details').html('');">
                <img class="forecast-img" src="${secureImg(hForecast[i].icon_url)}">
            </div>`;
        lastDate = tempDate;
    }

    $('#forecast-body').html(`<tr>${upperBody}</tr><tr>${lowerBody}</tr>`);

    // get rid of any extraneous extra rows
    while ($('table').children('tbody').children('tr').children('td').length > 20) {
        $('table').find("tr:last").find("td:last").remove();
    }

    // set opacity of the daily humidity forecast background
    $('.humidity').each(function() {
        let text = $(this).text();
        let str = text.substring(0, text.length - 1);
        $(this).css({background: `rgba(128, 128, 255, ${parseInt(str) / 100})`});
    });
}

function secureImg(str) {
    if (str.indexOf('http:') > -1 && str.indexOf('https:') === -1) {
        return `https${str.substring(4, str.length)}`;
    }
}

function formatForecastDay(date) {
    return `${date.weekday_short}<br>${date.month}/${date.day}`;
}

function formatHourlyForecastDay(date) {
    return `${date.weekday_name_abbrev} ${date.mon}/${date.mday}`;
}

function formatHours(date) {
    var hr = date.hour;
    return `${hr > 12 ? hr - 12 : (hr > 0 ? hr : 12)} ${date.ampm}`;
}