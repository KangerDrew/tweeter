$(document).ready(function() {

  const $moveUpButton = $('.scroll-up-button');

  $(window).scroll(function(event) {

    const scroll = $(window).scrollTop();

    // Below logic dictates that if user scrolls below 250px,
    // scroll back up button will display!

    if (scroll < 250) {
      $moveUpButton.addClass('hide-button');
    } else {
      $moveUpButton.removeClass('hide-button');
    }
  });

  // This will enable user to go back to the top of the page
  // after clicking on the scroll back up button.
  
  $moveUpButton.on('click', function(event) {

    $(window).scrollTop(0);

  });


});