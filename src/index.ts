import MediaPlayer from './lib/MediaPlayer';
import AutoPlay from './lib/plugins/AutoPlay';
import AutoPause from './lib/plugins/AutoPause';

const videoPlayer = document.querySelector('#player');
const playButton: HTMLElement = document.querySelector('#playButton');
const muteButton: HTMLElement = document.querySelector('#muteButton');

const player = new MediaPlayer({
  element: videoPlayer,
  plugins: [new AutoPlay(), new AutoPause()],
});
playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .catch(error => console.error(error.message));
}
