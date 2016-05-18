$(document).ready(function () {
    $(".fancybox")
        .attr('rel', 'gallery')
        .fancybox({
            padding: 0,
            width: 810,
            height: 598,
            autoSize: false,
            scrolling: 'no',
            closeBtn: false,
            preload: false,
        });

})

if (screen.width <= 800) {
    window.location = "https://www.youtube.com/playlist?list=PLcZmYCTH0epH-6su49gQD1ptMDP2I-XXf";
}