let remainTime = document.querySelector("#timer");
let startBtn = document.querySelector("#start");
let choiceBtns = document.querySelector("#choiceBtns");
let nextBtn = document.querySelector("#next");
let newDiv = document.querySelector("record-page")
let main = document.querySelector("#Question");
let Result = document.querySelector("#result");

let count = 0;


let questions = ["1. JavaScript _______ refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of ths code. Which of the following will fill in the blank?",

    "2. Which of the following is not a keyword in a variable declaration?",

    "3. The ___________ method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a Submit button, prevent it from submitting a form"]

let choices = { Q1: ['Hammering', 'Hoisting', 'Cutting', 'Pasting'], Q2: ['let', 'var', 'get', 'const'], Q3: ['preventDefault()', 'blockDefault()', 'stopDefault()', 'dropDefault()'] }



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


function Q1Choicesorder() {
    for (i = 0; i < choices.Q1.length; i++) {
        let button = document.createElement("button");
        button.setAttribute('class', 'choices');
        button.textContent = choices.Q1[i];
        choiceBtns.appendChild(button);
    }
    choiceBtns.children[0].setAttribute('onclick', 'wrong()');
    choiceBtns.children[1].setAttribute('onclick', 'correct()');
    choiceBtns.children[2].setAttribute('onclick', 'wrong()');
    choiceBtns.children[3].setAttribute('onclick', 'wrong()');


}

function changeChoices() {

    if(count <=2 ) {
    for (i = 0; i < choices.Q2.length; i++) {
        let button = document.querySelector("#choiceBtns");
        button.children[i].textContent = choices.Q2[i];
    }
    choiceBtns.children[0].setAttribute('onclick', 'wrong()');
    choiceBtns.children[1].setAttribute('onclick', 'wrong()');
    choiceBtns.children[2].setAttribute('onclick', 'correct()');
    choiceBtns.children[3].setAttribute('onclick', 'wrong()');
    
    }

    else if (count === 3) {
    for (i = 0; i < choices.Q3.length; i++) {
        let button = document.querySelector("#choiceBtns");
        button.children[i].textContent = choices.Q3[i];
    }
    choiceBtns.children[0].setAttribute('onclick', 'correct()');
    choiceBtns.children[1].setAttribute('onclick', 'wrong()');
    choiceBtns.children[2].setAttribute('onclick', 'wrong()');
    choiceBtns.children[3].setAttribute('onclick', 'wrong()');
    }
    
    else {
        choiceBtns.remove();
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id","record-page");
        newDiv.textContent = 'hi';
        main.appendChild(newDiv);
        newDiv.setAttribute('style','background-color:yellow;');
        return;
    }
}

function correct() {
    Result.children[0].setAttribute("style", "display : inline-block;");
    Result.children[2].setAttribute("style", "display : inline-block;");
}


function wrong() {
    Result.children[1].setAttribute("style", "display : inline-block;");
    Result.children[2].setAttribute("style", "display : inline-block;");
}

function recordPage() {
    newDiv.setAttribute('style','background-color:black;')
}


startBtn.addEventListener("click", timer);
startBtn.addEventListener("click", question);
startBtn.addEventListener("click", Q1Choicesorder);


nextBtn.addEventListener("click", question);
nextBtn.addEventListener("click", changeChoices);

nextBtn.addEventListener("click", function (){
    Result.setAttribute('style','display: none;')
});
choiceBtns.addEventListener("click",function (){
    Result.setAttribute('style','display: block;')
});











