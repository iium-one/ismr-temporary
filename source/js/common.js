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

export { skipNav }