const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmError").textContent = "";
  document.getElementById("success").textContent = "";

  let name = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirmPassword").value;

  let nameRegex = /^.{2,}$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegex = /^.{6,}$/;

  if (nameRegex.test(name) === false) {
    document.getElementById("nameError").textContent =
      "Name must be at least 2 characters";
    return;
  }

  if (emailRegex.test(email) === false) {
    document.getElementById("emailError").textContent =
      "Enter a valid email address";
    return;
  }

  if (passwordRegex.test(password) === false) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters";
    return;
  }

  if (confirm !== password) {
    document.getElementById("confirmError").textContent =
      "Passwords do not match";
    return;
  }

  localStorage.setItem("registeredName", name);
  localStorage.setItem("registeredEmail", email);
  localStorage.setItem("registeredPassword", password);

  document.getElementById("success").textContent = "Account created!";
  document.getElementById("registerForm").reset();
});
