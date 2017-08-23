(function( $ ) {
    $.fn.Scroll = function(target, type)
    {
        var left = Number($(target).scrollLeft());
        if (type == 'left')
        {
            $(target).animate({scrollLeft: '-=100'}, 100, function() {
                var left2 = Number($(target).scrollLeft());
                if (left2 == 0)
                {
                    //$('.left-scroll').hide();
                }else if (left2 > 0){
                    $('.right-scroll').show();
                }
            });
        }else{
            $(target).animate({scrollLeft: '+=100'}, 100, function() {
                var left2 = Number($(target).scrollLeft());
                if (left == left2)
                {
                    //$('.right-scroll').hide();
                }else if (left < left2){
                    $('.left-scroll').show();
                }
            });
        }
    };

    $.fn.scrollTable = function() {
        var obj = this;
        this.prepend('<div class="left-scroll-div">\n' +
            '                <div class="left-scroll"></div>\n' +
            '            </div>\n' +
            '            <div class="right-scroll-div">\n' +
            '                <div class="right-scroll"></div>\n' +
            '            </div>');
        var scroll;
        $('.left-scroll').hide();
        $('.left-scroll').hover(
            function(){
                scroll = setInterval(function(){
                    $.fn.Scroll(obj, "left");
                }, 100);
            },
            function(){
                clearInterval(scroll);
            }
        );
        $('.right-scroll').hover(
            function(){
                scroll = setInterval(function(){
                    $.fn.Scroll(obj, "right");
                }, 100);
            },
            function(){
                clearInterval(scroll);
            }
        );
    };
})(jQuery);