(function($)
 {
$(document).ready(function() {

  const checkpoint = 300;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
    $(".large-videos").addClass("fixed");
  } else {
    opacity = 0;
    $(".large-videos  ").addClass("fixed");
  }
  document.querySelector(".front").style.opacity = opacity;
});

  // let demo = document.querySelector('#section4');
  // let c = 0;
  // window.addEventListener('wheel', function(event) {
  //   let g = window.pageYOffset
  //   if(g > 105){
  //     $(".large-video").addClass("fixed");
  //   }
  //   else{
  //     $(".large-video").removeClass("fixed");
  //   }
    
  // });

//   $("#section3" ).on( 'wheel', function() {
//     alert("Hello! I am an alert box!!");
//  });

var position = document.getElementById('demo');
position.innerHTML = ""

window.addEventListener("wheel", function(event) {

    var y = this.scrollY;
    console.log(y);
  
    
    

});

  
  });
})(jQuery);



