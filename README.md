This is my tic-tac-toe project for my General Assembly web-developer immersive course.
It is the 2nd coding project I have undertaken.

game: https://3point14guy.github.io/Tic-tac-toe-project/

github: https://github.com/3point14guy/Tic-tac-toe-project

wireframe: http://i.imgur.com/m0AssHf.jpg?2

The goal of this project is to create a working game engine with Javascript, have
it be a single page application, be able to interact with the DOM using Jquery,
interact with an api hosted by GA using ajax and json.  Additionally, code needs
to be clean as possible with good documentation to follow my thought process.

I hate to admit, but I was overwhelmed going into this project.  I really had no
idea where to start on the game engine. And I still find some of the game apis
intimidating.  I was seriously wondering if this was something I was capable of.

I started with what I was most comfortable with: the html and css to build a
rudimentary framework of the game board.  I used new found knowledge of bootstrap
and modals here to help me get something decent on the board fairly quickly.
I knew enough about jquery to start
interacting with some of the elements in my html and this allowed me to start
tinkering with how I would actually get the game to work.

I spent most of one day going down a wrong path with my JS.  I had to scrap 95%
of it and start that part over.  I changed tack and started working on the login
ajax.  I had a great template from the lesson of one of the GA consultants, Toni,
That allowed me to tackle this part with more confidence.  Using console log
messages, I was able to work through that part with minimal difficulty.

Things that still need work:

* Unable to log game moves.  ****MVP NOT MET.****
* Unable to display total wins.  ****MVP NOT MET.****
* My log out message is floating below the modal box and is hard to see.
* Form fields still have old data if the page is not refreshed.
* Hiding login and create account buttons render the rest of the game inoperable.
* Layout is terrible.  Need to work on alignment.
* Need to remove modal pop-ups after the submit button is clicked.  Current
  attempts result in form data not being sent.
* gifs dont display on deployed site

Features I would still like to implement:

I would like to do more styling to make the app look more professional.
