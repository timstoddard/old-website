$(function() {
	var phone = ['1','2','4','1',' ','4','9','3',' ','8','0','4'];
	var school = ['u','d','e','.','y','l','o','p','l','a','c','@','r','a','d','d','o','t','s','t'];
	var work = ['t','i','.','e','t','a','e','r','C','o','S','@','d','r','a','d','d','o','t','S','.','y','h','t','o','m','i','T'];
	var personal = ['m','o','c','.','l','i','a','m','g','@','2','d','r','a','d','d','o','t','s','.','m','i','t'];
	$('#phone').html(`${phone.reverse().join('')}`)
	$('#school').html(`<a href="mailto:${school.reverse().join('')}">${school.join('')}</a>`);
	$('#work').html(`<a href="mailto:${work.reverse().join('')}">${work.join('')}</a>`);
	$('#personal').html(`<a href="mailto:${personal.reverse().join('')}">${personal.join('')}</a>`);
})

$('#send').click(function() {
    if (!$('#name').val()) {
        alert('Please enter your name.');
        return;
    }
    if (!$('#sender-email').val()) {
        alert('Please enter your email.');
        return;
    }
    if (!$('#subject').val()) {
        alert('Please enter a subject.');
        return;
    }
    if (!$('#message').val()) {
        alert('Please enter a message.');
        return;
    }
	$.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
            'key': 'J5O1Hvb_BAVJa73BtCJm3g',
            'message': {
                'from_email': 'homepage-contact@tstoddard.com',
                'from_name': `${$('#name').val()}`,
                'to': [
                    {
                        'email': 'tim.stoddard2@gmail.com',
                        'name': 'Tim',
                        'type': 'to'
                    }
                ],
                'subject': `${$('#subject').val()}`,
                'html': `"${$('#name').val()}" (${$('#sender-email').val()}) says: ${DOMPurify.sanitize($('#message').val().replace(/\n/g, '<br>'))}`
            }
        }
    }).done(function() {
        $('#name').val('');
        $('#sender-email').val('');
        $('#subject').val('');
        $('#message').val('');
    });
});