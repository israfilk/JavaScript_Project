const usernameBtn = document.querySelector(".username");
const registerLink = document.querySelector(".register");
const loginLink = document.querySelector(".login");
const logoutLink = document.querySelector(".logout");

let activeUser = JSON.parse(localStorage.getItem("activeUser"));

function updateNavbar() {
  if (!usernameBtn || !registerLink || !loginLink || !logoutLink) return;

  if (activeUser) {
    // login olunub
    usernameBtn.textContent = activeUser.username;

    registerLink.classList.add("d-none");
    loginLink.classList.add("d-none");
    logoutLink.classList.remove("d-none");
  } else {
    // login olunmayıb
    usernameBtn.textContent = "Username";

    registerLink.classList.remove("d-none");
    loginLink.classList.remove("d-none");
    logoutLink.classList.add("d-none");
  }
}

updateNavbar();

if (logoutLink) {
  logoutLink.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("activeUser");
    activeUser = null;
    updateNavbar();
    // istəyirsənsə ana səhifəyə at:
    window.location.href = "index1.html";
  });
}
