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

const askedBox1 = document.getElementById("askedBox1");
const askedBox2 = document.getElementById("askedBox2");
const askedBox3 = document.getElementById("askedBox3");
const askedBox4 = document.getElementById("askedBox4");
const askedBox5 = document.getElementById("askedBox5");
const askedBoxP1 = document.getElementById("askedBoxP1");
const askedBoxP2 = document.getElementById("askedBoxP2");
const askedBoxP3 = document.getElementById("askedBoxP3");
const askedBoxP4 = document.getElementById("askedBoxP4");
const askedBoxP5 = document.getElementById("askedBoxP5");

askedBox1.addEventListener("click", () => {
  if (askedBoxP1.style.display === "none") {
    askedBox1.style.height = "180px";
    askedBoxP1.style.display = "block";
  } else {
    askedBoxP1.style.display = "none";
    askedBox1.style.height = "90px";
  }
});

askedBox2.addEventListener("click", () => {
  if (askedBoxP2.style.display === "none") {
    askedBox2.style.height = "180px";
    askedBoxP2.style.display = "block";
  } else {
    askedBoxP2.style.display = "none";
    askedBox2.style.height = "90px";
  }
});

askedBox3.addEventListener("click", () => {
  if (askedBoxP3.style.display === "none") {
    askedBox3.style.height = "180px";
    askedBoxP3.style.display = "block";
  } else {
    askedBoxP3.style.display = "none";
    askedBox3.style.height = "90px";
  }
});

askedBox4.addEventListener("click", () => {
  if (askedBoxP4.style.display === "none") {
    askedBox4.style.height = "180px";
    askedBoxP4.style.display = "block";
  } else {
    askedBoxP4.style.display = "none";
    askedBox4.style.height = "90px";
  }
});

askedBox5.addEventListener("click", () => {
  if (askedBoxP5.style.display === "none") {
    askedBox5.style.height = "180px";
    askedBoxP5.style.display = "block";
  } else {
    askedBoxP5.style.display = "none";
    askedBox5.style.height = "90px";
  }
});
