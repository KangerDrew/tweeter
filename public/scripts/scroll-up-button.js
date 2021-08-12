$(document).ready(function() {

  const $moveUpButton = $('.scroll-up-button');

  $(window).scroll(function (event) {
    const scroll = $(window).scrollTop();

    if (scroll < 250) {
      $moveUpButton.addClass('hide-button');
    } else {
      $moveUpButton.removeClass('hide-button');
    }
  });


  $moveUpButton.on('click', function(event) {
    
    $(window).scrollTop(0)

  });


});