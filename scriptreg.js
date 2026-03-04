const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmError").textContent = "";
    document.getElementById("success").textContent = "";

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;

    const nameRegex = /^.{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^.{6,}$/;

    if (!nameRegex.test(name)) {
      document.getElementById("nameError").textContent =
        "Name must be at least 2 characters";
      return;
    }

    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent =
        "Enter a valid email address";
      return;
    }

    if (!passwordRegex.test(password)) {
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
    registerForm.reset();
  });
}
