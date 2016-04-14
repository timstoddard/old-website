$(function() {
    
    $('.detail-text').hide();
    
    $('#contact').click(function() {
        let phone = ['1','2','4','1',' ','4','9','3',' ','8','0','4'];
        let school = ['u','d','e','.','y','l','o','p','l','a','c','@','r','a','d','d','o','t','s','t'];
        let work = ['t','i','.','e','t','a','e','r','C','o','S','@','d','r','a','d','d','o','t','S','.','y','h','t','o','m','i','T'];
        let personal = ['m','o','c','.','l','i','a','m','g','@','2','d','r','a','d','d','o','t','s','.','m','i','t'];
        $('#phone').html(`${phone.reverse().join('')}`)
        $('#school').html(`<a href="mailto:${school.reverse().join('')}">${school.join('')}</a>`);
        $('#work').html(`<a href="mailto:${work.reverse().join('')}">${work.join('')}</a>`);
        $('#personal').html(`<a href="mailto:${personal.reverse().join('')}">${personal.join('')}</a>`);
        $('#myModal').modal();
    });
    
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
        //console.log(`"${$('#name').val()}" (${$('#sender-email').val()})`);
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
                    'html': `"${$('#name').val()}" (${$('#sender-email').val()}) says: ${sanitizeText($('#message').val())}`
                }
            }
        }).done(function() {
            $('#myModal').modal('hide');
            $('#name').val('');
            $('#sender-email').val('');
            $('#subject').val('');
            $('#message').val('');
        });
    });

});

function sanitizeText(str) {
    return document.createElement('div').appendChild(document.createTextNode(str)).innerHTML;
}

$('td > span').click(function() {
    if ($('.detail-text').is(':visible')) {
        $('.detail-text').slideToggle(
            {
                duration: 500,
                progress: function(anim, prog) {
                    $('td > span').css({
                        '-webkit-transform': `rotate(${180 - prog * 180}deg)`,
                        '-moz-transform': `rotate(${180 - prog * 180}deg)`,
                        '-ms-transform': `rotate(${180 - prog * 180}deg)`,
                        '-o-transform': `rotate(${180 - prog * 180}deg)`,
                        'transform': `rotate(${180 - prog * 180}deg)`
                    });
                },
                done: function() {
                    //$('td > span').addClass('hover-wiggle');
                    $('td > span').addClass('semi-transparent');
                }
            });
    } else {
        $('td > span').removeClass('hover-wiggle');
        $('td > span').removeClass('semi-transparent');
        $('.detail-text').slideToggle({
                duration: 500,
                progress: function(anim, prog) {
                    $('td > span').css({
                        '-webkit-transform': `rotate(${prog * 180}deg)`,
                        '-moz-transform': `rotate(${prog * 180}deg)`,
                        '-ms-transform': `rotate(${prog * 180}deg)`,
                        '-o-transform': `rotate(${prog * 180}deg)`,
                        'transform': `rotate(${prog * 180}deg)`
                    });
                }
            });
    }
});