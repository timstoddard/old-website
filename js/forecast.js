$(function(){ $('#weather-details').hide(); });

if (location.protocol === 'http:' || location.protocol === 'https:') {
    showWeather();   
} else if (location.protocol === 'file:') {
    console.log(getData())
    showWeatherData(getData());
}

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
                let currLat = pos.coords.latitude;
                let currLong = pos.coords.longitude;
                if (hasLatAndLongInLocalStorage()) {
                    let lat = localStorage.getItem('lat');
                    let long = localStorage.getItem('long');
                    let epsilon = 0.001;
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
                let zip = prompt('There was an error determining your location.\nPlease enter your zip code.');
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
        let zip = prompt('There was an error determining your location.\nPlease enter your zip code.');
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
    $('#weather-city').html(`${curr.display_location.city}`);
    $('#weather-img').attr('src', secureImg(curr.icon_url));
    $('#current-temp').html(`${curr.temp_f}&deg;F
        ${Math.abs(curr.temp_f - curr.feelslike_f) > 2 ? `(Feels like ${curr.feelslike_f}&deg;F)` : ''}`);
    $('#current-humidity').html(`${curr.relative_humidity}`);
    $('#current-wind').html(`${curr.wind_mph > 0 ? `${curr.wind_mph} mph ${curr.wind_dir}` : ''}`);
    $('#forecast-title').html('Forecast');
    
    // forecast table header
    let thead = '<td>Day</td>';
    for (let i = 0; i < 24; i++) {
        thead += `<td class="col-${i + 1} row-1">${i % 12 === 0 ? 12 : i % 12}<span class="small-text">${i < 12 ? 'AM' : 'PM'}</span></td>`;
    }
    $('#forecast-head').html(`<tr>${thead}</tr>`);

    // 10 day hourly forecast
    let forecast = resultData.forecast.simpleforecast.forecastday; // array[0 - 9]
    let hForecast = resultData.hourly_forecast; // array[0 - 239]
    let tbod = '';
    let index = 0;
    for (let i = 0; i < forecast.length; i++) {
        tbod +=
            `<tr><td>
                <div class="pred-header">${formatForecastDay(forecast[i].date)}</div>
                <div class="temperature">${forecast[i].low.fahrenheit}-${forecast[i].high.fahrenheit}&deg;F</div>
                <div class="humidity"><span>${forecast[i].avehumidity}%</span></div>
            </td>`;
        let currDate = new Date(forecast[i].date.epoch * 1000).getDate();
        if (i === 0) {
            for (let j = 0; j < new Date(hForecast[index].FCTTIME.epoch * 1000).getHours(); j++) {
                tbod += '<td>-</td>';
            }
        }
        while (new Date(hForecast[index].FCTTIME.epoch * 1000).getDate() === currDate) {
            // html stuff
            tbod +=
                `<td
                    onmouseover="
                        $('#weather-details').show();
$('#weather-details').html('<div>${formatHourlyForecastDay(hForecast[index].FCTTIME)} - ${formatHours(hForecast[index].FCTTIME)}</div><div><span>${hForecast[index].temp.english}&deg;F</span> <span>${hForecast[index].humidity}%</span></div><div>${hForecast[index].wspd.english} mph ${hForecast[index].wdir.dir}</div>');"
                    onmouseout="
                        $('#weather-details').hide();
                        $('#weather-details').html('');">
                    <img class="forecast-img" src="${secureImg(hForecast[index].icon_url)}">
                </td>`;
            index++;
        }
        tbod += '</tr>';
        // console.log(new Date(forecast[i].date.epoch * 1000).getDate())
    }

    $('#forecast-body').html(tbod);

    // set extra styles on forecast title
    $('#forecast-title').css({
        'border-left': '10px solid #c0c0c0',
        'border-right': '10px solid #c0c0c0',
        'border-top': '10px solid #c0c0c0',
        'border-top-left-radius': '10px',
        'border-top-right-radius': '10px',
        'padding': '0px 12px'
    })
    
    // set opacity of the daily humidity forecast background
    $('.humidity').each(function() {
        let text = $(this).text();
        let str = text.substring(0, text.length - 1);
        $(this).css({ 'background': `rgba(128, 128, 255, ${parseInt(str) / 100})` });
    });
}

function secureImg(str) {
    if (str.indexOf('http') > -1 && str.indexOf('https') === -1) {
        return `https${str.substring(4, str.length)}`;
    }
}

function formatForecastDay(date) {
    return `${date.weekday_short} ${date.month}/${date.day}`;
}

function formatHourlyForecastDay(date) {
    return `${date.weekday_name_abbrev} ${date.mon}/${date.mday}`;
}

function formatHours(date) {
    let hr = date.hour;
    return `${hr > 12 ? hr - 12 : (hr > 0 ? hr : 12)} ${date.ampm}`;
}