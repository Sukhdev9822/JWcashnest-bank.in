// ===== LOGIN VALIDATION =====
function validateLogin(event) {
  event.preventDefault();
  const userId = document.getElementById("user-id").value.trim();
  const password = document.getElementById("password").value.trim();

  if (userId === "Sukhdevmondal147258" && password === "JW-5858") {
    localStorage.setItem("loginTime", new Date().toLocaleString());
    window.location.href = "home.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
}


// ===== PASSWORD TOGGLE =====
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

// ===== BALANCE TOGGLE =====
function toggleMaskedText(id, iconId, realValue) {
  const element = document.getElementById(id);
  const icon = document.getElementById(iconId);

  if (element.textContent.includes("•")) {
    element.textContent = realValue;
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    element.textContent = "•".repeat(realValue.length);
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}


  }
}

// ===== SHOW LOGIN TIME ON HOME =====
function showLoginTime() {
  const time = localStorage.getItem("loginTime");
  if (time && document.getElementById("login-time")) {
    document.getElementById("login-time").textContent = time;
  }
}



