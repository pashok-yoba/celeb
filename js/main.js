
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    var length = $('.newsImage').length;
    var bgimg = $('.newsImage');
    var windowHeight = $(window).height();
    var i;
    for (i = 0; i < length; i++) {
        var $this = $(bgimg[i]);
        var title = $($this.find('.newsImageName'));
        var arrows = $($this.find('.arrow'));
        var scrolltop = $(window).scrollTop();
        var offset = $this.offset();
        var postop = offset.top;
        var titletop = title.offset().top - scrolltop;
        $this.css('background-position','center '+(((scrolltop - postop)*0.5)+60)+'px');

        if(titletop >= 0 && titletop <= 500 && scrolltop > 120){
            title.css('opacity',(titletop/500));
            title.css('top',(titletop/500)*50+'%');
            for (j = 0; j < 2; j++) {
                var arrow = $(arrows[j]);
                arrow.css('opacity',(titletop/500));
                arrow.css('top',(titletop/500)*50+'%');
            }
        }else if(scrolltop < 120){
            title.css('opacity',1);
            title.css('top','50%');
            for (j = 0; j < 2; j++) {
                var arrow = $(arrows[j]);
                arrow.css('opacity',1);
                arrow.css('top','50%');
            }
        }
        if(scrolltop <= postop && postop < (scrolltop + windowHeight)){

        }
    }
}


