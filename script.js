function createComputerMove(){
    const random = Math.random();
    if(random > 0 && random < 0.33){
    return 'rock';
    }else if(random >= 0.33 && random < 0.66){ 
    return 'paper';
    }else if(random >= 0.66 && random < 1){ 
    return 'scissors';
    }
}

function displayMoves(playerMove, computerMove) {
    const playersMoveDiv = document.querySelector("#player-move");
    const computersMoveDiv = document.querySelector("#computer-move");
    playersMoveDiv.innerHTML = playerMove;
    computersMoveDiv.innerHTML = computerMove;
}

function displayResult(playerMove, computerMove){
    const resultDiv = document.querySelector("#result");
    if(playerMove === computerMove) resultDiv.innerHTML = 'remis';
    else if(playerMove === "paper" && computerMove === "scissors")resultDiv.innerHTML = 'przegrałeś';
    else if(playerMove === "rock" && computerMove === "paper")resultDiv.innerHTML = 'przegrałeś';
    else if(playerMove === "scissors" && computerMove === "rock")resultDiv.innerHTML = 'przegrałeś';
    else resultDiv.innerHTML = "wygrałeś"; 
}

function onPress (){
    const randomMove = createComputerMove();
    displayMoves(this.id, randomMove);
    displayResult(this.id, randomMove);
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

[rock, paper, scissors].forEach((el) => {
    el.addEventListener('click', onPress);
})


