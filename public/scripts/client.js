/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  // The escape function was implemented to prevent people
  // injecting unwanted code to the main page! This will
  // need to be used for the incoming text input from the
  // user.

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  


  // This function creates an HTML element for the custom tweet.

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
            <span class="user-handle">${userData.user.handle}</span>
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

  
  // The below function uses createTweetElement to
  // render all the existing tweets in the database!

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

  // Below is an AJAX get request to load the
  // tweets into the page from the database!
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

  // When the page loads for the first time, it will
  // populate it with some sample tweets that already
  // exists in the database!
  loadTweets();
  
  // Below are some standard procedure for what happens when
  // a new tweet is submitted.
  $("#tweet-submission").on("submit", function(event) {

    // Command below prevents default HTML response from triggering
    event.preventDefault();

    const $tweetInput = $('#tweet-text');
    // Below gives us the number of character that was input in
    // the textbox by the user!
    const textLength = $tweetInput.val().length;

    
    // The two constants below refer to the warning signs that
    // are currently hidden by css. If the right conditions are
    // met, they will reveal themselves by the jQuery logic written
    // below it!

    const warningDisplayLimit = $('#limit-warning');
    const warningDisplayZero = $('#zero-word');

    if (textLength > 140) {
      if (!warningDisplayLimit.is(':visible')) {
        warningDisplayLimit.slideToggle();
      }
    } else if ($tweetInput.val() === '') {
      if (!warningDisplayZero.is(':visible')) {
        warningDisplayZero.slideToggle();
      }
    } else {
      if (warningDisplayLimit.is(':visible')) {
        warningDisplayLimit.slideToggle();
      }
      if (warningDisplayZero.is(':visible')) {
        warningDisplayZero.slideToggle();
      }
      const urlEncoded = $(this).serialize();
      $.post('/tweets',urlEncoded)
        .then(loadTweets);
    }


  });

});
