let remainTime = document.querySelector("#timer");
let startBtn = document.querySelector("#start");
let choiceBtns = document.querySelector("#choiceBtns");
let nextBtn = document.querySelector("#next");
let viewrecord = document.querySelector("#viewrecord");

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

let choices = { Q1: ['Hammering', 'Hoisting', 'Cutting', 'Pasting'], Q2: ['let', 'var', 'get', 'const'], Q3: ['event.preventDefault()', 'event.blockDefault()', 'event.stopDefault()', 'event.dropDefault()'] }


// ------------actions when startbutton is clicked----------//
startBtn.addEventListener("click", timer);
startBtn.addEventListener("click", question);
startBtn.addEventListener("click", Q1Choicesorder);



function timer() {
    timeInterval = setInterval(() => {
        remainTime.innerHTML = "remain time : " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
            deletemadeBtns();
            buildALLDONEpage();
            return;
        } // --> timer off when the left time is 0.

        if (count > 3) {
            clearInterval(timeInterval);
            return;
        } // --> timer off when the quiz is done(when user arrive on alldone page).
        // --> it should be finished before one more timeLeft--; 
        //--> otherwise when call timeLeft on recordpage, timeLeft will be 1 second less than the timeLeft on score page.

        timeLeft--;


    }, 1000)
}


function question() {
    let i = count;
    P1.textContent = questions[i];
    count++;
    startBtn.setAttribute("style", "display:none;");
} //--> count starts from 0 so call a question in question array in order.
//--> hiding startBtn when quiz starts. 
//--> The reason why the count++ is added, index of question array starts from 0 but what we see for questions starts from 1.
//-->

function Q1Choicesorder() {

    choiceBtns.setAttribute("style", "display:flex;");
    //--> when count becomes 4 that alldonepage pops up, all the buttons for choices will be removed.
    //--> so when the count become 1 which the first question of quiz starts set the buttons display as a flex.
    //--> it doesn't have to be given when count becomes 2,3 because the style attribute already set up before.

    for (i = 0; i < choices.Q1.length; i++) {
        let button = document.createElement("button");
        button.setAttribute('class', 'choices');
        button.textContent = choices.Q1[i];
        choiceBtns.appendChild(button);
    }
    //--> when count is 0 like first try or greater than or equal to that second cycle, make the new buttons for choice.
    //--> because all the buttons will be removed when count become 4 that alldonepage pops up 

    choiceBtns.children[0].setAttribute('onclick', 'wrong()');
    choiceBtns.children[1].setAttribute('onclick', 'correct()');
    choiceBtns.children[2].setAttribute('onclick', 'wrong()');
    choiceBtns.children[3].setAttribute('onclick', 'wrong()');
    // --> set each buttons' attribute as onclick so that call correct or wrong functions when it's clicked.

}

function changeChoices() {
    //--> used if statement because question2 and question3's object elements are different//
    if (count === 2) {
        for (i = 0; i < choices.Q2.length; i++) {
            let button = document.querySelector("#choiceBtns");
            button.children[i].textContent = choices.Q2[i];
        }
        choiceBtns.children[0].setAttribute('onclick', 'wrong()');
        choiceBtns.children[1].setAttribute('onclick', 'wrong()');
        choiceBtns.children[2].setAttribute('onclick', 'correct()');
        choiceBtns.children[3].setAttribute('onclick', 'wrong()');
    } // --> because when count was 1 (while executing Q1Choicesorder function), all the buttons already made,
    // --> so it only needs is setting each buttons' attribute as onclick so that call correct or wrong functions when it's clicked.

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
        //--> when count becomes 4, all the buttons is removed. because when it is on second cycle or more
        //    the count will be reset to 0 so it will make all new buttons again
    }
}

function buildALLDONEpage() {

    H1.setAttribute("style", "display:none;"); // ---> hide h1(Coding Quiz Challenge)
    P1.setAttribute("style", "display:none;"); // ---> hide p element(Try to answer~~)

    if (cycle === 1) {
        let AlldonePage = document.createElement("div");
        let heading1 = document.createElement("h1");
        let Paragraph1 = document.createElement("p");
        let Form1 = document.createElement("form");
        let Input1 = document.createElement("input");
        let Submit = document.createElement("button");
        AlldonePage.setAttribute("id", "alldone-page");
        AlldonePage.setAttribute("style", "display:block;");
        Paragraph1.setAttribute("id", "yourscore");
        Form1.setAttribute("for", "initial");
        Input1.setAttribute("id", "initial");
        Submit.setAttribute("id", "submit");
        Submit.setAttribute("onclick", "recordPage()");
        heading1.textContent = 'All done!!';
        Paragraph1.textContent = 'your final score is ' + timeLeft + '.';
        Form1.textContent = "initial : ";
        Submit.textContent = "Submit";
        main.appendChild(AlldonePage);
        AlldonePage.appendChild(heading1);
        AlldonePage.appendChild(Paragraph1);
        AlldonePage.appendChild(Form1);
        Form1.appendChild(Input1);
        AlldonePage.appendChild(Submit);
    }

    if (cycle >= 2) {
        let AlldonePage = document.querySelector("#alldone-page");
        AlldonePage.setAttribute("style", "display:block;");
        let Paragraph1 = document.querySelector("#yourscore");
        Paragraph1.textContent = 'your final score is ' + timeLeft + '.';
    }

}

