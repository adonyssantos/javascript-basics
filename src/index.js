import MediaPlayer from './lib/MediaPlayer.js';
import AutoPlay from './lib/plugins/AutoPlay.js';

const videoPlayer = document.querySelector('#player');
const playButton = document.querySelector('#playButton');
const muteButton = document.querySelector('#muteButton');

const player = new MediaPlayer({
  element: videoPlayer,
  plugins: [new AutoPlay()],
});
playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();
