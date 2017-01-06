/* 
 * Spoilers!
 *
 * So you want to see how we maded this huh?
 * Any questions, love letters, or donations. Shoot me an email: contact@mauricemelchers.nl
 * 
 */

(function() {
  'use strict';
  const thisWebsiteURL = "http://mephysto.github.io/movie-generator/";
  let currentMovieText = "",
    nextMovieText = {
      title: "",
      plot: ""
    };
  // const audio = new Audio('../audio/paper.mp3');
  const audio = new Audio(thisWebsiteURL + 'audio/paper.mp3');
  // Take a chance and Roll a dice (100 sided, with floating points)!
  // feed it a percentage chance you want it to return true
  const rollDice = (chance = 50) => chance > Math.random() * 100; // ES6 sure is sexy

  // get random entry from fed array 
  const getRandomFromArray = (inputArray) => inputArray[Math.floor(inputArray.length * Math.random())];

  // Ugh.. Grammar is dumbbbbb
  const getActorGenderText = (gender) => {
    if (gender.toUpperCase() === "P") {
      return {
        they: "they",
        his: "their",
        has: "have"
      };
    } else if (gender.toUpperCase() === "F") {
      return {
        they: "she",
        his: "her",
        has: "has"
      };
    } else if (gender.toUpperCase() === "Y") {
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
  // The main generizer
  const generateNewMovie = () => {
    const randomStartStyle = () => {
      const quoteCount = document.querySelectorAll('.movie-text > blockquote').length,
        a = Math.random() * 20 - 10,
        b = quoteCount + 100 < 175 ? quoteCount + 100 : 175;
      return `translate3d(-50%,-50%,${b}px) rotate(${a.toFixed(3)}deg)`;
    }
    const randomEndStyle = () => {
      const quoteCount = document.querySelectorAll('.movie-text > blockquote').length,
        a = Math.random() * 5 - 2.5,
        locX = quoteCount <= 1 ? -50 : -40 - (Math.random() * 20),
        loc = quoteCount <= 1 ? -50 : -40 - (Math.random() * 20),
        stackheight = 0;
      return `translate3d(${locX.toFixed(2)}%, ${loc.toFixed(1)}%, ${stackheight}px) rotate(${a.toFixed(3)}deg)`;
    }
    const createHTML = (text) => {
      const newBlockQuote = document.createElement('blockquote');
      newBlockQuote.classList.add('new');
      newBlockQuote.style.transform = randomStartStyle();
      const perDiv = document.createElement('div');
      perDiv.classList.add('perforation');
      const quoteTextDiv = document.createElement('div');
      quoteTextDiv.classList.add('quotetext');
      const quoteTextP = document.createElement('p');
      quoteTextP.innerHTML = text;
      quoteTextDiv.appendChild(quoteTextP);
      newBlockQuote.appendChild(perDiv);
      newBlockQuote.appendChild(quoteTextDiv);
      const shareContainer = document.createElement('div');
      quoteTextDiv.appendChild(shareContainer);
      shareContainer.classList.add('share-container');
      const shareButton = document.createElement('button');
      shareButton.type = "button";
      shareButton.classList.add('btn-default', 'btn-sharezvous');
      shareButton.innerHTML = `Share this film <i class="fa fa-facebook-official"></i>`
      shareContainer.appendChild(shareButton);
      shareButton.addEventListener('click', (e) => {
        e.preventDefault();
        shareCurrentMovie();
      })
      return newBlockQuote;
    }
    const tempEl = document.createElement('p');
    tempEl.innerHTML = nextMovieText.plot;
    currentMovieText = tempEl.innerText; // some of my lines have HTML in there
    nextMovieText.plot = "";
    if (rollDice(15)) {
      nextMovieText = generateQuickie();
    } else {
      if (rollDice(0.05)) {
        nextMovieText = generatePlotTwist(); // we haven't quite worked these out yet. luck of the draw if you get this
      } else {
        nextMovieText = generateNewMovieDefault();
      }
      if (rollDice(10)) {
        nextMovieText.plot += addThirdActProblem(nextMovieText.actor);
      }
    }
    // some sexy extra flavour text
    if (rollDice(10)) {
      nextMovieText.plot += addMusic();
    }
    if (rollDice(5)) {
      nextMovieText.plot += addCameo();
    }
    if (rollDice(5)) {
      nextMovieText.plot += isMetaphor();
    }
    if (rollDice(5)) {
      nextMovieText.plot += addTooSoon();
    }
    if (document.querySelector('.new')) {
      var x = document.querySelector('.new');
      x.removeAttribute('class');
      x.style.transform = randomEndStyle();
    }
    document.querySelector('.movie-text').appendChild(createHTML(nextMovieText.plot));
    var count = document.querySelectorAll('.movie-text > blockquote').length;
    document.querySelector('.movie-text').style.transform = `transform: translateZ(-${count} px)`;
  }
  // the main movie text. 
  const generateNewMovieDefault = () => {
    // list of heroes
    const actor = [{
        name: "a group of teenage friends",
        noun: "P"
      }, {
        name: "two FBI agents",
        noun: "P"
      }, {
        name: "a somewhat awkward teenager",
        noun: "F"
      }, {
        name: "a 30-something year old man",
        noun: "M"
      }, {
        name: "a woman down on her luck",
        noun: "F"
      }, {
        name: "a hard, grizzled, military man in the highest echelons of power",
        noun: "M"
      }, {
        name: "a British secret service agent",
        noun: "M"
      }, {
        name: "a former army type",
        noun: "M"
      }, {
        name: "a clueless young woman who's new to the big city",
        noun: "F"
      }, {
        name: "a political mastermind",
        noun: "M"
      }, {
        name: "an idiot savant",
        noun: "M"
      }, {
        name: "a monkey that has learnt English",
        noun: "M"
      }, {
        name: "a poor black kid from the wrong side of the tracks",
        noun: "M"
      }, {
        name: "a company man",
        noun: "M"
      }, {
        name: "an enigmatic grandfather type",
        noun: "M"
      }, {
        name: "a 4th wall breaking action hero",
        noun: "M"
      }, {
        name: "a cop who's two days from retirement",
        noun: "M"
      }, {
        name: "a devoutly religious teenager",
        noun: "M"
      }, {
        name: "Abraham Lincoln",
        noun: "M"
      }, {
        name: "Adam Sandler",
        noun: "M"
      }, {
        name: "Neil Patrick Harris",
        noun: "M"
      }, {
        name: "Alec Baldwin",
        noun: "M"
      }, {
        name: "Andy Serkis in a Mo-cap suit",
        noun: "M"
      }, {
        name: "Ben Affleck",
        noun: "M"
      }, {
        name: "Benedict Cumberbatch",
        noun: "M"
      }, {
        name: "Bill Murray",
        noun: "M"
      }, {
        name: "Channing Tatum and Jonah Hill",
        noun: "P"
      }, {
        // name: "Chewbacca", noun: "M"},{
        // name: "Christopher Lambert", noun: "M"},{
        name: "Carrie Fisher",
        noun: "F"
      }, {
        name: "Christopher Walken",
        noun: "M"
      }, {
        name: "Danny Trejo",
        noun: "M"
      }, {
        name: "David Hasselhof",
        noun: "M"
      }, {
        name: "Dwayne 'The Rock' Johnson",
        noun: "M"
      }, {
        name: "Eddie Murphy playing 10 different characters",
        noun: "P"
      }, {
        name: "Ellen Page",
        noun: "F"
      }, {
        name: "everyone from the Expandables",
        noun: "P"
      }, {
        name: "the guys from The Flight of the Conchords",
        noun: "P"
      }, {
        name: "Gary Busey",
        noun: "M"
      }, {
        name: "GROOT!",
        noun: "M"
      }, {
        name: "Henry Rollins",
        noun: "M"
      }, {
        name: "Ice Cube",
        noun: "M"
      }, {
        name: "Kevin Spacey",
        noun: "M"
      }, {
        name: "Neil deGrasse Tyson",
        noun: "M"
      }, {
        // name: "Jan-Michael Vincent", noun: "M"},{
        name: "Jessica Biel",
        noun: "F"
      }, {
        name: "Jennifer Lawrence",
        noun: "F"
      }, {
        name: "Johnny Knoxville",
        noun: "M"
      }, {
        name: "John Malkovich",
        noun: "M"
      }, {
        name: "Jon Snow",
        noun: "M"
      }, {
        name: "Kate Beckinsale",
        noun: "F"
      }, {
        name: "The Avengers",
        noun: "P"
      }, {
        name: "Kevin James",
        noun: "M"
      }, {
        name: "Kung Fury",
        noun: "M"
      }, {
        name: "Macaulay Culkin",
        noun: "M"
      }, {
        name: "Madonna",
        noun: "F"
      }, {
        name: "Mark Hamill",
        noun: "M"
      }, {
        // name: "Marie Curie", noun: "F"},{
        name: "Megan Fox",
        noun: "F"
      }, {
        name: "Mel Gibson",
        noun: "M"
      }, {
        name: "Michael Caine",
        noun: "M"
      }, {
        name: "Michael J. Fox",
        noun: "M"
      }, {
        name: "Optimus Prime",
        noun: "M"
      }, {
        name: "Sean Connery",
        noun: "M"
      }, {
        name: "Shia LaBeouf",
        noun: "M"
      }, {
        name: "Tom Hardy",
        noun: "M"
      }, {
        name: "you, the audience",
        noun: "Y"
      }, {
        name: "Whoopi Goldberg",
        noun: "F"
      }, {
        name: "an underdog figure",
        noun: "M"
      }, {
        name: "Four fun-loving friends",
        noun: "P"
      }, {
        name: "a kung-fu master",
        noun: "M"
      }, {
        name: "a kung-fu mistress",
        noun: "F"
      }, {
        name: "a tough London cop",
        noun: "M"
      }, {
        name: "a hopeless romantic",
        noun: "M"
      }, {
        name: "a sexist pig",
        noun: "M"
      }, {
        name: "a young average suburban couple",
        noun: "P"
      }, {
        name: "an 80's Wall Street yuppie",
        noun: "M"
      }, {
        name: "a middle-aged slacker",
        noun: "M"
      }, {
        name: "three fed-up office slaves",
        noun: "P"
      }, {
        name: "a Youtube celebrity",
        noun: "M"
      }, {
        name: "a small town blue collar sheriff",
        noun: "M"
      }, {
        name: "a team of scientists",
        noun: "P"
      }, {
        name: "a gay couple",
        noun: "P"
      }, {
        name: "an interracial couple",
        noun: "P"
      }, {
        name: "a single mom",
        noun: "F"
      }
      
      // {name: "The Count", noun: "M" }
    ];

    let randoActor = getRandomFromArray(actor);
    // who...
    const situation = [
      `is diagnosed with terminal lung cancer`,
      `suffer${(randoActor.noun === "P" ? "" : "s")} a nasty break-up`,
      `see${(randoActor.noun === "P" ? "" : "s")} ${getActorGenderText(randoActor.noun).his} parents get murdered`,
      `get${(randoActor.noun === "P" ? "" : "s")} beat up for ${getActorGenderText(randoActor.noun).his} lunch money`,
      // "gets beat up for " + getActorGenderText(randoActor.noun).his + " lunch money",
      `wake${(randoActor.noun === "P" ? "" : "s")} up with no memory of what has happened in the last 24 hours`,
      // "wins the Golden Ticket to that consumer product " + getActorGenderText(randoActor.noun).they + " everybody loves",
      `win${(randoActor.noun === "P" ? "" : "s")} the Golden Ticket to get a tour of the headquarters of that consumer product everybody loves`,
      `become${(randoActor.noun === "P" ? "" : "s")} pregnant`,
      `${getActorGenderText(randoActor.noun).has} to go back to school`,
      // "goes back to school",
      `encounter${(randoActor.noun === "P" ? "" : "s")} ${getActorGenderText(randoActor.noun).his} evil twin`,
      "always complains that nothing ever happens",
      `${getActorGenderText(randoActor.noun).has} to take the trip to Mars`,
      `get${(randoActor.noun === "P" ? "" : "s")} a job`,
      // "has a nightmare",
      `is a petty thief, but ${getActorGenderText(randoActor.noun).they} gets involved in a major crime`,
      `know${(randoActor.noun === "P" ? "" : "s")} too much`,
      `relive${(randoActor.noun === "P" ? "" : "s")} the same day, over and over again`,
      `hide${(randoActor.noun === "P" ? "" : "s")} a watch for five long years`,
      "busts chops",
      `travel${(randoActor.noun === "P" ? "" : "s")} through time`,
      `get${(randoActor.noun === "P" ? "" : "s")} bitten by an irradiated toad`,
      `get${(randoActor.noun === "P" ? "" : "s")} caught in a series of unfortunate events`,
      `want${(randoActor.noun === "P" ? "" : "s")} to becomes ${(randoActor.noun === "P" ? "" : "a ")}ballroom dancer${(randoActor.noun === "P" ? "s" : "")}`,
      `put${(randoActor.noun === "P" ? "" : "s")} on Santa Claus' outfit, and therefor agree${(randoActor.noun === "P" ? "" : "s")} to the responsibilities of that position`, // only run on christmas??
      `play${(randoActor.noun === "P" ? "" : "s")} a dangerous Game of Thrones`,
      `investigate${(randoActor.noun === "P" ? "" : "s")} a psych ward`,
      `return${(randoActor.noun === "P" ? "" : "s")} from the dead`,
      `take${(randoActor.noun === "P" ? "" : "s")} a world-record breaking dump`,
      `move${(randoActor.noun === "P" ? "" : "s")} in next door`,
      `${getActorGenderText(randoActor.noun).has} to babysit three toddlers`,
      `make${(randoActor.noun === "P" ? "" : "s")} a porno`,
      `sign${(randoActor.noun === "P" ? "" : "s")} up for cross fit`,
      `spend${(randoActor.noun === "P" ? "" : "s")} a romantic weekend in a cabin in the woods`,
      `need${(randoActor.noun === "P" ? "" : "s")} to figure out a way to communicate with space aliens, while struggling with ${getActorGenderText(randoActor.noun).his} past`,
      `find${(randoActor.noun === "P" ? "" : "s")} out that ${getActorGenderText(randoActor.noun).his} neighbours hide a terrible secret`,
      `get${(randoActor.noun === "P" ? "" : "s")} challenged to trial by combat`,
      `just want${(randoActor.noun === "P" ? "" : "s")} some goddamn piece and quiet`,
      `${getActorGenderText(randoActor.noun).has} to spend the night in an abandoned hotel`
    ];
    // and has to...
    const actions = [
      "use Tinder",
      `get ${getActorGenderText(randoActor.noun).his} groove back`,
      "infiltrate a maximum security prison",
      "gather a group of seven magnificent warriors",
      "fight the undead",
      // "get the band back together",
      `switch places with ${getActorGenderText(randoActor.noun).his} best friend${(randoActor.noun === "P" ? "s" : "")}`,
      `${(randoActor.noun === "P" ? "all " : "")}become a vampire`,
      "go to jail",
      "survive long enough",
      "enter The Matrix",
      "catch all 802 Pokémon",
      // "do a Banksy",
      "start a podcast",
      "make a documentary",
      "start a food truck",
      // "throw a ring in a volcano",
      "win a high-stakes poker tournament",
      "travel to Mordor",
      // "give dem people air",
      "plan a heist",
      "write the perfect BuzzFeed clickbait title",
      "prevent a motorized vehicle from going below 60mph",
      "take a day off",
      "go deep undercover",
      "sings a heart wrenching power ballad",
      "go through a long, elaborate training montage",
      "make an unexpected friend",
      "use hollistic medicine",
      `${(randoActor.noun === "P" ? "all " : "")}become a superhero`,
      "learn karate",
      "have brain surgery",
      // "comes to life",
      `${(randoActor.noun === "P" ? "all " : "")}become a pre-cog`,
      `${(randoActor.noun === "P" ? "all " : "")}become the highest bidder on eBay`,
      // "post a letter",
      "deliver a message to Obi-Wan",
      "rock out",
      "prevent another Brexit",
      `find ${getActorGenderText(randoActor.noun).his} spirit animal`
    ];
    const mcguffin = [
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
      `a carton of <span title="For you non-Australians, it's a beer called Victoria Bitter">VB</span>`,
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
    const badguy = [
      "Kim Jong Un",
      "North Korea",
      "aliens",
      "a father figure",
      "John Travolta in drag",
      "a young Betty White",
      "Seal",
      "a shady man sitting in a chair",
      "a reincarnated Elvis Presley",
      "an army of the undead",
      // "going back in time to kill himself",
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
      "CGI Grand Moff Tarkin",
      // "my ex",
      // "his ex",
      "The Joker",
      "Kanye West",
      "Kylo Ren",
      "The Kardashians",
      "overly Stereotyped Terrorists",
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
      "an overzealous religious figure",
      "the Mafia",
      "a serial killer",
      "the Yakuza",
      "a white guy dressed like an Egyptian",
      "your mom"
    ];
    const adjectives = [
      "an animated",
      "a really angry",
      "a happy version of"
    ];
    let adjective = rollDice(10) ? "an animated version of" : ""; // play around with this one a bit more
    let action = rollDice(50) ? getRandomFromArray(actions) : "has";

    const guffinActions = [
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
      },*/
      {
        verb1: "save",
        verb2: "from"
      }, {
        verb1: "deliver",
        verb2: "to"
      }, {
        verb1: "steal",
        verb2: "from"
      }, {
        verb1: "defend",
        verb2: "from"
      }, {
        verb1: "retrieve",
        verb2: "from"
      }
    ];

    let guffinAction = rollDice(50) ? getRandomFromArray(guffinActions) : { verb1: "obtain", verb2: "from" };

    // let badguymaybe = rollDice(10) ? "falling in the hands of " : ""; // play around with this one a bit more
    let lifetime = rollDice(1) ? "Lifetime movie" : "movie";
    let startText = rollDice(1) ? "It's a movie fully told in non sequitur, starring" : `It's a ${lifetime} starring`;
    let newTitle = "New Title";
    let newText = `${startText} ${adjective} ${randoActor.name}, who ${getRandomFromArray(situation)}. And ${getActorGenderText(randoActor.noun).they} ${getActorGenderText(randoActor.noun).has} to ${getRandomFromArray(actions)} to ${guffinAction.verb1} ${getRandomFromArray(mcguffin)} ${guffinAction.verb2} ${getRandomFromArray(badguy)}.`;
    return { title: newTitle, plot: newText, actor: randoActor };
  }
  const generateQuickie = () => {
    const genre = [
      // "version where everyone are anthropomorphic animals",
      "Muppets remake",
      "oldschool anime remake",
      "arthouse remake",
      "comedy version",
      "animated remake",
      "Disney animation",
      "European remake",
      "extremely violent remake",
      "family-friendly reboot",
      "gender bender",
      "German scheisse movie",
      "gritty reboot",
      "high school remake",
      "horror remake",
      "musical remake",
      "kung-fu remake",
      "film-noir remake",
      "snuff piece",
      "period piece remake",
      "porn",
      "quirky indie remake",
      "space remake",
      "Lifetime Movie remake",
      "sexy version",
      "vampire remake",
      "western remake",
      "zombie remake"
    ];

    const oldmovie = [
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

    let newTitle = "New Title";
    let newText = `Lets just do a ${getRandomFromArray(genre)} of ${getRandomFromArray(oldmovie)} and call it a wrap.`;
    return { title: newTitle, plot: newText };
  }
  const generatePlotTwist = () => {
    const actor = [
      "Michael Caine"
    ];

    const profession = [
      "Web Developer",
      "Art Director"
    ];

    const adjective = [
      "stunning"
    ];

    const shyamalize = [
      "it turns out he was dead all along",
      "he was actually Tyler Durden",
      "he was on Earth all along"
    ];

    let newTitle = "New Title";
    let newText = `${getRandomFromArray(actor)} is a ${getRandomFromArray(profession)}, but in a ${getRandomFromArray(adjective)} plot twist, ${getRandomFromArray(shyamalize)}.`;
    return { title: newTitle, plot: newText, actor: actor };
  }
  const addThirdActProblem = (actor) => {

    const problem = [
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
    const solution = [
      "then every character has their mind wiped and it’s like none of this ever happened",
      "then we realise the beginning of the movie was the ending and the ending is the beginning",

      "then again, we're not following a Joseph Campbell storycircle anyway",
      "we set up for a sequel by having a vague ending",
      "it won’t matter if it flops because it’ll do well in China",
      "it ends with a heavy metal cover of that song from Titanic",
      "Dan Harmon comes in and does a sweet rap battle, and all is good",
      "we got the Mythbusters to help us explain that bit",
      "then we zoom out and see everything took place in a snow globe",
      `it was in ${getActorGenderText(actor).his} head all along`,
      "at least we still have Donald Glover, so it's all good (for at least another next season)",
      "we'll have tons of lens flares",
      "at least we've retained merchandising rights"
    ];
    let newText = ` Though in the 3rd act, ${getRandomFromArray(problem)}. But ${getRandomFromArray(solution)}.`;
    return newText;
  }
  const addMusic = () => {
    const composer = [
      "Huey Lewis and the News",
      "Kenny Loggins",
      "smooth jazz covers of Metallica",
      // "a mellow cover of Eye of the Tiger",
      "Trap, or whatever the kids are listening to these days",
      "Morgan Freeman's voice",
      "The Backstreet Boys",
      "Dethklok",
      "Chiptune",
      "Daft Punk",
      "Stephen Hawking",
      "Elton John",
      "The Lonely Island",
      "Danny Elfman",
      "Nickelback",
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
    return ` With music done by ${getRandomFromArray(composer)}.`;
  }
  const addCameo = () => {
    const celebrity = [
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
    return ` And ${getRandomFromArray(celebrity)} has a cameo.`;
  }
  const isMetaphor = () => {
    const metaphores = [
      "a metaphor for the war in the Middle East",
      "a metaphor for the American presidential elections",
      "a metaphor for puberty",
      // "a metaphor for the holocaust",
      // "a metaphor for divorce and child custody conflict",
      "a metaphor for racism",
      "a metaphor for NSA surveillance",
      "a metaphor for government control and censorship",
      // "1984",
      "a social commentary on gay rights",
      "about drugs"
    ];
    return ` It's basically ${getRandomFromArray(metaphores)}.`;
  }
  const addTooSoon = () => {
    const deadCelebrity = [
      "Carl Sagan",
      "Christopher Lee",
      "David Bowie",
      "Leonard Nimoy",
      "Philip Seymour Hoffman",
      "Michael Jackson",
      "Amy Winehouse",
      "Kurt Cobain",
      "Lemmy Kilmister",
      "Robin Williams",
      "Carrie Fisher"
    ];

    return rollDice(100 / deadCelebrity.length) ? ` And we tell everyone that it's based on a true story` : ` And we tell everyone that it's actually ${getRandomFromArray(deadCelebrity)}'s final movie.`;
  }

  generateNewMovie();
  generateNewMovie();
  const shareCurrentMovie = () => {
    // console.log('share:',currentMovieText);
    FB.ui({
      method: 'feed',
      link: thisWebsiteURL,
      caption: currentMovieText,
      description: currentMovieText
    }, function(response) {});
    // ga('send', 'event', "Moviepitch", "click", "share to Facebook", currentMovieText);
  }

  document.querySelector('.btn-generate').onclick = (e) => {
    e.preventDefault();
    ga('send', 'event', "Moviepitch", "click", "generate new movie pitch", currentMovieText);
    generateNewMovie();
    audio.play();
  }
}());