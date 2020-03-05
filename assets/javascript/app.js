
//starting out with my global variables. I learned that I can place a prompt within the variable and run this in an  array. So this variable contains all my questions and answers.
var question = [
    {
        prompt: "What is the name of this game?\n(a) Question game\n\(b) Name Game\n(c) Trivia game",
        answer: "c"
    },
    {
        prompt: "Where do babies come from?\n(a) Storks\n\(b) Birds and Bees\n(c) Amazon",
        answer: "c"
    },
    {
        prompt: "Do you like Javascript?\n(a) I LOVE JAVASCRIPT!\n\(b) I don't drink coffee\n(c) I Hate Javascript",
        answer: "c"
    },
    {
        prompt: "Do you complete your homework when you are supposed to?\n(a) My Dog ate my Homework\n\(b) Sometimes \n(c) There was homework?",
        answer: "a"
    },
    {
        prompt: "What is the meaning of life?\n(a) Love!\n\(b) 42\n(c) Definitely not Javascript",
        answer: "b"
    }
]

//variables to set the score at zero and a place to track wins and losses
var wins = 0;
var losses = 0;

//adding button function. When button clicked on index page, game will start
$("#start").on("click", function () {


    //here i created a "for" loop that will run through my question variable, cycling through all the questions. 
    for (var i = 0; i < question.length; i++) {
        //now I create a variable for the users response
        var response = window.prompt(question[i].prompt);
        //now we need an if statement to check if the answer is correct. if so then it will add to the score variable and then alert the user correct. If it is not correct then it is automatically sent to the else statement and alert incorrect.
        if (response == question[i].answer) {
            wins++;
            alert("Correct!");
            $("#wins").html(wins);
        } else {
            losses++
            alert("Incorrect!");
            $("#losses").html(losses);
        }
    }
})


//I am missing a timer and style of the game. Also I would change the prompts to a document.write function to write the question in HTML on the index.html page. Then when the time is up it would display all the correct number of correct and incorrect answers. 
