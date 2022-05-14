"use strict";

     // storing array for use
    let sortedQuestionArray = arrayFromPHP("quizqa");

    // shuffling original array (do each time a new set of questions is needed)
    let shuffledQuestionArray = shuffle(sortedQuestionArray);

    const kysymysTxt = document.getElementById("kysymys");
    const vastaus1Btn = document.getElementById("vastaus1");
    const vastaus2Btn = document.getElementById("vastaus2");
    const vastaus3Btn = document.getElementById("vastaus3");
    const submitBtn = document.getElementById("submit");

    submitBtn.addEventListener("click", submit);

    let currentQuestion = 0;
    
    let streak = 0;
    let totalScore = 0;
    let score = 0;
    let wrongAnswers = 0;
    
function startQuiz() {
    kysymysTxt.innerHTML = shuffledQuestionArray[currentQuestion].Question;
    vastaus1Btn.innerHTML = shuffledQuestionArray[currentQuestion].RightAnswer;
    vastaus2Btn.innerHTML = shuffledQuestionArray[currentQuestion].WrongAnswer1;
    vastaus3Btn.innerHTML = shuffledQuestionArray[currentQuestion].WrongAnswer2;
        
    vastaus1Btn.onclick = () => {
        if (shuffledQuestionArray[currentQuestion].RightAnswer == vastaus1Btn.innerHTML) {
            streak++;
            next();
        }
        else if (shuffledQuestionArray[currentQuestion].WrongAnswer1 || shuffledQuestionArray[currentQuestion].WrongAnswer2) {
            streak = 0;
            wrongAnswers++;
        }
    }

    vastaus2Btn.onclick = () => {
        if (shuffledQuestionArray[currentQuestion].RightAnswer == vastaus2Btn.innerHTML) {
            streak++;
            next();
        }
        else if (shuffledQuestionArray[currentQuestion].WrongAnswer1 || shuffledQuestionArray[currentQuestion].WrongAnswer2) {
            streak = 0;
            wrongAnswers++;
        }
    }

    vastaus3Btn.onclick = () => {
        if (shuffledQuestionArray[currentQuestion].RightAnswer == vastaus3Btn.innerHTML) {

            streak++;
            next();
        }
        else if (shuffledQuestionArray[currentQuestion].WrongAnswer1 || shuffledQuestionArray[currentQuestion].WrongAnswer2) {
            streak = 0;
            wrongAnswers++;
        }
    }

    submitBtn.onclick = () => {
        kysymysTxt.style.display = 'none';
        vastaus1Btn.style.display = 'none';
        vastaus2Btn.style.display = 'none';
        vastaus3Btn.style.display = 'none';
        //visibility = "hidden"
    }

    function next() {
        currentQuestion++;
    
        kysymysTxt.innerHTML = shuffledQuestionArray[currentQuestion].Question;
        vastaus1Btn.innerHTML = shuffledQuestionArray[currentQuestion].RightAnswer;
        vastaus2Btn.innerHTML = shuffledQuestionArray[currentQuestion].WrongAnswer1;
        vastaus3Btn.innerHTML = shuffledQuestionArray[currentQuestion].WrongAnswer2;

        if (wrongAnswers == 0) {
            score = 1;
        }
        else {
            score = 0;
        }
            
        totalScore = totalScore + score;

        console.log(totalScore + "/" + currentQuestion)
        console.log(streak);

        score = 0;
        wrongAnswers = 0;
    }
}

    startQuiz(); 