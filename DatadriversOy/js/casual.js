"use strict";

     // kysymys-vastaus-array databasesta
    let sortedQuestionArray = arrayFromPHP("quizqa");

    // sekoitetaan kysymykset arrayssa
    let shuffledQuestionArray = shuffle(sortedQuestionArray);

    //etsitään quizia varten tarvittavat elementit html:sta
    const kysymysTxt = document.getElementById("kysymys");
    const vastaus1Btn = document.getElementById("vastaus1");
    const vastaus2Btn = document.getElementById("vastaus2");
    const vastaus3Btn = document.getElementById("vastaus3");
    const submitBtn = document.getElementById("submit");
    const tulosTxt = document.getElementById("tulokset");

    submitBtn.addEventListener("click", submit); //klinkin kuuntelija

    //määritellään variablet tuloksia varten
    let currentQuestion = 0;
    let streak = 0;
    let totalScore = 0;
    let score = 0;
    let wrongAnswers = 0;
    
    //sekoitusfunktio vastauksia varten
    function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
    }
    
    //quizin aloitusfunktio
    function startQuiz() {
        //vastuksille array
    let answerArray = [shuffledQuestionArray[currentQuestion].RightAnswer, shuffledQuestionArray[currentQuestion].WrongAnswer1, shuffledQuestionArray[currentQuestion].WrongAnswer2];
        //seloitetaan vastaukset arrayssa
    var Answers = shuffleArray(answerArray);
        //asetetaan kysymykset ja vastaukset paikoilleen html:ssa
    kysymysTxt.innerHTML = shuffledQuestionArray[currentQuestion].Question;
    vastaus1Btn.innerHTML = Answers[0];
    vastaus2Btn.innerHTML = Answers[1];
    vastaus3Btn.innerHTML = Answers[2];
        
        //tarkistetaan jokaisesta napista onko vastaus oikein/väärin, muutetaan napin värit, sijoitetaan tuloksia variableihin
        //tarkistetaan myös streak-achievementin saavutusta 
    vastaus1Btn.onclick = () => {
        if (shuffledQuestionArray[currentQuestion].RightAnswer == vastaus1Btn.innerHTML) {
            vastaus1Btn.setAttribute('class', 'btn btn-primary m-2 correct');
            streak++;
            checkAndAwardAchievs("casual", 0, 0, streak); 
            setTimeout(() => {
                vastaus1Btn.classList.remove('correct')
                vastaus1Btn.setAttribute('class', 'btn btn-primary m-2');
                next();
            }, 1000)
        }
        else if (shuffledQuestionArray[currentQuestion].WrongAnswer1 || shuffledQuestionArray[currentQuestion].WrongAnswer2) {
            vastaus1Btn.setAttribute('class', 'btn btn-primary m-2 incorrect');
            streak = -1;
            wrongAnswers++;
            setTimeout(() => {
                vastaus1Btn.classList.remove('incorrect')
            }, 1000)
        }
    }
    vastaus2Btn.onclick = () => {
        if (shuffledQuestionArray[currentQuestion].RightAnswer == vastaus2Btn.innerHTML) {
            vastaus2Btn.setAttribute('class', 'btn btn-primary m-2 correct');
            streak++;
            checkAndAwardAchievs("casual", 0, 0, streak); 
            setTimeout(() => {
                vastaus2Btn.classList.remove('correct')
                vastaus2Btn.setAttribute('class', 'btn btn-primary m-2');
                next();
            }, 1000)
        }
        else if (shuffledQuestionArray[currentQuestion].WrongAnswer1 || shuffledQuestionArray[currentQuestion].WrongAnswer2) {
            vastaus2Btn.setAttribute('class', 'btn btn-primary m-2 incorrect');
            streak = -1;
            wrongAnswers++;
            setTimeout(() => {
                vastaus2Btn.classList.remove('incorrect')
            }, 1000)
        }
    }
    vastaus3Btn.onclick = () => {
        if (shuffledQuestionArray[currentQuestion].RightAnswer == vastaus3Btn.innerHTML) {
            vastaus3Btn.setAttribute('class', 'btn btn-primary m-2 correct');
            streak++;
            checkAndAwardAchievs("casual", 0, 0, streak); 
            setTimeout(() => {
                vastaus3Btn.classList.remove('correct')
                vastaus3Btn.setAttribute('class', 'btn btn-primary m-2');
                next();
            }, 1000)
        }
        else if (shuffledQuestionArray[currentQuestion].WrongAnswer1 || shuffledQuestionArray[currentQuestion].WrongAnswer2) {
            vastaus3Btn.setAttribute('class', 'btn btn-primary m-2 incorrect');
            streak = -1;
            wrongAnswers++;
            setTimeout(() => {
                vastaus3Btn.classList.remove('incorrect')
            }, 1000)
        }
    }

        //harjoittelu lopetusnappulasta kysymykset/vastaukset piiloon, sekä tulosten ilmoittaminen
    submitBtn.onclick = () => {
        kysymysTxt.style.display = 'none';
        vastaus1Btn.style.display = 'none';
        vastaus2Btn.style.display = 'none';
        vastaus3Btn.style.display = 'none';
        submitBtn.style.display = 'none';

        tulosTxt.innerHTML = "Sait " + totalScore + "/" + currentQuestion + " oikein.";

        setTimeout(nextPage, 5000);
    }

        //siirrytään pois sivulta
        function nextPage() {
        window.location.href = "./index.php?page=scoreboard";
        }
        
    //kun on vastattu kysymykseen oikein, laitetaan seuraavan kysymys, sufflataan vastaukset, lasketaan sen hetkiset pisteet 
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

        //nollataan variablet uutta kierrosta varten
        score = 0;
        wrongAnswers = 0;
    }
}

    startQuiz(); 