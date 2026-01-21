const video = document.querySelector(".background_video");
const playPauseBtn = document.getElementById("playPause");

playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = "⏸";
  } else {
    video.pause();
    playPauseBtn.textContent = "▶";
  }
});

document.getElementById("getStarted").addEventListener("click", () => {
  document.body.style.overflow = "auto";
});
