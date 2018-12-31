$(document).ready(function(){

    // ------ preloader ------

    $(window).on('load', function(){
        $('.preloader').delay(1000).fadeOut('slow');
    });

    // ------ burger-menu -----

    $(".burger").click(function(){
        $(".line-one").toggleClass("line-one-active");
        $(".line-two").toggleClass("line-two-active");
        $(".line-three").toggleClass("line-three-active");
        $(".wrap-menu").slideToggle(500, function(){
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }
        });
    });

    // ------- scroll up --------

    
	$(window).scroll(function(){
		if ($(this).scrollTop()>0){
			$('.up').fadeIn();
		}else{
			$('.up').fadeOut();
		}
	});

	$('.up').click(function(){
		$('body,html').animate({scrollTop:0},1000);
		return false;
	}); 

    // ------- filter -------

    $('.gallery-btn').click(function(){
        var value = $(this).attr('data-filter');
        if (value == "all")
        {
            $('.filter').show('1500');
        }
        else
        {
            $('.filter').not('.'+value).hide('5000');
            $('.filter').filter('.'+value).show('5000');
        }
        // ------ add class -----
        $('.gallery-btn').click(function(){
            $(this).addClass('gallery-btn-active').siblings().removeClass('gallery-btn-active');
        });
    });

   

    


});