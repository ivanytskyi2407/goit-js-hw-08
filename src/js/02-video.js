import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const currentTime = function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time',seconds);
};
player.on('timeupdate', throttle(currentTime, 1000));
const getCurrentTime = localStorage.getItem('videoplayer-current-time');
player.on('play',player.setCurrentTime(getCurrentTime));