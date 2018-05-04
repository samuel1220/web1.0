$(document).ready(function() {

    $('#idinput').click(function() {
        console.log('message inputs')
        var gato = true
        $(this).addClass('clasein');
        $(this).removeClass('idin');
        if (gato !== true) {
            console.log('es verdad');
        }
    });

    $('#chek').click(function() {
        console.log('input')
            // $("#idna").addClass('clasein');
        $('#idna').animate({
            width: "toggle"
        });

    });
    $('.idgali').click(function(e) {
        e.preventDefault();
        $(this).children('ul').slideToggle();
    })



});
