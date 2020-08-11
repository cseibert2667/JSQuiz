// Variables
var startScreen = document.querySelector("#startScreen")
var startButton = document.querySelector("#startButton")
var qScreen = document.querySelector("#questions")
var fScreen = document.querySelector("#final-screen")
var finalScore = document.querySelector("#final-score")
var timer = document.querySelector("#timer")
var questionText = document.querySelector("#question-text")
var choices = document.querySelector(".choices")
var finalButtons = document.querySelector(".end-buttons")
var hsList = document.querySelector("#highscores-list")
var hsInput = document.querySelector("#hs-input")
var remainingTime = 50
var questionIndex = 0
var timerInterval
// Questions & Answers
var questions = [
    { q: "What is the name of the team based in Seattle?", o: ["Seattle Slayers", "Seattle Surge", "Seattle Subliners", "Seattle Soul"], a: "Seattle Surge" },
    { q: "Which was the only team to sign a full roster (5 starters + 5 subs) for the 2020 season?", o: ["Atlanta FaZe", "OpTic Los Angeles", "Dallas Empire", "Toronto Ultra"], a: "Toronto Ultra" },
    { q: 'Which team does Dylan "Envoy" Hannon play for?', o: ["Florida Mutineers", "New York Subliners", "Chicago Huntsmen", "London Royal Ravens"], a: "Chicago Huntsmen" },
    { q: "Which team lead the standings at the end of the 2020 regular season?", o: ["Atlanta FaZe", "Dallas Empire", "Chicago Huntsmen", "Minnesota Røkkr"], a: "Atlanta FaZe" },
    { q: "Out of the 12 pro-league teams, there are only 3 that are NOT based in the US: London Royal Ravens, Toronto Ultra, and ____________", o: ["Venezuela Heretics", "Manchester Mavens", "Sydney Skyline", "Paris Legion"], a: "Paris Legion" },
]
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
startButton.addEventListener("click", function () {
    startScreen.style.display = "none";  // Hides start prompt
    qScreen.style.display = "block";  // show questions prompt
    setTime() // starts timer
    buildQuestion(0);
})



function setTime() {
    timerInterval = setInterval(function () {
        remainingTime--;
        timer.textContent = remainingTime;  // Displays timer
        if (remainingTime === 0) {
            // clearInterval(timerInterval);
            endGame();  // What happens when time runs out
        }
    }, 1000);
}

// populate questions prompt by pulling them from an array of objects
function buildQuestion(i) {
    var question = questions[i].q;
    var options = questions[i].o;
    questionText.textContent = question;
    for (n = 0; n < options.length; n++) {
        var btn = document.createElement("a");
        btn.setAttribute("class", "btn btn-primary");
        btn.setAttribute("value", options[n])
        btn.setAttribute("onclick", "checkAnswer(" + i + ")")
        btn.textContent = options[n];
        choices.appendChild(btn);
    }
}

// WHEN I answer a question
// THEN I am presented with another question
function checkAnswer(i) {
    selectedAnswer = event.target.getAttribute("value");
    answer = questions[i].a;
    if (selectedAnswer === answer) {
        console.log("correct");
        i++;
        if (i > 4) {endGame()}
         else {
             resetQuestion();
             buildQuestion(i);
            }
    }
    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock
    else if (selectedAnswer !== answer) {
        console.log("incorrect");
        i++;
        remainingTime -= 10;
        timer.textContent = remainingTime;
        if (i > 4) {endGame()}
         else {
             resetQuestion();
             buildQuestion(i);
            }
    } else {endGame()}
}
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// display final score, prompt to start over
function endGame (){
    qScreen.style.display = "none";
    fScreen.style.display = "block";
    clearInterval(timerInterval);
    finalScore.textContent = "Your final score is: "+remainingTime;
}

// clear out previous button values when moving to next question
function resetQuestion() {
    choices.innerHTML = ""
}














// BONUS
// WHEN the game is over
// THEN I can save my initials and score



