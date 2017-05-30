// JavaScript Document
$(document).ready(function() {
    function gen_thumb(vid_title, thumb_url) {
        thumb = '<div class="bgimg" style="background-image: url(' + thumb_url + ')">\
  <div class="caption">\
    <span class="border">' + vid_title + '...</span>\
  </div>\
</div>';
        return thumb;
    }

    function gen_contents(vid_title, thumb_url) {
        item = gen_thumb(vid_title, thumb_url);
        $(".parallax").append(item);
    }
    $.ajax({
        type: 'GET',
        url: 'https://api.zype.com/videos/?api_key=H7CF2IHbEc6QIrMVwb2zfd9VI14HHGAfYax1eHEUsJ4voYuqWF2oWvByUOhERva_',
        dataType: 'json',
        success: function(data) {
            $.each(data.response, function(index, videos) {
                vid_title = videos.title.substring(0, 15);
                thumb_url = videos.thumbnails[3].url;
                gen_contents(vid_title, thumb_url)
            });
        }
    });
    var lastScroll = 0;
    $(window).scroll(function(event) {
        //Sets the current scroll position
        var st = $(this).scrollTop();
        //Determines up-or-down scrolling
        if (st > lastScroll) {
            //Replace this with your function call for downward-scrolling
            $(".bgimg").stop().animate({
                'background-position-y': '10px'
            }, 1000);
        } else {
            //Replace this with your function call for upward-scrolling
            $(".bgimg").stop().animate({
                'background-position-y': '-10px'
            }, 1000);
        }
        //Updates scroll position
        lastScroll = st;
    });
});