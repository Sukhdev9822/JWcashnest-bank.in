// Final script.js for JWcashnest BANK

// Dummy credentials
const validUser = "Sukhdevmondal147258";
const validPass = "JW-5858";

function login(event) {
  event.preventDefault();
  const user = document.getElementById("userid").value;
  const pass = document.getElementById("password").value;

  if (!user || !pass) {
    alert("Please enter both User ID and Password.");
    return;
  }

  if (user === validUser && pass === validPass) {
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("loginTime", new Date().toLocaleString());
    window.location.href = "home.html";
  } else {
    alert("Invalid credentials.");
  }
}

function enforceLogin() {
  if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  sessionStorage.clear();
  window.location.href = "logout.html";
}

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

function toggleBalance() {
  const bal = document.getElementById("balanceAmount");
  const icon = document.getElementById("balanceEye");
  if (bal.classList.contains("secure-data")) {
    bal.classList.remove("secure-data");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    bal.classList.add("secure-data");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
}

function toggleSecureInfo(btn) {
  const spans = document.querySelectorAll(".secure-data");
  spans.forEach(span => span.classList.toggle("show"));
  const icon = btn.querySelector("i");
  if (icon.classList.contains("fa-eye-slash")) {
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
    btn.innerHTML = '<i class="fa fa-eye"></i> Hide';
  } else {
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
    btn.innerHTML = '<i class="fa fa-eye-slash"></i> Show';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", login);
  }

  const timeSpan = document.getElementById("recentLoginTime");
  if (timeSpan && sessionStorage.getItem("loginTime")) {
    timeSpan.textContent = sessionStorage.getItem("loginTime");
  }

  const bal = document.getElementById("balanceAmount");
  if (bal && !bal.classList.contains("secure-data")) {
    bal.classList.add("secure-data");
  }
});
// Final script.js for JWcashnest BANK

// Dummy credentials
const validUser = "Sukhdevmondal147258";
const validPass = "JW-5858";

function login(event) {
  event.preventDefault();
  const user = document.getElementById("userid").value;
  const pass = document.getElementById("password").value;

  if (!user || !pass) {
    alert("Please enter both User ID and Password.");
    return;
  }

  if (user === validUser && pass === validPass) {
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("loginTime", new Date().toLocaleString());
    window.location.href = "home.html";
  } else {
    alert("Invalid credentials.");
  }
}

function enforceLogin() {
  if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  sessionStorage.clear();
  window.location.href = "logout.html";
}

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

function toggleBalance() {
  const bal = document.getElementById("balanceAmount");
  const icon = document.getElementById("balanceEye");
  if (bal.classList.contains("secure-data")) {
    bal.classList.remove("secure-data");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    bal.classList.add("secure-data");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
}

function toggleSecureInfo(btn) {
  const spans = document.querySelectorAll(".secure-data");
  spans.forEach(span => span.classList.toggle("show"));
  const icon = btn.querySelector("i");
  if (icon.classList.contains("fa-eye-slash")) {
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
    btn.innerHTML = '<i class="fa fa-eye"></i> Hide';
  } else {
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
    btn.innerHTML = '<i class="fa fa-eye-slash"></i> Show';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", login);
  }

  const timeSpan = document.getElementById("recentLoginTime");
  if (timeSpan && sessionStorage.getItem("loginTime")) {
    timeSpan.textContent = sessionStorage.getItem("loginTime");
  }

  const bal = document.getElementById("balanceAmount");
  if (bal && !bal.classList.contains("secure-data")) {
    bal.classList.add("secure-data");
  }
});
// Final script.js for JWcashnest BANK

// Dummy credentials
const validUser = "Sukhdevmondal147258";
const validPass = "JW-5858";

function login(event) {
  event.preventDefault();
  const user = document.getElementById("userid").value;
  const pass = document.getElementById("password").value;

  if (!user || !pass) {
    alert("Please enter both User ID and Password.");
    return;
  }

  if (user === validUser && pass === validPass) {
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("loginTime", new Date().toLocaleString());
    window.location.href = "home.html";
  } else {
    alert("Invalid credentials.");
  }
}

function enforceLogin() {
  if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  sessionStorage.clear();
  window.location.href = "logout.html";
}

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

function toggleBalance() {
  const bal = document.getElementById("balanceAmount");
  const icon = document.getElementById("balanceEye");
  if (bal.classList.contains("secure-data")) {
    bal.classList.remove("secure-data");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    bal.classList.add("secure-data");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
}

function toggleSecureInfo(btn) {
  const spans = document.querySelectorAll(".secure-data");
  spans.forEach(span => span.classList.toggle("show"));
  const icon = btn.querySelector("i");
  if (icon.classList.contains("fa-eye-slash")) {
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
    btn.innerHTML = '<i class="fa fa-eye"></i> Hide';
  } else {
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
    btn.innerHTML = '<i class="fa fa-eye-slash"></i> Show';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", login);
  }

  const timeSpan = document.getElementById("recentLoginTime");
  if (timeSpan && sessionStorage.getItem("loginTime")) {
    timeSpan.textContent = sessionStorage.getItem("loginTime");
  }

  const bal = document.getElementById("balanceAmount");
  if (bal && !bal.classList.contains("secure-data")) {
    bal.classList.add("secure-data");
  }
});

