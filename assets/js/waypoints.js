$(document).ready(function(){

  // $('#carousel-people').carousel('pause');

  $('.carousel').waypoint(function() {
    $('.carousel').carousel('cycle');
  }, { offset: '75%' });

  $('.info-wp').css('opacity', 0);
  $('.info-wp').waypoint(function() {
    $('.info-wp').addClass('fadeInUp');
  }, { offset: '75%' });

  $('.detail-wp1').css('opacity', 0);
  $('.detail-wp1').waypoint(function() {
    $('.detail-wp1').addClass('fadeInUp');
  }, { offset: '75%' });

  $('.detail-wp2').css('opacity', 0);
  $('.detail-wp2').waypoint(function() {
    $('.detail-wp2').addClass('fadeInUp');
  }, { offset: '75%' });

  $('.detail-wp3').css('opacity', 0);
  $('.detail-wp3').waypoint(function() {
    $('.detail-wp3').addClass('fadeInUp');
  }, { offset: '75%' });

  $('.detail-wp-protea').css('opacity', 0);
  $('.detail-wp-protea').waypoint(function() {
    $('.detail-wp-protea').addClass('fadeInRight');
  }, { offset: '110%' });

  $('.vna-wp-protea').css('opacity', 0);
  $('.vna-wp-protea').waypoint(function() {
    $('.vna-wp-protea').addClass('fadeInLeft');
  }, { offset: '110%' });

  $('.people-wp-protea').css('opacity', 0);
  $('.people-wp-protea').waypoint(function() {
    $('.people-wp-protea').addClass('fadeInLeft');
  }, { offset: '110%' });

  $('.rsvp-wp-protea').css('opacity', 0);
  $('.rsvp-wp-protea').waypoint(function() {
    $('.rsvp-wp-protea').addClass('fadeInRight');
  }, { offset: '110%' });

  $('.vna-wp').css('opacity', 0);
  $('.vna-wp').waypoint(function() {
    $('.vna-wp').addClass('bounceIn');
  }, { offset: '100%' });

  $('.gifts-wp1').css('opacity', 0);
  $('.gifts-wp1').waypoint(function() {
    $('.gifts-wp1').addClass('fadeInLeft');
  }, { offset: '80%' });

  $('.gifts-wp2').css('opacity', 0);
  $('.gifts-wp2').waypoint(function() {
    $('.gifts-wp2').addClass('fadeInRight');
  }, { offset: '80%' });

  $('.people-wp').css('opacity', 0);
  $('#people').waypoint(function() {
    $('.people-wp').addClass('fadeInDown');
  }, { offset: '75%' });

  $('.rsvp-wp').css('opacity', 0);
  $('.rsvp-wp').waypoint(function() {
    $('.rsvp-wp').addClass('fadeInDown');
  }, { offset: '75%' });

});
