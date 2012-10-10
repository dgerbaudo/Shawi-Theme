$(document).ready(function () {

jQuery("a.image-reference").colorbox({rel:"gal",maxWidth:"80%",maxHeight:"80%",scalePhotos:true});
$("#totop").click(function () {
            $("body, html").animate({
                scrollTop: 0
            }, 300);
            return false;
        });
    });
    
    });
