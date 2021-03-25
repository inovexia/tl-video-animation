(function($)
 {
 
$(document).ready(function() {
  

$(document).scroll(function () {  
    let scroll = $(this).scrollTop();
    let opacity = 1 - (scroll / 1000);
    let opacity2 = 0 + (scroll / 1000);
    
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
          
        } 
        else {
          $("#section3").removeClass("active-section");
          $(".large-video").trigger('pause');
          
        }
      }
    });

          let mm = $(window).scrollTop();
       
          if(mm > 80)
          {
            $("#section3 .low-light").css('opacity','1');  
          }
          else {
            $("#section3 .low-light").css('opacity','0.8');
          
          }
          if(mm > 100) {$("#section3 .video-intro-1").css('opacity','1');  }
          else{
            $("#section3 .video-intro-1").css('opacity','0');
          }
         
          if(mm > 175) {$("#section3 .video-intro-2").css('opacity','1');
         }
          else {
            $("#section3 .video-intro-2").css('opacity','0');
          }
          if(mm > 250) {
          $('.overlay').css('opacity', 0); 
         }
         if(mm > 350) {
          $('.block-1').css('opacity', 0); 
         }
         else{
          $('.block-1').css('opacity', 1); 
         }
         
         
          
  }); 


  


  
  });
})(jQuery);



