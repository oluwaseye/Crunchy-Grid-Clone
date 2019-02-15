function getDocHeight() {
  var D = document;
  return Math.max(
    D.body.scrollHeight, D.documentElement.scrollHeight,
    D.body.offsetHeight, D.documentElement.offsetHeight,
    D.body.clientHeight, D.documentElement.clientHeight
  );
}
$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    $('.header').removeClass('position-fixed');
    $('.content').css('margin-top', '120px');
  } else if ($(window).scrollTop() == 0) {
    $('.header').addClass('position-fixed');
    $('.content').css('margin-top', '0px');
  }
  if ($(window).scrollTop() + $(window).height() - 100 == getDocHeight() - 100 ) {
    $('.footer').addClass('position-fixed');
  }else{
    $('.footer').removeClass('position-fixed');
  }
});