let logInbtn = document.getElementById("logIn");
let logInForm = document.getElementById("logInForm");
let signUpForm = document.getElementById("singUpForm");
let signUpbtn = document.getElementById("signUp");
signUpbtn.addEventListener("click", openSignUp);
logInbtn.addEventListener("click", openLogIn);
function openLogIn(event) {
    logInForm.style.display = "grid";
    signUpForm.style.display = "none";
}

function openSignUp(event) {
    logInForm.style.display = "none";
    signUpForm.style.display = "grid";
}