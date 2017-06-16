$("#content1").click(function () {
    $("#con1").animate({
        height: '0',
        width: '0'
    });
    $("#objective-text").fadeOut();
});
$(window).scroll(function () {
    $("#con1").animate({
        height: '0',
        width: '0'
    });
    $("#objective-text").fadeOut();
});
