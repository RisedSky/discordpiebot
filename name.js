 $(document).ready(function(){
      $('.parallax').parallax();
    });

    $("arrow").click(function() {
        $('html,body').animate({
            scrollTop: $(".slider2").offset().top},
            'slow');
    });

    document.addEventListener("DOMContentLoaded", function(){
    	$('.preloader-background').delay(1700).fadeOut('slow');

    	$('.preloader-wrapper')
    		.delay(1700)
    		.fadeOut();
    });
