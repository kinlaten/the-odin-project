const passwd = document.querySelector("#passwd"),
  conpasswd = document.querySelector("#conpasswd"),
  passwd_alert = document.querySelector(".passwd__alert"),
  conpasswd_alert = document.querySelector(".conpasswd__alert");

passwd.addEventListener("input", () => {
  if (passwd.value.length < 8) {
    console.log("less than 8");
    passwd_alert.textContent = "Password requires at least 8 characters";
    passwd_alert.style.color = "red";
  } else {
    passwd_alert.textContent = "";
  }
});

conpasswd.addEventListener("input", () => {
  if (conpasswd.value !== passwd.value) {
    console.log("not match");
    conpasswd_alert.textContent = "Password did not match";
    conpasswd_alert.style.color = "red";
  } else {
    conpasswd_alert.textContent = "Password matched!";
    conpasswd_alert.style.color = "green";
  }
});
