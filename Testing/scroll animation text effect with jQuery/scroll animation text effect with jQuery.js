(function(){
    var aboutEl = $('div.about'),
    aboutEloffset = aboutEl.offset().top/2,
    documentEl = $(document);

    documentEl.on('scroll', function(){
        if(documentEl.scrollTop() > aboutEloffset && aboutEl.hasClass('hidden')) aboutEl.removeClass('hidden');        
    });
})();
