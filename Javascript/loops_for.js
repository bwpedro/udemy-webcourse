var tweets = ["Hi", "Hello", "Hi again"];
var i = 0;
var printa = "";

for(i=0; i < tweets.length ; i++){
    printa = printa + "<p>" + tweets[i] + "</p>";
}

document.getElementById("print").innerHTML = printa;