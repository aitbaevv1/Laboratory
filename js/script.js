$(document).ready(function() {
    $(function () {
        var $videoContainer = $('.video-content'),
            $videoControls = $('.video-content__control'),
            $video = $('#myVideo')[0];

        $videoControls.click(function () {
            if ($video.paused) {
                $video.play();
                $videoContainer.addClass('video-is-playing');
            } else {
                $video.pause();
                $videoContainer.removeClass('video-is-playing');
                //  возвращаем постер
                $video.load();
            }
        });
    });
    $('.question-accordeon__item-title').click(function() {
        $(this).toggleClass('active');
        $($(this).next()).toggleClass('active');
    });

    $('.header-mobile__nav-list__li-link-sm').click(function() {
        $(this).toggleClass('active');
    });

    $('.header-burger').click(function() {
        $('.header-burger, .header-mobile, body').toggleClass('active');
    })
})