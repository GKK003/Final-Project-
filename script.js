const playPauseBtn = document.getElementById("playPause");

document.getElementById("getStarted").addEventListener("click", () => {
  document.body.style.overflow = "auto";
});

const boxDiv1 = document.getElementById("boxDiv1");
const boxDiv2 = document.getElementById("boxDiv2");
const boxDiv3 = document.getElementById("boxDiv3");

const firstColumnP = document.getElementById("firstColumnP");
const secondColumnP = document.getElementById("secondColumnP");
const thirdColumnP = document.getElementById("thirdColumnP");
const whiteImage = document.getElementById("whiteImage");
const firstArrow = document.getElementById("firstArrow");
const secondArrow = document.getElementById("secondArrow");
const thirdArrow = document.getElementById("thirdArrow");

boxDiv1.addEventListener("click", () => {
  if (
    firstColumnP.style.display === "none" &&
    whiteImage.src.endsWith("BLANK.jpg") &&
    firstArrow.classList.contains("rotated")
  ) {
    whiteImage.src = "/images/pexels-rdne-7563653.jpg";
    firstArrow.classList.remove("rotated");
    firstColumnP.style.display = "block";
    secondColumnP.style.display = "none";
    thirdColumnP.style.display = "none";
  } else {
    firstColumnP.style.display = "none";
    whiteImage.src = "/images/BLANK.jpg";
    firstArrow.classList.add("rotated");
  }
});

boxDiv2.addEventListener("click", () => {
  if (
    (secondColumnP.style.display === "none",
    whiteImage.src.endsWith("BLANK.jpg"))
  ) {
    whiteImage.src = "/images/pexels-adriana-beckova-1584864721-33008583.jpg";

    secondColumnP.style.display = "block";
    firstColumnP.style.display = "none";
    thirdColumnP.style.display = "none";
  } else {
    secondColumnP.style.display = "none";
    whiteImage.src = "/images/BLANK.jpg";
  }
});

boxDiv3.addEventListener("click", () => {
  if (
    (thirdColumnP.style.display === "none",
    whiteImage.src.endsWith("BLANK.jpg"))
  ) {
    whiteImage.src = "/images/pexels-mart-production-7709296.jpg";
    thirdColumnP.style.display = "block";
    secondColumnP.style.display = "none";
    firstColumnP.style.display = "none";
  } else {
    thirdColumnP.style.display = "none";
    whiteImage.src = "/images/BLANK.jpg";
  }
});
