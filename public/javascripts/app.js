

!function ($) {
    $(function(){

        var $root = $(window);

        $('.navbar-nav a').click(function() {
            var href = $.attr(this, 'href');
            $root.animate({
                scrollTop: ($(href).offset().top)-100
            }, 500, function () {
                window.location.hash = href;
            });
            return false;
        });
    })
}(window.jQuery)
