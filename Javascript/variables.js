document.getElementById("button").onclick = function(){
    var textEntered = "";

    textEntered = document.getElementById("textInput").value;

    document.getElementById("text").innerHTML = textEntered;
}