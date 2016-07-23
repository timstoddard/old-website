document.getElementById('text').focus();
var shiftKeyDown = false;
var morseCode = {
	'a': '.-',
	'b': '-...',
	'c': '-.-.',
	'd': '-..',
	'e': '.',
	'f': '..-.',
	'g': '--.',
	'h': '....',
	'i': '..',
	'j': '.---',
	'k': '-.-',
	'l': '.-..',
	'm': '--',
	'n': '-.',
	'o': '---',
	'p': '.--.',
	'q': '--.-',
	'r': '.-.',
	's': '...',
	't': '-',
	'u': '..-',
	'v': '...-',
	'w': '.--',
	'x': '-..-',
	'y': '-.--',
	'z': '--..',
	'0': '-----',
	'1': '.----',
	'2': '..---',
	'3': '...--',
	'4': '....-',
	'5': '.....',
	'6': '-....',
	'7': '--...',
	'8': '---..',
	'9': '----.',
	'!': '..--.',
	'/': '-..-.',
	'=': '-...-',
	'?': '..--..',
	'"': '.-..-.',
	'.': '.-.-.-',
	'@': '.--.-.',
	"'": '.----.',
	'-': '-....-',
	',': '--..--',
	':': '---...',
}

function loadMockData() {
	document.getElementById('text').value = "any phrase to be translated";
}

function checkKeyDown(event) {
	if (event.which === 16) {
		shiftKeyDown = true;
	}
	if (event.which === 13 && !shiftKeyDown) {
		event.stopPropagation();
    	event.preventDefault();
		fixData();
	}
}

function checkKeyUp(event) {
	if (event.which === 16) {
		shiftKeyDown = false;
	}
}

function replaceText(event) {
    event.stopPropagation();
    event.preventDefault();
    var clipboardData = event.clipboardData || window.clipboardData;
    var pastedData = clipboardData.getData('Text');
	document.getElementById('text').value = pastedData;
}

function morsify() {

	// read in the data and format it
	var text = document
		.getElementById('text').value // read in the data
		.replace(/\n+/g, ' ') // remove newlines
		.replace(/[^a-zA-Z0-9 ]/g, ''); // remove all invalid characters

	// create the encoded string
	var results = new Array(text.length);
	for (var i = 0; i < text.length; i++) {
		var char = text[i].toLowerCase();
		if (char === ' ') {
			results[i] = '/';
		} else {
			results[i] = morseCode[char];
		}
	}

	var result = results.join(' ');
	document.getElementById('output').innerText = result;
	document.getElementById('output').focus();
}
