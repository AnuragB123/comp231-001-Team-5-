const loginForm = document.getElementById("sign-in-form");
const loginButton = document.getElementById("sign-in-form-submit");
const loginErrorMsg = document.getElementById("sign-in-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})