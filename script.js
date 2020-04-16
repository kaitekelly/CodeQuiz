let timer = document.querySelector(".timer");
let startButton = document.querySelector("#start-button");
let quizStart = document.querySelector(".quiz-start");

let quizQuestions = [ {
    question: "Which language is not one of the three core languages of the web?",
    choices: ["CSS", "HTML", "Java", "JavaScript"],
    answer: "Java",
},
{
    question:"JavaScript variables are written in which type of case?",
    choices: ["lowercase", "camelCase", "UPPERCASE", "CapitalCase" ],
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
// to check your answer, place in i or 
quizQuestions[0].answer





let timerEl = querySelector("timer");
let countdownEl = querySelector("#countdown");
let mainEl = querySelector("main");
let timeLeft = 

startButton.addEventListener("click", function(){
    let timerBegin = 75;

    let timeInterval = setInterval(function() {
        countdownEl.textContent = timeLeft;
        timeLeft--;  
        if ( //countdownEl.textContent = timeLeft;
        timeLeft-10;

        if (timeLeft < 0) {
            // timer stops and user is taken to the highscores page
        }
    })

    render()
})

function render() {
    let questionData = quizQuestions[currentQuestion];
    $("#question").text(questionData.question);
    $("#choices").empty();

    for (let i = 0; i < questionData.choices; i++) {
        $("#options").append($("<li>").text(questionData.choices[i]));
    }
    currentQuestion +- 1;
    if (currentQuestion === quizQuestions.length) {
        currentQuestion = 0;
    }
}

$("#submit").click(render)



//Questions for loop
// for (i = 0; i < quizQuestions.length; i++ ) {
//     let response = 
// }
// add function to start quiz here

// THEN a timer starts and I am presented with a question


//Questions Start



//WHEN I answer a question


//THEN I am presented with another question


//WHEN I answer a question incorrectly


//THEN time is subtracted from the clock


//WHEN all questions are answered or the timer reaches 0


//THEN the game is over


//THEN I can save my initials and score - Start of Highscore List to add to
// let highscoreInput = document.querySelector("highscore-text");
// let highscoreForm = document.querySelector("highscore-form");
// let highscoreList = document.querySelector("highscore-list");
// let highscoreCountSpan = document.querySelector("highscore-count");

// let addName = [];

// renderHighscores();

// function renderHighscores() {
//     // Clear highscoreList element and update highscoreCountSpan
//     highscoreList.innerHTML = "";
//     highscoreCountSpan.textContent = addName.length;

//     // Render a new li for each name added
//     for (i = 0; i < addName.length; i++) {
//         let name = addName[i];

//         let li = document.createElement("li");
//         li.textContent = name;
//         highscoreList.appendChild(li);
//     }
// }

// //When the name is submitted to the list
// highscoreForm.addEventListener("submit", function(event) {
//     event.preventDefault();

//     let highscoreText = highscoreInput.value.trim();

//     if (highscoreText === "") {
//         return;
//     }

//     //Add new highscoreText to addName array, clear the input
//     addName.push(highscoreText);
//     highscoreInput.value = "";

//     //Re-render the highscore list
//     storeNames();
//     renderHighscores();

// });

// //local storage code starts here - get stored names from localStorage
// function init() {
//     //Parsing the string to the object
//     let storedNames = JSON.parse(localStorage.getItem("addName"));

//     // if names are retrieved from localStorage, update the addNames array
//     if (storedNames !== null) {
//         addName = storedNames;
//     }

//     //Render addName to DOM
//     renderAddname();
// }

// function storeNames() {
//     //Stringify and set "addName" key to localStorage to todos array
//     localStorage.setItem("addName", JSON.stringify(addName));
// }

//When the form is submitted
// highscoreForm.addEventListener("submit", function(event) {
//     event.preventDefault();

//     let highscoreText = highscoreInput.value.trim();

//     if (highscoreText === "") {
//         return;
// }

//     //Add new highscoreText to addName array, clear the input
//     addName.push(highscoreText);
//     highscoreInput.value = "";

//     //Store updated addName in localStorage, re-render list
//     storeAddname();
//     renderAddname();
// }); 