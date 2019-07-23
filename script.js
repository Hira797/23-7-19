let count;
let randomNumber;

function resetGame() {
    randomNumber = parseInt(Math.random() * 101);
    count = 0;
}

resetGame();

function guessTheNumber() {
    let input = parseInt(document.querySelector("input").value);
    if(input > randomNumber) {
        alert("to Big");
        count ++ ; 
    }
else if(input < randomNumber) {
    alert("too Small");
    count ++;
}
else {
    alert("congratulation you have won ! number of wrong gusses" + count);
    resetGame();
}
}
