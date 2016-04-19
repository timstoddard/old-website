$(function() {
    $.ajax({
		url: "https://www.reddit.com/r/Roadcam.json",
		type: "GET",
		dataType : "json",
	})
	.done(function(response) {
		var arr = response.data.children;
		console.log(arr);
		var htmlStr = '';
		arr.forEach(function(elem) {
			htmlStr += `<li><img src="${elem.data.thumbnail}"> ${elem.data.title} (<a href="${elem.data.url}">link</a>)</li>`;
		});
		$('.list-container').html(htmlStr);
	})
	.fail(function(xhr, status, errorThrown) {
		alert( "Sorry, there was a problem!" );
		console.log( "Error: " + errorThrown );
		console.log( "Status: " + status );
		console.dir( xhr );
	})
});