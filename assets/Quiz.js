let remainTime = document.querySelector("#timer");

let timeLeft = 10;

setInterval(Gametimer, 1000);
  
function Gametimer() {
    remainTime.innerHTML = "remain time : " + timeLeft;
    timeLeft--;    
        

}

