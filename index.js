let counter = 0;

document.getElementById("decreaseButton").onclick = function () {
    counter--;
    document.getElementById("countLabel").innerHTML = counter;
}


document.getElementById("resetButton").onclick = function () {
    document.getElementById("countLabel").innerHTML = 0;
    counter = 0;
}

document.getElementById("increaseButton").onclick = function () {
    counter++;
    document.getElementById("countLabel").innerHTML = counter;
}


