/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  

  const createTweetElement = function(userData) {

    const $returnTweet = $(
      `<article class="stored-tweet">
        <div class="tweet-head">
          <table style="position:relative; right:20px;">
            <tr>
              <td>
                <img height="80px" width="80px" src="${userData.user.avatars}"> 
              </td>
              <td>
                <h5>${userData.user.name}</h5>
              </td>
            </tr>
          </table>
            <span>${userData.user.handle}</span>
        </div>
        <p class="tweet-content">${escape(userData.content.text)}</p>
        <div class="tweet-foot">
          <h6>${timeago.format(userData.created_at)}</h6>
          <div class="tweet-foot-buttons">
            <span>
              <i class="fas fa-flag"></i>
            </span>
            <span>
              <i class="fas fa-retweet"></i> 
            </span>
            <span>
              <i class="fas fa-heart"></i>
            </span>
          </div>
        </div>
      </article>`);


    return $returnTweet;
  };

  const renderTweets = function(tweets) {
    // empty out any existing tweets from
    // the container!
    $('#tweet-container').empty();

    // reverse the order of the tweets...

    tweets = tweets.reverse();
    
    for (const aTweetData of tweets) {
      let $newTweet = createTweetElement(aTweetData);
      $('#tweet-container').append($newTweet);
    }
  };


  const loadTweets = () => {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: (storedTweets) => {
        renderTweets(storedTweets);
      },
      error: (err) => {
        console.log(err);
      }
    });
  };

  loadTweets();
  

  $("#tweet-submission").on("submit", function(event) {
    event.preventDefault();

    const $tweetInput = $('#tweet-text');
    const textLength = $tweetInput.val().length;

    if (textLength > 140 || textLength < 0 || $tweetInput.val() === ''){
      alert('Nope')
    } else {
      const urlEncoded = $(this).serialize();
      $.post('/tweets',urlEncoded)
        .then(loadTweets);
    }


  });

});
