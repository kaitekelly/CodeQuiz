let timer = document.querySelector("#timer");
let startButton = document.querySelector("#start-button");
let quizStart = document.querySelector("#quiz-start");
let questionNumber = document.querySelector("#question-number");
let rules = document.querySelector("#rules");
let correctMessage = document.querySelector("#correct-message");
let questionChoices = document.querySelector(".choices");
let timeLeft = 0;
let currentQuestion;
let currentChoices;
var questionDiv = document.getElementById("question-number");

let userChoice;
let timerEl = document.querySelector("#timer");
let countdownEl = document.querySelector("#countdown");
let mainEl = document.querySelector("main");




var quizQuestions = [{
        question: "Which language is not one of the three core languages of the web?",
        choices: ["CSS", "HTML", "Java", "JavaScript"],
        answer: "Java",
    },
    {
        question: "JavaScript variables are written in which type of case?",
        choices: ["lowercase", "camelCase", "UPPERCASE", "CapitalCase"],
        answer: "camelCase",
    },
    {
        question: "Which language below can change the look and style of a webpage?",
        choices: ["Python", "CSS", "JavaScript", "HTML"],
        answer: "CSS",
    },
    {
        question: "Fill in the blank: Traversing the _______",
        choices: ["Ruby on Rails", "Python", "Rust", "DOM"],
        answer: "DOM",
    },
    {
        question: "Which function will display data in the browser console?",
        choices: ["console.log", "document.write[]", "window.alert()", "interHTML"],
        answer: "console.log",
    },
]

// console.log(quizQuestions);
// console.log(quizQuestions[0]);
// console.log(quizQuestions[i].answer);


// for (i = 0; i < quizQuestions[0].choices.length; i++) {
//     console.log(quizQuestions[0].choices[i])
// }

//WHEN I click the start button

// Event listener for start button - quizQuestions
document.getElementById("start-button").addEventListener("click", function () {
    startButton.style.visibility = "collapse";
    rules.style.visibility = "collapse";
    // questionChoices.style.visibility = "display";
    startTimer();
    print();
})

// Quiz start function starts here 

function startTimer() {

    timeLeft = 75;
    let timerInterval = setInterval(function () {
        countdownEl.textContent = timeLeft;
        timeLeft--;
        (countdownEl.textContent = timeLeft);
        // console.log(timeLeft);
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            alert("Time is up!")
        }
        // timeLeft--10);
    }, 1000);
}

function print() {
    currentQuestion = quizQuestions.shift()
    console.log(currentQuestion);
    currentQuestion.textContent = "";
    document.getElementById("answerSection").textContent = "";
    questionDiv.textContent = currentQuestion.question;
    for (i = 0; i < currentQuestion.choices.length; i++) {
        const button = document.createElement("button");
        button.textContent = currentQuestion.choices[i];
        document.getElementById("answerSection").appendChild(button);
        button.addEventListener("click", verifyAnswer);
    }
    
}



// console.log(quizQuestions[0].choices[i])

function verifyAnswer() {
    // if (event.target === quizQuestions[i].answer) {
    //     correctMessage.textContent = "Correct!";
    // }
    // else {
        correctMessage.textContent = "Wrong answer, you lose 10 seconds from your score.";
        timeLeft = timeLeft - 10;
    // }
    //is the answer they checked on = to answer in global variable
    //use if else statementsk to check answers
    // deduct -10 secons function lives here too
    // call print again whether the answer is right or wrong
}

function endGame() {
    // when timer reaches zero trigger alert and create an input element to submit initials to local storage
  
}