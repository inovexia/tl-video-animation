(function($)
 {
$(document).ready(function() {
    
   

$(document).scroll(function () {  
    $("section").each(function () {
      if (
        $(this).position().top <= $(document).scrollTop()    &&
        $(this).position().top + $(this).outerHeight() > $(document).scrollTop()
      ) {
        let fixed = $(this).attr("id");
        
        if (fixed == "section3") {
          $("#section3").addClass("active-section");
          $(".large-video").attr("autoplay","autoplay");

          if(
            $(".video-intro-1").position().top <= $(document).scrollTop() + 250   
          )
          {
            $("#section3 .video-intro-1").css('opacity','1'); 
          }
          else if( $(".video-intro-2").position().top <= $(document).scrollTop() + 350 ){

            $("#section3 .video-intro-2").css('opacity','1');
          }
          else{
            $("#section3 .video-intro-1").css('opacity','0'); 
          }
        } else {
          $("#section3").removeClass("active-section");
          $(".large-video").removeAttr("autoplay");
        }
      }
    });
  });  
  const [red, green, blue, alpha] = [0, 0, 0, 1]
const section1 = document.querySelector('.section1')

window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 150
  const [r, g, b, a] = [red/y, green/y, blue/y, a/y].map(Math.round)
  overlay.style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${a})`
})
  });
})(jQuery);