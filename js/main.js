//

(function () {
  'use strict';
  var thisWebsiteURL = "http://mephysto.github.io/movie-generator/",
    currentMovieText = "",
    nextMovieText = {
      title: "",
      plot: ""
    };

  // Take a chance and Roll a dice (100 sided, with floating points)!
  // feed it a percentage chance you want it to return true
  function rollDice(chance){
    return (chance > Math.random()*100);
  }

  // get random entry from fed array
  function getRandomFromArray(inputArray){
    return inputArray[Math.floor(inputArray.length * Math.random())];
  }

  // The main generizer
  function generateNewMovie(){
    currentMovieText = nextMovieText.plot;
    nextMovieText.plot = "";
    if (rollDice(15)){
      nextMovieText = generateQuickie();
    } else {
      if (rollDice(0.05)){
        nextMovieText = generatePlotTwist(); // we haven't quite worked these out yet. luck of the draw if you get this
      } else{
        nextMovieText = generateNewMovieDefault();
      }
      if (rollDice(10)){
        nextMovieText.plot += addThirdActProblem();
      }
    }
    // some sexy extra flavour text
    if (rollDice(10)){
      nextMovieText.plot += addMusic();
    }
    if (rollDice(5)){
      nextMovieText.plot += addCameo();
    }
    if (rollDice(5)){
      nextMovieText.plot += addTooSoon();
    }
    //  
    function randomStartStyle(){
      var a = Math.random()*20 - 10;
      var b = $('.movie-text > blockquote').length + 100 < 250 ? $('.movie-text > blockquote').length + 100 : 250;
      return 'translate3d(-50%,-50%,' + b + 'px) rotate(' + a.toFixed(3) + 'deg)';
    }
    function randomEndStyle(){
      var a = Math.random()*5 - 2.5,
        locX = -40 - (Math.random()*20),
        loc = -40 - (Math.random()*20),
        stackheight = $('.movie-text > blockquote').length < 75 ? $('.movie-text > blockquote').length : 75;
        // stackheight = $('.movie-text > blockquote').length;
      return 'translate3d(' + locX.toFixed(2) + '%,' + loc.toFixed(1) + '%,' + stackheight + 'px) rotate(' + a.toFixed(3) + 'deg);';
    }
    $('.new').removeClass('new').removeAttr('style').attr('style', 'transform: ' + randomEndStyle());
    // $('.movie-text').append("<blockquote class=\"new\" style=\"transform: " + randomStartStyle() + "\"><div class=\"perforation\"></div><div class=\"quotetext\"><h2>" + nextMovieText.title + "</h2>" + nextMovieText.plot + "</div></blockquote>").attr('style', 'transform: translateZ(-' + $('.movie-text > blockquote').length + 'px)');
    $('.movie-text').append("<blockquote class=\"new\" style=\"transform: " + randomStartStyle() + "\"><div class=\"perforation\"></div><div class=\"quotetext\">" + nextMovieText.plot + "</div></blockquote>").attr('style', 'transform: translateZ(-' + $('.movie-text > blockquote').length + 'px)');
  }

  // the main movie text. 
  function generateNewMovieDefault(){
    // Ugh.. Grammar is dumbbbbb
    function getActorGenderText(gender){
      if (gender.toUpperCase() === "P"){
        return {
          they: "they",
          his: "their",
          has: "have"
        };
      } else if (gender.toUpperCase() === "F"){
        return {
          they: "she",
          his: "her",
          has: "has"
        };
      } else if (gender.toUpperCase() === "Y"){
        return {
          they: "you, the audience,",
          his: "your",
          has: "have"
        };
      } else {
        return {
          they: "he",
          his: "his",
          has: "has"
        };
      }
    }
    // list of heroes
    var actor = [{
      name: "a group of teenage friends", noun: "P"},{
      name: "two FBI agents", noun: "P"},{
      name: "a somewhat awkward teenager", noun: "P"},{
      name: "a 30-something year old man", noun: "P"},{
      name: "a woman down on her luck", noun: "F"},{

      name: "a hard, grizzled, military man in the highest echelons of power", noun: "M"},{
      name: "a British secret service agent", noun: "M"},{

      name: "a former army type", noun: "M"},{
      name: "a clueless young woman who's new to the big city", noun: "M"},{
      name: "a political mastermind", noun: "M"},{
      name: "an idiot savant", noun: "M"},{
      name: "a monkey that has learnt English", noun: "M"},{
      name: "a poor black kid from the wrong side of the tracks", noun: "M"},{
      name: "a company man", noun: "M"},{
      name: "an enigmatic grandfather type", noun: "M"},{
      name: "a 4th wall breaking action hero", noun: "M"},{
      name: "a cop who's two days from retirement", noun: "M"},{
      name: "a devoutly religious teenager", noun: "M"},{
      name: "Abraham Lincoln", noun: "M"},{
      name: "Adam Sandler", noun: "M"},{
      name: "Neil Patrick Harris", noun: "M"},{
      name: "Alec Baldwin", noun: "M"},{
      name: "Andy Serkis in a Mo-cap suit", noun: "M"},{
      name: "Ben Affleck", noun: "M"},{
      name: "Benedict Cumberbatch", noun: "M"},{
      name: "Bill Murray", noun: "M"},{
      name: "Channing Tatum and Jonah Hill", noun: "P"},{
      name: "Chewbacca", noun: "M"},{
      name: "Christopher Lambert", noun: "M"},{
      name: "Carrie Fisher", noun: "F"},{
      name: "Christopher Walken", noun: "M"},{
      name: "Danny Trejo", noun: "M"},{
      name: "David Hasselhof", noun: "M"},{
      name: "Dwayne 'The Rock' Johnson", noun: "M"},{
      name: "Eddie Murphy playing 10 different characters", noun: "P"},{
      name: "Ellen Page", noun: "F"},{
      name: "everyone from the Expandables", noun: "P"},{
      name: "the guys from The Flight of the Conchords", noun: "P"},{
      name: "Gary Busey", noun: "M"},{
      name: "GROOT!", noun: "M"},{
      name: "Henry Rollins", noun: "M"},{
      name: "Ice Cube", noun: "M"},{
      name: "Kevin Spacey", noun: "M"},{
      name: "Neil deGrasse Tyson", noun: "M"},{
      name: "Jan-Michael Vincent", noun: "M"},{
      name: "Jessica Biel", noun: "F"},{
      name: "Jennifer Lawrence", noun: "F"},{
      name: "Johnny Knoxville", noun: "M"},{
      name: "John Malkovich", noun: "M"},{
      name: "Jon Snow", noun: "M"},{
      name: "Kate Beckinsale", noun: "F"},{
      name: "The Avengers", noun: "P"},{
      name: "Kevin James", noun: "M"},{
      name: "Kung Fury", noun: "M"},{
      name: "Macaulay Culkin", noun: "M"},{
      name: "Madonna", noun: "F"},{
      name: "Mark Hamill", noun: "M"},{
      name: "Marie Curie", noun: "F"},{
      name: "Megan Fox", noun: "F"},{
      name: "Mel Gibson", noun: "M"},{
      name: "Michael Caine", noun: "M"},{
      name: "Michael J. Fox", noun: "M"},{
      name: "Optimus Prime",noun: "M"},{
      name: "Sean Connery", noun: "M"},{
      name: "Shia LaBeouf", noun: "M"},{
      name: "Tom Hardy", noun: "M"},{
      name: "you, the audience", noun: "Y"},{
      name: "Whoopi Goldberg", noun: "F"}
      // {name: "The Count", noun: "M" }
    ];
    var randoActor = getRandomFromArray(actor);
    // who...
    var situation = [
      "is diagnosed with terminal lung cancer",
      "gets beat up for " + getActorGenderText(randoActor.noun).his + " lunch money",
      "wakes up with no memory of what happened",
      // "wins the Golden Ticket to that consumer product " + getActorGenderText(randoActor.noun).they + " everybody loves",
      "wins the Golden Ticket to that consumer product everybody loves",
      "becomes pregnant",
      // "has to go back to school",
      "goes back to school",
      "encounters " + getActorGenderText(randoActor.noun).his + " evil twin",
      "always complains nothing ever happens",
      getActorGenderText(randoActor.noun).has + " to take the trip to Mars",
      "gets a job",
      // "has a nightmare",
      "is a petty thief, but " + getActorGenderText(randoActor.noun).they + " gets involved in a major crime",
      "knows too much",
      "relives the same day, over and over again",
      "hides a watch for five long years",
      "busts chops",
      "travels through time",
      "gets bitten by an irradiated toad",
      "gets caught in a series of unfortunate events",
      "wants to becomes a ballroom dancer",
      "plays a dangerous Game of Thrones",
      "investigates a psych ward",
      "returns from the dead",
      "takes a world-record breaking dump",
      "moves in next door",
      "babysit a three toddlers",
      "make a porno",
      "signs up for cross fit",
      "spends a romantic weekend in a cabin in the woods"
    ];
    // and has to...
    var actions = [
      "use Tinder",
      "get " + getActorGenderText(randoActor.noun).his + " groove back",
      "infiltrate a maximum security prison",
      "gather a group of seven magnificent warriors",
      "fight the undead",
      // "get the band back together",
      "switch places with " + getActorGenderText(randoActor.noun).his + " best friend",
      "become a vampire",
      "go to jail",
      "survive long enough",
      "enter The Matrix",
      // "do a Banksy",
      "start a podcast",
      "make a documentary",
      "start a food truck",
      // "throw a ring in a volcano",
      "win a high-stakes poker tournament",
      "travel to Mordor",
      // "give dem people air",
      "plan a heist",
      "prevent a bus from going below 60mph",
      "take a day off",
      "go deep undercover",
      "sings a heart wrenching power ballad",
      "go through a long training montage",
      "make an unexpected friend",
      "use hollistic medicine",
      "become a superhero",
      "learn karate",
      "have brain surgery",
      // "comes to life",
      "become a pre-cog",
      "become the highest bidder on eBay",
      // "post a letter",
      "deliver a message to Obi-Wan",
      "rock out"
    ];
    var mcguffin = [
      "The Pick of Truth",
      "The Stick of Destiny",
      "magic coconuts",
      "a secret porn stash",
      "an all powerful ring",
      "a treasure chest",
      "The Allspark",
      "a pair of aviators",
      // "a mouldy sandwich",
      "a duffel bag full of drugs",
      "a time travelling pool table",
      "a golden gun",
      "Lego bricks",
      "an Apple Watch <span title=\"Apple, please send us free stuff :)\">(that’s totally not a product placement)</span>",
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
      "a misplaced car",

      "his marriage",
      "the Millenium Falcon",
      "a suitcase full of money",
      "the Holy Grail",
      "the Infinity Stones",
      "Netflix",
      "Leo's Oscar",
      "the President's Daughter",
      "a red stapler",
      "a rug that really ties the room together",
      "The Spice",
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
      "an army of the undead",
      "going back in time to kill himself",
      "velociraptors with machine guns",
      "Voldemort",
      "an army of ducks",
      "Dinosaurs",
      "Donald Trump",
      "Gary Oldman",
      "Hitler",
      "Skynet",
      "Jareth",
      "George Lucas",
      // "my ex",
      // "his ex",
      "The Joker",
      "Kanye West",
      "Kylo Ren",
      "The Kardashians",
      "Stereotyped Terrorists",
      "a Mexican Drug Cartel",
      // "a former MI:6 agent, gone rogue",
      "A six-fingered man",
      "Bikers",
      "Lex Luthor",
      "the Libyans",
      "Megatron",
      // "certain death",
      "Shredder",
      "the NAZIs",
      // "a meteor",
      // "a nuclear bomb",
      "Steve Buscemi",
      "Team Rocket",
      "the Teletubbies",
      "a beautiful, yet deadly assassin",
      "a wealthy business man",
      // "toxic gas",
      "The Vikings",
      "a Clan of Bandits",
      "a brilliant, diabolical Mastermind",
      "a master thief",
      "a cunning sneak",
      "a corrupt politician",
      "an evil genius",
      "a manipulative psychopath",
      "a mischievous trickster",
      "a loan shark",
      "an overzealous ",
      "the Mafia",
      "a serial killer",
      "the Yakuza",
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
      /*{
        verb1: "save", verb2: "from"
      },{
        verb1: "protect", verb2: "from"
      },{
        verb1: "bring", verb2: "to"
      },{
        verb1: "win", verb2: "for"
      }, {
        verb1: "transport", verb2: "to"
      },*/{
        verb1: "deliver", verb2: "to"
      },{
        verb1: "steal", verb2: "from"
      },{
        verb1: "defend", verb2: "from"
      },{
        verb1: "retrieve", verb2: "from"
      }];

    var guffinAction = rollDice(50) ? getRandomFromArray(guffinActions) : {verb1: "save", verb2: "from" };

    // var badguymaybe = rollDice(10) ? "falling in the hands of " : ""; // play around with this one a bit more
    var lifetime = rollDice(1) ? "Lifetime movie" : "movie";
    var startText = rollDice(1) ? "It's a movie fully told in non sequitur, starring " : "It's a " + lifetime + " starring ";
    var newTitle = "New Title";
    var newText = startText + adjective + randoActor.name + ", who " + getRandomFromArray(situation) + ". And " + getActorGenderText(randoActor.noun).they + " " + getActorGenderText(randoActor.noun).has + " to " + getRandomFromArray(actions) + " to " + guffinAction.verb1 + " " + getRandomFromArray(mcguffin) + " " + guffinAction.verb2 + " " + getRandomFromArray(badguy) + ".";
    return {title: newTitle, plot: newText};
  }

  function generateQuickie(){
    var genre = [
      // "version where everyone are anthropomorphic animals",
      "oldschool anime",
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
      "Lifetime Movie",
      "sexy",
      "vampire",
      "western",
      "zombie"
    ];

    var oldmovie = [
      "Beavis & Butthead",
      "Taylor Swift’s latest album",
      "the most popular video on Youtube today",
      "the 1964 Olympic Games",
      "any original animated Disney movie",
      "whatever the next story on the news is",
      "Steve Jobs life story",
      "Armageddon",
      "Michael Jackson's life story",
      "50 Shades of Grey",
      "Scarface",
      "the US presidential elections",
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
      "Transformers"
      // "World of Warcraft",
    ];

    var newTitle = "New Title";
    var newText = "We just do a " + getRandomFromArray(genre) + " remake of " + getRandomFromArray(oldmovie) + " and go home early.";
    return {title: newTitle, plot: newText};
  }

  function generatePlotTwist(){
    var actor = [
      "Michael Caine"
    ];

    var profession = [
      "Web Developer",
      "Art Director"
    ];

    var adjective = [
      "stunning"
    ];

    var shyamalize = [
      "it turns out he was dead all along",
      "he was actually Tyler Durden",
      "he was on Earth all along"
    ];

    var newTitle = "New Title";
    var newText = getRandomFromArray(actor) + " is a " + getRandomFromArray(profession) + ", but in a " + getRandomFromArray(adjective) + " plot twist, " + getRandomFromArray(shyamalize) + ".";
    return {title: newTitle, plot: newText};
  }
  function addThirdActProblem(){

    var problem = [
      "we’ve already written ourselves into a corner and the movie is ruined",
      "we pray that everyone has left the cinema already",

      "we had to write out Jonah Hill's character",
      "there's this whole bit with Ewoks",
      "Chevy Chase ruins everything and the whole production gets shut down",
      "Dan Harmon got fired",
      "we ran out of budget",
      "Superman wins the day, but destroys the city"
    ];
    // . But...
    var solution = [
      "then every character has their mind wiped and it’s like none of this ever happened",
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
      "smooth jazz covers of Metallica",
      // "a mellow cover of Eye of the Tiger",
      "whatever the kids are listening to these days",
      "Morgan Freeman's voice",
      "The Backstreet Boys",
      "Dethklok",
      "Daft Punk",
      "Stephen Hawking",
      "Elton John",
      "The Lonely Island",
      "Danny Elfman",
      "a french artist who covers David Bowie songs",
      "NWA",
      "John Williams",
      "Vanilla Ice",
      "Kanye West",
      "Randy Newman",
      "the Spice Girls",
      "the Pet Shop Boys",
      "Wham!"
    ];
    return " With music done by " + getRandomFromArray(composer) + ".";
  }
  function addCameo(){
    var celebrity = [
      // "Nikola Tesla",
      "Hulk Hogan",
      "Mike Tyson",
      "Ron Jeremy",
      "Bill Murray",
      "Bob Saget",
      "Han Solo",
      "Stan Lee",
      "a CGI version of Paul Walker"
    ];

    return " And " + getRandomFromArray(celebrity) + " has a cameo.";
  }

  function addTooSoon(){
    var deadCelebrity = [
      "Carl Sagan",
      "Christopher Lee",
      "David Bowie",
      "Leonard Nimoy",
      "Michael Jackson",
      "Amy Winehouse",
      "Kurt Cobain",
      "Lemmy Kilmister",
      "Robin Williams"
    ];

    return rollDice(100 / deadCelebrity.length) ? " And we tell everyone that it's based on a true story" : " And we tell everyone that it's " + getRandomFromArray(deadCelebrity) + "'s final movie.";
  }


  generateNewMovie();
  generateNewMovie();
  function shareCurrentMovie(){
    console.log('share:',currentMovieText);
    FB.ui({
      method: 'feed',
      link: thisWebsiteURL,
      caption: currentMovieText,
      description: currentMovieText
    }, function(response){});
    // ga('send', 'event', "Moviepitch", "click", "share to Facebook", currentMovieText);
  }


  $('.btn-generate').click(function(e){
    e.preventDefault();
    ga('send', 'event', "Moviepitch", "click", "generate new movie pitch", currentMovieText);
    generateNewMovie();
  });
  $('.btn-sharezvous').click(function (e) {
    e.preventDefault();
    shareCurrentMovie();
  })



})();