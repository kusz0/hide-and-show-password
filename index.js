const passwordInput = document.getElementById("password");
const eyeIcon = document.querySelector("#eye-icon");

eyeIcon.onclick = () => {
    if(passwordInput.type == "password") {
        passwordInput.type = "text";
        eyeIcon.src = "img/eye-open.png"

    }else if (passwordInput.type = "text") {
        passwordInput.type = "password";
        eyeIcon.src = "img/eye-close.png"
    };
};