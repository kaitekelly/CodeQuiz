let timer = document.querySelector("#timer");
let startButton = document.querySelector("#start-button");
let quizStart = document.querySelector("#quiz-start");
let questionNumber = document.querySelector("p");
let rules = document.querySelector("#rules");
let correctMessage = document.querySelector("#correct-message");
let questionChoices = document.querySelector(".choices")
let timeLeft = 0;
let currentQuestion = 0;

let quizQuestions = [{
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
console.log(quizQuestions);

//WHEN I click the start button


let userChoice = 0;
let timerEl = document.querySelector("#timer");
let countdownEl = document.querySelector("#countdown");
let mainEl = document.querySelector("main");

//Highscore variables start here
let highscoreInput = document.querySelector("highscore-text");
let highscoreForm = document.querySelector("highscore-form");
let highscoreList = document.querySelector("highscore-list");
let highscoreCountSpan = document.querySelector("highscore-count");
let addName = [];

// Event listener for start button - quizQuestions

document.getElementById("start-button").addEventListener("click", function () {
    startButton.style.visibility = "hidden";
    rules.style.visibility = "hidden";
    beginQuiz();
    
})
// Quiz start function starts here 
//WHEN I answer a question
//THEN I am presented with another question

function beginQuiz() {
    // Loop over every question
    // for (let i = 0; i < quizQuestions.length; i++) {
    //     // Is this statement below written correctly?
    //     let questionNumber = questionNumber(quizQuestions[i].question);
    // }
    timeLeft = 75;
    let timerInterval = setInterval(function () {
        countdownEl.textContent = timeLeft;
        timeLeft--;
        (countdownEl.textContent = timeLeft);
        console.log(timeLeft);
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            alert("Time is up!")
        }
        // timeLeft--10);
    }, 1000);

    // start if statements to check if answers are correct 
    // if (userChoice === quizQuestions[0].answer) {
    //     correctMessage = prompt("Correct!");
    //     //WHEN I answer a question incorrectly
    // } else { // not sure how to write else code
    //     userChoice !== quizQuestion[0].answer()
    //     textDisplay = "Wrong! You lose 10 seconds!"

    // }
}

//Code to put answers on to buttons  - this code doesn't work...


function buttonName() {
    let choicesBtn = ["btn1", "btn2", "btn3", "btn4"];
    for (let i = 0; i < choicesBtn.length; i++) {
        document.getElementById(choicesBtn[i]).innerText += "<button>" + choicesBtn[i] + "</button>";
    }
}


//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over

// Need to figure out how to get timer button working and how to deduct -10 if answer is wrong


// else (timeLeft < 0) {
// timer stops and user is taken to the highscores page
// }


// })

function render() {
    let questionData = quizQuestions[currentQuestion];
    $("#question").text(questionData.question);
    $("#choices").empty();
    // should i include <li>? i took the <li> out of my buttons and am using just <button> for the answers now
    for (let i = 0; i < questionData.choices; i++) {
        $("#choices").append($("<li>").text(questionData.choices[i]));
    }
    currentQuestion + -1;
    if (currentQuestion === questionData.length) {
        currentQuestion = 0;
    }
}

// $("#submit").click(render)




//THEN I can save my initials and score - Start of Highscore List to add to




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

// //When the name is submitted to the list
highscoreForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let highscoreText = highscoreInput.value.trim();

    if (highscoreText === "") {
        return;
    }

    //Add new highscoreText to addName array, clear the input
    addName.push(highscoreText);
    highscoreInput.value = "";

    //Re-render the highscore list
    storeNames();
    renderHighscores();

});

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