jQuery(document).ready(function ($) {

    if ($(window).width() > 699) {

        $(".item").on({
            mouseenter: function () {
                $('.content').toggleClass('show');
            },
            mouseleave: function () {
                $('.content').toggleClass('show');
            }
        });

    }

    if ($(window).width() < 699) {
        
        $(".item>img" ).click(function() {
                $('.content').toggleClass('show');
        });

    }

});