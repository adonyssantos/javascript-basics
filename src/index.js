import MediaPlayer from "./lib/MediaPlayer";

const videoPlayer = document.querySelector("#player");
const playButton = document.querySelector("#playButton");
const pauseButton = document.querySelector("#pauseButton");

const player = new MediaPlayer({ element: videoPlayer });
playButton.onclick = () => player.play();
pauseButton.onclick = () => player.pause();
