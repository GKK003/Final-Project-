const byId = (id) => document.getElementById(id);

const boxDiv1 = byId("boxDiv1");
const boxDiv2 = byId("boxDiv2");
const boxDiv3 = byId("boxDiv3");

const firstColumnP = byId("firstColumnP");
const secondColumnP = byId("secondColumnP");
const thirdColumnP = byId("thirdColumnP");
const whiteImage = byId("whiteImage");
const firstArrow = byId("firstArrow");

const getStarted = byId("getStarted");
if (getStarted) {
  getStarted.addEventListener("click", () => {
    document.body.style.overflow = "auto";
  });
}

if (
  boxDiv1 &&
  firstColumnP &&
  secondColumnP &&
  thirdColumnP &&
  whiteImage &&
  firstArrow
) {
  boxDiv1.addEventListener("click", () => {
    const isOpen = firstColumnP.style.display !== "none";

    if (!isOpen) {
      whiteImage.src = "/images/pexels-rdne-7563653.jpg";
      firstArrow.classList.remove("rotated");
      firstColumnP.style.display = "block";
      secondColumnP.style.display = "none";
      thirdColumnP.style.display = "none";
      return;
    }

    firstColumnP.style.display = "none";
    whiteImage.src = "/images/BLANK.jpg";
    firstArrow.classList.add("rotated");
  });
}
if (boxDiv2 && secondColumnP && firstColumnP && thirdColumnP && whiteImage) {
  boxDiv2.addEventListener("click", () => {
    const isOpen = secondColumnP.style.display !== "none";

    if (!isOpen) {
      whiteImage.src = "/images/pexels-adriana-beckova-1584864721-33008583.jpg";
      secondColumnP.style.display = "block";
      firstColumnP.style.display = "none";
      thirdColumnP.style.display = "none";
      return;
    }
    secondColumnP.style.display = "none";
    whiteImage.src = "/images/BLANK.jpg";
  });
}

if (boxDiv3 && thirdColumnP && secondColumnP && firstColumnP && whiteImage) {
  boxDiv3.addEventListener("click", () => {
    const isOpen = thirdColumnP.style.display !== "none";

    if (!isOpen) {
      whiteImage.src = "/images/pexels-mart-production-7709296.jpg";
      thirdColumnP.style.display = "block";
      secondColumnP.style.display = "none";
      firstColumnP.style.display = "none";
      return;
    }
    thirdColumnP.style.display = "none";
    whiteImage.src = "/images/BLANK.jpg";
  });
}

const setupFaqToggle = (boxId, textId) => {
  const box = byId(boxId);
  const text = byId(textId);
  if (!box || !text) {
    return;
  }
  box.addEventListener("click", () => {
    const isOpen = text.style.display !== "none";
    text.style.display = isOpen ? "none" : "block";
    box.style.height = isOpen ? "90px" : "180px";
  });
};

setupFaqToggle("askedBox1", "askedBoxP1");
setupFaqToggle("askedBox2", "askedBoxP2");
setupFaqToggle("askedBox3", "askedBoxP3");
setupFaqToggle("askedBox4", "askedBoxP4");
setupFaqToggle("askedBox5", "askedBoxP5");

const companyLink = byId("companyLink");
const itLink = byId("itLink");
const featuresLink = byId("featuresLink");
const homeFooter = byId("homeFooter");

if (companyLink) {
  companyLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollBy({ top: 600, behavior: "smooth" });
  });
}

if (itLink) {
  itLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollBy({ top: 1200, behavior: "smooth" });
  });
}

if (featuresLink) {
  featuresLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollBy({ top: 2250, behavior: "smooth" });
  });
}

const contactLink = byId("contactLink");
const callPopup = byId("callPopup");
const closePopup = byId("closePopup");

if (contactLink && callPopup) {
  contactLink.addEventListener("click", (event) => {
    event.preventDefault();
    callPopup.style.display = "flex";
  });
}

if (closePopup && callPopup) {
  closePopup.addEventListener("click", () => {
    callPopup.style.display = "none";
  });
}

