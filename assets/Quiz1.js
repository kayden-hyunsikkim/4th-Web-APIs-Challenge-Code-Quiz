let remainTime = document.querySelector("#timer");
let startBtn = document.querySelector("#start");
let main = document.querySelector("#Question");




function timer() {
    let timeLeft = 75;
    timeInterval = setInterval(() => {
        remainTime.innerHTML = "remain time : " + timeLeft;
        timeLeft--;
        if (timeLeft === -1) {
            clearInterval(timeInterval);
        }
    }, 1000)
}

function question1(event) {
    event.preventDefault();

    main.children[1].textContent = "JavaScript _______ refers to the process whereby the interpret appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of ths code.";

    console.log(main.children[2])
    main.children[2].remove();

    var div = document.createElement("div");
    div.setAttribute('id','mutiple-choice-box')
    main.appendChild(div);
    var button1 = document.createElement("button");
    button1.textContent = "hi";
    div.appendChild(button1);
    button1.setAttribute('class','choices')
    var button2 = document.createElement("button");
    button2.textContent = "hello";
    div.appendChild(button2);
    button2.setAttribute('class','choices')
    var button3 = document.createElement("button");
    button3.textContent = "tell";
    div.appendChild(button3);
    button3.setAttribute('class','choices')
    var button4 = document.createElement("button");
    button4.textContent = "tell";
    div.appendChild(button4);
    button4.setAttribute('class','choices')
}






startBtn.addEventListener("click", timer);
startBtn.addEventListener("click", question1);
