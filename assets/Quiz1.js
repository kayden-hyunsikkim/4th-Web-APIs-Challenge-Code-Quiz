let remainTime = document.querySelector("#timer");
let startBtn = document.querySelector("#start");
let timeLeft = 75;


let timeInterval = setInterval(function () {
    remainTime.innerHTML = "remain time : " + timeLeft;
    timeLeft--;
    if (timeLeft === -1) {
        clearInterval(timeInterval);
    }

    console.log(timeLeft);

}, 1000);


function remainSecond() {
    let remainsecond = localStorage.setItem("remain", timeLeft);
}

function Correct() {
    document.getElementById("Correct").style.display = "inline-block";
    document.getElementById("next").style.display = "inline-block";
}

function Wrong() {
    document.getElementById("Wrong").style.display = "inline-block";
    document.getElementById("next").style.display = "inline-block";
}