'use strict';

var itemsList = [
	'Russia',
	'BMW',
	'Prius',
	'Lada',
	'Semi/Bus',
	'Brake check',
	'Bicyclist',
	'Motorcyclist',
	'Runs red light',
	'Distracted driving',
	'Shoulder driving',
	'Inclement weather',
	'Snowbird',
	'Loose wheel/hubcap',
	'Explosion/fire',
	'No headlights at night',
	'Vehicle flipping over',
	'Instant karma',
	'Speeding',
	'Slow driving',
	'Air horn/train horn',
	'Late exit',
	'Overtaking',
	'Merging',
	'Road rage',
	'Pedestrian on vehicle assault',
	'Left turner',
	'U-turner'
];
var arr = null;
var currTd;
var lastIndex;
var moves;
var userBingo;

function init() {
	currTd = null;
	lastIndex = -1;
	moves = 0;
	userBingo = false;
	
	shuffle(itemsList);
	while(itemsList.length > 25) {
		itemsList.pop();
	}
	var tableStr = '';
	for (var i = 0; i <= 24; i++) {
		if (i % 5 == 0 && i > 0) {
			tableStr += `</tr>`;
		}
		if (i % 5 == 0 && i < 24) {
			tableStr += `<tr>`;
		}
		tableStr += `<td onmouseover="mouseOver(${i})" onmouseout="mouseOut(${i})" onclick="onClick()">${i != 12 ? itemsList[i] : 'FREE (Blame the cammer)'}</td>`;
	}
	$('.bingo-table').html(`<table>${tableStr}</table>`);
	$(`table > tbody > tr:nth-child(3) > td:nth-child(3)`).addClass('td-chosen');
	$('button').html('Submit');
	$('.stats').html('Moves: 0<br>Squares filled in: 1');
	
	randomLink();
}

$(function() {
    $.ajax({
		url: "https://www.reddit.com/r/Roadcam.json",
		type: "GET",
		dataType : "json",
	})
	.done(function(response) {
		arr = response.data.children;
		init();
	})
	.fail(function(xhr, status, errorThrown) {
		alert("Sorry, there was a problem loading the data!\nTry refreshing the page.");
		console.log(`Error: ${errorThrown}`);
		console.log(`Status: ${status}`);
		console.dir(xhr);
	});
});

function shuffle(array) {
	var m = array.length, t, i;
	while (m) {
		i = Math.floor(Math.random() * m--);
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
}

function randomLink() {
	var newIndex = lastIndex;
	while (newIndex === lastIndex || !arr[newIndex].data.media_embed.content) {
		newIndex = Math.floor(arr.length * Math.random());
	}
	var obj = arr[newIndex].data;
	setTimeout(function() {
		$('.curr-video').html(`<span>${obj.title}<span><br>${obj.media_embed.content.replace(/&lt;/g, '<').replace(/&lt;/g, '>')}<br>`);
	}, 500);
	lastIndex = newIndex;
}

function mouseOver(id) {
	$(`table > tbody > tr:nth-child(${Math.floor(id / 5) + 1}) > td:nth-child(${(id) % 5 + 1})`).addClass('td-hover');
	currTd = id;
}

function mouseOut(id) {
	$(`table > tbody > tr:nth-child(${Math.floor(id / 5) + 1}) > td:nth-child(${(id) % 5 + 1})`).removeClass('td-hover');
	currTd = null;
}

function onClick() {
	if (currTd === null) {
		return;
	}
	var tempTd = $(`table > tbody > tr:nth-child(${Math.floor(currTd / 5) + 1}) > td:nth-child(${currTd % 5 + 1})`);
	if (!tempTd.hasClass('td-select')) {
		tempTd.addClass('td-select');
	} else {
		tempTd.removeClass('td-select');
	}
}

function onSubmit() {
	
	if (userBingo) {
		init();
		return;
	}
	
	var chosenCount = 0;
	for (var i = 0; i <= 24; i++) {
		var tempTd = $(`table > tbody > tr:nth-child(${Math.floor(i / 5) + 1}) > td:nth-child(${i % 5 + 1})`);
		if (tempTd.hasClass('td-select')) {
			tempTd.removeClass('td-select');
			tempTd.addClass('td-chosen');
		}
		if (tempTd.hasClass('td-chosen')) {
			chosenCount++;
		}
	}
	
	moves++;
	$('.stats').html(`Moves: ${moves}<br>Squares filled in: ${chosenCount}`);
	
	// check for bingo on rows and cols
	for (var i = 1; i <= 5; i++) {
		var fullCol = true, fullRow = true;
		for (var j = 1; j <= 5; j++) {
			if (!$(`table > tbody > tr:nth-child(${i}) > td:nth-child(${j}`).hasClass('td-chosen')) {
				fullRow = false;
			}
			if (!$(`table > tbody > tr:nth-child(${j}) > td:nth-child(${i}`).hasClass('td-chosen')) {
				fullCol = false;
			}
		}
		if (fullCol || fullRow) {
			userBingo = true;
			if (confirm('Bingo! Would you like to play again?')) {
				init();
			} else {
				$('button').html('Reset');
			}
			return;
		}
	}
	
	// check for bingo on diagonals
	var fullDiagDown = true, fullDiagUp = true;
	for (var j = 1; j <= 5; j++) {
		if (!$(`table > tbody > tr:nth-child(${j}) > td:nth-child(${j}`).hasClass('td-chosen')) {
			fullDiagDown = false;
		}
		if (!$(`table > tbody > tr:nth-child(${j}) > td:nth-child(${5 - (j - 1)}`).hasClass('td-chosen')) {
			fullDiagUp = false;
		}
	}
	if (fullDiagDown || fullDiagUp) {
		userBingo = true;
		if (confirm('Bingo! Would you like to play again?')) {
			init();
		} else {
			$('button').html('Reset');
		}
		return;
	}
	
	randomLink();
}