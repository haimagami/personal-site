var Rx = require('rxjs/Rx');
const anime = require('animejs/lib/anime.js');


let animation = anime({
  targets: '.marker',
  duration: 100,
  autoplay: false,
  opacity: [1, 0], // from 100 to 250
  translateX: [0 , -200], // from 100 to 250
  backgroundColor: 'green',

  easing: 'linear'
})




const marker = document.querySelector(".marker");
const pageMove$ = Rx.Observable.fromEvent(window, 'scroll');

// Apply values to element
pageMove$.subscribe(event => {
  const marker_bounding = marker.getBoundingClientRect();
  //const scrollPercent = marker_bounding.y;
  if (marker_bounding.top > 0 && marker_bounding.top < marker_bounding.height ) {
    // code block to be executed
    const scrollPercent = (marker_bounding.top / marker_bounding.height )
    console.log ( scrollPercent);
    animation.seek( animation.duration * scrollPercent);
  }



});
