# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

## Layouts

!["Small Version (under 1024x600px)"]()

!["Enlarged Version (above 1024x600px)"]()


## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- express
- node 5.10.x or above
- chance
- body-parser
- md5


## Getting Started

1. Install all dependencies (using the `npm install` command).
2. Run the development web server using the `npm start` command.
3. Open up the browser of your preference, and paste in http://localhost:8080/ to begin.
4. The website comes with a pre-generated tweets. To create a custom tweet, simply enter your text into the textbox area (above the most recent tweets).
    - Your tweet must be a valid input (empty textbox will trigger a warning!).
    - Your tweet must also be below 140 characters (you can see the remaining text counter on the right corner of the textbox).
5. Once a valid tweet is entered, a new random user will be generated with your tweet inside the tweet box!
6. You can toggle the textbox by using the top right arrow button below "write a new tweet" text.
7. Scrolling further down (below 250px) will display a green "scroll back up button" you can click anytime to return to the top of the page to enter more custom tweets!