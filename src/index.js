import MediaPlayer from "./lib/MediaPlayer.js";
import AutoPlay from "./lib/plugins/AutoPlay.js";

const videoPlayer = document.querySelector("#player");
const playButton = document.querySelector("#playButton");
const pauseButton = document.querySelector("#pauseButton");

const player = new MediaPlayer({
  element: videoPlayer,
  plugins: [new AutoPlay()],
});
playButton.onclick = () => player.play();
pauseButton.onclick = () => player.pause();
