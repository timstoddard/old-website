$(function() {
    $.ajax({
		url: "https://www.reddit.com/r/Roadcam.json",
		type: "GET",
		dataType : "json",
	})
	.done(function(response) {
		var arr = response.data.children;
		// console.log(arr);
		var htmlStr = '';
		var table = [[], [], [], [], []];
		var row = 0;
		var col = 0;
		arr.forEach(function(elem) {
			htmlStr += `<li><img src="${elem.data.thumbnail}"> ${elem.data.title} (<a href="${elem.data.url}">link</a>)</li>`;
			table[row][col] = elem.data.thumbnail;
			col++;
			if (col == 5) {
				row++;
				col = 0;
			}
		});
		$('.list-container').html(`<ul>${htmlStr}</ul>`);
		var tableStr = '';
		for (var i = 0; i < table.length; i++) {
			tableStr += '<tr>';
			for (var j = 0; j < table.length; j++) {
				tableStr += `<td><img src="${table[i][j]}"></td>`
			}
			tableStr += '</tr>';
		}
		$('.bingo-table').html(`<table>${tableStr}</table>`);
	})
	.fail(function(xhr, status, errorThrown) {
		alert( "Sorry, there was a problem!" );
		console.log( "Error: " + errorThrown );
		console.log( "Status: " + status );
		console.dir( xhr );
	})
});