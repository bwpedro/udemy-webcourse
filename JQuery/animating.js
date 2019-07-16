var arrayAnimation = {
                        width: "400px", 
                        height: "400px",
                        marginLeft: "100px",
                        marginTop: "100px",
                     };

$("#circle").click(function () {
    $(this).animate(arrayAnimation, 500, function () {
        $(this).css("background-color", "red");
    });
})