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
var currTd = null;
var lastIndex = -1;
var moves = 0;
var userBingo = false;

$(function() {
    $.ajax({
		url: "https://www.reddit.com/r/Roadcam.json",
		type: "GET",
		dataType : "json",
	})
	.done(function(response) {
		arr = response.data.children;
		randomLink();
	})
	.fail(function(xhr, status, errorThrown) {
		alert("Sorry, there was a problem!");
		console.log("Error: " + errorThrown);
		console.log("Status: " + status);
		console.dir(xhr);
	});
	
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
	if (arr === null) {
		return;
	}
	var obj = arr[lastIndex = Math.floor(arr.length * Math.random())].data;
	$('.curr-video').html(`<span>${obj.title}<span><br>${obj.media_embed.content.replace(/&lt;/g, '<').replace(/&lt;/g, '>')}<br>`);
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
	$(`table > tbody > tr:nth-child(${Math.floor(currTd / 5) + 1}) > td:nth-child(${(currTd) % 5 + 1})`).addClass('td-select');
}

function onSubmit() {
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
	
	var newIndex = lastIndex;
	while (newIndex === lastIndex) {
		newIndex = Math.floor(arr.length * Math.random());
	}
	var obj = arr[newIndex].data;
	setTimeout(function() {
		$('.curr-video').html(`<span>${obj.title}<span><br>${obj.media_embed.content.replace(/&lt;/g, '<').replace(/&lt;/g, '>')}<br>`);
	}, 500);
	lastIndex = newIndex;
	
	if (userBingo) {
		alert('You already won!');
		return;
	}
	
	// check for bingo
	var fullDiagDown = true, fullDiagUp = true;
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
		if (i === 1) {
			for (var j = 1; j <= 5; j++) {
				if (!$(`table > tbody > tr:nth-child(${j}) > td:nth-child(${j}`).hasClass('td-chosen')) {
					fullDiagDown = false;
				}
				if (!$(`table > tbody > tr:nth-child(${j}) > td:nth-child(${5 - (j - 1)}`).hasClass('td-chosen')) {
					fullDiagUp = false;
				}
			}
		}
		if (fullCol || fullRow) {
			alert('Bingo!');
			userBingo = true;
			return;
		}
	}
	if (fullDiagDown || fullDiagUp) {
		alert('Bingo!');
		userBingo = true;
	}
}