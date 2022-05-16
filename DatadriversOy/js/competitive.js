"use strict";

// tätä pitää conffata
var startTime, endTime;
var seconds;

function start() {
    startTime = performance.now();
    };

function end() {
  endTime = performance.now();
  var timeDiff = endTime - startTime; //in ms 
  // strip the ms 
  timeDiff /= 1000; 
  
  // get seconds 
  seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
} 

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var newdate = year + "-" + month + "-" + day; 
  
 // storing array for use
let csortedQuestionArray = arrayFromPHP("quizqa");

// shuffling original array (do each time a new set of questions is needed)
let cshuffledQuestionArray = shuffle(csortedQuestionArray); 

const ckysymysTxt = document.getElementById("ckysymys");
const cvastaus1Btn = document.getElementById("cvastaus1");
const cvastaus2Btn = document.getElementById("cvastaus2");
const cvastaus3Btn = document.getElementById("cvastaus3");
const csubmitBtn = document.getElementById("csubmit");
const ctulosTxt = document.getElementById("ctulokset");

csubmitBtn.addEventListener("click", csubmit);

let ccurrentQuestion = 0;
let wrongclick = 0;
let cscore = 0;
let ctotalScore = 0;

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
    
function startFastQuiz() {
            ckysymysTxt.style.visibility = 'hidden';
            cvastaus1Btn.style.visibility = 'hidden';
            cvastaus2Btn.style.visibility = 'hidden';
            cvastaus3Btn.style.visibility = 'hidden';
    
    let canswerArray = [cshuffledQuestionArray[ccurrentQuestion].RightAnswer, cshuffledQuestionArray[ccurrentQuestion].WrongAnswer1, cshuffledQuestionArray[ccurrentQuestion].WrongAnswer2];
    
    var cAnswers = shuffleArray(canswerArray);

    ckysymysTxt.innerHTML = cshuffledQuestionArray[ccurrentQuestion].Question;
    cvastaus1Btn.innerHTML = cAnswers[0];
    cvastaus2Btn.innerHTML = cAnswers[1];
    cvastaus3Btn.innerHTML = cAnswers[2];
    
    csubmitBtn.onclick = () => {
        start();
        console.log(startTime);
            ckysymysTxt.style.visibility = 'visible';
            cvastaus1Btn.style.visibility = 'visible';
            cvastaus2Btn.style.visibility = 'visible';
            cvastaus3Btn.style.visibility = 'visible';
            csubmitBtn.style.visibility = 'hidden';
    }

    cvastaus1Btn.onclick = () => {
        if (cshuffledQuestionArray[ccurrentQuestion].RightAnswer == cvastaus1Btn.innerHTML) {
            cvastaus1Btn.setAttribute('class', 'btn btn-primary m-2 correct');
            setTimeout(() => {
                cvastaus1Btn.classList.remove('correct')
                cvastaus1Btn.setAttribute('class', 'btn btn-primary m-2');
                next();
            }, 300)
        }
        else if (cshuffledQuestionArray[ccurrentQuestion].WrongAnswer1 || cshuffledQuestionArray[ccurrentQuestion].WrongAnswer2) {
            cvastaus1Btn.setAttribute('class', 'btn btn-primary m-2 incorrect');
            wrongclick++;
            setTimeout(() => {
                cvastaus1Btn.classList.remove('incorrect')
            }, 1000)
        }
    }
    cvastaus2Btn.onclick = () => {
        if (cshuffledQuestionArray[ccurrentQuestion].RightAnswer == cvastaus2Btn.innerHTML) {
            cvastaus2Btn.setAttribute('class', 'btn btn-primary m-2 correct');
            setTimeout(() => {
                cvastaus2Btn.classList.remove('correct')
                cvastaus2Btn.setAttribute('class', 'btn btn-primary m-2');
                next();
            }, 300)
        }
        else if (cshuffledQuestionArray[ccurrentQuestion].WrongAnswer1 || cshuffledQuestionArray[ccurrentQuestion].WrongAnswer2) {
            cvastaus2Btn.setAttribute('class', 'btn btn-primary m-2 incorrect');
            wrongclick++;
            setTimeout(() => {
                cvastaus2Btn.classList.remove('incorrect')
            }, 1000)
        }
    }

    cvastaus3Btn.onclick = () => {
        if (cshuffledQuestionArray[ccurrentQuestion].RightAnswer == cvastaus3Btn.innerHTML) {
            cvastaus3Btn.setAttribute('class', 'btn btn-primary m-2 correct');
            setTimeout(() => {
                cvastaus3Btn.classList.remove('correct')
                cvastaus3Btn.setAttribute('class', 'btn btn-primary m-2');
                next();
            }, 300)
        }
        else if (cshuffledQuestionArray[ccurrentQuestion].WrongAnswer1 || cshuffledQuestionArray[ccurrentQuestion].WrongAnswer2) {
            cvastaus3Btn.setAttribute('class', 'btn btn-primary m-2 incorrect');
            wrongclick++;
            setTimeout(() => {
                cvastaus3Btn.classList.remove('incorrect')
            }, 1000)
        }
    }  

    function next() {
            if (ccurrentQuestion == 9) {
                ccurrentQuestion++;
                end();
            
                console.log(ctotalScore + "/" + ccurrentQuestion);
            ckysymysTxt.style.display = 'none';
            cvastaus1Btn.style.display = 'none';
            cvastaus2Btn.style.display = 'none';
            cvastaus3Btn.style.display = 'none';  
            ctulosTxt.innerHTML = "Sait " + ctotalScore + "/10 oikein. Aikasi oli " + seconds + " sekuntia.";

            // variable viemään tulokset databaseen 
            let tulosDatabaseen =
            {
                StudentID: 2,
                Score: ctotalScore,
                Time: seconds,
                Date: newdate
            }
                arrayToPHP(tulosDatabaseen, "endOfCompetitiveQuiz");

                UpdateDatabase();

                checkAndAwardAchievs("competitive", seconds, ctotalScore, 0);

                setTimeout(nextPage, 5000);
    }
    else
    {
            ccurrentQuestion++;

            if (wrongclick == 0) {
            cscore = 1;
            }
            else {
            cscore = 0;
            }
                ctotalScore = ctotalScore + cscore;
                
            let canswerArray = [cshuffledQuestionArray[ccurrentQuestion].RightAnswer, cshuffledQuestionArray[ccurrentQuestion].WrongAnswer1, cshuffledQuestionArray[ccurrentQuestion].WrongAnswer2];
            var cAnswers = shuffleArray(canswerArray);
            
            ckysymysTxt.innerHTML = cshuffledQuestionArray[ccurrentQuestion].Question;
            cvastaus1Btn.innerHTML = cAnswers[0];
            cvastaus2Btn.innerHTML = cAnswers[1];
            cvastaus3Btn.innerHTML = cAnswers[2];
    
            console.log(ccurrentQuestion);
            console.log(ctotalScore);

            cscore = 0;
            wrongclick = 0;
        }
    }

    function nextPage() {
        window.location.href = "./index.php?page=welcome";
    }

    function UpdateDatabase()
    {
        let getDatabaseArray = arrayFromPHP("personalBestForUpdating");
        let oldScore = getDatabaseArray[0].BestScore;
        let oldTime = getDatabaseArray[0].BestTime;
        let oldQuizesDone = getDatabaseArray[0].QuizesDone;

        if (ctotalScore > oldScore || oldScore == "")
            {
            oldScore = ctotalScore;
        }
        
        if (seconds < oldTime || oldTime == "")
        {
            oldTime = seconds;
        }
        
        oldQuizesDone++;

        let newBestForDatabase =
        {
            BestScore: oldScore,
            BestTime: oldTime,
            QuizesDone: oldQuizesDone,
            StudentID: getDatabaseArray[0].StudentID
        }
        console.log(newBestForDatabase);
        arrayToPHP(newBestForDatabase, "personalBestToUpdate");
    }
}
    
startFastQuiz();