if (homeFooter) {
  homeFooter.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const secondGetStarted = byId("secondGetStarted");
if (secondGetStarted && callPopup) {
  secondGetStarted.addEventListener("click", () => {
    callPopup.style.display = "flex";
  });
}

const footerP = byId("footerP");
if (footerP && callPopup) {
  footerP.addEventListener("click", () => {
    callPopup.style.display = "flex";
  });
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^.{6,}$/;

const setError = (id, message) => {
  const target = byId(id);
  if (target) {
    target.textContent = message;
  }
};

const clearErrors = (ids) => {
  ids.forEach((id) => setError(id, ""));
};

const openPopup = (popup) => {
  if (popup) {
    popup.style.display = "flex";
    popup.setAttribute("aria-hidden", "false");
  }
};

const closePopupModal = (popup, formId, statusId, errorIds) => {
  if (!popup) {
    return;
  }
  popup.style.display = "none";
  popup.setAttribute("aria-hidden", "true");
  const form = byId(formId);
  if (form) {
    form.reset();
  }

  setError(statusId, "");
  clearErrors(errorIds);
};

const openLoginPopup = byId("openLoginPopup");
const openRegisterPopup = byId("openRegisterPopup");
const loginPopup = byId("loginPopup");
const registerPopup = byId("registerPopup");

if (openLoginPopup && loginPopup) {
  openLoginPopup.addEventListener("click", () => openPopup(loginPopup));
}

if (openRegisterPopup && registerPopup) {
  openRegisterPopup.addEventListener("click", () => openPopup(registerPopup));
}

const closeLoginPopup = byId("closeLoginPopup");
if (closeLoginPopup) {
  closeLoginPopup.addEventListener("click", () => {
    closePopupModal(loginPopup, "popupLoginForm", "popupLoginStatus", [
      "popupLoginEmailError",
      "popupLoginPasswordError",
    ]);
  });
}

const closeRegisterPopup = byId("closeRegisterPopup");
if (closeRegisterPopup) {
  closeRegisterPopup.addEventListener("click", () => {
    closePopupModal(registerPopup, "popupRegisterForm", "popupRegisterStatus", [
      "popupNameError",
      "popupEmailError",
      "popupPasswordError",
      "popupConfirmError",
    ]);
  });
}

const popupRegisterForm = byId("popupRegisterForm");
if (popupRegisterForm) {
  popupRegisterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors([
      "popupNameError",
      "popupEmailError",
      "popupPasswordError",
      "popupConfirmError",
    ]);
    setError("popupRegisterStatus", "");

    const name = byId("popupFullName").value.trim();
    const email = byId("popupEmail").value.trim();
    const password = byId("popupPassword").value;
    const confirmPassword = byId("popupConfirmPassword").value;
    if (name.length < 2) {
      setError("popupNameError", "Name must be at least 2 characters");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("popupEmailError", "Enter a valid email address");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError("popupPasswordError", "Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("popupConfirmError", "Passwords do not match");
      return;
    }

    localStorage.setItem("registeredName", name);
    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("registeredPassword", password);

    setError("popupRegisterStatus", "Account created successfully.");
    popupRegisterForm.reset();

    setTimeout(() => {
      closePopupModal(
        registerPopup,
        "popupRegisterForm",
        "popupRegisterStatus",
        [
          "popupNameError",
          "popupEmailError",
          "popupPasswordError",
          "popupConfirmError",
        ],
      );
      openPopup(loginPopup);
    }, 900);
  });
}

const popupLoginForm = byId("popupLoginForm");
if (popupLoginForm) {
  popupLoginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    clearErrors(["popupLoginEmailError", "popupLoginPasswordError"]);
    setError("popupLoginStatus", "");

    const email = byId("popupLoginEmail").value.trim();
    const password = byId("popupLoginPassword").value;

    if (!email) {
      setError("popupLoginEmailError", "Email is required");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("popupLoginEmailError", "Enter a valid email address");
      return;
    }

    if (!password) {
      setError("popupLoginPasswordError", "Password is required");
      return;
    }

    const savedEmail = localStorage.getItem("registeredEmail");
    const savedPassword = localStorage.getItem("registeredPassword");
    const savedName = localStorage.getItem("registeredName");

    if (!savedEmail || !savedPassword) {
      setError("popupLoginStatus", "No account found. Please sign up first.");
      return;
    }

    if (email === savedEmail && password === savedPassword) {
      setError(
        "popupLoginStatus",
        `Login successful${savedName ? `, ${savedName}` : ""}!`,
      );
      popupLoginForm.reset();
      setTimeout(() => {
        closePopupModal(loginPopup, "popupLoginForm", "popupLoginStatus", [
          "popupLoginEmailError",
          "popupLoginPasswordError",
        ]);
      }, 1000);
      return;
    }

    setError("popupLoginStatus", "Email or password is incorrect");
  });
}
