$('#indexSlider').slick({
    arrows: false,
    fade: true,
});

$(document).ready(function () {
    var date = new Date(2017, 8, 23, 18, 30);
    var $display = $('#countdown');
    countdown($display, date);
    setInterval(function () { countdown($display, date); }, 1000);
});

var offset = get_time_zone_offset();

function countdown($display, collision) {
    var now = new Date();
    now.setHours(now.getHours() + (offset-5));
    //var seconds = Math.ceil((collision.getTime() - now.getTime()) * 0.001);
    //var minutes = Math.ceil(seconds/60);
    //var hours = Math.ceil(seconds/60/60 * 10)/10;
    //var days = Math.ceil((seconds/60/60/24) * 100)/100;
    var seconds = Math.floor((collision.getTime() - now.getTime()) * 0.001);
    var minutes = (Math.floor(seconds/60) % 60); //60 minutes in an hour
    var hours = (Math.floor(seconds/60/60 * 10)/10) % 24; //24 hours in a day
    var days = Math.floor((seconds/60/60/24));
    //var weeks = Math.ceil((days/7) * 100)/100;
    $display.html
        (
            '<p>' +
            collision + ((offset != 5) ? ' with time zone offset of ' + (offset-5) + ' hours' : '') +
            '<br>seconds: ' + seconds +
            '<br>minutes: ' + minutes +
            '<br>hours: ' + hours +
            '<br>days: ' + days +
            //'<br>weeks: ' + weeks +
            '</p>'
        );
}

function get_time_zone_offset() {
     var current_date = new Date( );
     var gmt_offset = current_date.getTimezoneOffset( ) / 60;
     return gmt_offset;
}

var tempSrc;
$('.gallery-module').on('click', function(){
    tempSrc = $(this).find('img').attr('src');
    $('#popup-image').attr('src', tempSrc);
    $('.jo-popup').addClass('active');
})

$('.jo-popup').on('click', function(){
    $(this).removeClass('active');
})
