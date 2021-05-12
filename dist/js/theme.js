//date
var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();


//News Ticker
jQuery(document).ready(function ($) {
    $('.my-news-ticker').AcmeTicker({
        type:'typewriter',/*horizontal/horizontal/Marquee/type*/
        direction: 'right',/*up/down/left/right*/
        speed:50,/*true/false/number*/ /*For vertical/horizontal 600*//*For marquee 0.05*//*For typewriter 50*/
        autoplay: 2000,
    });
})


