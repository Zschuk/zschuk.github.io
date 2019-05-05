// ---------------- select with flags ---------------

$(document).ready(function(e) {
    try {
    $("body select").msDropDown();
    } catch(e) {
    alert(e.message);
    }
});

  
    $(document).ready(function(){

        // ------- замена текста кнопки при изменении ширины экрана ------
        
        $(window).on('resize', function(){
            var win = $(this);
            if(win.width() >= 571 && win.width() <= 950){
                $('.btn-inner-text').text('получите подарок');
            } 
            else if(win.width() >= 460 && win.width() <= 570){
                $('.btn-inner-text').text('подарок');
            } 
            else if(win.width() >= 951){
                $('.btn-inner-text').text('получи подарок сейчас');
            } 
        });

        // -------- скрытая форма малых экранов -------

        $('.top-bar-button').click(function(){
            $('.form-hidden').show(500);
        });
        $('.fa-times-circle').click(function(){
            $('.form-hidden').hide(500);
        });

        // -------- footer languages -----

        $('.footer-language ul li a').click(function(){
            $('.footer-language ul li a').toggleClass('footer-language-active');
        });

    });
