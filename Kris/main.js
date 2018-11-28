$(document).ready(function(){

    // ---- burger ----
    
    $(".burger").click(function(){
        $(".line-up").toggleClass("line-up-trf");   
        $(".line-middle").toggleClass("line-middle-trf");
        $(".line-down").toggleClass("line-down-trf");
        $(".menu").slideToggle(500, function(){
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }
        });
    });
    
    // ------ carousel ------

    $("#header-slider").owlCarousel({
        dots: true,
        autoplay: true,
        loop: true,
        items: 1,
        animateOut: 'fadeOut'
    });

    $("#happy-slider").owlCarousel({
        dots: true,
        autoplay: true,
        loop: true,
        items: 1
    });

    // --------- smooth scroll -------

    $('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1500);
		return false;
	});

    // ------ active menu during scrolling ----

        var menu_selector = ".menu";
    function onScroll(){
        var scroll_top = $(document).scrollTop();
        $(menu_selector + " a").each(function(){
            var hash = $(this).attr("href");
            var target = $(hash);
            if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
                $(menu_selector + " a.active").removeClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    }

	$(document).on("scroll", onScroll);
	$("a[href^=#]").click(function(e){
		e.preventDefault();
		$(document).off("scroll");
		$(menu_selector + " a.active").removeClass("active");
		$(this).addClass("active");
		var hash = $(this).attr("href");
		var target = $(hash);
		$("html, body").animate({
		    scrollTop: target.offset().top
		}, 500, function(){
			window.location.hash = hash;
			$(document).on("scroll", onScroll);
		});
	});

});