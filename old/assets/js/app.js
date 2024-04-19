var audio = document.querySelector(".music"),
  btnImg = document.querySelector(".play__btn"),
  audioName = document.querySelector(".audio__name"),
  audioImg = document.querySelector(".music__img"),
  progressBar = document.querySelector(".progress__border"),
  progressContainer = document.querySelector(".progress__bar");

var num = 0;

function play() {
  btnImg.src = "./assets/img/pouse.png";
  audio.play();
}

function pause() {
  btnImg.src = "./assets/img/play.png";
  audio.pause();
}

document.querySelector(".btn").addEventListener("click", () => {
  num++;
  if (num % 2 !== 0) {
    play();
  }

  if (num % 2 == 0) {
    pause();
  }
});

var songNum = 0;

const songs = ["play1", "play2"];

function changeMusic(song) {
  audioName.innerHTML = song;
  audio.src = `./assets/audio/${song}.mp3`;
  audioImg.src = `./assets/img/music${songNum + 1}.png`;
}

document.querySelector(".next__btn").addEventListener("click", () => {
  songNum++;

  if (songNum > songs.length - 1) {
    songNum = 0;
  }

  changeMusic(songs[songNum]);
  play();
});

document.querySelector(".prev__btn").addEventListener("click", () => {
  songNum--;

  if (songNum < 0) {
    songNum = songs.length - 1;
  }

  changeMusic(songs[songNum]);
  play();
});

function musicBar() {
  const duration = audio.duration;
  const currentTime = audio.currentTime;
  var width = (currentTime / duration) * 100;
  progressBar.style.width = `${width}%`;
}

audio.addEventListener("timeupdate", musicBar);

function changeTime(elem) {
  const width = this.clientWidth;
  const clickX = elem.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

progressContainer.addEventListener("click", changeTime);
