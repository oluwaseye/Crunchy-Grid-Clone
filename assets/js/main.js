function getDocHeight() {
  var D = document;
  return Math.max(
    D.body.scrollHeight, D.documentElement.scrollHeight,
    D.body.offsetHeight, D.documentElement.offsetHeight,
    D.body.clientHeight, D.documentElement.clientHeight
  );
}
$(window).scroll(function () {
  console.log($(window).scrollTop());
  if ($(window).scrollTop() >= 200) {
    
    $('.header').addClass('position-fixed');
    $('.main').css('margin-top', '120px');
  } else if ($(window).scrollTop() == 0) {
    $('.header').removeClass('position-fixed');
    $('.main').css('margin-top', '0px');
  }
  if ($(window).scrollTop() + $(window).height() - 100 == getDocHeight() - 100 ) {
    $('.footer').addClass('footer-fixed');
  }else{
    $('.footer').removeClass('footer-fixed');
  }
});