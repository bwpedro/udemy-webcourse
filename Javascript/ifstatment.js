var login = ""
var password = ""

document.getElementById("button").onclick = function() {
    login = document.getElementById("login").value;
    password = document.getElementById("password").value;

    if (login == "bwpedro" && password == "pedro"){
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
}