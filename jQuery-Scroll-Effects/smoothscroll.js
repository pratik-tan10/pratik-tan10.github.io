// Smoothscroll Script...
$("nav ul li a").click(function(){    
    const thisSection = $(this).attr("href");
    var thisLink = $(this);
    
    $("html, body").stop().animate({

        scrollTop: $(thisSection).offset().top - 200

    }, 800, "easeOutCirc");
    return false;
});

$(window).on("load", function(){
    var allLinks = $("nav ul li a");
    var posts = $("section");
    var counter = 0;
    var prevCounter = 0;
    var doneResizing;

    var postTops = [];
    
    resetPagePosition();
    
    $(window).scroll(function(){
        pageTop = $(window).scrollTop() + 210;

        if(pageTop > postTops[counter+1]){
            counter++;
            //console.log(`counter is ${counter}`)

        } else if(counter>0 && pageTop < postTops[counter]){
            counter--;
            //console.log(`Scroll up counter is ${counter}`)
        }
        if(counter != prevCounter){
            $(allLinks).removeAttr("class");
            $("nav ul li a").eq(counter).addClass("selected");
            prevCounter = counter;
        }
    });

    $(window).on("resize", function(){
        clearTimeout(doneResizing);
        doneResizing =  setTimeout(function(){
            resetPagePosition();
        }, 500);
    });

    function resetPagePosition(){
        postTops = [];
    
        posts.each( function(){
            postTops.push(Math.floor($(this).offset().top));
        });
        
        var pagePosition = $(window).scrollTop + 210;
        var counter = 0;

        for (var i = 0; i<postTops.length; i++){
            if(pagePosition > postTops[i]){ counter++;}
        }
        counter--;
        $(allLinks).removeAttr("class");
        $("nav ul li a").eq(counter).addClass("selected");
        console.log(counter);
    }
});
