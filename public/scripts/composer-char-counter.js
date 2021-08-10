$(document).ready(function() {
  
  const $counter = $('.counter');
  console.log($(this).parent());
  console.log($counter);

  const $tweetInput = $('#tweet-text');

  $tweetInput.on('input', (event) => {
    const textLength = event.target.value.length;
    console.log(textLength);
    $counter.val(140 - textLength);
    
    if (textLength > 140) $counter.addClass('counter-overflow');
    if (textLength <= 140) $counter.removeClass('counter-overflow');


  });

});
