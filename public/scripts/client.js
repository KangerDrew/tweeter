/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

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
        <p class="tweet-content">${userData.content.text}</p>
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

  const renderTweet = function(tweets) {
    
    for (const aTweetData of tweets) {
      let $newTweet = createTweetElement(aTweetData);
      $('#tweet-container').append($newTweet);
    }
  };

  const data = [
    {
      "user": {
        "name": "John Wick",
        "avatars": "/images/keanu.png"
        ,
        "handle": "@leggo-my-doggo"
      },
      "content": {
        "text": "Woah"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Nicholas Cage",
        "avatars": "/images/nic-cage.png",
        "handle": "@not-the-bees" },
      "content": {
        "text": "ImAVampireImAVampireImAVampireImAVampireImAVampireImAVampireImAVampire!"
      },
      "created_at": 1461113959088
    }
  ]

  renderTweet(data);

});
