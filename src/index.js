const videoPlayer = document.querySelector("#player");
const playButton = document.querySelector("#playButton");
const pauseButton = document.querySelector("#pauseButton");

function MediaPlayer(config) {
  this.media = config.element;
}

MediaPlayer.prototype.play = function () {
  this.media.play();
};

MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

const player = new MediaPlayer({ element: videoPlayer });
playButton.onclick = () => player.play();
pauseButton.onclick = () => player.pause();
