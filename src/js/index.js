/* Your JS here. */
document.getElementById("blue-button").addEventListener("click", function() {
    document.body.getElementsByClassName("card")[0].style.backgroundColor = "aqua";
});

document.getElementById("red-button").addEventListener("click", function() {
    document.body.getElementsByClassName("card")[0].style.backgroundColor = "red";
});

document.getElementById("green-button").addEventListener("click", function() {
    document.body.getElementsByClassName("card")[0].style.backgroundColor = "lightgreen";
});
