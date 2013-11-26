!function ($) {
    $(function(){
        $('.navbar a').click(function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            $(".navbar li").removeClass("active");            
            $(this).parent("li").addClass("active");
            // return false;
        });
    });
    
    $("img").unveil();

    $(".tile > a").click( function(){
        link = $(this).attr("href");
        $("body").addClass("noScroll");
        $(link).show().addClass("open");

        var theWindow = $(window),
            width = theWindow.width(),
            height = theWindow.height();

        $(link+' .popupLeft img').each(function(){
            var imgHeight = $(this).height();
            $(this).css({
                marginBottom :height - imgHeight - 20
            });

        });

        // $(link+' .popupLeft img').css({
        //     marginBottom: 100
        // })


    });

    $("button.closeTile").click( function(){        
        $("body").removeClass("noScroll");
        $(".popUp").removeClass("open").hide();
    });
        

    var resizer = function () {
        var theWindow = $(window),
            width = theWindow.width(),
            height = theWindow.height();

        $(".navbar").css({            
            minHeight: height
        });

        $("article").css({            
            maxWidth: width-180
        });

        $(".section").css({            
            minHeight: height
        });

        $(".popUp").css({            
            height: height,
            width: width
        });

    };
    resizer();      

    $(window).resize(resizer);

    $('.section').bind('inview', function (event, visible) {
      if (visible == true) {
        $(".section").fadeTo(400,1);        
      } else {
        $(this).fadeTo(400,0.5);
      }
    });

}(window.jQuery)

