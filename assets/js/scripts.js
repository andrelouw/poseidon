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


