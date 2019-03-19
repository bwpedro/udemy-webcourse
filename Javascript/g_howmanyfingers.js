var guess = 0;
var nFinger = Math.floor((Math.random()*5))+1;;
var nGuess = 0;


document.getElementById("button").onclick = function(){
    guess = document.getElementById("guess").value;

    if(guess == nFinger){
        alert("Congratulations, you got it!!! \nNumber of guesses: "+nGuess);
    } else {
        nGuess++;
        alert("You failed! Try again!");
    }
}