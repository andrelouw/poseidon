$('#carousel-people').on('slid.bs.carousel', function () {
  setTimeout(function () {
     $('.people-wp').removeClass('animated');
      $('.people-wp').css('opacity', 1);
  }, 2000);
})


