if (location.protocol === 'http:' || location.protocol === 'https:') {
    showWeather();
} else if (location.protocol === 'file:') {
    document.title = `${document.title} (dev)`;
    let n = true ? getDayData() : getNightData();
    // let n = get11pmData();
    console.log(n)
    setTimeout(() => {
        showWeatherData(n)
    }, 1000);
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
    getWeatherResultData(`https://api.wunderground.com/api/8d7d14e295f9150a/conditions/forecast10day/hourly10day/astronomy/q/${locationData}.json`);
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

var afterSunset;
function showWeatherData(resultData) {

    // figure out if it is daytime or nighttime
    let sunData = resultData.sun_phase; // object[sunrise, sunset]
    let now = new Date();
    let currTime = now.getHours() * 60 + now.getMinutes();
    let sunrise = parseInt(sunData.sunrise.hour) * 60 + parseInt(sunData.sunrise.minute);
    let sunset = parseInt(sunData.sunset.hour) * 60 + parseInt(sunData.sunset.minute);
    afterSunset = currTime < sunrise || sunset < currTime;

    // current weather
    let curr = resultData.current_observation; // object
    $('#weather-city').html(`${curr.display_location.city}`);
    if (afterSunset) {
        $('#weather-image').html(`<i style="margin-left:8px;margin-right:8px;" class="wi wi-${iconMap(parseIconUrl(curr.icon_url))}"></i>`);
    } else {
        $('#weather-image').html(`<img id="weather-img" src="${secureImg(curr.icon_url)}">`);
    }
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
    let lastHour = new Date(forecast[0].date.epoch * 1000).getDate() !== new Date(hForecast[0].FCTTIME.epoch * 1000).getDate(); // checks to see if data is from 11pm - 11:59pm
    for (let i = lastHour ? 1 : 0; i < forecast.length; i++) {
        tbod +=
            `<tr><td>
                <div class="pred-header">${formatForecastDay(forecast[i].date)}</div>
                <div class="temperature">${forecast[i].low.fahrenheit}-${forecast[i].high.fahrenheit}&deg;F</div>
                <div class="humidity"><span>${forecast[i].avehumidity}%</span></div>
            </td>`;
        for (let j = 0; j < new Date(hForecast[index].FCTTIME.epoch * 1000).getHours(); j++) {
            tbod += '<td>-</td>';
        }
        let currDate = new Date(forecast[i].date.epoch * 1000).getDate();
        while (new Date(hForecast[index].FCTTIME.epoch * 1000).getDate() === currDate) {
            let imgString;
            if (afterSunset) {
                imgString = `<i class="wi wi-${iconMap(parseIconUrl(hForecast[index].icon_url))}"></i>`;
            } else {
                imgString = `<img id="forecast-img" src="${secureImg(hForecast[index].icon_url)}">`;
            }
            // html stuff
            tbod +=
                `<td
                    onmouseover="
                        $('#weather-details').show();
$('#weather-details').html('<div>${formatHourlyForecastDay(hForecast[index].FCTTIME)} - ${formatHours(hForecast[index].FCTTIME)}</div><div><span>${hForecast[index].temp.english}&deg;F</span> <span>${hForecast[index].humidity}%</span></div><div>${hForecast[index].wspd.english} mph ${hForecast[index].wdir.dir}</div>');if(afterSunset){$('#weather-details div:nth-child(1)').css({ 'color': '#ACB0BD' });}"
                    onmouseout="
                        $('#weather-details').hide();
                        $('#weather-details').html('');">
                    ${imgString}
                </td>`;
            index++;
        }
        tbod += '</tr>';
    }

    $('#forecast-body').html(tbod);
    
    // add title/table-border styles after loading data so the loading screen doesnt look weird
    $('#forecast-title').css({
        'background-color': '#f2f2f2',
        'border-left': '10px solid #c0c0c0',
        'border-right': '10px solid #c0c0c0',
        'border-top': '10px solid #c0c0c0',
        'border-top-left-radius': '10px',
        'border-top-right-radius': '10px',
        'box-shadow': '2.5px 2.5px 3px #595959',
        'padding': '0px 12px'
    });
    $('.table-border').css({ 'display': 'inline-block' });
    
    // set opacity of the daily humidity forecast background
    $('.humidity').each(function() {
        let text = $(this).text();
        let str = text.substring(0, text.length - 1);
        $(this).css({ 'background': `rgba(128, 128, 255, ${parseInt(str) / 100})` });
    });

    // set different color scheme if it is nighttime
    if (afterSunset) {
        $('body').css({ 'background': '#161669' });
        $('#forecast-title, #weather-city').css({ 'color': '#ACB0BD' });
        $('#forecast-title, #current-temp, #current-humidity, #current-wind, .table-border, #weather-details').css({ 'box-shadow': 'none' });
        $('#forecast-title, td, i').css({ 'color': '#ACB0BD' });
        $('#forecast-title, td').css({ 'background': '#111155' });
        $('td').hover(
            function() {
                $(this).css({
                    'background': '#0d0d40',
                    'color': '#75377B'
                });
                $(this).children().css({ 'color': '#75377B' });
            },
            function() {
                $(this).css({
                    'background': '#111155',
                    'color': '#ACB0BD'
                });
                $(this).children().css({ 'color': '#ACB0BD' });
            }
        );
        $('td').css({ 'border-color': '#2424a8' });
        $('i').css({ 'font-size': '1.8em', 'margin': '0 3px' });
        $('#weather-image i').css({ 'font-size': '250%', 'margin': '0 5px' });
        $('.temperature, .humidity').css({ 'background': 'none', 'border': 'none' });
        $('#weather-details').css({ 'background': 'none', 'border': '1px solid #ACB0BD' });
        $('#weather-details div :nth-child(1)').css({ 'color': '#ACB0BD' });
        console.log($('#weather-details').html());
    }

}

function secureImg(str) {
    if (str.indexOf('http') > -1 && str.indexOf('https') === -1) {
        return `https${str.substring(4, str.length)}`;
    }
}

function iconMap(str) {
    switch(str) {
        // flurries
        case 'flurries':
        case 'chanceflurries':
            return 'day-snow-wind';
        case 'nt_flurries':
        case 'nt_chanceflurries':
            return 'night-alt-snow-wind';
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
        // cloudy
        case 'cloudy':
        case 'mostlycloudy':
        case 'partlycloudy':
            return 'day-cloudy';
        case 'nt_cloudy':
        case 'nt_mostlycloudy':
        case 'nt_partlycloudy':
            return 'night-alt-cloudy';
        // hazy
        case 'hazy':
            return 'day-haze';
        case 'nt_hazy':
            return 'night-alt-cloudy';
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
        // default
        default:
            if (str.substr(0, 2) === 'nt') {
                return 'night-clear';
            } else {
                return 'day-sunny';
            }
    }
}

function parseIconUrl(str) {
    let start = str.lastIndexOf('/');
    let end = str.lastIndexOf('.');
    return str.substring(start + 1, end);
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


/**
 * -- DAY --
 * chanceflurries
 * chancerain
 * chancesleat
 * chancesnow
 * chancetstorms
 * clear
 * cloudy
 * flurries
 * hazy
 * mostlycloudy
 * mostlysunny
 * partlycloudy
 * partlysunny
 * rain
 * sleat
 * snow
 * sunny
 * tstorms
 * unknown
 * 
 * -- NIGHT --
 * nt_chanceflurries
 * nt_chancerain
 * nt_chancesleat
 * nt_chancesnow
 * nt_chancetstorms
 * nt_clear
 * nt_cloudy
 * nt_flurries
 * nt_hazy
 * nt_mostlycloudy
 * nt_mostlysunny
 * nt_partlycloudy
 * nt_partlysunny
 * nt_rain
 * nt_sleat
 * nt_snow
 * nt_sunny
 * nt_tstorms
 * nt_unknown
 */