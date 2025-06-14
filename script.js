// Dummy credentials
const validUser = "Sukhdevmondal147258";
const validPass = "JW-5858";

// Login Handler
function login(event) {
  event.preventDefault();
  const user = document.getElementById("userid").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (!user || !pass) {
    alert("Please enter both User ID and Password.");
    return;
  }

  if (user === validUser && pass === validPass) {
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("loginTime", new Date().toLocaleString());
    window.location.href = "home.html";
  } else {
    alert("Login failed. Invalid credentials.");
  }
}

// Enforce login for protected pages
function enforceLogin() {
  if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

// Logout handler
function logout() {
  sessionStorage.clear();
  window.location.href = "logout.html";
}

// Toggle password visibility
function togglePassword() {
  const pwd = document.getElementById("password");
  const icon = document.getElementById("toggleEye");
  if (pwd.type === "password") {
    pwd.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    pwd.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

// Toggle account number
function toggleAccount() {
  const acc = document.getElementById("accountNo");
  const icon = document.getElementById("accountEye");
  acc.classList.toggle("secure-data");
  icon.classList.toggle("fa-eye");
  icon.classList.toggle("fa-eye-slash");
}

// Toggle balance
function toggleBalance() {
  const bal = document.getElementById("balanceAmount");
  const icon = document.getElementById("balanceEye");
  bal.classList.toggle("secure-data");
  icon.classList.toggle("fa-eye");
  icon.classList.toggle("fa-eye-slash");
}

// Auto-set recent login time
document.addEventListener("DOMContentLoaded", function () {
  // Setup login form
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", login);
  }

  // Set recent login
  const span = document.getElementById("recentLoginTime");
  const loginTime = sessionStorage.getItem("loginTime");
  if (span && loginTime) {
    span.textContent = loginTime;
  }

  // Default: hide balance & account
  const bal = document.getElementById("balanceAmount");
  const acc = document.getElementById("accountNo");
  if (bal && !bal.classList.contains("secure-data")) bal.classList.add("secure-data");
  if (acc && !acc.classList.contains("secure-data")) acc.classList.add("secure-data");
});



