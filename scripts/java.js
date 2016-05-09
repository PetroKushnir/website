$(document).ready(function() {
    $('#contactForm').submit(function() {
        $.ajax({
            url: "https://formspree.io/kallebloomckwist@gmail.com",
            method: "POST",
            data: {
                name: name.value + " " + surname.value,
                email: email.value,
                message: msg.value
            },
            dataType: "json"
        }).done(function() {
            $('.submit_form').html('<h1>Thank you for your message!</h1>')
        });
        return false;
    });    
});
