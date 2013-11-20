!function ($) {
    $(function(){
        $('.navbar a').click(function(){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            $(".navbar li").removeClass("active");
            $(this).parent("li").addClass("active");
            return false;
        });
    });
    
    $("img").unveil();

    $(".tile > a").click( function(){
        link = $(this).attr("href");
        $(link).show().addClass("open");
    });

    $("button.closeTile").click( function(){        
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
            minHeight: height-100
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

