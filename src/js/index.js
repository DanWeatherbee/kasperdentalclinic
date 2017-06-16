$("#header-img").click(function () {

    $("#content0").fadeIn();
    $("#content0a").fadeIn();
    $('#zoom_01').elevateZoom({
        zoomType: "inner",
        cursor: "crosshair",
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 750
    });
    $("#header-img").animate({
        height: '0',
        width: '0'
    });
});

$(window).scroll(function () {
    $("#content0").fadeIn();
    $("#content0a").fadeIn();
    $('#zoom_01').elevateZoom({
        zoomType: "inner",
        cursor: "crosshair",
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 750
    });

    $("#header-img").animate({
        height: '0',
        width: '0'
    });
});
