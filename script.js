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

// ===== Login Validation =====
function loginUser() {
  const userId = document.getElementById("userId").value;
  const password = document.getElementById("password").value;

  if (userId === "Sukhdevmondal147258" && password === "JW-5858") {
    window.location.href = "home.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
}

// ===== Toggle Account Balance Visibility =====
function toggleBalance() {
  const balance = document.getElementById("balance") || document.getElementById("accBalance");
  const icon = document.getElementById("balanceEye") || document.getElementById("accEye");

  if (balance.innerText.includes("₹")) {
    balance.innerText = "••••••••••";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    balance.innerText = "8,95,74,000.52";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }
}
