var start = new Date().getTime();
var end = 0;
var timeTaken = 0;
var record = 10000000;
var letters = "";
var color = "";
var i = 0;
var size = 0;

function getColor(){
    letters = "0123456789ABCDEF".split("");
    color = "#";
    for(i=0; i<6; i++)
        color += letters[Math.floor(Math.random()*16)];
    return color;
}

function makeShapeAppear(){

    size = (Math.random()*200) + 100;

    document.getElementById("shape").style.top = (Math.random()*350)+"px";
    document.getElementById("shape").style.left = (Math.random()*350)+"px";
    document.getElementById("shape").style.width = size+"px";
    document.getElementById("shape").style.height = size+"px";
    document.getElementById("shape").style.backgroundColor = getColor();
    if(Math.random() > 0.5)
        document.getElementById("shape").style.borderRadius = "50%";
    else
        document.getElementById("shape").style.borderRadius = "0%";
    
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}

function delay(){
    setTimeout(makeShapeAppear, Math.random()*1500);
}

delay();

document.getElementById("shape").onclick = function(){
    document.getElementById("shape").style.display = "none";

    end = new Date().getTime();
    timeTaken = (end - start)/1000;
    document.getElementById("timeTaken").innerHTML = timeTaken;

    if(timeTaken <= record){
        record = timeTaken;
        document.getElementById("record").innerHTML = record;
    }

    delay();
}