// --> when it is on first cycle, it will make all the elements in alldone-page.
// --> when it is on second cyle or more, it will just call alldone-page which is already made on first cycle
// --> and changes only the score part which is related on timeLeft. 





function recordPage() {
    Result.setAttribute("style", "display:none;");
    let AlldonePage = document.querySelector("#alldone-page");
    AlldonePage.setAttribute("style", "display:none;");
    correctandwrongReset();

    if (cycle === 1) {
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
        ScoreListItem.setAttribute("id", "scorelist");
        Clear.setAttribute("id", "clear");
        Clear.setAttribute("onclick", "CrearHighScore()");
        Goback.setAttribute("id", "go-back");
        Goback.setAttribute("onclick", "Goback()");


        heading2.textContent = 'High Scores';
        Goback.textContent = "Go-back";
        Clear.textContent = "Clear high score";
        ScoreListItem.textContent = Initial + " - " + timeLeft;

        main.appendChild(recordpage);
        recordpage.appendChild(heading2);
        recordpage.appendChild(ScoreList);
        ScoreList.appendChild(ScoreListItem);
        recordpage.appendChild(Goback);
        recordpage.appendChild(Clear);
    }

    if (cycle >= 2) {
        let recordpage = document.querySelector("#record-page");
        recordpage.setAttribute("style", "display:block;");
        let ScoreListItem = document.querySelector("#scorelist");
        let ScoreListItem2 = document.createElement("li");
        let UserInitial = document.querySelector("#initial");
        let Initial = UserInitial.value;
        ScoreListItem2.textContent = Initial + " - " + timeLeft;
        ScoreListItem.append(ScoreListItem2);
    }
    localStorage.setItem('user-Initial', Initial); // --> saving user's Initial.
    localStorage.setItem('user-score', timeLeft); // --> saving user's score.

}
// --> when it is on first cycle, it will make all the elements in record-page.
// --> when it is on second cyle or more, it will just call record-page which is already made on first cycle
// --> and adds only the user's initial and score on score board.


function CrearHighScore() {
    let ScoreList = document.querySelector("ol");
    ScoreList.setAttribute("style", "display:none");
    let ScoreListItem = document.querySelector("#scorelist");
    ScoreListItem.textContent = " ";
    ScoreListItem.setAttribute("style", "display:none");
    cycle = 0;
}

// --> when the clearhighscore button is clicked, hides ol, li element and changes the text inside of li element to ' '. 
// --> reset cycle to 0 to prevent the cycle going big number (to make a loop).
// --> cycle will always be +1 when the goback button is clicked. so needed to reset to 0 not 1.


function Goback() {
    count = 0;
    timeLeft = 75;
    remainTime.innerHTML = "remain time : 0";
    // --> reset count to 0 which is initial count to make infinite loop
    // --> reset timeLeft to 75 which is initial timeLeft
    // --> put "remain time : 0" which is first page shows into p element

    if (cycle === 0) {
        let AlldonePage = document.querySelector("#alldone-page");
        AlldonePage.remove();
        let recordpage = document.querySelector("#record-page");
        recordpage.remove();
        H1.setAttribute("style", "display:block;");
        P1.setAttribute("style", "display:block;");
        P1.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
        startBtn.setAttribute("style", "display:block;");
    } else {

        let recordpage = document.querySelector("#record-page");
        recordpage.setAttribute("style", "display:none;");
        startBtn.setAttribute("style", "display:block;");
        H1.setAttribute("style", "display:block;");
        P1.setAttribute("style", "display:block;");

        P1.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
        let UserInitial = document.querySelector("#initial");
        UserInitial.value = " ";
    }

    cycle++;

    // --> cycle === 0 means user clicked clear high score button.
    // --> when cycle starts from 0 (go back button make cycle +1), all the functions related to pages will make fresh new page again.
    // --> so it remove all the pages that was made before.
    // --> In other cases, it will just turn on or off page or elements to go back to first page.

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


//---- show record page when user click view record text ---// 
function viewRecord() {
    if (cycle > 1) {
        let recordpage = document.querySelector("#record-page");
        recordpage.setAttribute("style", "display:block");
    } else {
        alert("There is no record yet");
    }
}
// --> when cycle > 1 means at least 1 score stored in record page so just show the record page.
// --> In other case, when cycle is 1 , that means user clicked clear high score button. so alert window pops up.


// ---> deleting already made buttons for choices -----//
function deletemadeBtns() {
    for (i = 0; i < choices.Q3.length; i++) {
        choiceBtns.children[0].remove();
        choiceBtns.setAttribute("style", "display:none;");
    }; 
}
// ---> when timeLeft is 0, it means it skips the action which is in changechoices function when the count is 4
// ---> so this is the function for deleting the buttons as same as the action when count is 4 in changechoices function



