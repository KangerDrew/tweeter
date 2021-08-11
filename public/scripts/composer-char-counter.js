$(document).ready(function() {

  const $tweetInput = $('#tweet-text');

  $tweetInput.on('input', function(event) {

    const $counter = $(this).siblings('.below-input').children('.counter');

    const textLength = event.target.value.length;
    $counter.val(140 - textLength);

    if (textLength > 140) $counter.addClass('counter-overflow');
    if (textLength <= 140) $counter.removeClass('counter-overflow');

  });

});
