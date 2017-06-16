var $container = $('#testcont');
// initialize Masonry after all images have loaded
$container.imagesLoaded(function () {
    $container.masonry({
        itemSelector: '.item, .item2'
    });
});

$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: 3000
    });
});

$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
