// Toggle password visibility on login/register pages
function togglePasswordVisibility(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);
  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

// Toggle balance visibility on dashboard/account pages
function toggleBalance(id, iconId, realValue) {
  const field = document.getElementById(id);
  const icon = document.getElementById(iconId);
  if (field.textContent.includes("•")) {
    field.textContent = realValue;
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    field.textContent = "•".repeat(realValue.length);
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

// Validate login
function validateLogin(event) {
  event.preventDefault();
  const userId = document.getElementById("user-id").value.trim();
  const password = document.getElementById("password").value.trim();
  if (userId === "Sukhdevmondal147258" && password === "JW-5858") {
    localStorage.setItem("loginTime", new Date().toLocaleString());
    window.location.href = "home.html";
  } else {
    alert("Invalid credentials. Try again.");
  }
}

// Display login time on dashboard
function showLoginTime() {
  const time = localStorage.getItem("loginTime");
  if (time && document.getElementById("login-time")) {
    document.getElementById("login-time").textContent = time;
  }
}
