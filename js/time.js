function showTime() {
    var now = new Date();
    var hours = now.getHours(); var minutes = now.getMinutes(); var seconds = now.getSeconds();
    var timeValue = '' + ((hours > 12) ? hours - 12 : (hours > 0 ? hours : 12));
    timeValue  += ((minutes < 10) ? ':0' : ':') + minutes;
    timeValue  += ((seconds < 10) ? ':0' : ':') + seconds;
    timeValue  += (hours >= 12) ? ' PM' : ' AM';
    document.getElementById('time').innerHTML = timeValue;
    var millis = now.getMilliseconds();
    var run = setTimeout('showTime()', 1000 - millis < 10 ? 1000 : 1000 - millis);
}

showTime();