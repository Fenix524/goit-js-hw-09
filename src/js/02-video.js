import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime)).then(function(seconds) {
    console.log(`Відео почалося з: ${seconds}с`);
  }).catch(function(error) {
    console.error(error);
  });
}

player.on('timeupdate', throttle(onPlayerTimeupdate, 1000));

function onPlayerTimeupdate(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}
