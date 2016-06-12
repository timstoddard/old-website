function setBackground() {
    // set background based on whether it is currently day/night
    if (location.protocol === 'http:' || location.protocol === 'https:') {
        var data = JSON.parse(localStorage.getItem('weatherData'));
    } else if (location.protocol === 'file:') {
        document.title = `${document.title} (dev)`;
        let n = true ? getDayData() : getNightData();
        console.log(n)
        console.log(n)
        data = n;
    }
    if (!data) {
        return;
    }
    let now = new Date();
    let sunData = data.sun_phase; // object[sunrise, sunset]
    let currTime = now.getHours() * 60 + now.getMinutes();
    let sunrise = parseInt(sunData.sunrise.hour) * 60 + parseInt(sunData.sunrise.minute);
    let sunset = parseInt(sunData.sunset.hour) * 60 + parseInt(sunData.sunset.minute);
    if (currTime < sunrise || sunset < currTime) {
        $('body').css({ 'background': '#161669' });
        $('#time').css({ 'color': '#ACB0BD' });
    }
}

function showTime() {
    var now = new Date();
    var hours = now.getHours(); var minutes = now.getMinutes(); var seconds = now.getSeconds();
    var timeValue = '' + ((hours > 12) ? hours - 12 : (hours > 0 ? hours : 12));
    timeValue  += ((minutes < 10) ? ':0' : ':') + minutes;
    timeValue  += ((seconds < 10) ? ':0' : ':') + seconds;
    timeValue  += (hours >= 12) ? ' PM' : ' AM';
    $('#time').html(timeValue);
    var millis = now.getMilliseconds();
    var run = setTimeout('showTime()', 1000 - millis < 10 ? 1000 : 1000 - millis);
}

setBackground();
showTime();