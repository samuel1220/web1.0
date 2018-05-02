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

    // $('.idin').click(function() {
    //     console.log('input')
    //     var gato = true
    //     $(this).addClass('clasein');

    // });



});