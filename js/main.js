// dafuq you looking at, stop looking at spoilers

(function () {
  'use strict';

  var $textEl = $('#movie-text');

  function getRandomFromArray(inputArray){
    return inputArray[Math.floor(inputArray.length * Math.random())];
  }

  function generateNewMovie(){
    var a = Math.random() * 100;
    if (a < 10){
      // 10% chance to do a quickie
      generateQuickie();
    } else {
      generateNewMovieDefault();
    }
  }
  function generateNewMovieDefault(){
    var text1 = "It's a movie where ";
    var text2 = " has to save ";
    var text3 = " from ";

    var actor = [
      "Adam Sandler",
      "Alec Baldwin",
      "Andy Serkis in a Mocap suit",
      "Ben Affleck",
      "Channing Tatum and Jonah Hill",
      "Chewbacca",
      "Christopher Lambert",
      "Christopher Walken",
      "Danny Trejo",
      "David Hasselhoff",
      "Dwayne Johnson",
      "Eddie Murphy plays 10 characters, and he ",
      "Ellen Page",
      "everyone from the Expandables",
      "Gary Busey",
      "GROOT!",
      "Henry Rollins",
      "Ice Cube",
      "Jan-Michael Vincent",
      "Jessica Biel",
      "Johnny Knoxville",
      "Kate Beckinsale",
      "Keven James",
      "Kung Fury",
      "Macaulay Culkin",
      "Madonna",
      "Mark Hamill",
      "Megan Fox",
      "Megatron",
      "Mel Gibson",
      "Michael J. Fox",
      "Morgan Freeman's voice",
      "Optimus Prime",
      "Sean Connery",
      "Shia LaBeouf",
      "The Count",
      "Whoopi Goldberg"
    ];

    var mcguffin = [
      "the Continuum Transfunctioner",
      "David Bowie's crotch",
      "a disc containing every undercover agent in the world",
      "the Maltese Falcon",
      "a misplaced car",
      "a suitcase full of money",
      "the Holy Grail",
      "the Infinity Stones",
      "the President's Daughter",
      "a red stapler",
      "a rug that really ties the room together",
      "the Spice",
      "Unobtanium"
    ];

    var badguy = [
      "Dinosaurs",
      "Donald Trump",
      "Hitler",
      "Jareth",
      "Lex Luthor",
      "The Matrix",
      "The Vikings"
    ];


    var newText = text1 + getRandomFromArray(actor) + text2 + getRandomFromArray(mcguffin) + text3 + getRandomFromArray(badguy);
    $textEl.text(newText);
  }

  function generateQuickie(){
    var text1 = "We do a ";
    var text2 = " remake of ";
    var text3 = " and go home early.";

    var genre = [

      "CGI",
      "gender bender",
      "gritty",
      "noir",
      "sexy",
      "western"
    ];

    var oldmovie = [
      "Transformers"
    ];


    var newText = text1 + getRandomFromArray(genre) + text2 + getRandomFromArray(oldmovie) + text3;
    $textEl.text(newText);
  }

  generateNewMovie();

  $('.btn-generate').click(function(e){e.preventDefault();generateNewMovie();});

})();