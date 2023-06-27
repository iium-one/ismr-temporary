//skip navigation
function skipNav() {
  var focus = 0, blur = 0;
  $( ".skip_nav_wrap a" ).focus(function() {
    focus++;
    $('.skip_nav').css('top', '0px');
  })
  .blur(function() {
    blur++;
    $('.skip_nav').css('top', '-50px');
  });
}

function scrollZero() {
  $(window).scroll(function() {
    if($(window).scrollTop() > 50) {
      $('#header').addClass('act').find('img').attr('src','/source/img/logo.png');
    } else {
      $('#header').removeClass('act').find('img').attr('src','/source/img/logo-white.png');;
    }
  });
}

export { skipNav, scrollZero }