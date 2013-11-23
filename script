(function($) {
        $.fn.JBslider = function(options) {
            var defaults = {
                method: "left",
                sliderID: "slider",
                sliderIndexID: "sliderIndex",
                duration: 600,
                interval: 4000
        };

        var options = $.extend(defaults, options);

        var _this = $(this);

        var slider = $("#" + options.sliderID),
            sliderIndex = $("#" + options.sliderIndexID),
            sliderLi = slider.find("li"),
            sliderIndexLi = sliderIndex.find("li"),
            lenghtLi = sliderIndexLi.length;

        var timer = null,
            iNow = 1;

        if(options.method == "left") {
            slider.width(_this.width() * lenghtLi);
            sliderIndexLi.bind("click", function() {
                var index = $(this).index();
                $(this).addClass("current").siblings().removeClass("current");
                if(!slider.is(":animated")) {
                    slider.animate({
                        marginLeft: -index * _this.width() 
                    }, options.duration);
                }
                iNow = index + 1;
            });

            timer = setInterval(autoPlayLeft, options.interval);

            _this.bind("mouseover", function() {
                    clearInterval(timer);
            });

            _this.bind("mouseout", function() {
                    timer = setInterval(autoPlayLeft, options.interval);        
            });
        }else if(options.method == "up") {
            slider.height(_this.height() * lenghtLi);
            sliderIndexLi.bind("click", function() {
                var index = $(this).index();
                $(this).addClass("current").siblings().removeClass("current");
                if(!slider.is(":animated")) {
                    slider.animate({
                        marginTop: -index * _this.height() 
                    }, options.duration);
                }

                iNow = index + 1;
            });

            timer = setInterval(autoPlayTop, options.interval);

            _this.bind("mouseover", function() {
                 clearInterval(timer);
            });

            _this.bind("mouseout", function() {
                timer = setInterval(autoPlayTop, options.interval);        
            });
        }else if(options.method == "fade") {
            sliderIndexLi.bind("click", function() {
                var index = $(this).index();
                $(this).addClass("current").siblings().removeClass("current");
                if(!sliderLi.is(":animated")) {
                    sliderLi.eq(index).show().animate({opacity: 1}, options.duration).siblings().animate({opacity: 0}, options.duration, function() {
                            $(this).hide();
                    });
                }
            });

            timer = setInterval(autoPlayFade, options.interval);

            _this.bind("mouseover", function() {
                    clearInterval(timer);
            });

            _this.bind("mouseout", function() {
                    timer = setInterval(autoPlayFade, options.interval);
            });
        }

        function autoPlayLeft() {
                if(iNow == lenghtLi) {
                    iNow = 0;
            } 
            sliderIndexLi.eq(iNow).addClass("current").siblings().removeClass("current");
            slider.animate({marginLeft: -iNow * _this.width()}, options.duration);
            iNow++;
        };
 
        function autoPlayTop() {
            if(iNow == lenghtLi) {
                iNow = 0;
            } 
            sliderIndexLi.eq(iNow).addClass("current").siblings().removeClass("current");
            slider.animate({marginTop: -iNow * _this.height()}, options.duration);
            iNow++;
        };

        function autoPlayFade() {
            if(iNow == lenghtLi) {
                iNow = 0;
            } 
            sliderIndexLi.eq(iNow).addClass("current").siblings().removeClass("current");
            sliderLi.eq(iNow).show().animate({opacity: 1}, options.duration).siblings().animate({opacity: 0}, options.duration, function() {
                $(this).hide();
            });
            iNow++;
        };
    };
})(jQuery);
