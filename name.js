 $(document).ready(function(){
      $('.parallax').parallax();
    });

    $("arrow").click(function() {
        $('html,body').animate({
            scrollTop: $(".slider2").offset().top},
            'slow');
    });

 var darkEnabled = false; 
$(document).ready(function() {
        $("#dark").on("click", switchDarkMode);
        $("#reset").on("click", reset);
        }
      );
      
      function switchDarkMode(){
        darkEnabled = !darkEnabled;
        if(darkEnabled){
          $("body").addClass("darkmode");
        } else {
          $("body").removeClass("darkmode");
        }
      }
      
      function reset(){
        $("body").removeClass("darkmode");
      }

    document.addEventListener("DOMContentLoaded", function(){
    	$('.preloader-background').delay(1700).fadeOut('slow');

    	$('.preloader-wrapper')
    		.delay(1700)
    		.fadeOut();
    });
