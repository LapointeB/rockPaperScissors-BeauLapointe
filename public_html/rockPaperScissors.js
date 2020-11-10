/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Listeners for what button is pressed
document.getElementById("rockButton").addEventListener("click",choseRock);
document.getElementById("paperButton").addEventListener("click",chosePaper);
document.getElementById("scissorsButton").addEventListener("click",choseScissors);

// Function to find the computer's choice
function randomChoice() {
    let compChoice = Math.ceil(Math.random() * 3);
    if (compChoice === 1) {
        return "rock";
    } else if (compChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function if rock is selected
function choseRock() {
    let computerChoice = randomChoice();
    alert(computerChoice);
    if (computerChoice === "rock") {
        alert("Draw! Play again!");
    } else if (computerChoice === "paper") {
        alert("You lose!");
    } else {
        alert("You win!");
    }
}

// Function if paper is selected
function chosePaper() {
     let computerChoice = randomChoice();
    alert(computerChoice);
    if (computerChoice === "paper") {
        alert("Draw! Play again!");
    } else if (computerChoice === "scissors") {
        alert("You lose!");
    } else {
        alert("You win!");
    }   
}

// Function if scissors is selected
function choseScissors() {
    let computerChoice = randomChoice();
    alert(computerChoice);
    if (computerChoice === "scissors") {
        alert("Draw! Play again!");
    } else if (computerChoice === "rock") {
        alert("You lose!");
    } else {
        alert("You win!");
    }    
}

