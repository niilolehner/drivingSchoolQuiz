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
    
    function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
 
                // Generate random number
                var j = Math.floor(Math.random() * (i + 1));
 
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
 
            return array;
    }
    
    function startQuiz() {

    let answerArray = [shuffledQuestionArray[currentQuestion].RightAnswer, shuffledQuestionArray[currentQuestion].WrongAnswer1, shuffledQuestionArray[currentQuestion].WrongAnswer2];
    
    var Answers = shuffleArray(answerArray);

    kysymysTxt.innerHTML = shuffledQuestionArray[currentQuestion].Question;
    vastaus1Btn.innerHTML = Answers[0];
    vastaus2Btn.innerHTML = Answers[1];
    vastaus3Btn.innerHTML = Answers[2];

        
    vastaus1Btn.onclick = () => {
        if (shuffledQuestionArray[currentQuestion].RightAnswer == vastaus1Btn.innerHTML) {
            streak++;
            next();
        }
        else if (shuffledQuestionArray[currentQuestion].WrongAnswer1 || shuffledQuestionArray[currentQuestion].WrongAnswer2) {
            checkAndAwardAchievs("casual", 0, 0, streak);
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
            checkAndAwardAchievs("casual", 0, 0, streak);
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
            checkAndAwardAchievs("casual", 0, 0, streak);
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
         let answerArray = [shuffledQuestionArray[currentQuestion].RightAnswer, shuffledQuestionArray[currentQuestion].WrongAnswer1, shuffledQuestionArray[currentQuestion].WrongAnswer2];
        var Answers = shuffleArray(answerArray);
    
        kysymysTxt.innerHTML = shuffledQuestionArray[currentQuestion].Question;
        vastaus1Btn.innerHTML = Answers[0];
        vastaus2Btn.innerHTML = Answers[1];
        vastaus3Btn.innerHTML = Answers[2];

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