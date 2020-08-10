// Variables
var startScreen = document.querySelector("#startScreen")
var startButton = document.querySelector("#startButton")
var qScreen = document.querySelector("#questions")
var timer = document.querySelector("#timer")
var questionText = document.querySelector("#question-text")
var choices = document.querySelector(".choices")
var option1 = document.querySelector("#option1")
var option2 = document.querySelector("#option2")
var option3 = document.querySelector("#option3")
var option4 = document.querySelector("#option4")
var startingTime = 100
var questionIndex = 0

// Questions & Answers
var questions = [
    { q: "This is where we ask the first question?", o: ["cake", "bunny", "stick", "lettuce"], a: "bunny" },
    { q: "This is where we ask the second question?", o: ["option0", "option2", "option3", "option4"], a: "option0" },
    { q: "This is where we ask the third question?", o: ["option1", "option2", "option3", "option4"], a: "option3" },
    { q: "This is where we ask the fourth question?", o: ["chunky", "option2", "option3", "option4"], a: "chunky" },
    { q: "This is where we ask the fifth question?", o: ["option1", "option2", "option3", "option4"], a: "option4" },
]
// debugger;
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
startButton.addEventListener("click", function () {
    startScreen.style.display = "none";  // Hides start prompt
    qScreen.style.display = "block";  // show questions prompt
    setTime() // starts timer

    showQuestion(questionIndex);
    checkAnswer(questionIndex);
})


function setTime() {
    var timerInterval = setInterval(function () {
        startingTime--;
        timer.textContent = "Score: " + startingTime;  // Displays timer

        if (startingTime === 0) {
            clearInterval(timerInterval);
            console.log("times up");  // What happens when time runs out
        }

    }, 1000);
}

// populate questions prompt by pulling them from an array of objects
function showQuestion(i) {
    var question = questions[i].q;
    var options = questions[i].o;
    questionText.textContent = question;
    for (n = 0; n < options.length; n++) {
        var btn = document.createElement("a");
        btn.setAttribute("class", "btn btn-primary");
        btn.setAttribute("value", options[n])
        btn.textContent = options[n];
        choices.appendChild(btn);
    }
}


function checkAnswer(i) {
    choices.addEventListener("click", function (e) {
        btnValue = e.target;
        selectedAnswer = btnValue.getAttribute("value");

        if (selectedAnswer === null) { return } // do nothing if button is not clicked
        else if (selectedAnswer === questions[i].a) {
            console.log("correct");

            //correct
        } else {
            console.log("incorrect")

            //incorrect

        }
    }
    )
}


function resetQuestion() {
    while (choices.firstChild) {
        choices.removeChild(choices.firstChild)
    }
}





// WHEN I answer a question
// THEN I am presented with another question
// for loop to pass in questions and button values until there are none left
// make sure to clear out previous button values when moving to next question


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// display final score, prompt to start over


// BONUS
// WHEN the game is over
// THEN I can save my initials and score



