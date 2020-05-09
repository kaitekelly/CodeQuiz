//THEN I can save my initials and score - Start of Highscore List to add to

        Highscore variables start here
        let highscoreInput = document.querySelector("highscore-text");
        let highscoreForm = document.querySelector("highscore-form");
        let highscoreList = document.querySelector("highscore-list");
        let highscoreCountSpan = document.querySelector("highscore-count");
        let addName = [];


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

        //When the name is submitted to the list
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

        //local storage code starts here - get stored names from localStorage
        function init() {
            //Parsing the string to the object
            let storedNames = JSON.parse(localStorage.getItem("addName"));

            // if names are retrieved from localStorage, update the addNames array
            if (storedNames !== null) {
                addName = storedNames;
            }

            //Render addName to DOM
            renderAddname();
        }

        function storeNames() {
            //Stringify and set "addName" key to localStorage to todos array
            localStorage.setItem("addName", JSON.stringify(addName));
        }

        // When the form is submitted
        highscoreForm.addEventListener("submit", function(event) {
            event.preventDefault();

            let highscoreText = highscoreInput.value.trim();

            if (highscoreText === "") {
                return;
        }

            //Add new highscoreText to addName array, clear the input
            addName.push(highscoreText);
            highscoreInput.value = "";

            //Store updated addName in localStorage, re-render list
            storeAddname();
            renderAddname();
       