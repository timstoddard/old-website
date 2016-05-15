function getData() {
	return (
{
  "response": {
  "version":"0.1",
  "termsofService":"http://www.wunderground.com/weather/api/d/terms.html",
  "features": {
  "conditions": 1
  ,
  "forecast10day": 1
  ,
  "hourly10day": 1
  ,
  "astronomy": 1
  }
	}
  ,	"current_observation": {
		"image": {
		"url":"http://icons.wxug.com/graphics/wu2/logo_130x80.png",
		"title":"Weather Underground",
		"link":"http://www.wunderground.com"
		},
		"display_location": {
		"full":"San Luis Obispo, CA",
		"city":"San Luis Obispo",
		"state":"CA",
		"state_name":"California",
		"country":"US",
		"country_iso3166":"US",
		"zip":"93410",
		"magic":"1",
		"wmo":"99999",
		"latitude":"35.27483749",
		"longitude":"-120.73859406",
		"elevation":"185.00000000"
		},
		"observation_location": {
		"full":"Emerald Hill, San Luis Obispo, California",
		"city":"Emerald Hill, San Luis Obispo",
		"state":"California",
		"country":"US",
		"country_iso3166":"US",
		"latitude":"35.266674",
		"longitude":"-120.709610",
		"elevation":"249 ft"
		},
		"estimated": {
		},
		"station_id":"KCASANLU57",
		"observation_time":"Last Updated on May 14, 8:30 PM PDT",
		"observation_time_rfc822":"Sat, 14 May 2016 20:30:22 -0700",
		"observation_epoch":"1463283022",
		"local_time_rfc822":"Sat, 14 May 2016 20:34:02 -0700",
		"local_epoch":"1463283242",
		"local_tz_short":"PDT",
		"local_tz_long":"America/Los_Angeles",
		"local_tz_offset":"-0700",
		"weather":"Clear",
		"temperature_string":"57.9 F (14.4 C)",
		"temp_f":57.9,
		"temp_c":14.4,
		"relative_humidity":"88%",
		"wind_string":"From the WNW at 11.3 MPH Gusting to 16.0 MPH",
		"wind_dir":"WNW",
		"wind_degrees":284,
		"wind_mph":11.3,
		"wind_gust_mph":"16.0",
		"wind_kph":18.2,
		"wind_gust_kph":"25.7",
		"pressure_mb":"1014",
		"pressure_in":"29.95",
		"pressure_trend":"0",
		"dewpoint_string":"54 F (12 C)",
		"dewpoint_f":54,
		"dewpoint_c":12,
		"heat_index_string":"NA",
		"heat_index_f":"NA",
		"heat_index_c":"NA",
		"windchill_string":"NA",
		"windchill_f":"NA",
		"windchill_c":"NA",
		"feelslike_string":"57.9 F (14.4 C)",
		"feelslike_f":"57.9",
		"feelslike_c":"14.4",
		"visibility_mi":"10.0",
		"visibility_km":"16.1",
		"solarradiation":"--",
		"UV":"0","precip_1hr_string":"0.00 in ( 0 mm)",
		"precip_1hr_in":"0.00",
		"precip_1hr_metric":" 0",
		"precip_today_string":"0.00 in (0 mm)",
		"precip_today_in":"0.00",
		"precip_today_metric":"0",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"forecast_url":"http://www.wunderground.com/US/CA/San_Luis_Obispo.html",
		"history_url":"http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCASANLU57",
		"ob_url":"http://www.wunderground.com/cgi-bin/findweather/getForecast?query=35.266674,-120.709610",
		"nowcast":""
	}
		,
	"forecast":{
		"txt_forecast": {
		"date":"7:29 PM PDT",
		"forecastday": [
		{
		"period":0,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Saturday",
		"fcttext":"Mostly clear. Lows overnight in the low 50s.",
		"fcttext_metric":"A few clouds. Low 10C.",
		"pop":"10"
		}
		,
		{
		"period":1,
		"icon":"nt_clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"title":"Saturday Night",
		"fcttext":"Mostly clear. Low around 50F. Winds NNW at 10 to 20 mph.",
		"fcttext_metric":"Mostly clear. Low around 10C. NNW winds at 15 to 30 km/h, decreasing to 10 to 15 km/h.",
		"pop":"10"
		}
		,
		{
		"period":2,
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"title":"Sunday",
		"fcttext":"Sunny. Becoming windy late. High 69F. Winds NW at 20 to 30 mph.",
		"fcttext_metric":"Sunny. Becoming windy late. High 19C. Winds NW at 30 to 50 km/h.",
		"pop":"10"
		}
		,
		{
		"period":3,
		"icon":"nt_clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"title":"Sunday Night",
		"fcttext":"Clear skies. Low 48F. NW winds at 15 to 25 mph, decreasing to 5 to 10 mph.",
		"fcttext_metric":"Clear skies. Low 9C. NW winds at 15 to 30 km/h, decreasing to 10 to 15 km/h.",
		"pop":"0"
		}
		,
		{
		"period":4,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Monday",
		"fcttext":"Sunny. High 73F. Winds NW at 15 to 25 mph.",
		"fcttext_metric":"Sunny. High 21C. Winds NW at 25 to 40 km/h.",
		"pop":"0"
		}
		,
		{
		"period":5,
		"icon":"nt_clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"title":"Monday Night",
		"fcttext":"Mostly clear skies. Low near 50F. NW winds at 10 to 20 mph, decreasing to less than 5 mph.",
		"fcttext_metric":"Mostly clear skies. Low near 10C. NW winds at 15 to 30 km/h, decreasing to 5 to 10 km/h.",
		"pop":"0"
		}
		,
		{
		"period":6,
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"title":"Tuesday",
		"fcttext":"Some clouds in the morning will give way to mainly sunny skies for the afternoon. High 73F. Winds WSW at 10 to 15 mph.",
		"fcttext_metric":"Sunny skies. High 22C. Winds WSW at 15 to 25 km/h.",
		"pop":"0"
		}
		,
		{
		"period":7,
		"icon":"nt_clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"title":"Tuesday Night",
		"fcttext":"Clear skies with a few passing clouds. Low 51F. Winds SE at 5 to 10 mph.",
		"fcttext_metric":"A mostly clear sky. Low 11C. Winds SE at 10 to 15 km/h.",
		"pop":"0"
		}
		,
		{
		"period":8,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Wednesday",
		"fcttext":"Mostly sunny skies. High near 75F. Winds WSW at 10 to 15 mph.",
		"fcttext_metric":"Sunny. High 24C. Winds SW at 15 to 25 km/h.",
		"pop":"0"
		}
		,
		{
		"period":9,
		"icon":"nt_partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"title":"Wednesday Night",
		"fcttext":"A few clouds. Low around 50F. Winds WNW at 5 to 10 mph.",
		"fcttext_metric":"Mostly clear skies. Low around 10C. Winds W at 10 to 15 km/h.",
		"pop":"10"
		}
		,
		{
		"period":10,
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"title":"Thursday",
		"fcttext":"Morning clouds will give way to sunshine for the afternoon. High 69F. Winds WNW at 15 to 25 mph.",
		"fcttext_metric":"Morning clouds will give way to sunshine for the afternoon. High 18C. Winds W at 25 to 40 km/h.",
		"pop":"10"
		}
		,
		{
		"period":11,
		"icon":"nt_clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"title":"Thursday Night",
		"fcttext":"Clear to partly cloudy. Low 48F. Winds NW at 10 to 20 mph.",
		"fcttext_metric":"A few clouds overnight. Low 9C. Winds NW at 15 to 30 km/h.",
		"pop":"10"
		}
		,
		{
		"period":12,
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"title":"Friday",
		"fcttext":"Wind increasing. A few clouds from time to time. High 67F. Winds WNW at 20 to 30 mph.",
		"fcttext_metric":"Wind increasing. A few clouds from time to time. High 17C. Winds WNW at 30 to 50 km/h.",
		"pop":"0"
		}
		,
		{
		"period":13,
		"icon":"nt_clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"title":"Friday Night",
		"fcttext":"A mostly clear sky. Low 46F. NW winds at 15 to 25 mph, decreasing to 5 to 10 mph.",
		"fcttext_metric":"Clear skies. Low 8C. NW winds at 25 to 40 km/h, decreasing to 10 to 15 km/h.",
		"pop":"10"
		}
		,
		{
		"period":14,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Saturday",
		"fcttext":"A few clouds early, otherwise mostly sunny. High 68F. Winds WNW at 15 to 25 mph.",
		"fcttext_metric":"A few clouds early, otherwise mostly sunny. High 19C. Winds WNW at 25 to 40 km/h.",
		"pop":"10"
		}
		,
		{
		"period":15,
		"icon":"nt_clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"title":"Saturday Night",
		"fcttext":"Mostly clear skies. Low 46F. Winds NW at 10 to 20 mph.",
		"fcttext_metric":"Mostly clear skies. Low 8C. Winds NW at 15 to 30 km/h.",
		"pop":"10"
		}
		,
		{
		"period":16,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Sunday",
		"fcttext":"Sunshine along with some cloudy intervals. High 68F. Winds WNW at 15 to 25 mph.",
		"fcttext_metric":"Sun and a few passing clouds. High 19C. Winds WNW at 25 to 40 km/h.",
		"pop":"10"
		}
		,
		{
		"period":17,
		"icon":"nt_clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"title":"Sunday Night",
		"fcttext":"Mostly clear. Low 47F. Winds NW at 10 to 20 mph.",
		"fcttext_metric":"Clear to partly cloudy. Low 8C. NW winds at 15 to 30 km/h, decreasing to 5 to 10 km/h.",
		"pop":"10"
		}
		,
		{
		"period":18,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Monday",
		"fcttext":"Sunny skies. High 68F. Winds WNW at 15 to 25 mph.",
		"fcttext_metric":"Mainly sunny. High 19C. Winds WNW at 25 to 40 km/h.",
		"pop":"10"
		}
		,
		{
		"period":19,
		"icon":"nt_clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"title":"Monday Night",
		"fcttext":"A few clouds overnight. Low 47F. Winds NW at 10 to 20 mph.",
		"fcttext_metric":"Partly cloudy. Low 9C. Winds NW at 15 to 30 km/h.",
		"pop":"10"
		}
		]
		},
		"simpleforecast": {
		"forecastday": [
		{"date":{
	"epoch":"1463277600",
	"pretty":"7:00 PM PDT on May 14, 2016",
	"day":14,
	"month":5,
	"year":2016,
	"yday":134,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"May",
	"monthname_short":"May",
	"weekday_short":"Sat",
	"weekday":"Saturday",
	"ampm":"PM",
	"tz_short":"PDT",
	"tz_long":"America/Los_Angeles"
},
		"period":1,
		"high": {
		"fahrenheit":"68",
		"celsius":"20"
		},
		"low": {
		"fahrenheit":"50",
		"celsius":"10"
		},
		"conditions":"Clear",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":10,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": null,
		"mm": null
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": null,
		"cm": null
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 30,
		"kph": 48,
		"dir": "",
		"degrees": 0
		},
		"avewind": {
		"mph": 11,
		"kph": 18,
		"dir": "WNW",
		"degrees": 289
		},
		"avehumidity": 83,
		"maxhumidity": 89,
		"minhumidity": 75
		}
		,
		{"date":{
	"epoch":"1463364000",
	"pretty":"7:00 PM PDT on May 15, 2016",
	"day":15,
	"month":5,
	"year":2016,
	"yday":135,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"May",
	"monthname_short":"May",
	"weekday_short":"Sun",
	"weekday":"Sunday",
	"ampm":"PM",
	"tz_short":"PDT",
	"tz_long":"America/Los_Angeles"
},
		"period":2,
		"high": {
		"fahrenheit":"69",
		"celsius":"21"
		},
		"low": {
		"fahrenheit":"48",
		"celsius":"9"
		},
		"conditions":"Partly Cloudy",
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"skyicon":"",
		"pop":10,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 30,
		"kph": 48,
		"dir": "NW",
		"degrees": 311
		},
		"avewind": {
		"mph": 24,
		"kph": 39,
		"dir": "NW",
		"degrees": 311
		},
		"avehumidity": 77,
		"maxhumidity": 99,
		"minhumidity": 51
		}
		,
		{"date":{
	"epoch":"1463450400",
	"pretty":"7:00 PM PDT on May 16, 2016",
	"day":16,
	"month":5,
	"year":2016,
	"yday":136,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"May",
	"monthname_short":"May",
	"weekday_short":"Mon",
	"weekday":"Monday",
	"ampm":"PM",
	"tz_short":"PDT",
	"tz_long":"America/Los_Angeles"
},
		"period":3,
		"high": {
		"fahrenheit":"73",
		"celsius":"23"
		},
		"low": {
		"fahrenheit":"50",
		"celsius":"10"
		},
		"conditions":"Clear",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":0,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 25,
		"kph": 40,
		"dir": "NW",
		"degrees": 310
		},
		"avewind": {
		"mph": 19,
		"kph": 31,
		"dir": "NW",
		"degrees": 310
		},
		"avehumidity": 76,
		"maxhumidity": 97,
		"minhumidity": 49
		}
		,
		{"date":{
	"epoch":"1463536800",
	"pretty":"7:00 PM PDT on May 17, 2016",
	"day":17,
	"month":5,
	"year":2016,
	"yday":137,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"May",
	"monthname_short":"May",
	"weekday_short":"Tue",
	"weekday":"Tuesday",
	"ampm":"PM",
	"tz_short":"PDT",
	"tz_long":"America/Los_Angeles"
},
		"period":4,
		"high": {
		"fahrenheit":"73",
		"celsius":"23"
		},
		"low": {
		"fahrenheit":"51",
		"celsius":"11"
		},
		"conditions":"Partly Cloudy",
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"skyicon":"",
		"pop":0,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 15,
		"kph": 24,
		"dir": "WSW",
		"degrees": 248
		},
		"avewind": {
		"mph": 11,
		"kph": 18,
		"dir": "WSW",
		"degrees": 248
		},
		"avehumidity": 77,
		"maxhumidity": 99,
		"minhumidity": 52
		}
		,
		{"date":{
	"epoch":"1463623200",
	"pretty":"7:00 PM PDT on May 18, 2016",
	"day":18,
	"month":5,
	"year":2016,
	"yday":138,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"May",
	"monthname_short":"May",
	"weekday_short":"Wed",
	"weekday":"Wednesday",
	"ampm":"PM",
	"tz_short":"PDT",
	"tz_long":"America/Los_Angeles"
},
		"period":5,
		"high": {
		"fahrenheit":"75",
		"celsius":"24"
		},
		"low": {
		"fahrenheit":"50",
		"celsius":"10"
		},
		"conditions":"Clear",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":0,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 15,
		"kph": 24,
		"dir": "WSW",
		"degrees": 237
		},
		"avewind": {
		"mph": 10,
		"kph": 16,
		"dir": "WSW",
		"degrees": 237
		},
		"avehumidity": 76,
		"maxhumidity": 98,
		"minhumidity": 51
		}
		,
		{"date":{
	"epoch":"1463709600",
	"pretty":"7:00 PM PDT on May 19, 2016",
	"day":19,
	"month":5,
	"year":2016,
	"yday":139,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"May",
	"monthname_short":"May",
	"weekday_short":"Thu",
	"weekday":"Thursday",
	"ampm":"PM",
	"tz_short":"PDT",
	"tz_long":"America/Los_Angeles"
},
		"period":6,
		"high": {
		"fahrenheit":"69",
		"celsius":"21"
		},
		"low": {
		"fahrenheit":"48",
		"celsius":"9"
		},
		"conditions":"Partly Cloudy",
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"skyicon":"",
		"pop":10,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 25,
		"kph": 40,
		"dir": "WNW",
		"degrees": 282
		},
		"avewind": {
		"mph": 17,
		"kph": 27,
		"dir": "WNW",
		"degrees": 282
		},
		"avehumidity": 78,
		"maxhumidity": 99,
		"minhumidity": 54
		}
		,
		{"date":{
	"epoch":"1463796000",
	"pretty":"7:00 PM PDT on May 20, 2016",
	"day":20,
	"month":5,
	"year":2016,
	"yday":140,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"May",
	"monthname_short":"May",
	"weekday_short":"Fri",
	"weekday":"Friday",
	"ampm":"PM",
	"tz_short":"PDT",
	"tz_long":"America/Los_Angeles"
},
		"period":7,
		"high": {
		"fahrenheit":"67",
		"celsius":"19"
		},
		"low": {
		"fahrenheit":"46",
		"celsius":"8"
		},
		"conditions":"Partly Cloudy",
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"skyicon":"",
		"pop":0,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 30,
		"kph": 48,
		"dir": "WNW",
		"degrees": 302
		},
		"avewind": {
		"mph": 21,
		"kph": 34,
		"dir": "WNW",
		"degrees": 302
		},
		"avehumidity": 72,
		"maxhumidity": 92,
		"minhumidity": 52
		}
		,
		{"date":{
	"epoch":"1463882400",
	"pretty":"7:00 PM PDT on May 21, 2016",
	"day":21,
	"month":5,
	"year":2016,
	"yday":141,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"May",
	"monthname_short":"May",
	"weekday_short":"Sat",
	"weekday":"Saturday",
	"ampm":"PM",
	"tz_short":"PDT",
	"tz_long":"America/Los_Angeles"
},
		"period":8,
		"high": {
		"fahrenheit":"68",
		"celsius":"20"
		},
		"low": {
		"fahrenheit":"46",
		"celsius":"8"
		},
		"conditions":"Clear",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":10,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 25,
		"kph": 40,
		"dir": "WNW",
		"degrees": 300
		},
		"avewind": {
		"mph": 18,
		"kph": 29,
		"dir": "WNW",
		"degrees": 300
		},
		"avehumidity": 74,
		"maxhumidity": 96,
		"minhumidity": 50
		}
		,
		{"date":{
	"epoch":"1463968800",
	"pretty":"7:00 PM PDT on May 22, 2016",
	"day":22,
	"month":5,
	"year":2016,
	"yday":142,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"May",
	"monthname_short":"May",
	"weekday_short":"Sun",
	"weekday":"Sunday",
	"ampm":"PM",
	"tz_short":"PDT",
	"tz_long":"America/Los_Angeles"
},
		"period":9,
		"high": {
		"fahrenheit":"68",
		"celsius":"20"
		},
		"low": {
		"fahrenheit":"47",
		"celsius":"8"
		},
		"conditions":"Clear",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":10,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 25,
		"kph": 40,
		"dir": "WNW",
		"degrees": 301
		},
		"avewind": {
		"mph": 17,
		"kph": 27,
		"dir": "WNW",
		"degrees": 301
		},
		"avehumidity": 77,
		"maxhumidity": 99,
		"minhumidity": 52
		}
		,
		{"date":{
	"epoch":"1464055200",
	"pretty":"7:00 PM PDT on May 23, 2016",
	"day":23,
	"month":5,
	"year":2016,
	"yday":143,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"May",
	"monthname_short":"May",
	"weekday_short":"Mon",
	"weekday":"Monday",
	"ampm":"PM",
	"tz_short":"PDT",
	"tz_long":"America/Los_Angeles"
},
		"period":10,
		"high": {
		"fahrenheit":"68",
		"celsius":"20"
		},
		"low": {
		"fahrenheit":"47",
		"celsius":"8"
		},
		"conditions":"Clear",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":10,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 25,
		"kph": 40,
		"dir": "WNW",
		"degrees": 301
		},
		"avewind": {
		"mph": 17,
		"kph": 27,
		"dir": "WNW",
		"degrees": 301
		},
		"avehumidity": 77,
		"maxhumidity": 99,
		"minhumidity": 51
		}
		]
		}
	}
		,
	"hourly_forecast": [
		{
		"FCTTIME": {
		"hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "14","mday_padded": "14","yday": "134","isdst": "1","epoch": "1463284800","pretty": "9:00 PM PDT on May 14, 2016","civil": "9:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "58", "metric": "14"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "22",
		"wspd": {"english": "11", "metric": "18"},
		"wdir": {"dir": "NW", "degrees": "311"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "84",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "58", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "14","mday_padded": "14","yday": "134","isdst": "1","epoch": "1463288400","pretty": "10:00 PM PDT on May 14, 2016","civil": "10:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "27",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "NW", "degrees": "315"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "86",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "14","mday_padded": "14","yday": "134","isdst": "1","epoch": "1463292000","pretty": "11:00 PM PDT on May 14, 2016","civil": "11:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "56", "metric": "13"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "25",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "NW", "degrees": "321"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "89",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "56", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463295600","pretty": "12:00 AM PDT on May 15, 2016","civil": "12:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "54", "metric": "12"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "31",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "NW", "degrees": "327"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "92",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "54", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463299200","pretty": "1:00 AM PDT on May 15, 2016","civil": "1:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "54", "metric": "12"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "24",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NNW", "degrees": "332"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "94",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "54", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463302800","pretty": "2:00 AM PDT on May 15, 2016","civil": "2:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "53", "metric": "12"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "20",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "NNW", "degrees": "334"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "95",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "53", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463306400","pretty": "3:00 AM PDT on May 15, 2016","civil": "3:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "53", "metric": "12"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "19",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "NNW", "degrees": "336"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "95",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "53", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463310000","pretty": "4:00 AM PDT on May 15, 2016","civil": "4:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "52", "metric": "11"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "15",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NNW", "degrees": "333"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "52", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463313600","pretty": "5:00 AM PDT on May 15, 2016","civil": "5:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "51", "metric": "11"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "15",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NNW", "degrees": "332"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "51", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463317200","pretty": "6:00 AM PDT on May 15, 2016","civil": "6:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "51", "metric": "11"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "10",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NNW", "degrees": "334"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "98",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "51", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463320800","pretty": "7:00 AM PDT on May 15, 2016","civil": "7:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "52", "metric": "11"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "9",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NNW", "degrees": "332"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "96",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "52", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463324400","pretty": "8:00 AM PDT on May 15, 2016","civil": "8:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "56", "metric": "13"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "8",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "NNW", "degrees": "328"},
		"wx": "Sunny",
		"uvi": "1",
		"humidity": "84",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "56", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463328000","pretty": "9:00 AM PDT on May 15, 2016","civil": "9:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "60", "metric": "16"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "3",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "NW", "degrees": "318"},
		"wx": "Sunny",
		"uvi": "3",
		"humidity": "74",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "60", "metric": "16"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463331600","pretty": "10:00 AM PDT on May 15, 2016","civil": "10:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "64", "metric": "18"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "4",
		"wspd": {"english": "12", "metric": "19"},
		"wdir": {"dir": "NW", "degrees": "306"},
		"wx": "Sunny",
		"uvi": "5",
		"humidity": "63",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "64", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463335200","pretty": "11:00 AM PDT on May 15, 2016","civil": "11:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "67", "metric": "19"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "5",
		"wspd": {"english": "14", "metric": "23"},
		"wdir": {"dir": "WNW", "degrees": "300"},
		"wx": "Sunny",
		"uvi": "7",
		"humidity": "57",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "67", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463338800","pretty": "12:00 PM PDT on May 15, 2016","civil": "12:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "68", "metric": "20"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "5",
		"wspd": {"english": "17", "metric": "27"},
		"wdir": {"dir": "WNW", "degrees": "301"},
		"wx": "Sunny",
		"uvi": "9",
		"humidity": "53",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "68", "metric": "20"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463342400","pretty": "1:00 PM PDT on May 15, 2016","civil": "1:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "69", "metric": "21"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "2",
		"wspd": {"english": "20", "metric": "32"},
		"wdir": {"dir": "NW", "degrees": "305"},
		"wx": "Sunny/Wind",
		"uvi": "9",
		"humidity": "51",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "69", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463346000","pretty": "2:00 PM PDT on May 15, 2016","civil": "2:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "69", "metric": "21"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "3",
		"wspd": {"english": "22", "metric": "35"},
		"wdir": {"dir": "NW", "degrees": "307"},
		"wx": "Sunny/Wind",
		"uvi": "9",
		"humidity": "53",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "69", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463349600","pretty": "3:00 PM PDT on May 15, 2016","civil": "3:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "69", "metric": "21"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "3",
		"wspd": {"english": "23", "metric": "37"},
		"wdir": {"dir": "NW", "degrees": "307"},
		"wx": "Sunny/Wind",
		"uvi": "7",
		"humidity": "53",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "69", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.93", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463353200","pretty": "4:00 PM PDT on May 15, 2016","civil": "4:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "68", "metric": "20"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "15",
		"wspd": {"english": "24", "metric": "39"},
		"wdir": {"dir": "NW", "degrees": "307"},
		"wx": "Sunny/Wind",
		"uvi": "5",
		"humidity": "56",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "68", "metric": "20"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.92", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463356800","pretty": "5:00 PM PDT on May 15, 2016","civil": "5:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "65", "metric": "18"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "13",
		"wspd": {"english": "24", "metric": "39"},
		"wdir": {"dir": "NW", "degrees": "309"},
		"wx": "Sunny/Wind",
		"uvi": "3",
		"humidity": "61",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "65", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.9", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463360400","pretty": "6:00 PM PDT on May 15, 2016","civil": "6:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "63", "metric": "17"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "14",
		"wspd": {"english": "23", "metric": "37"},
		"wdir": {"dir": "NW", "degrees": "312"},
		"wx": "Sunny/Wind",
		"uvi": "1",
		"humidity": "66",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "63", "metric": "17"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.9", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463364000","pretty": "7:00 PM PDT on May 15, 2016","civil": "7:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "60", "metric": "16"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "16",
		"wspd": {"english": "18", "metric": "29"},
		"wdir": {"dir": "NW", "degrees": "316"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "72",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "60", "metric": "16"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.9", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463367600","pretty": "8:00 PM PDT on May 15, 2016","civil": "8:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "20",
		"wspd": {"english": "16", "metric": "26"},
		"wdir": {"dir": "NW", "degrees": "318"},
		"wx": "Mostly Sunny",
		"uvi": "0",
		"humidity": "79",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.9", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463371200","pretty": "9:00 PM PDT on May 15, 2016","civil": "9:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "56", "metric": "13"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "16",
		"wspd": {"english": "13", "metric": "21"},
		"wdir": {"dir": "NW", "degrees": "318"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "84",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "56", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.92", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463374800","pretty": "10:00 PM PDT on May 15, 2016","civil": "10:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "55", "metric": "13"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "18",
		"wspd": {"english": "11", "metric": "18"},
		"wdir": {"dir": "NW", "degrees": "318"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "89",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "55", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "15","mday_padded": "15","yday": "135","isdst": "1","epoch": "1463378400","pretty": "11:00 PM PDT on May 15, 2016","civil": "11:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "54", "metric": "12"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "19",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "NW", "degrees": "318"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "92",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "54", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463382000","pretty": "12:00 AM PDT on May 16, 2016","civil": "12:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "53", "metric": "12"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "16",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "NW", "degrees": "321"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "94",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "53", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463385600","pretty": "1:00 AM PDT on May 16, 2016","civil": "1:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "52", "metric": "11"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "15",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "NW", "degrees": "325"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "96",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "52", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463389200","pretty": "2:00 AM PDT on May 16, 2016","civil": "2:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "51", "metric": "11"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "13",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NNW", "degrees": "328"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "97",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "51", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463392800","pretty": "3:00 AM PDT on May 16, 2016","civil": "3:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "51", "metric": "11"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "16",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NW", "degrees": "327"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "97",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "51", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.93", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463396400","pretty": "4:00 AM PDT on May 16, 2016","civil": "4:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "50", "metric": "10"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "11",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NW", "degrees": "327"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "97",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "50", "metric": "10"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.93", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463400000","pretty": "5:00 AM PDT on May 16, 2016","civil": "5:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "50", "metric": "10"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "7",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "NNW", "degrees": "329"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "96",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "50", "metric": "10"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.93", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463403600","pretty": "6:00 AM PDT on May 16, 2016","civil": "6:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "50", "metric": "10"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "5",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NNW", "degrees": "331"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "94",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "50", "metric": "10"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.93", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463407200","pretty": "7:00 AM PDT on May 16, 2016","civil": "7:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "52", "metric": "11"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "5",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NNW", "degrees": "333"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "89",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "52", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463410800","pretty": "8:00 AM PDT on May 16, 2016","civil": "8:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "56", "metric": "13"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "5",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "NW", "degrees": "327"},
		"wx": "Sunny",
		"uvi": "1",
		"humidity": "79",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "56", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463414400","pretty": "9:00 AM PDT on May 16, 2016","civil": "9:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "60", "metric": "16"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "3",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "NW", "degrees": "315"},
		"wx": "Sunny",
		"uvi": "3",
		"humidity": "69",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "60", "metric": "16"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463418000","pretty": "10:00 AM PDT on May 16, 2016","civil": "10:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "64", "metric": "18"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "1",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "NW", "degrees": "305"},
		"wx": "Sunny",
		"uvi": "5",
		"humidity": "60",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "64", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463421600","pretty": "11:00 AM PDT on May 16, 2016","civil": "11:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "67", "metric": "19"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "WNW", "degrees": "300"},
		"wx": "Sunny",
		"uvi": "7",
		"humidity": "55",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "67", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463425200","pretty": "12:00 PM PDT on May 16, 2016","civil": "12:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "70", "metric": "21"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "1",
		"wspd": {"english": "13", "metric": "21"},
		"wdir": {"dir": "WNW", "degrees": "300"},
		"wx": "Sunny",
		"uvi": "9",
		"humidity": "51",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "70", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.93", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463428800","pretty": "1:00 PM PDT on May 16, 2016","civil": "1:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "71", "metric": "22"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "15", "metric": "24"},
		"wdir": {"dir": "WNW", "degrees": "300"},
		"wx": "Sunny",
		"uvi": "10",
		"humidity": "49",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "71", "metric": "22"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.92", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463432400","pretty": "2:00 PM PDT on May 16, 2016","civil": "2:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "71", "metric": "22"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "1",
		"wspd": {"english": "17", "metric": "27"},
		"wdir": {"dir": "WNW", "degrees": "303"},
		"wx": "Sunny",
		"uvi": "9",
		"humidity": "50",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "71", "metric": "22"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463436000","pretty": "3:00 PM PDT on May 16, 2016","civil": "3:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "70", "metric": "21"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "3",
		"wspd": {"english": "18", "metric": "29"},
		"wdir": {"dir": "NW", "degrees": "306"},
		"wx": "Sunny",
		"uvi": "7",
		"humidity": "51",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "70", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463439600","pretty": "4:00 PM PDT on May 16, 2016","civil": "4:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "69", "metric": "21"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "7",
		"wspd": {"english": "19", "metric": "31"},
		"wdir": {"dir": "NW", "degrees": "308"},
		"wx": "Sunny",
		"uvi": "5",
		"humidity": "55",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "69", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.88", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463443200","pretty": "5:00 PM PDT on May 16, 2016","civil": "5:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "66", "metric": "19"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "9",
		"wspd": {"english": "20", "metric": "32"},
		"wdir": {"dir": "NW", "degrees": "311"},
		"wx": "Sunny/Wind",
		"uvi": "3",
		"humidity": "61",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "66", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.86", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463446800","pretty": "6:00 PM PDT on May 16, 2016","civil": "6:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "63", "metric": "17"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "10",
		"wspd": {"english": "18", "metric": "29"},
		"wdir": {"dir": "NW", "degrees": "314"},
		"wx": "Sunny",
		"uvi": "1",
		"humidity": "69",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "63", "metric": "17"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.85", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463450400","pretty": "7:00 PM PDT on May 16, 2016","civil": "7:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "60", "metric": "16"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "6",
		"wspd": {"english": "16", "metric": "26"},
		"wdir": {"dir": "NW", "degrees": "316"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "77",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "60", "metric": "16"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.85", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463454000","pretty": "8:00 PM PDT on May 16, 2016","civil": "8:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "58", "metric": "14"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "6",
		"wspd": {"english": "13", "metric": "21"},
		"wdir": {"dir": "NW", "degrees": "319"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "81",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "58", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.86", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463457600","pretty": "9:00 PM PDT on May 16, 2016","civil": "9:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "11",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "NW", "degrees": "319"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "86",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.87", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463461200","pretty": "10:00 PM PDT on May 16, 2016","civil": "10:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "56", "metric": "13"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "17",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NW", "degrees": "319"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "89",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "56", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "16","mday_padded": "16","yday": "136","isdst": "1","epoch": "1463464800","pretty": "11:00 PM PDT on May 16, 2016","civil": "11:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "55", "metric": "13"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "23",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "NW", "degrees": "320"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "91",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "55", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463468400","pretty": "12:00 AM PDT on May 17, 2016","civil": "12:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "54", "metric": "12"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "26",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "NW", "degrees": "318"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "93",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "54", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463472000","pretty": "1:00 AM PDT on May 17, 2016","civil": "1:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "53", "metric": "12"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "29",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "NW", "degrees": "319"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "96",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "53", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.88", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463475600","pretty": "2:00 AM PDT on May 17, 2016","civil": "2:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "53", "metric": "12"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "31",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "NW", "degrees": "323"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "98",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "53", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.88", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463479200","pretty": "3:00 AM PDT on May 17, 2016","civil": "3:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "52", "metric": "11"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "31",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "NNW", "degrees": "328"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "52", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.87", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463482800","pretty": "4:00 AM PDT on May 17, 2016","civil": "4:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "52", "metric": "11"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "28",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "NNW", "degrees": "328"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "52", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.87", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463486400","pretty": "5:00 AM PDT on May 17, 2016","civil": "5:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "51", "metric": "11"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "27",
		"wspd": {"english": "2", "metric": "3"},
		"wdir": {"dir": "NNW", "degrees": "333"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "51", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.87", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463490000","pretty": "6:00 AM PDT on May 17, 2016","civil": "6:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "52", "metric": "11"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "26",
		"wspd": {"english": "2", "metric": "3"},
		"wdir": {"dir": "N", "degrees": "352"},
		"wx": "Mostly Sunny",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "52", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.87", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463493600","pretty": "7:00 AM PDT on May 17, 2016","civil": "7:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "53", "metric": "12"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "30",
		"wspd": {"english": "2", "metric": "3"},
		"wdir": {"dir": "ENE", "degrees": "73"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "96",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "53", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463497200","pretty": "8:00 AM PDT on May 17, 2016","civil": "8:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "32",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "S", "degrees": "181"},
		"wx": "Partly Cloudy",
		"uvi": "1",
		"humidity": "86",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.9", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463500800","pretty": "9:00 AM PDT on May 17, 2016","civil": "9:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "61", "metric": "16"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "25",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "SW", "degrees": "225"},
		"wx": "Mostly Sunny",
		"uvi": "3",
		"humidity": "75",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "61", "metric": "16"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463504400","pretty": "10:00 AM PDT on May 17, 2016","civil": "10:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "65", "metric": "18"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "13",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "WSW", "degrees": "237"},
		"wx": "Sunny",
		"uvi": "5",
		"humidity": "65",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "65", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463508000","pretty": "11:00 AM PDT on May 17, 2016","civil": "11:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "67", "metric": "19"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "7",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "WSW", "degrees": "244"},
		"wx": "Sunny",
		"uvi": "7",
		"humidity": "60",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "67", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463511600","pretty": "12:00 PM PDT on May 17, 2016","civil": "12:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "69", "metric": "21"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "7",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "WSW", "degrees": "248"},
		"wx": "Sunny",
		"uvi": "9",
		"humidity": "56",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "69", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.9", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463515200","pretty": "1:00 PM PDT on May 17, 2016","civil": "1:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "70", "metric": "21"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "7",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "WSW", "degrees": "257"},
		"wx": "Sunny",
		"uvi": "10",
		"humidity": "53",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "70", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463518800","pretty": "2:00 PM PDT on May 17, 2016","civil": "2:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "71", "metric": "22"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "7",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "W", "degrees": "263"},
		"wx": "Sunny",
		"uvi": "9",
		"humidity": "52",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "71", "metric": "22"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.88", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463522400","pretty": "3:00 PM PDT on May 17, 2016","civil": "3:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "71", "metric": "22"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "8",
		"wspd": {"english": "11", "metric": "18"},
		"wdir": {"dir": "W", "degrees": "262"},
		"wx": "Sunny",
		"uvi": "7",
		"humidity": "52",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "71", "metric": "22"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.87", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463526000","pretty": "4:00 PM PDT on May 17, 2016","civil": "4:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "70", "metric": "21"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "9",
		"wspd": {"english": "11", "metric": "18"},
		"wdir": {"dir": "W", "degrees": "263"},
		"wx": "Sunny",
		"uvi": "5",
		"humidity": "54",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "70", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.86", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463529600","pretty": "5:00 PM PDT on May 17, 2016","civil": "5:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "68", "metric": "20"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "10",
		"wspd": {"english": "11", "metric": "18"},
		"wdir": {"dir": "W", "degrees": "266"},
		"wx": "Sunny",
		"uvi": "3",
		"humidity": "57",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "68", "metric": "20"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.85", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463533200","pretty": "6:00 PM PDT on May 17, 2016","civil": "6:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "66", "metric": "19"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "10",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "W", "degrees": "269"},
		"wx": "Sunny",
		"uvi": "1",
		"humidity": "61",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "66", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.85", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463536800","pretty": "7:00 PM PDT on May 17, 2016","civil": "7:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "64", "metric": "18"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "8",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "W", "degrees": "272"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "69",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "64", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.85", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463540400","pretty": "8:00 PM PDT on May 17, 2016","civil": "8:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "60", "metric": "16"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "7",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "W", "degrees": "271"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "77",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "60", "metric": "16"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.87", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463544000","pretty": "9:00 PM PDT on May 17, 2016","civil": "9:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "58", "metric": "14"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "10",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "WSW", "degrees": "257"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "83",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "58", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.88", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463547600","pretty": "10:00 PM PDT on May 17, 2016","civil": "10:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "15",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "SSW", "degrees": "203"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "88",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "17","mday_padded": "17","yday": "137","isdst": "1","epoch": "1463551200","pretty": "11:00 PM PDT on May 17, 2016","civil": "11:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "56", "metric": "13"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "20",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "SE", "degrees": "137"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "91",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "56", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.9", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463554800","pretty": "12:00 AM PDT on May 18, 2016","civil": "12:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "55", "metric": "13"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "23",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "ESE", "degrees": "122"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "94",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "55", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.9", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463558400","pretty": "1:00 AM PDT on May 18, 2016","civil": "1:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "55", "metric": "13"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "27",
		"wspd": {"english": "2", "metric": "3"},
		"wdir": {"dir": "ESE", "degrees": "105"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "97",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "55", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463562000","pretty": "2:00 AM PDT on May 18, 2016","civil": "2:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "54", "metric": "12"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "30",
		"wspd": {"english": "2", "metric": "3"},
		"wdir": {"dir": "E", "degrees": "92"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "98",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "54", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463565600","pretty": "3:00 AM PDT on May 18, 2016","civil": "3:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "53", "metric": "12"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "31",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "E", "degrees": "97"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "98",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "53", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463569200","pretty": "4:00 AM PDT on May 18, 2016","civil": "4:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "53", "metric": "12"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "29",
		"wspd": {"english": "2", "metric": "3"},
		"wdir": {"dir": "ESE", "degrees": "107"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "98",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "53", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463572800","pretty": "5:00 AM PDT on May 18, 2016","civil": "5:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "53", "metric": "12"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "26",
		"wspd": {"english": "2", "metric": "3"},
		"wdir": {"dir": "ESE", "degrees": "117"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "98",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "53", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463576400","pretty": "6:00 AM PDT on May 18, 2016","civil": "6:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "53", "metric": "12"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "25",
		"wspd": {"english": "2", "metric": "3"},
		"wdir": {"dir": "ESE", "degrees": "121"},
		"wx": "Mostly Sunny",
		"uvi": "0",
		"humidity": "97",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "53", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463580000","pretty": "7:00 AM PDT on May 18, 2016","civil": "7:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "54", "metric": "12"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "13",
		"wspd": {"english": "2", "metric": "3"},
		"wdir": {"dir": "SE", "degrees": "135"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "94",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "54", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.92", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463583600","pretty": "8:00 AM PDT on May 18, 2016","civil": "8:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "58", "metric": "14"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "4",
		"wspd": {"english": "2", "metric": "3"},
		"wdir": {"dir": "SSE", "degrees": "167"},
		"wx": "Sunny",
		"uvi": "1",
		"humidity": "84",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "58", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463587200","pretty": "9:00 AM PDT on May 18, 2016","civil": "9:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "62", "metric": "17"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "3",
		"wspd": {"english": "2", "metric": "3"},
		"wdir": {"dir": "SSW", "degrees": "213"},
		"wx": "Sunny",
		"uvi": "3",
		"humidity": "75",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "62", "metric": "17"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463590800","pretty": "10:00 AM PDT on May 18, 2016","civil": "10:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "67", "metric": "19"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "4",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "SW", "degrees": "237"},
		"wx": "Sunny",
		"uvi": "5",
		"humidity": "64",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "67", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463594400","pretty": "11:00 AM PDT on May 18, 2016","civil": "11:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "69", "metric": "21"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "7",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "WSW", "degrees": "241"},
		"wx": "Sunny",
		"uvi": "7",
		"humidity": "58",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "69", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463598000","pretty": "12:00 PM PDT on May 18, 2016","civil": "12:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "72", "metric": "22"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "13",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "WSW", "degrees": "243"},
		"wx": "Sunny",
		"uvi": "9",
		"humidity": "54",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "72", "metric": "22"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463601600","pretty": "1:00 PM PDT on May 18, 2016","civil": "1:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "73", "metric": "23"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "21",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "WSW", "degrees": "240"},
		"wx": "Mostly Sunny",
		"uvi": "10",
		"humidity": "53",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "73", "metric": "23"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463605200","pretty": "2:00 PM PDT on May 18, 2016","civil": "2:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "73", "metric": "23"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "26",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "WSW", "degrees": "240"},
		"wx": "Mostly Sunny",
		"uvi": "9",
		"humidity": "52",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "73", "metric": "23"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.93", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463608800","pretty": "3:00 PM PDT on May 18, 2016","civil": "3:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "73", "metric": "23"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "23",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "WSW", "degrees": "253"},
		"wx": "Mostly Sunny",
		"uvi": "7",
		"humidity": "51",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "73", "metric": "23"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463612400","pretty": "4:00 PM PDT on May 18, 2016","civil": "4:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "72", "metric": "22"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "17",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "W", "degrees": "266"},
		"wx": "Sunny",
		"uvi": "5",
		"humidity": "53",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "72", "metric": "22"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463616000","pretty": "5:00 PM PDT on May 18, 2016","civil": "5:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "70", "metric": "21"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "11",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "W", "degrees": "275"},
		"wx": "Sunny",
		"uvi": "3",
		"humidity": "56",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "70", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.88", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463619600","pretty": "6:00 PM PDT on May 18, 2016","civil": "6:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "68", "metric": "20"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "9",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "W", "degrees": "280"},
		"wx": "Sunny",
		"uvi": "1",
		"humidity": "60",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "68", "metric": "20"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.87", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463623200","pretty": "7:00 PM PDT on May 18, 2016","civil": "7:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "65", "metric": "18"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "9",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "WNW", "degrees": "284"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "67",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "65", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.88", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463626800","pretty": "8:00 PM PDT on May 18, 2016","civil": "8:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "62", "metric": "17"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "11",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "WNW", "degrees": "288"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "76",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "62", "metric": "17"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.88", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463630400","pretty": "9:00 PM PDT on May 18, 2016","civil": "9:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "60", "metric": "16"},
		"dewpoint": {"english": "55", "metric": "13"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "17",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "WNW", "degrees": "286"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "83",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "60", "metric": "16"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463634000","pretty": "10:00 PM PDT on May 18, 2016","civil": "10:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "58", "metric": "14"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "29",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "WNW", "degrees": "288"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "87",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "58", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "18","mday_padded": "18","yday": "138","isdst": "1","epoch": "1463637600","pretty": "11:00 PM PDT on May 18, 2016","civil": "11:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "56", "metric": "13"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "37",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "WNW", "degrees": "288"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "92",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "56", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463641200","pretty": "12:00 AM PDT on May 19, 2016","civil": "12:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "55", "metric": "13"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "33",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "WNW", "degrees": "291"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "95",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "55", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463644800","pretty": "1:00 AM PDT on May 19, 2016","civil": "1:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "54", "metric": "12"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "25",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "WNW", "degrees": "292"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "96",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "54", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.9", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463648400","pretty": "2:00 AM PDT on May 19, 2016","civil": "2:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "54", "metric": "12"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "22",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "WNW", "degrees": "285"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "98",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "54", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463652000","pretty": "3:00 AM PDT on May 19, 2016","civil": "3:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "53", "metric": "12"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "30",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "W", "degrees": "279"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "53", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463655600","pretty": "4:00 AM PDT on May 19, 2016","civil": "4:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "52", "metric": "11"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "65",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "W", "degrees": "272"},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "52", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463659200","pretty": "5:00 AM PDT on May 19, 2016","civil": "5:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "52", "metric": "11"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "74",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "W", "degrees": "275"},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "52", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "8",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463662800","pretty": "6:00 AM PDT on May 19, 2016","civil": "6:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "51", "metric": "11"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
		"fctcode": "3",
		"sky": "79",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "W", "degrees": "269"},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "51", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "8",
		"mslp": {"english": "29.9", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463666400","pretty": "7:00 AM PDT on May 19, 2016","civil": "7:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "52", "metric": "11"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Overcast",
		"icon": "cloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/cloudy.gif",
		"fctcode": "4",
		"sky": "83",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "WSW", "degrees": "257"},
		"wx": "Cloudy",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "52", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463670000","pretty": "8:00 AM PDT on May 19, 2016","civil": "8:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "55", "metric": "13"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Overcast",
		"icon": "cloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/cloudy.gif",
		"fctcode": "4",
		"sky": "85",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "W", "degrees": "265"},
		"wx": "Cloudy",
		"uvi": "1",
		"humidity": "93",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "55", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.92", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463673600","pretty": "9:00 AM PDT on May 19, 2016","civil": "9:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "58", "metric": "14"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Overcast",
		"icon": "cloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/cloudy.gif",
		"fctcode": "4",
		"sky": "85",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "W", "degrees": "269"},
		"wx": "Cloudy",
		"uvi": "2",
		"humidity": "83",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "58", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.92", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463677200","pretty": "10:00 AM PDT on May 19, 2016","civil": "10:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "61", "metric": "16"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Overcast",
		"icon": "cloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/cloudy.gif",
		"fctcode": "4",
		"sky": "82",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "W", "degrees": "267"},
		"wx": "Cloudy",
		"uvi": "3",
		"humidity": "73",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "61", "metric": "16"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.93", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463680800","pretty": "11:00 AM PDT on May 19, 2016","civil": "11:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "63", "metric": "17"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
		"fctcode": "3",
		"sky": "77",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "W", "degrees": "274"},
		"wx": "Mostly Cloudy",
		"uvi": "5",
		"humidity": "65",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "63", "metric": "17"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.93", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463684400","pretty": "12:00 PM PDT on May 19, 2016","civil": "12:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "65", "metric": "18"},
		"dewpoint": {"english": "51", "metric": "11"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "41",
		"wspd": {"english": "11", "metric": "18"},
		"wdir": {"dir": "W", "degrees": "281"},
		"wx": "Partly Cloudy",
		"uvi": "9",
		"humidity": "60",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "65", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.92", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463688000","pretty": "1:00 PM PDT on May 19, 2016","civil": "1:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "66", "metric": "19"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "24",
		"wspd": {"english": "14", "metric": "23"},
		"wdir": {"dir": "WNW", "degrees": "288"},
		"wx": "Mostly Sunny",
		"uvi": "10",
		"humidity": "56",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "66", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.9", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463691600","pretty": "2:00 PM PDT on May 19, 2016","civil": "2:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "67", "metric": "19"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "15",
		"wspd": {"english": "16", "metric": "26"},
		"wdir": {"dir": "WNW", "degrees": "292"},
		"wx": "Sunny",
		"uvi": "9",
		"humidity": "54",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "67", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463695200","pretty": "3:00 PM PDT on May 19, 2016","civil": "3:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "66", "metric": "19"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "15",
		"wspd": {"english": "17", "metric": "27"},
		"wdir": {"dir": "WNW", "degrees": "294"},
		"wx": "Sunny",
		"uvi": "7",
		"humidity": "54",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "66", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.87", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463698800","pretty": "4:00 PM PDT on May 19, 2016","civil": "4:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "65", "metric": "18"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "18",
		"wspd": {"english": "18", "metric": "29"},
		"wdir": {"dir": "WNW", "degrees": "295"},
		"wx": "Sunny",
		"uvi": "5",
		"humidity": "56",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "65", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.86", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463702400","pretty": "5:00 PM PDT on May 19, 2016","civil": "5:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "63", "metric": "17"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "20",
		"wspd": {"english": "18", "metric": "29"},
		"wdir": {"dir": "WNW", "degrees": "296"},
		"wx": "Mostly Sunny",
		"uvi": "3",
		"humidity": "59",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "63", "metric": "17"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.84", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463706000","pretty": "6:00 PM PDT on May 19, 2016","civil": "6:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "61", "metric": "16"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "19",
		"wspd": {"english": "16", "metric": "26"},
		"wdir": {"dir": "WNW", "degrees": "298"},
		"wx": "Sunny",
		"uvi": "1",
		"humidity": "64",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "61", "metric": "16"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.84", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463709600","pretty": "7:00 PM PDT on May 19, 2016","civil": "7:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "59", "metric": "15"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "17",
		"wspd": {"english": "15", "metric": "24"},
		"wdir": {"dir": "WNW", "degrees": "300"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "69",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "59", "metric": "15"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.84", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463713200","pretty": "8:00 PM PDT on May 19, 2016","civil": "8:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "56", "metric": "13"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "16",
		"wspd": {"english": "13", "metric": "21"},
		"wdir": {"dir": "WNW", "degrees": "302"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "75",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "56", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.84", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463716800","pretty": "9:00 PM PDT on May 19, 2016","civil": "9:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "55", "metric": "13"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "15",
		"wspd": {"english": "12", "metric": "19"},
		"wdir": {"dir": "NW", "degrees": "304"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "80",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "55", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.85", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463720400","pretty": "10:00 PM PDT on May 19, 2016","civil": "10:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "54", "metric": "12"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "12",
		"wspd": {"english": "11", "metric": "18"},
		"wdir": {"dir": "NW", "degrees": "306"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "82",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "54", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.86", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "19","mday_padded": "19","yday": "139","isdst": "1","epoch": "1463724000","pretty": "11:00 PM PDT on May 19, 2016","civil": "11:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "52", "metric": "11"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "11",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "NW", "degrees": "308"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "86",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "52", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.86", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463727600","pretty": "12:00 AM PDT on May 20, 2016","civil": "12:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "51", "metric": "11"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "14",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "NW", "degrees": "309"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "86",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "51", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.85", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463731200","pretty": "1:00 AM PDT on May 20, 2016","civil": "1:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "51", "metric": "11"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "19",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "NW", "degrees": "310"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "89",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "51", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.84", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463734800","pretty": "2:00 AM PDT on May 20, 2016","civil": "2:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "50", "metric": "10"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "24",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "NW", "degrees": "313"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "92",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "50", "metric": "10"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.83", "metric": "1010"}
		}
		,
		{
		"FCTTIME": {
		"hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463738400","pretty": "3:00 AM PDT on May 20, 2016","civil": "3:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "50", "metric": "10"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "27",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "NW", "degrees": "315"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "92",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "50", "metric": "10"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.83", "metric": "1010"}
		}
		,
		{
		"FCTTIME": {
		"hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463742000","pretty": "4:00 AM PDT on May 20, 2016","civil": "4:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "50", "metric": "10"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "30",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "NW", "degrees": "317"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "92",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "50", "metric": "10"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.83", "metric": "1010"}
		}
		,
		{
		"FCTTIME": {
		"hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463745600","pretty": "5:00 AM PDT on May 20, 2016","civil": "5:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "49", "metric": "9"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "35",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "NW", "degrees": "318"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "92",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "49", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.83", "metric": "1010"}
		}
		,
		{
		"FCTTIME": {
		"hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463749200","pretty": "6:00 AM PDT on May 20, 2016","civil": "6:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "49", "metric": "9"},
		"dewpoint": {"english": "46", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "14",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "NW", "degrees": "320"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "91",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "49", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.84", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463752800","pretty": "7:00 AM PDT on May 20, 2016","civil": "7:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "50", "metric": "10"},
		"dewpoint": {"english": "46", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "20",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "NW", "degrees": "317"},
		"wx": "Mostly Sunny",
		"uvi": "0",
		"humidity": "87",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "50", "metric": "10"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.85", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463756400","pretty": "8:00 AM PDT on May 20, 2016","civil": "8:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "54", "metric": "12"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "23",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "NW", "degrees": "311"},
		"wx": "Mostly Sunny",
		"uvi": "1",
		"humidity": "78",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "54", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.85", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463760000","pretty": "9:00 AM PDT on May 20, 2016","civil": "9:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "23",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "NW", "degrees": "306"},
		"wx": "Mostly Sunny",
		"uvi": "3",
		"humidity": "70",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.86", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463763600","pretty": "10:00 AM PDT on May 20, 2016","civil": "10:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "60", "metric": "16"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "22",
		"wspd": {"english": "12", "metric": "19"},
		"wdir": {"dir": "WNW", "degrees": "302"},
		"wx": "Mostly Sunny",
		"uvi": "5",
		"humidity": "62",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "60", "metric": "16"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.86", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463767200","pretty": "11:00 AM PDT on May 20, 2016","civil": "11:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "62", "metric": "17"},
		"dewpoint": {"english": "46", "metric": "8"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
		"fctcode": "3",
		"sky": "68",
		"wspd": {"english": "13", "metric": "21"},
		"wdir": {"dir": "WNW", "degrees": "300"},
		"wx": "Mostly Cloudy",
		"uvi": "6",
		"humidity": "56",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "62", "metric": "17"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.87", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463770800","pretty": "12:00 PM PDT on May 20, 2016","civil": "12:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "64", "metric": "18"},
		"dewpoint": {"english": "46", "metric": "8"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "39",
		"wspd": {"english": "15", "metric": "24"},
		"wdir": {"dir": "WNW", "degrees": "298"},
		"wx": "Partly Cloudy",
		"uvi": "9",
		"humidity": "52",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "64", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.87", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463774400","pretty": "1:00 PM PDT on May 20, 2016","civil": "1:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "65", "metric": "18"},
		"dewpoint": {"english": "46", "metric": "8"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "33",
		"wspd": {"english": "18", "metric": "29"},
		"wdir": {"dir": "WNW", "degrees": "297"},
		"wx": "Partly Cloudy",
		"uvi": "10",
		"humidity": "52",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "65", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.87", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463778000","pretty": "2:00 PM PDT on May 20, 2016","civil": "2:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "65", "metric": "18"},
		"dewpoint": {"english": "46", "metric": "8"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "26",
		"wspd": {"english": "20", "metric": "32"},
		"wdir": {"dir": "WNW", "degrees": "296"},
		"wx": "Mostly Sunny/Wind",
		"uvi": "9",
		"humidity": "52",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "65", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.86", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463781600","pretty": "3:00 PM PDT on May 20, 2016","civil": "3:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "64", "metric": "18"},
		"dewpoint": {"english": "46", "metric": "8"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "20",
		"wspd": {"english": "21", "metric": "34"},
		"wdir": {"dir": "WNW", "degrees": "297"},
		"wx": "Mostly Sunny/Wind",
		"uvi": "7",
		"humidity": "52",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "64", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.85", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463785200","pretty": "4:00 PM PDT on May 20, 2016","civil": "4:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "64", "metric": "18"},
		"dewpoint": {"english": "46", "metric": "8"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "15",
		"wspd": {"english": "22", "metric": "35"},
		"wdir": {"dir": "WNW", "degrees": "297"},
		"wx": "Sunny/Wind",
		"uvi": "5",
		"humidity": "53",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "64", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.85", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463788800","pretty": "5:00 PM PDT on May 20, 2016","civil": "5:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "62", "metric": "17"},
		"dewpoint": {"english": "46", "metric": "8"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "12",
		"wspd": {"english": "21", "metric": "34"},
		"wdir": {"dir": "WNW", "degrees": "299"},
		"wx": "Sunny/Wind",
		"uvi": "3",
		"humidity": "56",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "62", "metric": "17"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.85", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463792400","pretty": "6:00 PM PDT on May 20, 2016","civil": "6:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "61", "metric": "16"},
		"dewpoint": {"english": "46", "metric": "8"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "11",
		"wspd": {"english": "21", "metric": "34"},
		"wdir": {"dir": "WNW", "degrees": "302"},
		"wx": "Sunny/Wind",
		"uvi": "1",
		"humidity": "59",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "61", "metric": "16"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.86", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463796000","pretty": "7:00 PM PDT on May 20, 2016","civil": "7:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "58", "metric": "14"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "10",
		"wspd": {"english": "18", "metric": "29"},
		"wdir": {"dir": "NW", "degrees": "305"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "65",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "58", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.87", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463799600","pretty": "8:00 PM PDT on May 20, 2016","civil": "8:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "56", "metric": "13"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "9",
		"wspd": {"english": "16", "metric": "26"},
		"wdir": {"dir": "NW", "degrees": "307"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "71",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "56", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463803200","pretty": "9:00 PM PDT on May 20, 2016","civil": "9:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "55", "metric": "13"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "9",
		"wspd": {"english": "14", "metric": "23"},
		"wdir": {"dir": "NW", "degrees": "308"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "76",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "55", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463806800","pretty": "10:00 PM PDT on May 20, 2016","civil": "10:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "54", "metric": "12"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "8",
		"wspd": {"english": "13", "metric": "21"},
		"wdir": {"dir": "NW", "degrees": "311"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "80",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "54", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.93", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "20","mday_padded": "20","yday": "140","isdst": "1","epoch": "1463810400","pretty": "11:00 PM PDT on May 20, 2016","civil": "11:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "52", "metric": "11"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "8",
		"wspd": {"english": "11", "metric": "18"},
		"wdir": {"dir": "NW", "degrees": "315"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "85",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "52", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463814000","pretty": "12:00 AM PDT on May 21, 2016","civil": "12:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "51", "metric": "11"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "8",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "NW", "degrees": "318"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "88",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "51", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463817600","pretty": "1:00 AM PDT on May 21, 2016","civil": "1:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "50", "metric": "10"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "8",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "NW", "degrees": "320"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "91",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "50", "metric": "10"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463821200","pretty": "2:00 AM PDT on May 21, 2016","civil": "2:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "49", "metric": "9"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "9",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "NW", "degrees": "323"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "94",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "49", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463824800","pretty": "3:00 AM PDT on May 21, 2016","civil": "3:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "49", "metric": "9"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "9",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "NW", "degrees": "325"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "95",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "49", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463828400","pretty": "4:00 AM PDT on May 21, 2016","civil": "4:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "48", "metric": "9"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "10",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "NNW", "degrees": "329"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "96",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "48", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463832000","pretty": "5:00 AM PDT on May 21, 2016","civil": "5:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "48", "metric": "9"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "12",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NNW", "degrees": "332"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "96",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "48", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463835600","pretty": "6:00 AM PDT on May 21, 2016","civil": "6:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "47", "metric": "8"},
		"dewpoint": {"english": "46", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "14",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NNW", "degrees": "333"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "96",
		"windchill": {"english": "43", "metric": "6"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "43", "metric": "6"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463839200","pretty": "7:00 AM PDT on May 21, 2016","civil": "7:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "49", "metric": "9"},
		"dewpoint": {"english": "46", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "19",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "NNW", "degrees": "331"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "90",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "49", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463842800","pretty": "8:00 AM PDT on May 21, 2016","civil": "8:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "53", "metric": "12"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "26",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "NW", "degrees": "321"},
		"wx": "Mostly Sunny",
		"uvi": "1",
		"humidity": "81",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "53", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.97", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463846400","pretty": "9:00 AM PDT on May 21, 2016","civil": "9:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "34",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NW", "degrees": "308"},
		"wx": "Partly Cloudy",
		"uvi": "3",
		"humidity": "69",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.98", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463850000","pretty": "10:00 AM PDT on May 21, 2016","civil": "10:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "60", "metric": "16"},
		"dewpoint": {"english": "46", "metric": "8"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "39",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "WNW", "degrees": "298"},
		"wx": "Partly Cloudy",
		"uvi": "5",
		"humidity": "60",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "60", "metric": "16"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.99", "metric": "1016"}
		}
		,
		{
		"FCTTIME": {
		"hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463853600","pretty": "11:00 AM PDT on May 21, 2016","civil": "11:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "63", "metric": "17"},
		"dewpoint": {"english": "46", "metric": "8"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
		"fctcode": "3",
		"sky": "67",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "WNW", "degrees": "291"},
		"wx": "Mostly Cloudy",
		"uvi": "6",
		"humidity": "54",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "63", "metric": "17"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.99", "metric": "1016"}
		}
		,
		{
		"FCTTIME": {
		"hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463857200","pretty": "12:00 PM PDT on May 21, 2016","civil": "12:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "65", "metric": "18"},
		"dewpoint": {"english": "46", "metric": "8"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "41",
		"wspd": {"english": "12", "metric": "19"},
		"wdir": {"dir": "WNW", "degrees": "289"},
		"wx": "Partly Cloudy",
		"uvi": "9",
		"humidity": "51",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "65", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.99", "metric": "1016"}
		}
		,
		{
		"FCTTIME": {
		"hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463860800","pretty": "1:00 PM PDT on May 21, 2016","civil": "1:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "65", "metric": "18"},
		"dewpoint": {"english": "46", "metric": "8"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "35",
		"wspd": {"english": "15", "metric": "24"},
		"wdir": {"dir": "WNW", "degrees": "290"},
		"wx": "Partly Cloudy",
		"uvi": "10",
		"humidity": "50",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "65", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.98", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463864400","pretty": "2:00 PM PDT on May 21, 2016","civil": "2:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "66", "metric": "19"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "26",
		"wspd": {"english": "17", "metric": "27"},
		"wdir": {"dir": "WNW", "degrees": "291"},
		"wx": "Mostly Sunny",
		"uvi": "9",
		"humidity": "51",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "66", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.98", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463868000","pretty": "3:00 PM PDT on May 21, 2016","civil": "3:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "65", "metric": "18"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "18",
		"wspd": {"english": "19", "metric": "31"},
		"wdir": {"dir": "WNW", "degrees": "291"},
		"wx": "Sunny",
		"uvi": "7",
		"humidity": "51",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "65", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.97", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463871600","pretty": "4:00 PM PDT on May 21, 2016","civil": "4:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "65", "metric": "18"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "11",
		"wspd": {"english": "19", "metric": "31"},
		"wdir": {"dir": "WNW", "degrees": "294"},
		"wx": "Sunny",
		"uvi": "5",
		"humidity": "53",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "65", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463875200","pretty": "5:00 PM PDT on May 21, 2016","civil": "5:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "63", "metric": "17"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "8",
		"wspd": {"english": "19", "metric": "31"},
		"wdir": {"dir": "WNW", "degrees": "297"},
		"wx": "Sunny",
		"uvi": "3",
		"humidity": "55",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "63", "metric": "17"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463878800","pretty": "6:00 PM PDT on May 21, 2016","civil": "6:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "61", "metric": "16"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "10",
		"wspd": {"english": "17", "metric": "27"},
		"wdir": {"dir": "WNW", "degrees": "300"},
		"wx": "Sunny",
		"uvi": "1",
		"humidity": "61",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "61", "metric": "16"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463882400","pretty": "7:00 PM PDT on May 21, 2016","civil": "7:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "58", "metric": "14"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "14",
		"wspd": {"english": "15", "metric": "24"},
		"wdir": {"dir": "WNW", "degrees": "302"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "67",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "58", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.97", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463886000","pretty": "8:00 PM PDT on May 21, 2016","civil": "8:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "56", "metric": "13"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "18",
		"wspd": {"english": "12", "metric": "19"},
		"wdir": {"dir": "WNW", "degrees": "304"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "74",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "56", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.98", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463889600","pretty": "9:00 PM PDT on May 21, 2016","civil": "9:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "55", "metric": "13"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "23",
		"wspd": {"english": "11", "metric": "18"},
		"wdir": {"dir": "NW", "degrees": "305"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "81",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "55", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "30.0", "metric": "1016"}
		}
		,
		{
		"FCTTIME": {
		"hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463893200","pretty": "10:00 PM PDT on May 21, 2016","civil": "10:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "53", "metric": "12"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "26",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "NW", "degrees": "307"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "86",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "53", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "30.0", "metric": "1016"}
		}
		,
		{
		"FCTTIME": {
		"hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "21","mday_padded": "21","yday": "141","isdst": "1","epoch": "1463896800","pretty": "11:00 PM PDT on May 21, 2016","civil": "11:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "52", "metric": "11"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "28",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "NW", "degrees": "310"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "90",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "52", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "30.01", "metric": "1016"}
		}
		,
		{
		"FCTTIME": {
		"hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463900400","pretty": "12:00 AM PDT on May 22, 2016","civil": "12:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "51", "metric": "11"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "27",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "NW", "degrees": "316"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "94",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "51", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "30.0", "metric": "1016"}
		}
		,
		{
		"FCTTIME": {
		"hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463904000","pretty": "1:00 AM PDT on May 22, 2016","civil": "1:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "50", "metric": "10"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "24",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "NW", "degrees": "323"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "97",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "50", "metric": "10"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "30.0", "metric": "1016"}
		}
		,
		{
		"FCTTIME": {
		"hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463907600","pretty": "2:00 AM PDT on May 22, 2016","civil": "2:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "49", "metric": "9"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "21",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NW", "degrees": "327"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "49", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.99", "metric": "1016"}
		}
		,
		{
		"FCTTIME": {
		"hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463911200","pretty": "3:00 AM PDT on May 22, 2016","civil": "3:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "48", "metric": "9"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "18",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NNW", "degrees": "332"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "48", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.99", "metric": "1016"}
		}
		,
		{
		"FCTTIME": {
		"hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463914800","pretty": "4:00 AM PDT on May 22, 2016","civil": "4:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "48", "metric": "9"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "15",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "NNW", "degrees": "338"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "48", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.98", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463918400","pretty": "5:00 AM PDT on May 22, 2016","civil": "5:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "47", "metric": "8"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "14",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "NNW", "degrees": "342"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "44", "metric": "7"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "44", "metric": "7"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.98", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463922000","pretty": "6:00 AM PDT on May 22, 2016","civil": "6:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "47", "metric": "8"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "17",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "NNW", "degrees": "346"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "44", "metric": "7"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "44", "metric": "7"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.98", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463925600","pretty": "7:00 AM PDT on May 22, 2016","civil": "7:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "48", "metric": "9"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "22",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "NNW", "degrees": "339"},
		"wx": "Mostly Sunny",
		"uvi": "0",
		"humidity": "98",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "48", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.98", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463929200","pretty": "8:00 AM PDT on May 22, 2016","civil": "8:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "51", "metric": "11"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "28",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "NW", "degrees": "323"},
		"wx": "Mostly Sunny",
		"uvi": "1",
		"humidity": "89",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "51", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.98", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463932800","pretty": "9:00 AM PDT on May 22, 2016","civil": "9:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "55", "metric": "13"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "34",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "WNW", "degrees": "303"},
		"wx": "Partly Cloudy",
		"uvi": "3",
		"humidity": "76",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "55", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.98", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463936400","pretty": "10:00 AM PDT on May 22, 2016","civil": "10:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "60", "metric": "16"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "38",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "WNW", "degrees": "292"},
		"wx": "Partly Cloudy",
		"uvi": "5",
		"humidity": "65",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "60", "metric": "16"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.98", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463940000","pretty": "11:00 AM PDT on May 22, 2016","civil": "11:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "63", "metric": "17"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "38",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "WNW", "degrees": "288"},
		"wx": "Partly Cloudy",
		"uvi": "7",
		"humidity": "57",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "63", "metric": "17"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.97", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463943600","pretty": "12:00 PM PDT on May 22, 2016","civil": "12:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "65", "metric": "18"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "35",
		"wspd": {"english": "12", "metric": "19"},
		"wdir": {"dir": "WNW", "degrees": "289"},
		"wx": "Partly Cloudy",
		"uvi": "9",
		"humidity": "53",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "65", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.97", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463947200","pretty": "1:00 PM PDT on May 22, 2016","civil": "1:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "66", "metric": "19"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "30",
		"wspd": {"english": "15", "metric": "24"},
		"wdir": {"dir": "WNW", "degrees": "290"},
		"wx": "Partly Cloudy",
		"uvi": "10",
		"humidity": "52",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "66", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463950800","pretty": "2:00 PM PDT on May 22, 2016","civil": "2:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "66", "metric": "19"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "23",
		"wspd": {"english": "16", "metric": "26"},
		"wdir": {"dir": "WNW", "degrees": "293"},
		"wx": "Mostly Sunny",
		"uvi": "9",
		"humidity": "52",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "66", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463954400","pretty": "3:00 PM PDT on May 22, 2016","civil": "3:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "66", "metric": "19"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "17",
		"wspd": {"english": "17", "metric": "27"},
		"wdir": {"dir": "WNW", "degrees": "296"},
		"wx": "Sunny",
		"uvi": "7",
		"humidity": "53",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "66", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463958000","pretty": "4:00 PM PDT on May 22, 2016","civil": "4:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "65", "metric": "18"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "12",
		"wspd": {"english": "17", "metric": "27"},
		"wdir": {"dir": "WNW", "degrees": "298"},
		"wx": "Sunny",
		"uvi": "5",
		"humidity": "55",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "65", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.93", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463961600","pretty": "5:00 PM PDT on May 22, 2016","civil": "5:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "63", "metric": "17"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "10",
		"wspd": {"english": "18", "metric": "29"},
		"wdir": {"dir": "WNW", "degrees": "301"},
		"wx": "Sunny",
		"uvi": "3",
		"humidity": "59",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "63", "metric": "17"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.93", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463965200","pretty": "6:00 PM PDT on May 22, 2016","civil": "6:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "61", "metric": "16"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "9",
		"wspd": {"english": "17", "metric": "27"},
		"wdir": {"dir": "NW", "degrees": "305"},
		"wx": "Sunny",
		"uvi": "1",
		"humidity": "65",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "61", "metric": "16"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.93", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463968800","pretty": "7:00 PM PDT on May 22, 2016","civil": "7:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "58", "metric": "14"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "9",
		"wspd": {"english": "15", "metric": "24"},
		"wdir": {"dir": "NW", "degrees": "307"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "71",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "58", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463972400","pretty": "8:00 PM PDT on May 22, 2016","civil": "8:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "56", "metric": "13"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "9",
		"wspd": {"english": "12", "metric": "19"},
		"wdir": {"dir": "NW", "degrees": "308"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "77",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "56", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463976000","pretty": "9:00 PM PDT on May 22, 2016","civil": "9:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "54", "metric": "12"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "10",
		"wspd": {"english": "11", "metric": "18"},
		"wdir": {"dir": "NW", "degrees": "311"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "84",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "54", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463979600","pretty": "10:00 PM PDT on May 22, 2016","civil": "10:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "53", "metric": "12"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "11",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "NW", "degrees": "313"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "88",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "53", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.97", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "22","mday_padded": "22","yday": "142","isdst": "1","epoch": "1463983200","pretty": "11:00 PM PDT on May 22, 2016","civil": "11:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "52", "metric": "11"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "11",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "NW", "degrees": "315"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "90",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "52", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.98", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1463986800","pretty": "12:00 AM PDT on May 23, 2016","civil": "12:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "51", "metric": "11"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "14",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "NW", "degrees": "318"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "93",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "51", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "8",
		"mslp": {"english": "29.97", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1463990400","pretty": "1:00 AM PDT on May 23, 2016","civil": "1:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "50", "metric": "10"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "16",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NW", "degrees": "321"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "96",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "50", "metric": "10"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "8",
		"mslp": {"english": "29.97", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1463994000","pretty": "2:00 AM PDT on May 23, 2016","civil": "2:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "49", "metric": "9"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "19",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NNW", "degrees": "328"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "49", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "8",
		"mslp": {"english": "29.97", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1463997600","pretty": "3:00 AM PDT on May 23, 2016","civil": "3:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "49", "metric": "9"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "22",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NNW", "degrees": "334"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "49", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "8",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1464001200","pretty": "4:00 AM PDT on May 23, 2016","civil": "4:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "48", "metric": "9"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "24",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "NNW", "degrees": "334"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "48", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "8",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1464004800","pretty": "5:00 AM PDT on May 23, 2016","civil": "5:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "48", "metric": "9"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "25",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "NNW", "degrees": "337"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "48", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "8",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1464008400","pretty": "6:00 AM PDT on May 23, 2016","civil": "6:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "48", "metric": "9"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "24",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NNW", "degrees": "339"},
		"wx": "Mostly Sunny",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "48", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1464012000","pretty": "7:00 AM PDT on May 23, 2016","civil": "7:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "49", "metric": "9"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "21",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NNW", "degrees": "333"},
		"wx": "Mostly Sunny",
		"uvi": "0",
		"humidity": "98",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "49", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1464015600","pretty": "8:00 AM PDT on May 23, 2016","civil": "8:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "53", "metric": "12"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "16",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NW", "degrees": "320"},
		"wx": "Sunny",
		"uvi": "1",
		"humidity": "87",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "53", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1464019200","pretty": "9:00 AM PDT on May 23, 2016","civil": "9:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "11",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "NW", "degrees": "305"},
		"wx": "Sunny",
		"uvi": "3",
		"humidity": "76",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1464022800","pretty": "10:00 AM PDT on May 23, 2016","civil": "10:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "61", "metric": "16"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "7",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "WNW", "degrees": "295"},
		"wx": "Sunny",
		"uvi": "5",
		"humidity": "64",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "61", "metric": "16"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.97", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1464026400","pretty": "11:00 AM PDT on May 23, 2016","civil": "11:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "65", "metric": "18"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "5",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "WNW", "degrees": "290"},
		"wx": "Sunny",
		"uvi": "7",
		"humidity": "57",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "65", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.97", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1464030000","pretty": "12:00 PM PDT on May 23, 2016","civil": "12:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "67", "metric": "19"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "5",
		"wspd": {"english": "12", "metric": "19"},
		"wdir": {"dir": "WNW", "degrees": "290"},
		"wx": "Sunny",
		"uvi": "9",
		"humidity": "52",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "67", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.97", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1464033600","pretty": "1:00 PM PDT on May 23, 2016","civil": "1:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "68", "metric": "20"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "4",
		"wspd": {"english": "15", "metric": "24"},
		"wdir": {"dir": "WNW", "degrees": "292"},
		"wx": "Sunny",
		"uvi": "10",
		"humidity": "51",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "68", "metric": "20"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.96", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1464037200","pretty": "2:00 PM PDT on May 23, 2016","civil": "2:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "68", "metric": "20"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "4",
		"wspd": {"english": "16", "metric": "26"},
		"wdir": {"dir": "WNW", "degrees": "293"},
		"wx": "Sunny",
		"uvi": "9",
		"humidity": "51",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "68", "metric": "20"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1464040800","pretty": "3:00 PM PDT on May 23, 2016","civil": "3:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "67", "metric": "19"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "5",
		"wspd": {"english": "17", "metric": "27"},
		"wdir": {"dir": "WNW", "degrees": "295"},
		"wx": "Sunny",
		"uvi": "7",
		"humidity": "52",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "67", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1464044400","pretty": "4:00 PM PDT on May 23, 2016","civil": "4:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "66", "metric": "19"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "4",
		"wspd": {"english": "17", "metric": "27"},
		"wdir": {"dir": "WNW", "degrees": "297"},
		"wx": "Sunny",
		"uvi": "5",
		"humidity": "55",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "66", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.93", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1464048000","pretty": "5:00 PM PDT on May 23, 2016","civil": "5:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "64", "metric": "18"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "5",
		"wspd": {"english": "17", "metric": "27"},
		"wdir": {"dir": "WNW", "degrees": "299"},
		"wx": "Sunny",
		"uvi": "3",
		"humidity": "59",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "64", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.92", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1464051600","pretty": "6:00 PM PDT on May 23, 2016","civil": "6:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "62", "metric": "17"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "6",
		"wspd": {"english": "16", "metric": "26"},
		"wdir": {"dir": "WNW", "degrees": "302"},
		"wx": "Sunny",
		"uvi": "1",
		"humidity": "65",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "62", "metric": "17"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.87", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1464055200","pretty": "7:00 PM PDT on May 23, 2016","civil": "7:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "59", "metric": "15"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "5",
		"wspd": {"english": "14", "metric": "23"},
		"wdir": {"dir": "NW", "degrees": "304"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "72",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "59", "metric": "15"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.88", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1464058800","pretty": "8:00 PM PDT on May 23, 2016","civil": "8:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "56", "metric": "13"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "5",
		"wspd": {"english": "11", "metric": "18"},
		"wdir": {"dir": "NW", "degrees": "307"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "80",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "56", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1464062400","pretty": "9:00 PM PDT on May 23, 2016","civil": "9:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "55", "metric": "13"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "6",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "NW", "degrees": "308"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "84",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "55", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.9", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1464066000","pretty": "10:00 PM PDT on May 23, 2016","civil": "10:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "54", "metric": "12"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "8",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "NW", "degrees": "308"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "87",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "54", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "23","mday_padded": "23","yday": "143","isdst": "1","epoch": "1464069600","pretty": "11:00 PM PDT on May 23, 2016","civil": "11:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "53", "metric": "12"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "12",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "NW", "degrees": "312"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "89",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "53", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464073200","pretty": "12:00 AM PDT on May 24, 2016","civil": "12:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "52", "metric": "11"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "18",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "NW", "degrees": "316"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "91",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "52", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464076800","pretty": "1:00 AM PDT on May 24, 2016","civil": "1:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "51", "metric": "11"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "27",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NW", "degrees": "318"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "93",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "51", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.9", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464080400","pretty": "2:00 AM PDT on May 24, 2016","civil": "2:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "50", "metric": "10"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "33",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NW", "degrees": "319"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "95",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "50", "metric": "10"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.9", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464084000","pretty": "3:00 AM PDT on May 24, 2016","civil": "3:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "49", "metric": "9"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "36",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NW", "degrees": "322"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "97",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "49", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464087600","pretty": "4:00 AM PDT on May 24, 2016","civil": "4:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "49", "metric": "9"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "35",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NW", "degrees": "322"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "97",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "49", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464091200","pretty": "5:00 AM PDT on May 24, 2016","civil": "5:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "49", "metric": "9"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "32",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NNW", "degrees": "327"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "98",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "49", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.89", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464094800","pretty": "6:00 AM PDT on May 24, 2016","civil": "6:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "49", "metric": "9"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "24",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NNW", "degrees": "328"},
		"wx": "Mostly Sunny",
		"uvi": "0",
		"humidity": "97",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "49", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "6",
		"mslp": {"english": "29.9", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464098400","pretty": "7:00 AM PDT on May 24, 2016","civil": "7:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "50", "metric": "10"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "14",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "NW", "degrees": "324"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "95",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "50", "metric": "10"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.9", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464102000","pretty": "8:00 AM PDT on May 24, 2016","civil": "8:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "53", "metric": "12"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "9",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NW", "degrees": "311"},
		"wx": "Sunny",
		"uvi": "1",
		"humidity": "85",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "53", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464105600","pretty": "9:00 AM PDT on May 24, 2016","civil": "9:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "8",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "WNW", "degrees": "299"},
		"wx": "Sunny",
		"uvi": "3",
		"humidity": "74",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464109200","pretty": "10:00 AM PDT on May 24, 2016","civil": "10:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "62", "metric": "17"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "8",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "WNW", "degrees": "289"},
		"wx": "Sunny",
		"uvi": "5",
		"humidity": "63",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "62", "metric": "17"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.92", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464112800","pretty": "11:00 AM PDT on May 24, 2016","civil": "11:00 AM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "65", "metric": "18"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "7",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "WNW", "degrees": "286"},
		"wx": "Sunny",
		"uvi": "7",
		"humidity": "56",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "65", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.92", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464116400","pretty": "12:00 PM PDT on May 24, 2016","civil": "12:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "67", "metric": "19"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "7",
		"wspd": {"english": "12", "metric": "19"},
		"wdir": {"dir": "WNW", "degrees": "285"},
		"wx": "Sunny",
		"uvi": "9",
		"humidity": "53",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "67", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.92", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464120000","pretty": "1:00 PM PDT on May 24, 2016","civil": "1:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "67", "metric": "19"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "6",
		"wspd": {"english": "14", "metric": "23"},
		"wdir": {"dir": "WNW", "degrees": "285"},
		"wx": "Sunny",
		"uvi": "10",
		"humidity": "52",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "67", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.92", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464123600","pretty": "2:00 PM PDT on May 24, 2016","civil": "2:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "67", "metric": "19"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "6",
		"wspd": {"english": "16", "metric": "26"},
		"wdir": {"dir": "WNW", "degrees": "286"},
		"wx": "Sunny",
		"uvi": "9",
		"humidity": "53",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "67", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464127200","pretty": "3:00 PM PDT on May 24, 2016","civil": "3:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "67", "metric": "19"},
		"dewpoint": {"english": "49", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "5",
		"wspd": {"english": "16", "metric": "26"},
		"wdir": {"dir": "WNW", "degrees": "288"},
		"wx": "Sunny",
		"uvi": "7",
		"humidity": "53",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "67", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464130800","pretty": "4:00 PM PDT on May 24, 2016","civil": "4:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "66", "metric": "19"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "5",
		"wspd": {"english": "16", "metric": "26"},
		"wdir": {"dir": "WNW", "degrees": "291"},
		"wx": "Sunny",
		"uvi": "5",
		"humidity": "55",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "66", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464134400","pretty": "5:00 PM PDT on May 24, 2016","civil": "5:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "64", "metric": "18"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "4",
		"wspd": {"english": "16", "metric": "26"},
		"wdir": {"dir": "WNW", "degrees": "294"},
		"wx": "Sunny",
		"uvi": "3",
		"humidity": "59",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "64", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464138000","pretty": "6:00 PM PDT on May 24, 2016","civil": "6:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "62", "metric": "17"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "4",
		"wspd": {"english": "15", "metric": "24"},
		"wdir": {"dir": "WNW", "degrees": "297"},
		"wx": "Sunny",
		"uvi": "1",
		"humidity": "64",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "62", "metric": "17"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464141600","pretty": "7:00 PM PDT on May 24, 2016","civil": "7:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "59", "metric": "15"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "4",
		"wspd": {"english": "13", "metric": "21"},
		"wdir": {"dir": "WNW", "degrees": "302"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "72",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "59", "metric": "15"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.92", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "5","mon_padded": "05","mon_abbrev": "May","mday": "24","mday_padded": "24","yday": "144","isdst": "1","epoch": "1464145200","pretty": "8:00 PM PDT on May 24, 2016","civil": "8:00 PM","month_name": "May","month_name_abbrev": "May","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "56", "metric": "13"},
		"dewpoint": {"english": "50", "metric": "10"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "4",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "NW", "degrees": "304"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "79",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "56", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.93", "metric": "1014"}
		}
	]
		,	"moon_phase": {
		"percentIlluminated":"64",
		"ageOfMoon":"9",
		"phaseofMoon":"Waxing Gibbous",
		"hemisphere":"North",
		"current_time": {
		"hour":"20",
		"minute":"34"
		},
		"sunrise": {
		"hour":"5",
		"minute":"59"
		},
		"sunset": {
		"hour":"19",
		"minute":"59"
		},
		"moonrise": {
		"hour":"13",
		"minute":"45"
		},
		"moonset": {
		"hour":"2",
		"minute":"11"
		}
	},
	"sun_phase": {
		"sunrise": {
		"hour":"5",
		"minute":"59"
		},
		"sunset": {
		"hour":"19",
		"minute":"59"
		}
	}
});
}