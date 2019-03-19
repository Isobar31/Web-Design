$(document).ready(function(){
    var text = "Text Animation Effect";
    
    $.each(text.split(""), function(key, val){
        $('.text-box').append('<div class="split-text">' + val + '</div>');
    });

    var eachText = $('.split-text');
    $.each(eachText, function(){
        var rand = Math.floor(Math.random() * 1000);

        //random color
        var r = Math.floor(Math.random()*255);
        var g = Math.floor(Math.random()*255);
        var b = Math.floor(Math.random()*255);

        $(this).css({
            "color": "rgb("+r+", "+g+", "+b+")",
            "margin-top": -rand
        }).animate({
            marginTop: '0px'
        }, 1000);
    });
});
