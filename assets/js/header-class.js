$(function() {
    var header = $("#header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            header.addClass("small-header");
        } else {
            header.removeClass("small-header");
        }
    });
});