const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");
const rollBtn = document.getElementById("roll-button");

//random number generator and image generator

function randomNumber(){
    return Math.floor(Math.random() * 6 + 1);
}

function randomImage(number){
    return `/images/dice${number}.png`;
}

function rollDice(){
    var newDice1 = randomNumber();
    var newDice2 = randomNumber();

    var newImage1 = randomImage(newDice1);
    var newImage2 = randomImage(newDice2);

    dice1.src = newImage1;
    dice2.src = newImage2;

    var h1 = document.getElementById("winner");
    if (newDice1 > newDice2){
        h1.innerHTML = 'Player 1 is the Winner!';
    } else if (newDice2 > newDice1){
        h1.innerHTML = 'Player 2 is the Winner!';
    } else {
        h1.innerHTML = 'The Game is a Draw!';
        
    }
    h1.style.fontSize = "5rem";
}

rollBtn.addEventListener("click", rollDice);
