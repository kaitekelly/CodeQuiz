let timer = document.querySelector("timer");
let startButton = document.querySelector("btn btn-primary");
let quizStart = document.querySelector("quiz-start");

let quizQuestions = [ {
    question: "Which language is not one of the three core languages of the web?",
    choices: ["CSS", "HTML", "Java", "JavaScript"],
    answer: "Java",
},
{
    question:"JavaScript variables are written in which type of case?",
    choices: ["lowercase", "camelCase", "UPPERCASE", "CapitalCase" ]
    answer: "camelCase",
},
{
    question: "Which language below can change the look and style of a webpage?",
    choices: ["Python", "CSS", "JavaScript", "HTML"],
    answer: "CSS"
},
{
    question:"Fill in the blank: Traversing the _______",
    choices: ["Ruby on Rails", "Python", "Rust", "DOM"],
    answer: "DOM",
},
{
    question: "Which function will display data in the browser console?",
    choices: ["console.log", "document.write[]", "window.alert()", "interHTML"],
    answer: "console.log",
},
]

let currentQuestion = 0;


//WHEN I click the start button


// THEN a timer starts and I am presented with a question


//Questions Start



//WHEN I answer a question


//THEN I am presented with another question


//WHEN I answer a question incorrectly


//THEN time is subtracted from the clock


//WHEN all questions are answered or the timer reaches 0


//THEN the game is over


//THEN I can save my initials and score - Start of Highscore List to add to
let highscoresInput = document.querySelector("highscore-text");
let highscoreForm = document.querySelector("highscore-list");
let highscoreList = document.querySelector("highscore-list");
let highscoreCountSpan = document.querySelector("highscore-count");

let addName = [];

renderHighscores();

function renderHighscores() {
    // Clear highscoreList element and update highscoreCountSpan
    highscoreList.innerHTML = "";
    highscoreCountSpan.textContent = addName.length;

    // Render a new li for each name added
    for (i = 0; i < addName.length; i++) {
        let name = addName[i];

        let li = document.createElement("li");
        li.textContent = name;
        highscoreList.appendChild(li);
    }
}

