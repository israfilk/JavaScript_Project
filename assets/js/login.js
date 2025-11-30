const usernameInp = document.querySelector("#username");
const passwordInp = document.querySelector("#password");
const submitBtn = document.querySelector(".submit");

let users = JSON.parse(localStorage.getItem("users")) || [];

if (submitBtn) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (!usernameInp.value || !passwordInp.value) {
      Toastify({
        text: "Zəhmət olmasa bütün xanaları doldurun",
        backgroundColor: "red",
      }).showToast();
      return;
    }

    // MIN 8 CHARACTER CHECK
    if (passwordInp.value.length < 8) {
      Toastify({
        text: "Şifrə minimum 8 simvol olmalıdır",
        backgroundColor: "orange",
      }).showToast();
      return;
    }

    const foundUser = users.find(
      (u) =>
        u.username === usernameInp.value &&
        u.password === passwordInp.value
    );

    if (!foundUser) {
      Toastify({
        text: "Username və ya şifrə yanlışdır",
        backgroundColor: "red",
      }).showToast();
      return;
    }

    localStorage.setItem("activeUser", JSON.stringify(foundUser));

    Toastify({
      text: "Uğurla daxil oldun",
      backgroundColor: "green",
    }).showToast();

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  });
}
