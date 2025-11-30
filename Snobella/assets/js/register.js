const nameInp = document.querySelector("#name");
const usernameRegInp = document.querySelector("#username");
const emailInp = document.querySelector("#email");
const passwordRegInp = document.querySelector("#password");
const submitRegBtn = document.querySelector(".submit");

let regUsers = JSON.parse(localStorage.getItem("users")) || [];

if (submitRegBtn) {
  submitRegBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (
      !nameInp.value ||
      !usernameRegInp.value ||
      !emailInp.value ||
      !passwordRegInp.value
    ) {
      Toastify({
        text: "Zəhmət olmasa bütün xanaları doldurun",
        backgroundColor: "red",
      }).showToast();
      return;
    }

    // MIN 8 CHARACTER CHECK
    if (passwordRegInp.value.length < 8) {
      Toastify({
        text: "Şifrə minimum 8 simvol olmalıdır",
        backgroundColor: "orange",
      }).showToast();
      return;
    }

    // Username təkrarı
    if (regUsers.some((u) => u.username === usernameRegInp.value)) {
      Toastify({
        text: "Bu username artıq mövcuddur",
        backgroundColor: "orange",
      }).showToast();
      return;
    }

    const newUser = {
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now(),
      name: nameInp.value,
      username: usernameRegInp.value,
      email: emailInp.value,
      password: passwordRegInp.value,
    };

    regUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(regUsers));

    Toastify({
      text: "Qeydiyyat uğurla tamamlandı",
      backgroundColor: "green",
    }).showToast();

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);
  });
}
