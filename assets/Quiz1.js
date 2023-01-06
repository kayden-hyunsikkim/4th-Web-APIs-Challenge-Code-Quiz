let remainTime = document.querySelector("#timer");
let startBtn = document.querySelector("#start");
let main = document.querySelector("#Question");
let choiceBtns = document.querySelector("#choiceBtns");


let count = 0;


let questions = ["1. JavaScript _______ refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of ths code. Which of the following will fill in the blank?",

    "2. Which of the following is not a keyword in a variable declaration?",

    "3. The ___________ method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a Submit button, prevent it from submitting a form"]

let choices = {Q1 : ['Hammering','Hoisting','Cutting','Pasting'],   Q2 :['let','var','get','const'], Q3:['preventDefault()','blockDefault()','stopDefault()','dropDefault()']}



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


function question() {
    let i = count;
    main.children[1].textContent = questions[i];
    startBtn.remove();
    count++;
}


function renderChoice() {
    for(i=0; i<choices.Q1.length; i++) {
    let button = document.createElement("button");
    button.setAttribute('class', 'choices');
    button.textContent = choices.Q1[i];
    choiceBtns.appendChild(button); 
    }

}

function Q2Choicesorder() {
    for(i=0; i < choices.Q2.length; i++){ 
    let button = document.querySelector("#choiceBtns");
    button.children[i].textContent = choices.Q2[i];  
    }
}

function Q3Choicesorder() {
    for(i=0; i < choices.Q3.length; i++){ 
    let button = document.querySelector("#choiceBtns");
    button.children[i].textContent = choices.Q3[i];  
    }
}




startBtn.addEventListener("click", timer);
startBtn.addEventListener("click", question);
startBtn.addEventListener("click", renderChoice);

choiceBtns.addEventListener("click", question);
choiceBtns.addEventListener("click", Q2Choicesorder);




