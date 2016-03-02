// dafuq you looking at, stop looking at spoilers

(function () {
  'use strict';
  var thisWebsiteURL = "http://mephysto.github.io/movie-generator/new.html";
  var movieText = "";
  var $textEl = $('#movie-text');

  // Roll a dice!
  // give it a percentage chance on success, 
  // and a callback function that should trigger on success
  function rollDice(chance){
    return (chance > Math.random()*100);
  }

  function getRandomFromArray(inputArray){
    return inputArray[Math.floor(inputArray.length * Math.random())];
  }

  function generateNewMovie(){
    var state;
    movieText = "";
    if (rollDice(15)){
      state = "QUICKIE";
      movieText = generateQuickie();
    } else {
      if (rollDice(0.05)){
        movieText = generatePlotTwist(); // we haven't made these yet. luck of the draw if you get this
      } else{
        movieText = generateNewMovieDefault();
      }
      // if !quickie, we can add this suffix
      if (rollDice(10)){
        movieText += addThirdActProblem();
      }
    }
    // suffixes
    if (rollDice(10)){
      movieText += addMusic();
    }
    if (rollDice(5)){
      movieText += addCameo();
    }
    if (rollDice(5)){
      movieText += addTooSoon();
    }
    $textEl.text(movieText);
  }
  function generateNewMovieDefault(){
    var actor = [
      "Abraham Lincoln",
      "Adam Sandler",
      "Alec Baldwin",
      "Andy Serkis in a Mocap suit",
      "Ben Affleck",
      "Benedict Cumberbatch",
      "Bill Murray",
      "Channing Tatum and Jonah Hill",
      "Chewbacca",
      // "Christopher Lambert",
      "Carrie Fisher",
      "Christopher Walken",
      "Danny Trejo",
      "David Hasselhoff",
      "Dwayne 'The Rock' Johnson",
      "Eddie Murphy plays 10 characters, and he ",
      "Ellen Page",
      "everyone from the Expandables",
      "the guys from The Flight of the Conchords",
      "Gary Busey",
      "GROOT!",
      "Henry Rollins",
      "Ice Cube",
      "Kevin Spacey",
      "Neil deGrasse Tyson",
      "Jan-Michael Vincent",
      "Jessica Biel",
      "Jennifer Lawrence",
      "Johnny Knoxville",
      "John Malkovich",
      "Jon Snow",
      // "Kate Beckinsale",
      "the Avengers",
      "Kevin James",
      "Kung Fury",
      "Macaulay Culkin",
      "Madonna",
      "Mark Hamill",
      "Marie Curie",
      "Megan Fox",
      "Mel Gibson",
      "Michael J. Fox",
      "Optimus Prime",
      "Sean Connery",
      "Shia LaBeouf",
      "The Count",
      "Tom Hardy",
      "you, the audience",
      "Whoopi Goldberg"
    ];

    var actions = [
      // "has a nightmare",
      "wakes up with no memory of what happened",
      "does a Banksy",
      "starts a podcast",
      "hide a watch for a five long years",
      "takes a day off",
      "goes undercover",
      "can’t go below 60mph",
      "sings a heart wrenching power ballad",
      "goes through a long training montage",
      "busts chops",
      "makes an unexpected friend",
      "travels through time",
      "becomes a superhero",
      "gets bitten by an irradiated toad",
      "learns karate",
      "becomes a ballroom dancer",
      "gets impregnated ",
      "has brain surgery",
      "plays a Game of Thrones",
      "investigates a psych ward",
      "returns from the dead",
      // "comes to life",
      "goes back to school",
      "gets a job",
      "becomes a pre-cog ",
      "takes a dump",
      "is the highest bidder on eBay",
      "posts a letter",
      "rocks out",
      "moves in next door",
      "signs up for cross fit"
    ];
    var mcguffin = [
      "a stick",
      "magic coconuts",
      "a secret porn stash",
      "an all powerful ring",
      "a treasure chest",
      "a pair of aviators",
      "a mouldy sandwich",
      "a duffel bag full of drugs",
      "a time travelling pool table",
      "a golden gun",
      "Lego bricks",
      "an Apple Watch (that’s totally not a product placement)",

      "a princess",
      "plans for a giant space station",
      "the cure for cancer",
      "a crystal skull",
      "a really old vintage wine",
      "a Bigger Blacker Dick™",
      "a carton of VB",
      "the Continuum Transfunctioner",
      "the City of London",
      "David Bowie's crotch",
      "the Flux Capacitor",
      "the future of mankind",
      "a disc containing every undercover agent in the world",
      "the Maltese Falcon",
      "a message to Obi-Wan",
      "a misplaced car",
      "my marriage",
      "the Millenium Falcon",
      "a suitcase full of money",
      "the Holy Grail",
      "the Infinity Stones",
      "Netflix",
      "Leo's Oscar",
      "the President's Daughter",
      "a red stapler",
      "a rug that really ties the room together",
      "the Spice",
      "Unobtanium"
    ];
    var badguy = [


      "Kim Jong Un",
      "North Korea",
      "aliens",
      "a father figure",
      "John Travolta in drag",
      "a young Betty White",
      "Seal",
      "a shady man sitting in a chair",
      "reincarnated Elvis Presley",

      "going back in time to kill himself",
      "velociraptors with machine guns",
      "an army of ducks",
      "Dinosaurs",
      "Donald Trump",
      "Gary Oldman",
      "Hitler",
      "Jareth",
      "George Lucas",
      "my ex-wife",
      "my ex-girlfiend",
      "The Joker",
      "Kanye West",
      "Kylo Ren",
      "The Kardashians",
      "Lex Luthor",
      "the Libyans",
      "Megatron",
      "certain death",
      "Shredder",
      "NAZIs",
      "a meteor",
      "a nuclear bomb",
      "Steve Buscemi",
      "The Matrix",
      "Team Rocket",
      "Teletubbies",
      "toxic gas",
      "The Vikings",
      "a white guy dressed like an Egyptian",
      "your mom"
    ];
    var adjectives = [
      "an animated ",
      "a really angry ",
      "a happy version of "
    ];
    var adjective = rollDice(10) ? "an animated version of " : ""; // play around with this one a bit more
    var action = rollDice(50) ? getRandomFromArray(actions) : "has";

    var guffinActions = [
      "save",
      "steal",
      "protect",
      "defend",
      // "bring",
      // "win",
      "transport"
    ];

    var guffinAction = getRandomFromArray(guffinActions);

    // var badguymaybe = rollDice(10) ? "falling in the hands of " : ""; // play around with this one a bit more

    var newText = "It's a movie where " + adjective + getRandomFromArray(actor) + " " + action + " to " + guffinAction + " " + getRandomFromArray(mcguffin) + " from " + getRandomFromArray(badguy) + ".";
    // $textEl.text(newText);
    return newText;
  }

  function generateQuickie(){
    var genre = [
      "version where everyone are anthropomorphic animals",
      "arthouse",
      "comedy",
      "animated",
      "Disney",
      "European",
      "extremely violent",
      "family-friendly",
      "gender bender",
      "German scheisse",
      "gritty",
      "high school",
      "horror",
      "musical",
      "kung-fu",
      "film-noir",
      "snuff piece",
      "period piece",
      "porn",
      "quirky indie",
      "space",
      "sexy",
      "vampire",
      "western",
      "zombie"
    ];

    var oldmovie = [
      "Taylor Swift’s latest album",
      "the most popular video on Youtube today",
      "the 1964 Olympic Games",
      "of any original animated Disney movie",
      "whatever the next story on the news is",
      "Steve Jobs life story",

      "Michael Jackson's life story",
      "50 Shades of Grey",
      "Scarface",
      "the upcoming US presidential elections",
      "the Care Bears",
      "Scooby Doo",
      "Karate Kid",
      "Twins",
      "Alice in Wonderland",
      "Captain Planet",
      "The Fast and the Furious",
      "Ghostbusters",
      "The Goonies",
      "Jurassic Park",
      "Magic Schoolbus",
      "Robocop",
      "the Oscars",
      "Schindlers List",
      "Transformers",
      "World of Warcraft"
    ];


    var newText = "We do a " + getRandomFromArray(genre) + " remake of " + getRandomFromArray(oldmovie) + " and go home early.";
    // $textEl.text(newText);
    return newText;
  }

  function generatePlotTwist(){
    var actor = ["<actor>"];

    var profession = ["<mundane profession"];

    var adjective = ["<adjective>"];

    var newText = "<actor> plays/work in <mundane profession>, but in a <adjective> plot twist, he becomes <something ridiculous>";
    return newText;
  }
  function addThirdActProblem(){

    var problem = [
      "we’ve already written ourselves into a corner and the movie is ruined.",
      "we pray that everyone has left the cinema already.",

      "we had to write out Jonah Hill's character",
      "there's this whole bit with Ewoks",
      "Chevy Chase ruins everything and the whole production gets shut down",
      "Dan Harmon got fired",
      "we ran out of budget",
      "Superman wins the day, but destroys the city"
    ];
    var solution = [
      "but then every character has their mind wiped and it’s like none of this ever happened",
      "then we realise the beginning of the movie was the ending and the ending is the beginning",

      "then again, we're not adhering to a Joseph Campbell storycircle anyway",
      "we set up the sequel with a vague ending",
      "it won’t matter if it flops because it’ll do well in China",
      "it ends with a heavy metal cover of the song from Titanic",
      "Dan Harmon does a sweet rap battle, and all is good",
      "we got the Mythbusters to help us explain that bit",
      "then we zoom out and see everything took place in a snow globe",
      "it was in his head all along",
      "at least we still have Donald Glover, so it's all good (or at least until next year)",
      "we'll have tons of lens flares",
      "at least we've retained merchandising rights"
    ];
    var newText = " In the 3rd act, " + getRandomFromArray(problem) + ". But " + getRandomFromArray(solution) + ".";
    return newText;
  }

  function addMusic(){
    var composer = [
      "Huey Lewis and the News",
      "Kenny Loggins",
      // "a mellow cover of Eye of the Tiger",
      "whatever the kids are listening to these days.",
      "Morgan Freeman's voice",
      "The Backstreet Boys",
      "Dethklok",
      "Daft Punk",
      "Stephen Hawking",
      "a french artist who does covers of David Bowie songs",
      "NWA",
      "John Williams",
      "Kanye West",
      "Randy Newman",
      "the Spice Girls",
      "the Pet Shop Boys",
      "Wham!"
    ];

    var newText = " With music by " + getRandomFromArray(composer) + ".";
    return newText;
  }
  function addCameo(){
    var celebrity = [
      "Nikola Tesla",
      "Han Solo",
      "Stan Lee",
      "a CGI version of Paul Walker"
    ];

    return " And " + getRandomFromArray(celebrity) + " has a random cameo.";
  }

  function addTooSoon(){
    var deadCelebrity = [
      "Carl Sagan",
      "Christopher Lee",
      "David Bowie",
      "Leonard Nimoy",
      "Michael Jackson",
      "Kurt Cobain",
      "Lemmy Kilmister",
      "Robin Williams"
    ];

    return " And we tell everyone that it's " + getRandomFromArray(deadCelebrity) + "'s final movie.";
  }


  generateNewMovie();
  function shareCurrentMovie(){
    FB.ui({
      method: 'feed',
      link: thisWebsiteURL,
      caption: movieText,
    }, function(response){});
  }


  $('.btn-generate').click(function(e){e.preventDefault();generateNewMovie();});
  $('.btn-sharezvous').click(function (e) {
    e.preventDefault();
    shareCurrentMovie();
  })



})();