// Smoothscroll Script...
$("nav ul li a").click(function(){
    $("nav ul li a").removeClass("selected");
    
    const thisSection = $(this).attr("href");
    var thisLink = $(this);
    $(thisLink).addClass("selected");
    
    $("html, body").stop().animate({
        scrollTop: $(thisSection).offset().top - 200
    }, 800, 'easeOutCirc');
});
