const email = document.querySelector("#email");
const submit = document.querySelector("#submit");
const errorIcon = document.querySelector(".error-icon");
const errorText = document.querySelector(".error-text");
const successText = document.querySelector(".success-text");

var emailValue = "";

submit.addEventListener("click", () => {
  emailValue = email.value;
  if (emailValue === "") {
    errorMessage();
  } else if (!ValidateEmail(emailValue)) {
    errorMessage();
  } else {
    successText.style.display = "block";
  }
});
email.addEventListener("click", () => {
  email.value = "";
  email.borderColor = "hsl(0, 36%, 70%)";
  successText.style.display = "none";
  errorIcon.style.display = "none";
  errorText.style.display = "none";
});

const errorMessage = () => {
  errorIcon.style.display = "block";
  errorText.style.display = "block";
};
function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }

  return false;
}
