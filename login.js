const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginEmailError = document.getElementById("loginEmailError");
const loginPasswordError = document.getElementById("loginPasswordError");
const loginStatus = document.getElementById("loginStatus");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    loginEmailError.textContent = "";
    loginPasswordError.textContent = "";
    loginStatus.textContent = "";

    const email = loginEmail.value.trim();
    const password = loginPassword.value;

    if (email === "") {
      loginEmailError.textContent = "Email is required";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      loginEmailError.textContent = "Enter a valid email address";
      return;
    }

    if (password === "") {
      loginPasswordError.textContent = "Password is required";
      return;
    }

    const savedEmail = localStorage.getItem("registeredEmail");
    const savedPassword = localStorage.getItem("registeredPassword");
    const savedName = localStorage.getItem("registeredName");

    if (!savedEmail || !savedPassword) {
      loginStatus.textContent = "No account found. Please sign up first.";
      return;
    }

    if (email === savedEmail && password === savedPassword) {
      loginStatus.textContent = savedName
        ? `Login successful, ${savedName}!`
        : "Login successful!";

      loginForm.reset();

      setTimeout(function () {
        window.location.href = "index.html";
      }, 1000);
    } else {
      loginStatus.textContent = "Email or password is incorrect";
    }
  });
}
