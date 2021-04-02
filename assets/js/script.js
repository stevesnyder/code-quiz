//declare initial page variables
var currentQuestion = 0;
var timeLeft = quiz.length * 15;


//element variables
var beginBtn = document.querySelector("#begin");
var timeElement = document.querySelector("#time-left");
var quizElement = document.querySelector("#quiz");
var optionsElement = document.querySelector("#options");
function beginQuiz() {
  var initialPage = document.querySelector("#initial-page");
  initialPage.setAttribute("class", "hide"); //css
  quizElement.removeAttribute("class");
  displayQuiz();
}

function displayQuiz() {
    var score = 0;
  
    for (i = 0; i < quiz.length; i++) {
        //remove all children attached to optionsElement, if any
        while (optionsElement.firstChild) {
            optionsElement.removeChild(optionsElement.firstChild);
        }

        //hide the feedback from the previous loop
        var feedback = document.querySelector("#feedback");
        if (feedback.className != "hide") {
            feedback.setAttribute("class", "hide");
        }

        //display question
        var questionElement = document.querySelector("#question");
        questionElement.textContent = quiz[i].question;

        //display choices
        for (j = 0; j < quiz[i].options.length; j++) {
        var optionBtn = document.createElement("button");
        optionBtn.setAttribute("class", "question-button");
        optionsElement.appendChild(optionBtn);
        optionBtn.textContent = quiz[i].options[j];

        function feedback() {
            var feedbackMessage = document.querySelector("#feedback-message");

            if (feedback.classname == "hide"){
                feedback.removeAttribute("class", "hide");
            }
            if (optionBtn.textContent == quiz[i].answer[0]) {
                feedbackMessage.textContent = "Correct!";
                score++;
                timeLeft += 10;
            }
            else{
                feedbackMessage.textContent = "Wrong!";
                timeLeft -= 10;
            }
        }
        optionBtn.onclick = feedback();
        }
        
        
    }
    

}

beginBtn.onclick = beginQuiz;
