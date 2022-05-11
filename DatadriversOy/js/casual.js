
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
    let score = 0;
    let streak = 0;
    let clicks = 0;
    let wrongAnswers = 0;
    
    function startQuiz() {
        kysymysTxt.innerHTML = shuffledQuestionArray[currentQuestion].Question;
        vastaus1Btn.innerHTML = shuffledQuestionArray[currentQuestion].RightAnswer;
        vastaus2Btn.innerHTML = shuffledQuestionArray[currentQuestion].WrongAnswer1;
        vastaus3Btn.innerHTML = shuffledQuestionArray[currentQuestion].WrongAnswer2;

        vastaus1Btn.onclick = () => {
            if (shuffledQuestionArray[currentQuestion].RightAnswer == vastaus1Btn.innerHTML) {
                score++;
                streak++;
                clicks++;
                next();
            }
            else if (shuffledQuestionArray[currentQuestion].WrongAnswer1 || shuffledQuestionArray[currentQuestion].WrongAnswer2) {
                streak = 0;
                clicks = 0;
                wrongAnswers++;
            }
        }

        vastaus2Btn.onclick = () => {
            if (shuffledQuestionArray[currentQuestion].RightAnswer == vastaus2Btn.innerHTML) {
                score++;
                streak++;
                clicks++;
                next();
            }
            else if (shuffledQuestionArray[currentQuestion].WrongAnswer1 || shuffledQuestionArray[currentQuestion].WrongAnswer2) {
                streak = 0;
                clicks++;
                wrongAnswers++;
            }
        }

        vastaus3Btn.onclick = () => {
            if (shuffledQuestionArray[currentQuestion].RightAnswer == vastaus3Btn.innerHTML) {
                score++;
                streak++;
                clicks++;
                next();
            }
            else if (shuffledQuestionArray[currentQuestion].WrongAnswer1 || shuffledQuestionArray[currentQuestion].WrongAnswer2) {
                streak = 0;
                clicks++;
                wrongAnswers++;
            }
        }

        submitBtn.onclick = () => {
            kysymysTxt.style.display = 'none';
            vastaus1Btn.style.display = 'none';
            vastaus2Btn.style.display = 'none';
            vastaus3Btn.style.display = 'none';
            //visibility = "hidden"
            let wrongQ = clicks - currentQuestion;
            let score = wrongQ - wrongAnswers;
            console.log(score + "/" + currentQuestion)
        }

        function next() {
            currentQuestion++;
    
            kysymysTxt.innerHTML = shuffledQuestionArray[currentQuestion].Question;
            vastaus1Btn.innerHTML = shuffledQuestionArray[currentQuestion].RightAnswer;
            vastaus2Btn.innerHTML = shuffledQuestionArray[currentQuestion].WrongAnswer1;
            vastaus3Btn.innerHTML = shuffledQuestionArray[currentQuestion].WrongAnswer2;
    
            console.log(currentQuestion);
            console.log(streak);
        }
    }

    startQuiz(); 
