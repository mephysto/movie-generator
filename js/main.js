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
  const url = 'https://moviegenerator.herokuapp.com/movie';
  const Http = new XMLHttpRequest();

  Http.onreadystatechange = (e) => {
    if(Http.readyState === 4 && Http.status === 200) {
      document.querySelector('.btn-generate').classList.remove('loading')
      nextMovieText.plot = JSON.parse(Http.responseText).movie
      generateNewMovie();
    }
  }

  const getNewMovie = () => {
    Http.open("GET", url);
    Http.send();
  }

  let currentMovieText = "",
    nextMovieText = {
      title: "",
      plot: ""
    };
  // const audio = new Audio('../audio/paper.mp3');
  const audio = new Audio(thisWebsiteURL + 'audio/paper.mp3');
  // The main generizer
  const generateNewMovie = () => {
    console.log('generateNewMovie')
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
      /* 
      shareContainer.classList.add('share-container');
      const shareButton = document.createElement('button');
      shareButton.type = "button";
      shareButton.classList.add('btn-default', 'btn-sharezvous');
      shareButton.innerHTML = `Share this film <i class="fa fa-facebook-official"></i>`
      shareContainer.appendChild(shareButton);
      shareButton.addEventListener('click', (e) => {
        e.preventDefault();
        shareCurrentMovie();
      }) */
      return newBlockQuote;
    }
    const tempEl = document.createElement('p');
    tempEl.innerHTML = nextMovieText.plot;
    currentMovieText = tempEl.innerText; // some of my lines have HTML in there
    if (document.querySelector('.new')) {
      var x = document.querySelector('.new');
      x.removeAttribute('class');
      x.style.transform = randomEndStyle();
    }
    document.querySelector('.movie-text').appendChild(createHTML(nextMovieText.plot));
    var count = document.querySelectorAll('.movie-text > blockquote').length;
    document.querySelector('.movie-text').style.transform = `transform: translateZ(-${count} px)`;
  }
  getNewMovie();
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
    e.target.classList.add('loading')
    e.preventDefault();
    ga('send', 'event', "Moviepitch", "click", "generate new movie pitch", currentMovieText);
    // generateNewMovie();
    getNewMovie();
    audio.play();
  }
}());