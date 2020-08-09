// HTML Element Variables
var startScreen = document.querySelector("#startScreen")
var startButton = document.querySelector("#startButton")
var qScreen = document.querySelector("#questions")

// Questions & Answers
var questions = [
    {question: "This is where we ask the first question?", options: ["option1", "option2", "option3", "option4"], answer: "option3"},
    {question: "This is where we ask the second question?", options: ["option1", "option2", "option3", "option4"], answer: "option3"},
    {question: "This is where we ask the third question?", options: ["option1", "option2", "option3", "option4"], answer: "option3"},
    {question: "This is where we ask the fourth question?", options: ["option1", "option2", "option3", "option4"], answer: "chunky"},
    {question: "This is where we ask the fifth question?", options: ["option1", "option2", "option3", "option4"], answer: "option3"},
]

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
startButton.addEventListener("click", function(){
    startScreen.style.display="none"; // Hides start prompt
    qScreen.style.display="block"; // show questions prompt
})


// populate questions prompt by pulling them from an array of objects


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



