// Final script.js

const validUser = "Sukhdevmondal147258";
const validPass = "JW-5858";

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


