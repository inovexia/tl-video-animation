(function($)
 {
 
$(document).ready(function() {
  

$(document).scroll(function () {  
    let scroll = $(this).scrollTop();
    let opacity = 1 - (scroll / 1000);
    if (opacity > 0) {
        $('.overlay').css('opacity', opacity);
    }

    $("section").each(function () {
      if (
        $(this).position().top <= $(document).scrollTop()    &&
        $(this).position().top + $(this).outerHeight() > $(document).scrollTop()
      ) {
        let fixed = $(this).attr("id");
        
        
        if (fixed == "section3") {
          
          $("#section3").addClass("active-section");
          $(".large-video").trigger('play');
          const currentScroll = window.pageYOffset;
          // alert(currentScroll);
          

          if(
            $(".video-intro-2").position().top <= 300
          )
          {
            
            $("#section3 .low-light").css('opacity','1');
            
          }
          else if( $(".video-intro-2").position().top <= 400){
            $("#section3 .video-intro-2").css('opacity','1'); 
          }
          else if( 
              $(".video-intro-1").position().top <= $(document).scrollTop() + 300 )
            {

            $("#section3 .video-intro-1").css('opacity','1');
          }
          else if( 
            $(".video-intro-2").position().top <= $(document).scrollTop() + 400 )
          {

          $("#section3 .video-intro-2").css('opacity','1');
        }
          
          else {
            $("#section3 .video-intro-1").css('opacity','0'); 
            $("#section3 .video-intro-2").css('opacity','0');
            $("#section3 .low-light").css('opacity','0.8');
          }
        } else {
          $("#section3").removeClass("active-section");
          $(".large-video").trigger('pause');
          
        }
      }
    });
  }); 


  


  
  });
})(jQuery);


