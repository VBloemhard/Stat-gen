function rollDice() {
    let randomNumber = Math.random() * 6;
    let numroundup = Math.ceil(randomNumber);
    return numroundup;


}

let dobbelsteen = rollDice();
console.log(dobbelsteen);


function rollStat() {
    let dice1 = rollDice();
    let dice2 = rollDice();
    let dice3 = rollDice();
    let dice4 = rollDice();
    let lowest = Math.min(dice1, dice2, dice3, dice4);
    let sum = dice1 + dice2 + dice3 + dice4 - lowest;
    return sum;
}

let stat = rollStat();
console.log(stat);

function rollChar() {
    let strElement = document.querySelector("#str");
    strElement.textContent = "STR: " + rollStat();

}
rollChar();

let button = document.querySelector("#rollstat");
button.addEventListener("click", rollStat);