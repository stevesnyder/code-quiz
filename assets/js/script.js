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
  initialPage.setAttribute('class', "hide"); //css
  quizElement.removeAttribute("class");
}

function isCorrect(userAnswer){

}

function displayQuiz() {
  for (i = 0; i < quiz.length; i++) {
    var questionElement = document.querySelector("#question");
    questionElement.textContent = quiz[i].question;

    for (j = 0; j < quiz[i].options.length; j++) {
      var question = document.createElement("button");
      question.setAttribute('class', "question-button");
      optionsElement.appendChild(question);
      question.textContent = quiz[i].options[j];
      question.onclick = 

      
      
      
        
    }

  }
}
displayQuiz();
//beginBtn.onclick = beginQuiz;
