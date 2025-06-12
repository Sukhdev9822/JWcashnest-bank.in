// ===== Login Validation with Timestamp Storage =====
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

// ===== Toggle Password Visibility =====
function togglePassword() {
  const pwdInput = document.getElementById("password");
  const eye = document.getElementById("toggleEye");
  if (pwdInput.type === "password") {
    pwdInput.type = "text";
    eye.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    pwdInput.type = "password";
    eye.classList.replace("fa-eye-slash", "fa-eye");
  }
}

// ===== Toggle Account Balance Visibility =====
function toggleBalance() {
  const balanceSpan = document.getElementById("balance") || document.getElementById("accBalance");
  const icon = document.getElementById("balanceEye") || document.getElementById("accEye");

  if (!balanceSpan) return;

  if (balanceSpan.dataset.original === undefined) {
    balanceSpan.dataset.original = balanceSpan.textContent;
  }

  if (balanceSpan.textContent.includes("•")) {
    balanceSpan.textContent = balanceSpan.dataset.original;
    icon?.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    balanceSpan.textContent = "••••••••••";
    icon?.classList.replace("fa-eye", "fa-eye-slash");
  }
}

// ===== Set Recent Login Time =====
function showRecentLoginTime() {
  const lastLogin = localStorage.getItem("lastLogin");
  const loginEl = document.getElementById("recentLogin");
  if (lastLogin && loginEl) {
    loginEl.textContent = lastLogin;
  }
}

// Call it in home.html after DOM loads
window.addEventListener("DOMContentLoaded", showRecentLoginTime);

