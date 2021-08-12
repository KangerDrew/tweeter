$(document).ready(function() {

  const $tweetInput = $('#tweet-text');

  $tweetInput.on('input', function(event) {

    const $counter = $(this).siblings('.below-input').children('.counter');

    const textLength = event.target.value.length;
    $counter.val(140 - textLength);

    // The below logic will change the color of the text counter
    // by adding/removing the counter-overflow class to the counter
    // html element!

    if (textLength > 140) $counter.addClass('counter-overflow');
    if (textLength <= 140) $counter.removeClass('counter-overflow');

  });



});
