let btnContainer = document.getElementById("buttonContainer");
let btns = btnContainer.children;
let playerChoice = 0;
let difficultySettingsContainer = document.getElementById("difficultySettingsContainer");
let askUser = document.getElementById("askUser");
let easy = document.getElementById("easy");
let moderate = document.getElementById("moderate");
let challenging = document.getElementById("challenging");
let resetBtn = document.getElementById("reset");
let startBtn = document.getElementById("start");
let arrOfBtnColors = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9"];
let btn;
let counter = 0;
let computerMoves = [];
let score = 0;
let scoreBar = document.getElementById("score");
btnContainer.style.color = "white";
btnContainer.style.fontSize = "50px";
btnContainer.style.textAlign = "center";
let hasStarted = false;
let audio = document.getElementById("audio");
let arrSounds = [
    "soundSnippts/mixkit-arcade-retro-game-over-213.wav",
    "soundSnippts/mixkit-arcade-retro-jump-223.wav",
    "soundSnippts/mixkit-cartoon-toy-whistle-616.wav",
    "soundSnippts/mixkit-guitar-notification-alert-2320.wav",
    "soundSnippts/mixkit-retro-game-notification-212.wav",
    "soundSnippts/mixkit-toy-whistler-bird-sound-18.wav",
    "soundSnippts/mixkit-tropical-bird-squeak-27.wav",
    "soundSnippts/mixkit-unlock-game-notification-253.wav",
    "soundSnippts/mixkit-wild-lion-animal-roar-6.wav"
];

document.addEventListener("keydown", numClick);
easy.addEventListener("click", hide);
moderate.addEventListener("click", hide);
challenging.addEventListener("click", hide);
resetBtn.addEventListener("click", hide);
startBtn.addEventListener("click", startGame);

function hide(event) {
    if (event.target == easy) {
        difficultySettingsContainer.style.display = "none";
        askUser.style.display = "none";
        resetBtn.style.display = "block";
        startBtn.style.display = "block";
        playerChoice = 4;
        createBtn(playerChoice);
    }
    if (event.target == moderate) {
        difficultySettingsContainer.style.display = "none";
        askUser.style.display = "none";
        resetBtn.style.display = "block";
        startBtn.style.display = "block";
        playerChoice = 6;
        createBtn(playerChoice);
    }
    if (event.target == challenging) {
        difficultySettingsContainer.style.display = "none";
        askUser.style.display = "none";
        resetBtn.style.display = "block";
        startBtn.style.display = "block";
        playerChoice = 9;
        createBtn(playerChoice);
    }
    if (event.target == resetBtn) {
        askUser.style.display = "flex";
        difficultySettingsContainer.style.display = "flex";
        resetBtn.style.display = "none";
        startBtn.style.display = "none";
        btnContainer.style.display = "none";
        btnContainer.innerHTML = "";
        btns = btnContainer.children;
        reset();
    }
}

function createBtn(numBtn) {
    for (let i = 0; i < numBtn; i++) {
        btn = document.createElement("button");
        btn.classList.add("btnStyle");
        btn.setAttribute("id", arrOfBtnColors[i]);
        btn.style.height = ((1 / Math.floor(Math.sqrt(numBtn)) * 100) * 5 / 6) + "%";
        btn.style.width = ((1 / Math.ceil(Math.sqrt(numBtn)) * 100) * 5 / 6) + "%";
        btnContainer.style.display = "flex";
        btnContainer.appendChild(btn);
        btn.innerText = i + 1;

        btn.style.fontSize = "40px";
        btn.addEventListener("click", clickedBtn);
    }
}

function startGame() {
    hasStarted = true;
    rnd = Math.floor(Math.random() * btns.length);
    animation(btns[rnd]);
    computerMoves.push(rnd);
    animation(btns[rnd]);
    playSound(arrSounds[rnd]);
}

function clickedBtn(event) {
    let btnPos;
    for(let i=0;i<btns.length;i++){
        if(event.target == btns[i]){
            btnPos = i;
            break;
        }
    }
    playSound(arrSounds[btnPos]);
    if (!hasStarted) {
        return;
    }
    if (event.target != btns[computerMoves[counter]]) {
        btnContainer.innerHTML = "You lost, press 'Reset Game' to continue!<br>Your score was: " + score;
        localReset();
        return;
    }
    counter++;
    if (counter == computerMoves.length) {
        score++;
        scoreBar.innerText = "Current stage: " + score;
        rnd = Math.floor(Math.random() * btns.length);
        computerMoves.push(rnd);
        for (let i = 0; i < computerMoves.length; i++) {
            setTimeout(playSound,500 * i + 900,arrSounds[computerMoves[i]]);
            setTimeout(animation, 500 * i + 1000, btns[computerMoves[i]]);
        }
        counter = 0;
    }
}
function animation(btn) {
    btn.classList.add("computerBtn");
    setTimeout(function () { btn.classList.remove("computerBtn"); }, 300);
}
function localReset(){
    counter = 0;
    computerMoves = [];
    hasStarted = false;
    score = 0;
    scoreBar.innerText = "Current stage: " + score;;
}
function reset() {
    location.reload();
}
function numClick(event) {
    let key = event.keyCode;
    key = parseInt(key) - 48;
    if (key < 1 || key > 9) {
        return;
    }
    key--;
    let ev = { target: btns[key] };
    animation(btns[key]);
    clickedBtn(ev);
}
function playSound(str) {
    audio.src = str;
    audio.play();
}