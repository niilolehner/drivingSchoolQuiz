
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

    function startQuiz() {
        kysymysTxt.innerHTML = shuffledQuestionArray[currentQuestion].Question;
        vastaus1Btn.innerHTML = shuffledQuestionArray[currentQuestion].RightAnswer;
        vastaus2Btn.innerHTML = shuffledQuestionArray[currentQuestion].WrongAnswer1;
        vastaus3Btn.innerHTML = shuffledQuestionArray[currentQuestion].WrongAnswer2;

        vastaus1Btn.onclick = () => {
            if (shuffledQuestionArray[currentQuestion].RightAnswer == vastaus1Btn.innerHTML) {
                score++;
                streak++;
                next();
            }
            else if (shuffledQuestionArray[currentQuestion].WrongAnswer1 || shuffledQuestionArray[currentQuestion].WrongAnswer2) {
                streak = 0;
                next();
            }
        }

        vastaus2Btn.onclick = () => {
            if (shuffledQuestionArray[currentQuestion].RightAnswer == vastaus2Btn.innerHTML) {
                score++;
                streak++;
                next();
            }
            else if (shuffledQuestionArray[currentQuestion].WrongAnswer1 || shuffledQuestionArray[currentQuestion].WrongAnswer2) {
                streak = 0;
                next();
            }
        }

        vastaus3Btn.onclick = () => {
            if (shuffledQuestionArray[currentQuestion].RightAnswer == vastaus3Btn.innerHTML) {
                score++;
                streak++;
                next();
            }
            else if (shuffledQuestionArray[currentQuestion].WrongAnswer1 || shuffledQuestionArray[currentQuestion].WrongAnswer2) {
                streak = 0;
                next();
            }
        }

        function next() {
            currentQuestion++;
    
            kysymysTxt.innerHTML = shuffledQuestionArray[currentQuestion].Question;
            vastaus1Btn.innerHTML = shuffledQuestionArray[currentQuestion].RightAnswer;
            vastaus2Btn.innerHTML = shuffledQuestionArray[currentQuestion].WrongAnswer1;
            vastaus3Btn.innerHTML = shuffledQuestionArray[currentQuestion].WrongAnswer2;
    
            console.log(currentQuestion);
            console.log(score);
            console.log(streak);
        }
    }

    startQuiz(); 
