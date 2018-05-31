$(document).ready(function() {
  window.onload = function () {
    $('body').addClass('loaded');
    console.log('loaded');
    $('.intro h1').addClass('animated fadeInDown delay-05s');
    $('.intro .title').addClass('animated fadeInUp delay-1s');
    $('.timer').addClass('animated bounceIn delay-2s');
    $('.landing .protea-container').addClass('animated longer fadeInLeft delay-1s');
  }
});

