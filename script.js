let logInbtn = document.getElementById("logIn");
let logInForm = document.getElementById("logInForm");
let signUpForm = document.getElementById("singUpForm");
let openSignUpbtn = document.getElementById("signUp");
let sginUpBtn = document.getElementById("sginUpBtn")
let logInSub = document.getElementById("logInSub");
let sginUpUserNameValue;
let sginUpPasswordValue;
let passwordAuthenticate;
let logInUserNameValue;
let logInPasswordValue;

openSignUpbtn.addEventListener("click", openSignUp);
logInbtn.addEventListener("click", openLogIn);
sginUpBtn.addEventListener("click", submitSginUp);
logInSub.addEventListener("click", checkPasswordUserName);

function openLogIn(event) {
    logInForm.style.display = "grid";
    signUpForm.style.display = "none";
}

function openSignUp(event) {
    logInForm.style.display = "none";
    signUpForm.style.display = "flex";
}

function checkPasswordSginUp(pass1,pass2){
    if(pass1 != pass2){
        return false;
    }
    return true;
}

function submitSginUp(event){
    sginUpUserNameValue = document.getElementById("userNameSginUp").value; 
    passwordAuthenticate = document.getElementById("passwordAuthentication").value;
    sginUpPasswordValue = document.getElementById("password").value;
    if(event.target == sginUpBtn){
        if(localStorage.getItem(sginUpUserNameValue) != null){
            alert("This username already exists! Please choose a different username")
            return;
        }
        if(!checkPasswordSginUp(sginUpPasswordValue,passwordAuthenticate)){
            alert("You have not enterd the same password")
            return;
        }
    }
    localStorage.setItem(sginUpUserNameValue, sginUpPasswordValue);
    console.log(localStorage.getItem(sginUpUserNameValue));
}

function checkPasswordUserName(event){
    logInUserNameValue = document.getElementById("userNameLogIn").value;
    logInPasswordValue = document.getElementById("passwordLogIn").value;
    if(event.target == logInSub){
        if(localStorage.getItem(logInUserNameValue) == null){
            alert("It seems your username doesn't exist, please sgin up and try again!");
            return;
        }else{
            console.log(localStorage.getItem(logInUserNameValue))
        }
        if(logInPasswordValue == localStorage.getItem(logInUserNameValue)){
            console.log("it's alive!")
            document.body.innerHTML = "You've loged in! Press the button to continue!";
        }
    }
}


