const options = {
    rock: "fa-solid fa-hand-back-fist",
    paper: "fa-solid fa-hand",
    scissors: "fa-solid fa-hand-scissors"
};

let uscore = 0; // users score
let score = 0; // computers score

function displayChoiceUser(choice) {
    //change class according to Users pick
    const iconElement = document.getElementById("usersPick");
    iconElement.className = ""; 
    iconElement.classList.add(...options[choice].split(" "));
}

function displayChoicePc(choice) {
    //change class according to PCs pick
    const iconElement = document.getElementById("computersPick");
    iconElement.className = ""; 
    iconElement.classList.add(...options[choice].split(" "));
}

function pickUsersChoice(pick){

    //test
    console.log(pick);
    //hide first screen
    let hands = document.querySelector(".circle");
    hands.style.display = "none";

    //show second screen
    let result = document.querySelector(".result");
    result.style.display = "flex";

    //Users pick
    displayChoiceUser(pick);

    //PCs pick
    pickComputerChoice(pick);
}

// random computers choice
function pickComputerChoice(pick){
    let hands = ["rock", "paper", "scissors"]
    let pcHand = hands[ Math.floor( Math.random() * 3 ) ]

    displayChoicePc(pcHand);

    //test
    console.log(pcHand)

    //game decision
    umpire(pick, pcHand);
}

// Game decision Logic
function umpire(usersChoice, computersChoice){
    // for testing
    console.log("User's choice:", usersChoice);
    console.log("Computer's choice:", computersChoice);

    if (usersChoice === computersChoice) {
        setVerdict("TIE UP");
        replay();
        return;
    }
    if (
        (usersChoice === "rock" && computersChoice === "scissors") ||
        (usersChoice === "paper" && computersChoice === "rock") ||
        (usersChoice === "scissors" && computersChoice === "paper")
    ) {
        setVerdict("YOU WIN");
        setUserscore(++uscore);
        againstPC();

        //next button to open celebration screen
        let next = document.querySelector("#next");
        next.style.display = "flex";


    } else {
        setVerdict("YOU LOSE");
        setComputerscore(++score);
        againstPC();
    }

}

function celebration(){

    let header= document.querySelector("header");
    header.style.display = "none";

    let hands = document.querySelector(".circle");
    hands.style.display = "none";

    let result = document.querySelector(".result");
    result.style.display = "none";

    let celebration = document.querySelector(".celebration-page");
    celebration.style.display = "flex";

    let next = document.querySelector("#next");
    next.style.display = "none";
}

function replay() {
    document.querySelector(".newGame .refresh").innerText = "REPLAY";
}

function againstPC(){
    document.querySelector(".againstPC p").innerText = "AGAINST PC";
}

//restart
function restart(){
    let header= document.querySelector("header");
    header.style.display = "flex";

    //show first screen
    let hands = document.querySelector(".circle");
    hands.style.display = "flex";

    //hide second screen
    let result = document.querySelector(".result");
    result.style.display = "none";

    //hide celebration screen
    let next = document.querySelector("#next");
    next.style.display = "none";

    let celebration = document.querySelector(".celebration-page");
    celebration.style.display = "none";


    //adding winner class to element for shadow effect
    const winner = document.getElementById("1");
    winner.className = ""; 
    
    const winner2 = document.getElementById("2");
    winner2.className = ""; 
    
}

// game decision
function setVerdict(verdict){
    document.querySelector(".decision h1").innerText = verdict;

    if (verdict == "YOU WIN"){
        const winner = document.getElementById("1");
        winner.className = ""; 
        winner.classList.add("winner".split(" "));
    }else if(verdict == "YOU LOSE"){
        const winner = document.getElementById("2");
        winner.className = ""; 
        winner.classList.add("winner".split(" "));
    }
}

// update users score
function setUserscore(newScore){
    //test
    console.log("User's score:", uscore);
    uscore = newScore;
    document.getElementById("user-score").innerText = uscore;
}

//update computers score
function setComputerscore(newScore){
    //test
    console.log("Computer's score:", score);
    score = newScore;
    document.getElementById("computer-score").innerText = score;
}

// rules footer
function showRules() {
    const modal = document.getElementById('rules-modal');
    modal.style.display = 'block'; 
}

function closeRules() {
    const modal = document.getElementById('rules-modal');
    modal.style.display = 'none';
}
