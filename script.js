(function($) {
    $.fn.JBslider = function(options) {
        var defaults = {
            method: "left",
            sliderID: "slider",
            duration: 600,
            interval: 4000
        };

        var options = $.extend(defaults, options);

        var $this = $(this);

        var slider = $("#" + options.sliderID),
            sliderLi = slider.find("li"),
            lenghtLi = sliderLi.length;

        var timer = null,
            iNow = 1;

        var $sHtml = $('<ul class="sliderIndex"></ul>');

        $this.append($sHtml);

        for(var i = 0; i < lenghtLi; i++) {
            if(i == 0) {
                $this.find(".sliderIndex").append('<li class="current">' + (i+1) +'</li>')
            }else{
               $this.find(".sliderIndex").append('<li>' + (i+1) +'</li>');
            }
        }

        var sliderIndexLi = $this.find(".sliderIndex li");

        var animationMethod = {
            toggleClass: function(des) {
                sliderIndexLi.eq(des).addClass("current").siblings().removeClass("current");
            },
            left: function(des) {
                this.toggleClass(des);
                slider.animate({marginLeft: -des * $this.width()}, options.duration);
            },
            top: function(des) {
                this.toggleClass(des);
                slider.animate({marginTop: -des * $this.height()}, options.duration);
            },
            fade: function(des) {
                this.toggleClass(des);
                sliderLi.eq(des).show().animate({opacity: 1}, options.duration).siblings().animate({opacity: 0}, options.duration, function() {
                    $(this).hide();
                });
            }
        };

        if(options.method == "left") {
            slider.width($this.width() * lenghtLi);

            sliderIndexLi.bind("click", function() {
                var index = $(this).index();

                if(!slider.is(":animated")) {
                    animationMethod.left(index);
                }

                iNow = index + 1;
            });

            timer = setInterval(autoPlayLeft, options.interval);

            $this.bind("mouseover", function() {
                clearInterval(timer);
            });

            $this.bind("mouseout", function() {
                timer = setInterval(autoPlayLeft, options.interval);        
            });
        }else if(options.method == "top") {
            slider.height($this.height() * lenghtLi);

            sliderIndexLi.bind("click", function() {
                var index = $(this).index();

                if(!slider.is(":animated")) {
                    animationMethod.top(index);
                }

                iNow = index + 1;
            });

            timer = setInterval(autoPlayTop, options.interval);

            $this.bind("mouseover", function() {
                clearInterval(timer);
            });

            $this.bind("mouseout", function() {
                timer = setInterval(autoPlayTop, options.interval);        
            });
        }else if(options.method == "fade") {
            sliderIndexLi.bind("click", function() {
                var index = $(this).index();

                if(!sliderLi.is(":animated")) {
                    animationMethod.fade(index);
                }
            });

            timer = setInterval(autoPlayFade, options.interval);

            $this.bind("mouseover", function() {
                clearInterval(timer);
            });

            $this.bind("mouseout", function() {
                timer = setInterval(autoPlayFade, options.interval);
            });
        }

        function autoPlayLeft() {
            if(iNow == lenghtLi) {
                iNow = 0;
            } 
            animationMethod.left(iNow);
            iNow++;
        };
 
        function autoPlayTop() {
            if(iNow == lenghtLi) {
                iNow = 0;
            } 
            animationMethod.top(iNow);
            iNow++;
        };

        function autoPlayFade() {
            if(iNow == lenghtLi) {
                iNow = 0;
            } 
            animationMethod.fade(iNow);
            iNow++;
        };
    };
})(jQuery);
