let remainTime = document.querySelector("#timer");
let startBtn = document.querySelector("#start");
let choiceBtns = document.querySelector("#choiceBtns");
let nextBtn = document.querySelector("#next");

let main = document.querySelector("#Question");
let H1 = document.querySelector("#h1");
let P1 = document.querySelector("#p1");
let Result = document.querySelector("#result");
let Correct = document.querySelector(".correct");
let Wrong = document.querySelector(".wrong");

let count = 0;
let cycle = 1;
let timeLeft = 75;


let questions = ["1. JavaScript _______ refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of ths code.",

    "2. Which of the following is not a keyword in a variable declaration?",

    "3. The ___________ method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a Submit button, prevent it from submitting a form"]

let choices = { Q1: ['Hammering', 'Hoisting', 'Cutting', 'Pasting'], Q2: ['let', 'var', 'get', 'const'], Q3: ['preventDefault()', 'blockDefault()', 'stopDefault()', 'dropDefault()'] }



startBtn.addEventListener("click", timer);
startBtn.addEventListener("click", question);
startBtn.addEventListener("click", Q1Choicesorder);



function timer() {
    timeInterval = setInterval(() => {
        remainTime.innerHTML = "remain time : " + timeLeft;


        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }

        if (count > 3) {
            clearInterval(timeInterval);
        }
        timeLeft--;

    }, 1000)
}


function question() {
    let i = count;
    P1.textContent = questions[i];
    count++;
    startBtn.setAttribute("style", "display:none;");
}


function Q1Choicesorder() {
    if (count !== 4) {
        choiceBtns.setAttribute("style", "display:flex;");
    }
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
 
    if (count <= 2) {
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
        for (i = 0; i < choices.Q3.length; i++) {
            choiceBtns.children[0].remove();
            choiceBtns.setAttribute("style", "display:none;");
        };
        buildALLDONEpage();
        return;
    }
}

function buildALLDONEpage() {

    Result.setAttribute("style","display:none;");

    if (cycle >= 2) {
        let newDiv = document.querySelector("#alldone-page");
        newDiv.setAttribute("style", "display:block;");
    }
    if (cycle === 1) {
    H1.setAttribute("style", "display:none;");
    P1.setAttribute("style", "display:none;");
    let newDiv = document.createElement("div");
    let heading1 = document.createElement("h1");
    let Paragraph1 = document.createElement("p");
    let Form1 = document.createElement("form");
    let Input1 = document.createElement("input");
    let Submit = document.createElement("button");
    newDiv.setAttribute("id", "alldone-page");
    Form1.setAttribute("for", "initial")
    Input1.setAttribute("id", "initial");
    Submit.setAttribute("id", "submit");
    Submit.setAttribute("onclick", "recordPage()");
    heading1.textContent = 'All done!!';
    Paragraph1.textContent = 'your final score is ' + timeLeft + '.';
    Form1.textContent = "initial : ";
    Submit.textContent = "Submit";
    main.appendChild(newDiv);
    newDiv.appendChild(heading1);
    newDiv.appendChild(Paragraph1);
    newDiv.appendChild(Form1);
    Form1.appendChild(Input1);
    newDiv.appendChild(Submit);
    }
}

function recordPage() {
    correctandwrongReset();

    
    if (cycle >= 2) {
        let newDiv = document.querySelector("#alldone-page");
        newDiv.setAttribute("style", "display:none;");
        let recordpage = document.querySelector("#record-page");
        recordpage.setAttribute("style", "display:block;");
        let ScoreListItem = document.querySelector("li");
        let ScoreList = document.querySelector("initialList");
        let UserInitial = document.querySelector("#initial");
        let Initial = UserInitial.value;
        ScoreListItem.textContent = Initial +" - "+ timeLeft;
        ScoreListItem.append(ScoreListItem);
    }

    if (cycle === 1) {
    let newDiv = document.querySelector("#alldone-page");
    newDiv.setAttribute("style", "display:none;");

    let recordpage = document.createElement("div")
    let heading2 = document.createElement("h1");
    let ScoreList = document.createElement("ol");
    let ScoreListItem = document.createElement("li");
    let Clear = document.createElement("button");
    let Goback = document.createElement("button");

    let UserInitial = document.querySelector("#initial");
    let Initial = UserInitial.value;


    recordpage.setAttribute("id", "record-page");
    ScoreList.setAttribute("id", "initialList");
    Clear.setAttribute("id", "clear");
    Clear.setAttribute("onclick", "CrearHighScore()");
    Goback.setAttribute("id", "go-back");
    Goback.setAttribute("onclick", "Goback()");

    
    heading2.textContent = 'High Scores';
    Goback.textContent = "Go-back";
    Clear.textContent = "Clear high score";
    ScoreListItem.textContent = Initial +" - "+ timeLeft;

    main.appendChild(recordpage);
    recordpage.appendChild(heading2);
    recordpage.appendChild(ScoreList);
    ScoreList.appendChild(ScoreListItem);
    recordpage.appendChild(Goback);
    recordpage.appendChild(Clear);
    }

}

function CrearHighScore() {
    console.log("shit");
}

function Goback() {
    count = 0;
    timeLeft = 75;
    remainTime.innerHTML = "remain time : " + timeLeft;
    let recordpage = document.querySelector("#record-page");
    recordpage.setAttribute("style", "display:none;");
    startBtn.setAttribute("style", "display:block;");
    H1.setAttribute("style", "display:block;");
    P1.setAttribute("style", "display:block;");
    P1.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    cycle++;


}

function correct() {
    // initialising line wrong attribute(otherwise it shows correct and wrong at the same time when user try again)//
    Wrong.setAttribute("style", "display : none;");
    //--------------------------------------------------------------------------------------------------------------//
    Result.setAttribute("style", "display : block;"); 
    Correct.setAttribute("style", "display : inline-block;"); 
    question();
    changeChoices();
}


function wrong() {
    // initialising line correct attribute(otherwise it shows correct and wrong at the same time when user try again)//
    Correct.setAttribute("style", "display : none;");
    //--------------------------------------------------------------------------------------------------------------//
    Result.setAttribute("style", "display : block;"); 
    Wrong.setAttribute("style", "display : inline-block;"); 
    timeLeft = timeLeft - 10; //penalty of time(score)
    question();
    changeChoices();
}


//---- initialising correct and wrong attribute function ---// 
function correctandwrongReset() {
    Correct.setAttribute("style", "display : none;"); //---> correct <p> element
    Wrong.setAttribute("style", "display : none;"); //---> wrong <p> element
};
//---------------------------------------------------------------------//











