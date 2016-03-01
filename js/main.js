// dafuq you looking at, stop looking at spoilers

(function () {
  'use strict';

  var $textEl = $('#movie-text');

  function rollDice(chance){
    return (chance > Math.random()*100);
  }

  function getRandomFromArray(inputArray){
    return inputArray[Math.floor(inputArray.length * Math.random())];
  }

  function generateNewMovie(){
    var b;
    if (rollDice(5)){
      b = generateQuickie();
    } else {
      if (rollDice(20)){
        b = generateThirdActProblem();
      } else{
        if (rollDice(0.5)){
          b = generatePlotTwist(); // we haven't made these yet
        } else{
          b = generateNewMovieDefault();
        }
        b = generateNewMovieDefault();
      }
    }
    if (rollDice(5)){
      b += addMusic();
    }
    if (rollDice(5)){
      b += addCameo();
    }
    if (rollDice(5)){
      b += addTooSoon();
    }
    $textEl.text(b);
  }
  function generateNewMovieDefault(){
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
      "the future of mankind",
      "a disc containing every undercover agent in the world",
      "the Maltese Falcon",
      "a message to Obi-Wan",
      "a misplaced car",
      "a suitcase full of money",
      "the Holy Grail",
      "the Infinity Stones",
      "Leo's Oscar",
      "the President's Daughter",
      "a red stapler",
      "a rug that really ties the room together",
      "the Spice",
      "Unobtanium"
    ];

    var badguy = [
      "going back in time to kill himself",
      "Dinosaurs",
      "Donald Trump",
      "Hitler",
      "Jareth",
      "Kanye West",
      "The Kardashians",
      "Lex Luthor",
      "The Matrix",
      "The Vikings"
    ];

    var newText = "It's a movie where " + getRandomFromArray(actor) + " has to save " + getRandomFromArray(mcguffin) + " from " + getRandomFromArray(badguy) + ".";
    // $textEl.text(newText);
    return newText;
  }

  function generateQuickie(){
    var genre = [
      "CGI",
      "zombie",
      "gender bender",
      "gritty",
      "noir",
      "sexy",
      "western"
    ];

    var oldmovie = [
      "Alice in Wonderland",
      "Captain Planet",
      "The Fast and the Furious",
      "Magic Schoolbus",
      "the Oscars",
      "Transformers"
    ];


    var newText = "We do a " + getRandomFromArray(genre) + " remake of " + getRandomFromArray(oldmovie) + " and go home early.";
    // $textEl.text(newText);
    return newText;
  }

  function generatePlotTwist(){
    var newText = "<actor> plays/work in <mundane profession>, but in a <adjective> plot twist, he becomes <something ridiculous>";
    return newText;
  }
  function generateThirdActProblem(){

    var problem = [
      "there's this whole bit with Ewoks",
      "Chevy Chase ruins everything and the whole production gets shut down",
      "Dan Harmon got Fired",
      "Superman wins the day, but destroys the city"
    ];
    var solution = [
      "then we zoom out and see it all took place in a snow globe",
      "it was in his head all along",
      "at least we still have Donald Glover, so it's all good (or at least until next year)",
      "we'll have tons of lens flares",
      "at least we've retained merchandising rights"
    ];
    var newText = "In the third act, " + getRandomFromArray(problem) + ". But " + getRandomFromArray(solution) + ".";
    return newText;
  }

  function addMusic(){
    var composer = [
      "NWA",
      "Kanye West",
      "John Williams",
      "Randy Neuman",
      "Wham!",
      "the Spice Girls",
      "a french artist who does covers of David Bowie songs",
      "The Backstreet Boys"
    ];

    var newText = " With music by " + getRandomFromArray(composer) + ".";
    return newText;
  }
  function addCameo(){
    var celebrity = [
      "Stan Lee",
      "a CGI version of Paul Walker"
    ];

    return " And " + getRandomFromArray(celebrity) + " has a random cameo.";
  }

  function addTooSoon(){
    var deadCelebrity = [
      "Christopher Lee",
      "David Bowie",
      "Leonard Nimoy",
      "Lemmy Kilmister",
      "Robin Williams"
    ];

    return " And we tell everyone that it's " + getRandomFromArray(deadCelebrity) + "'s final movie.";
  }


  generateNewMovie();

  $('.btn-generate').click(function(e){e.preventDefault();generateNewMovie();});

})();