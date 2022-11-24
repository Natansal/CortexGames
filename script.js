let openLogInBtn = document.getElementById("logIn");
let openSignUpbtn = document.getElementById("signUp");
let logInForm = document.getElementById("logInForm");
let signUpForm = document.getElementById("singUpForm");
let sginUpBtn = document.getElementById("sginUpBtn")
let logInSub = document.getElementById("logInSub");
let btnsGame = document.getElementsByClassName("btnGame");
let sginUpUserNameValue;
let sginUpPasswordValue;
let passwordAuthenticate;
let logInUserNameValue;
let logInPasswordValue;
let isSignIn = false;

btnsGame[0].addEventListener("mouseenter", activateNavBar);
btnsGame[1].addEventListener("mouseenter", activateNavBar);
btnsGame[0].addEventListener("click", function(){
    if (isSignIn == false) {return;}
    location.reload();
});
btnsGame[1].addEventListener("click", function () {
    if (isSignIn === false) { return; }
    location.href = "../gamePage/index.html";
});
openSignUpbtn.addEventListener("click", openSignUp);
openLogInBtn.addEventListener("click", openLogIn);
sginUpBtn.addEventListener("click", submitSginUp);
logInSub.addEventListener("click", checkPasswordUserName);

function openLogIn(event) {
    logInForm.style.display = "grid";
    signUpForm.style.display = "none";
    openLogInBtn.style.color = "white";
    openLogInBtn.style.backgroundColor = "#a20054";
    openSignUpbtn.style.color = "black";
    openSignUpbtn.style.backgroundColor = "#444fff"
}

function openSignUp(event) {
    logInForm.style.display = "none";
    signUpForm.style.display = "flex";
    openSignUpbtn.style.color = "white";
    openSignUpbtn.style.backgroundColor = "#a20054";
    openLogInBtn.style.color = "black";
    openLogInBtn.style.backgroundColor = "#444fff"

}

function checkPasswordSginUp(pass1, pass2) {
    if (pass1 != pass2) {
        return false;
    }
    return true;
}

function submitSginUp(event) {
    sginUpUserNameValue = document.getElementById("userNameSginUp").value;
    passwordAuthenticate = document.getElementById("passwordAuthentication").value;
    sginUpPasswordValue = document.getElementById("password").value;
    if (event.target == sginUpBtn) {
        if (sginUpUserNameValue == "" || sginUpPasswordValue == "") {
            alert("It seems that you have not filled all required inputs...");
            return;
        }
        if (localStorage.getItem(sginUpUserNameValue) != null) {
            alert("This username already exists! Please choose a different username")
            return;
        }
        if (!checkPasswordSginUp(sginUpPasswordValue, passwordAuthenticate)) {
            alert("You have not enterd the same password")
            return;
        }
    }
    localStorage.setItem(sginUpUserNameValue, sginUpPasswordValue);
    console.log(localStorage.getItem(sginUpUserNameValue));
}

function checkPasswordUserName(event) {
    logInUserNameValue = document.getElementById("userNameLogIn").value;
    logInPasswordValue = document.getElementById("passwordLogIn").value;
    if (event.target == logInSub) {
        if (localStorage.getItem(logInUserNameValue) == null) {
            alert("It seems your username doesn't exist, please sign up and try again!");
            openSignUp();
            return;
        }
        if (logInPasswordValue == localStorage.getItem(logInUserNameValue)) {
            isSignIn = true;
            document.getElementById("SignOut").innerText = "Log out";
        }
    }
}
function activateNavBar(event) {
    if (isSignIn == false) { return; }
    event.target.style.cursor = "pointer";
}