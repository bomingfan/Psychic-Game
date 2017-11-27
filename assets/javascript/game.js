
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
var guessHistory = [];
var reset = function () {
    guessLeft = 9;
    guessHistory = [];
}



document.onkeyup = function (event) {
    guessLeft--;

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    guessHistory.push(userGuess)

    // in 9 attempts, if user guess matches the computerguess, user win and reset, otherwise, keep going until guessing right or running out of guesses and user loses
   
        if (guessLeft > 0) {
            if (userGuess === computerGuess) {
                win++;
                reset();
            }
        } 
        else if (guessLeft == 0) {
                loss++;
                reset();
        }
        
         

    var html = 
        "<p>Wins: " + win + "</p>" +
        "<p>Losses: " + loss + "</p>" +
        "<p>Guess Left: " + guessLeft + "</p>" +
        "<p>You Guesses so far: " + guessHistory + "</p>";
        

    document.querySelector("#game").innerHTML = html;

}


