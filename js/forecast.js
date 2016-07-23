'use strict';

if (location.protocol === 'http:' || location.protocol === 'https:') {
    showWeather(true);
} else if (location.protocol === 'file:') {
    document.title = `${document.title} (dev)`;
    var n = true ? getDayData() : getNightData();
    // var n = get11pmData();
    console.log(n)
    setTimeout(() => {showWeatherData(n)}, 1000);
}

var afterSunset;

function showWeatherData(resultData) {

    // figure out if it is daytime or nighttime
    var sunData = resultData.sun_phase; // object[sunrise, sunset]
    var now = new Date();
    var currTime = now.getHours() * 60 + now.getMinutes();
    var sunrise = parseInt(sunData.sunrise.hour) * 60 + parseInt(sunData.sunrise.minute);
    var sunset = parseInt(sunData.sunset.hour) * 60 + parseInt(sunData.sunset.minute);
    afterSunset = currTime < sunrise || sunset < currTime;

    // current weather
    var curr = resultData.current_observation; // object
    $('#weather-city').html(`${curr.display_location.city}`);
    if (afterSunset) {
        $('#weather-image').html(`<i style="margin-left:8px;margin-right:8px;" class="wi wi-${iconMap(parseIconUrl(curr.icon_url))}"></i>`);
    } else {
        $('#weather-image').html(`<img id="weather-img" src="${secureImg(curr.icon_url)}">`);
    }
    var showReloadIconTimer;
    $('#weather-city, #weather-image').hover(
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
                $('#reload').hide(); // animate this
            }, 3000);
        }
    );
    $('#current-temp').html(`${curr.temp_f}&deg;F
        ${Math.abs(curr.temp_f - curr.feelslike_f) > 2 ? `(Feels like ${curr.feelslike_f}&deg;F)` : ''}`);
    $('#current-humidity').html(`${curr.relative_humidity}`);
    $('#current-wind').html(`${curr.wind_mph > 0 ? `${curr.wind_mph} mph ${curr.wind_dir}` : ''}`);
    $('#forecast-title').html('Forecast');
    
    // forecast table header
    var thead = '<td>Day</td>';
    for (var i = 0; i < 24; i++) {
        thead += `<td class="col-${i + 1} row-1">${i % 12 === 0 ? 12 : i % 12}<span class="small-text">${i < 12 ? 'AM' : 'PM'}</span></td>`;
    }
    $('#forecast-head').html(`<tr>${thead}</tr>`);

    // 10 day hourly forecast
    var forecast = resultData.forecast.simpleforecast.forecastday; // array[0 - 9]
    var hForecast = resultData.hourly_forecast; // array[0 - 239]
    var tbod = '';
    var index = 0;
    // checks to see if data is from 11pm - 11:59pm
    var lastHour = new Date(forecast[0].date.epoch * 1000).getDate() !== new Date(hForecast[0].FCTTIME.epoch * 1000).getDate();     
    for (var i = lastHour ? 1 : 0; i < forecast.length; i++) {
        tbod +=
            `<tr><td>
                <div class="pred-header">${formatForecastDay(forecast[i].date)}</div>
                <div class="temperature">${forecast[i].low.fahrenheit}-${forecast[i].high.fahrenheit}&deg;F</div>
                <div class="humidity"><span>${forecast[i].avehumidity}%</span></div>
            </td>`;
        for (var j = 0; j < new Date(hForecast[index].FCTTIME.epoch * 1000).getHours(); j++) {
            tbod += '<td class="unselectable" unselectable="on">-</td>';
        }
        var currDate = new Date(forecast[i].date.epoch * 1000).getDate();
        while (new Date(hForecast[index].FCTTIME.epoch * 1000).getDate() === currDate) {
            var imgString;
            if (afterSunset) {
                imgString = `<i class="wi wi-${iconMap(parseIconUrl(hForecast[index].icon_url))}"></i>`;
            } else {
                imgString = `<img id="forecast-img" src="${secureImg(hForecast[index].icon_url)}">`;
            }
            // html stuff
            tbod +=
                `<td class="night-hover"
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
        var text = $(this).text();
        var str = text.substring(0, text.length - 1);
        $(this).css({ 'background': `rgba(128, 128, 255, ${parseInt(str) / 100})` });
    });

    // set different color scheme if it is nighttime
    if (afterSunset) {
        $('body').css({ 'background': '#161669' });
        $('#forecast-title, #weather-city').css({ 'color': '#ACB0BD' });
        $('#forecast-title, #current-temp, #current-humidity, #current-wind, .table-border, #weather-details').css({ 'box-shadow': 'none' });
        $('#forecast-title, td, i').css({ 'color': '#ACB0BD' });
        $('#forecast-title, td').css({ 'background': '#111155' });
        $('td.night-hover').hover(
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
        $('td').css({
            'border-color': '#2424a8',
            'min-width': '45px',
            'width': '45px'
        });
        $('i').css({ 'font-size': '1.8em', 'margin': '0 3px' });
        $('#weather-image i').css({ 'font-size': '250%', 'margin': '0 5px' });
        $('.temperature, .humidity').css({ 'background': 'none', 'border': 'none' });
        $('#weather-details').css({ 'background': '#161669', 'border': '1px solid #ACB0BD' });
        $('#weather-details div :nth-child(1)').css({ 'color': '#ACB0BD' });
    }

}

function formatForecastDay(date) {
    return `${date.weekday_short} ${date.month}/${date.day}`;
}

function formatHourlyForecastDay(date) {
    return `${date.weekday_name_abbrev} ${date.mon}/${date.mday}`;
}

function formatHours(date) {
    var hr = date.hour;
    return `${hr > 12 ? hr - 12 : (hr > 0 ? hr : 12)} ${date.ampm}`;
}
