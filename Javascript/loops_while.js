var guess = 0;
var nGuess = 0;
var myTry = 0;
var gotIt = true;

document.getElementById("botao").onclick = function(){
    
    guess = document.getElementById("dedos").value;
    
    while (gotIt){
    
        myTry = Math.floor((Math.random()*5))+1;

        if(guess != myTry){
            nGuess++;
            alert("Is it "+ myTry + "? Nope, not that one.. I'll try it again");
        } else {
            alert("AHA!! I got you!! It's "+myTry+" and took only "+nGuess+" guesses");
            gotIt = false;
        }
    }
}