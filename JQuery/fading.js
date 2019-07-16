var circleShowing = true;

$("#toggle").click(function(){
    if(circleShowing){
        $("#circle").fadeOut(function () {
            circleShowing = false;
        });
    } else {
        $("#circle").fadeIn(function () {
            circleShowing = true;
        });
    }
});