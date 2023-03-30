import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);


iframePlayer.on('play', () => {
    console.log('played it!');
    
})
iframePlayer.on('pause', () => {
    console.log('paused it!');
})
iframePlayer.getCurrentTime().then(function (seconds){
    console.log(seconds);
})


const currentTime = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(currentTime);
iframePlayer.setCurrentTime(parsedTime);


iframePlayer.on('timeupdate', _throttle(function(e) {
    console.log("time1", e);
    localStorage.setItem('videoplayer-current-time', e.seconds)
  }, 1000 ))

    

