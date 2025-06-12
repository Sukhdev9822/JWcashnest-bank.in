// ===== LOGIN VALIDATION WITH TIMESTAMP STORAGE =====
function loginUser() {
  const userId = document.getElementById("userId").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!userId || !password) {
    alert("Both User ID and Password are required.");
    return;
  }

  if (userId === "Sukhdevmondal147258" && password === "JW-5858") {
    const now = new Date().toLocaleString();
    localStorage.setItem("jwcashnestLoggedIn", "true");
    localStorage.setItem("lastLogin", now);
    window.location.href = "home.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
}

// ===== PASSWORD TOGGLE =====
function togglePassword() {
  const pwdInput = document.getElementById("password");
  const eye = document.getElementById("toggleEye");

  if (pwdInput.type === "password") {
    pwdInput.type = "text";
    eye.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    pwdInput.type = "password";
    eye.classList.replace("fa-eye", "fa-eye-slash");
  }
}

// ===== BALANCE TOGGLE (HOME + ACCOUNT PAGE) =====
function toggleBalance() {
  const balanceSpan = document.getElementById("balance");
  const icon = document.getElementById("balanceEye");

  if (!balanceSpan || !icon) return;

  const hidden = balanceSpan.textContent.includes("•");

  if (hidden) {
    balanceSpan.textContent = "8,95,74,000.52"; // unmask value
    icon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    balanceSpan.textContent = "••••••••••";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  }
  }
}

// ===== DISPLAY RECENT LOGIN TIME ON DASHBOARD =====
function showRecentLoginTime() {
  const loginEl = document.getElementById("recentLogin");
  const lastLogin = localStorage.getItem("lastLogin");

  if (loginEl && lastLogin) {
    loginEl.textContent = lastLogin;
  }
}

// ===== INIT SCRIPT FOR HOME PAGE =====
window.addEventListener("DOMContentLoaded", showRecentLoginTime);


