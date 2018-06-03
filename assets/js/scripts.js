$('#carousel-people').on('slid.bs.carousel', function () {
  setTimeout(function () {
     $('.people-wp').removeClass('animated');
      $('.people-wp').css('opacity', 1);
  }, 2000);
})


/***************** Scrolling ******************/

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});




/***************** Overlays ******************/

$(document).ready(function(){
  if (Modernizr.touch) {
    // show the close overlay button
    $(".close-overlay").removeClass("hidden");
    // handle the adding of hover class when clicked
    $(".img").click(function(e){
      if (!$(this).hasClass("hover")) {
        $(this).addClass("hover");
      }
    });
    // handle the closing of the overlay
    $(".close-overlay").click(function(e){
      e.preventDefault();
      e.stopPropagation();
      if ($(this).closest(".img").hasClass("hover")) {
        $(this).closest(".img").removeClass("hover");
      }
    });
  } else {
    // handle the mouseenter functionality
    $(".img").mouseenter(function(){
      $(this).addClass("hover");
    })
    // handle the mouseleave functionality
      .mouseleave(function(){
        $(this).removeClass("hover");
      });
  }
});
