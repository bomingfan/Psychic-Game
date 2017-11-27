
// generate character array
function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}

var computerChoices = genCharArray("a", "z");

// check character array
console.log(computerChoices)

// create variables and initial value
var win = 0;
var loss = 0;
var guessLeft = 9;
var yourGuessHistory = [];


document.onkeyup = function (event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    yourGuessHistory.push(userGuess)

    // in 10 attempts, if user guess matches the computerguess, user win and reset, otherwise, keep going until guessing right or running out of guesses and user loses
    for (; i < 10; i++) {
        if (userGuess === computerGuess) {
            win++;
            
        } else {
            lose++;
        }
    }

    

    var html = 
        "<p>You Guesses so far: " + yourGuessHistory + "</p>";

    document.querySelector("#game").innerHTML = html;

}


