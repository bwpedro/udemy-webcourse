document.getElementById("secondButton").onclick = function(){
    document.getElementById("secondParagraph").innerHTML = "I think " + document.getElementById("secondParagraph").innerHTML + " awesome!!!";
}

document.getElementById("thirdButton").onclick = function(){
    document.getElementById("thirdParagraph").innerHTML = "HEY YOU!!";
}

document.getElementById("fourthButton").onclick = function(){
    document.getElementById("fourthParagraph").style.color = "red";
}

document.getElementById("fifthButton").onclick = function(){
    document.getElementById("fifthParagraph").style.fontSize = "30px";
}

document.getElementById("sixthButton").onclick = function(){
    document.getElementById("sixthParagraph").style.display = "none";
}