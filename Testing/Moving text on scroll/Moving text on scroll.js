$(document).on('scroll', function(){
    $('h1').css("left", Math.max(500 - 0.35*window.scrollY) + "px");
});
