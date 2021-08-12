$(document).ready(function() {

  // Define the arrow down element
  const $toggleInput = $('.arrow-down');

  // Define the textbox area element
  const $textInputArea = $('section.new-tweet');

  // When "clicked", the textbox should appear/disappear!
  // Furthermore, remove any error messages that were present
  // from previous search attempts!

  const warningDisplayLimit = $('#limit-warning');
  const warningDisplayZero = $('#zero-word');

  $toggleInput.on('click', function(event) {

    $textInputArea.slideToggle()

    if (warningDisplayLimit.is(':visible')){
      warningDisplayLimit.slideToggle();
    }
    if (warningDisplayZero.is(':visible')){
      warningDisplayZero.slideToggle();
    }

  })

});
