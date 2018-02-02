
//Set variables to starting values
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var lettersGuessed = [];


//Grab IDs to allow for text manipulation
    var userGuessText = document.getElementById("user-guess");
    var guessesLeftText = document.getElementById("guesses-left");
    var winsText = document.getElementById("user-wins");
    var lossesText = document.getElementById("user-losses");

//Set function for game reset 

    function reset() {
    guessesLeft = 10;
    guessesLeftText.textContent = guessesLeft;
    computerGuess = random_character();
        console.log(computerGuess);
    lettersGuessed = [];
    }



// Have computer guess a random letter 
    function random_character() {
        var chars = "abcdefghijklmnopqurstuvwxyz";
        return chars.substr( Math.floor(Math.random() * 26), 1);
    }

//Saving that computer guess as a variable: computerGuess
    var computerGuess = random_character();
        console.log(computerGuess);

//Listen for user to press a key
document.onkeyup = function(event) {

//When user presses key, save the key as a variable
    userGuess = event.key 

//Add that userGuess into the letterGuessed array   
    lettersGuessed.push(userGuess);

//Display letters guessed, separated by commas
    userGuessText.textContent = lettersGuessed.join(", ");

//If user guesses character correctly, increase wins by 1 
    if (userGuess === computerGuess) {
        winsText.textContent = wins++;
        reset();

//If user guess incorrect, decrease guesses left by 1
    } else {
        guessesLeftText.textContent = guessesLeft-=1;
    }

//If out of guesses, increase loss by one: 
    if (guessesLeft === 0 ) {
            lossesText.textContent = losses++;
            reset();
    }
    

//When no guesses left, reset game 


//Update scoreboard 
    winsText.textContent = wins;
    lossesText.textContent = losses;

}



