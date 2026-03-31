let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const comp = document.querySelector("#comp");
const user = document.querySelector("#user");

/*  SOUND (FIXED PATH: use / not \) */
const winSound = new Audio("floraphonic-violin-win-5-185128.mp3");
const loseSound = new Audio("floraphonic-violin-lose-1-175615.mp3");

/* UNLOCK AUDIO (browser restriction fix) */
document.body.addEventListener("click", () => {
    winSound.play().then(() => winSound.pause());
}, { once: true });

/* PLAY SOUND FUNCTIONS */
const playWin = () => {
    winSound.currentTime = 0;
    winSound.play();
};

const playLose = () => {
    loseSound.currentTime = 0;
    loseSound.play();
};

/* REMOVE OLD CLASSES */
const resetMsgStyle = () => {
    msg.classList.remove("win", "lose", "draw", "flash");
};

/* COMPUTER CHOICE */
const getcompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
};

/* DRAW */
const draw = () => {
    resetMsgStyle();
    msg.innerText = "Game Draw (:";
    msg.classList.add("draw", "flash");
};

/* PLAY GAME */
const playGame = (userChoice) => {

    const compChoice = getcompchoice();

    if(userChoice === compChoice){
        draw();
    }
    else{

        resetMsgStyle();

        if(userChoice==="rock" && compChoice==="paper"){
            msg.innerText = "You Lose! Paper beats Rock";
            msg.classList.add("lose", "flash");
            compscore++;
            playLose();
        }
        else if(userChoice==="rock" && compChoice==="scissors"){
            msg.innerText = "You Win! Rock beats Scissors";
            msg.classList.add("win", "flash");
            userscore++;
            playWin();
        }
        else if(userChoice==="paper" && compChoice==="scissors"){
            msg.innerText = "You Lose! Scissors beats Paper";
            msg.classList.add("lose", "flash");
            compscore++;
            playLose();
        }
        else if(userChoice==="paper" && compChoice==="rock"){
            msg.innerText = "You Win! Paper beats Rock";
            msg.classList.add("win", "flash");
            userscore++;
            playWin();
        }
        else if(userChoice==="scissors" && compChoice==="rock"){
            msg.innerText = "You Lose! Rock beats Scissors";
            msg.classList.add("lose", "flash");
            compscore++;
            playLose();
        }
        else if(userChoice==="scissors" && compChoice==="paper"){
            msg.innerText = "You Win! Scissors beats Paper";
            msg.classList.add("win", "flash");
            userscore++;
            playWin();
        }
    }

    comp.innerText = compscore;
    user.innerText = userscore;
};

/* CLICK EVENTS */
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
