loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  loginEmailError.textContent = "";
  loginPasswordError.textContent = "";
  loginStatus.textContent = "";

  let email = loginEmail.value;
  let password = loginPassword.value;

  if (email === "") {
    loginEmailError.textContent = "Email is required";
    return;
  }

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email) === false) {
    loginEmailError.textContent = "Enter a valid email address";
    return;
  }

  if (password === "") {
    loginPasswordError.textContent = "Password is required";
    return;
  }

  let savedEmail = localStorage.getItem("registeredEmail");
  let savedPassword = localStorage.getItem("registeredPassword");
  let savedName = localStorage.getItem("registeredName");

  if (!savedEmail || !savedPassword) {
    loginStatus.textContent = "No account found. Please sign up first.";
    return;
  }

  if (email === savedEmail && password === savedPassword) {
    if (savedName) {
      loginStatus.textContent = "Login successful, " + savedName + "!";
    } else {
      loginStatus.textContent = "Login successful!";
    }

    loginForm.reset();

    setTimeout(function () {
      window.location.href = "index.html";
    }, 1000);
  } else {
    loginStatus.textContent = "Email or password is incorrect";
  }
});
