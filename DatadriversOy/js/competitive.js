"use strict";

// let count;
// let seconds = 0;

// function start(){
//  count = setInterval(timer,1000)  /// ajastin käyntiin
// }

// function timer(){
//     document.getElementById('ctulokset').innerText++;
//     seconds++;
// }

// function end(){
//   clearInterval(count)   /// ajastin pysähtyy
// }

let count = 0,
    minutesSeconds = 0, 
    seconds = 0, 
    minutes = 0,
    totalSeconds = 0;

//Ajastin, joka tulostaa näytölle kuluvan ajan.
function timer() {
	seconds += 1;
        if (seconds == 60) {
            seconds = 0;
            minutes += 1;
        }
    let sec = seconds < 10 ? "0" + seconds : seconds;
    let min = minutes < 10 ? "0" + minutes : minutes;
	document.getElementById("ctulokset").innerHTML = min + "." + sec;
}

//Laskee kokonaisajan 
function minutesToSeconds() {
    while (minutes > 0) {
        minutesSeconds += 60;
        minutes--;
    }
    return minutesSeconds;
}

function start(){
    count = setInterval(timer, 1000);  /// ajastin käyntiin
}

function end(){
  clearInterval(count)   /// ajastin pysähtyy
}

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var newdate = year + "-" + month + "-" + day; 

//checkup is the student can do the quiz
function CheckAvailability()
{
    let feedbackGiven;
    let AvailabilityArray = arrayFromPHP("AvailabilityForCompetitive");

    console.log(AvailabilityArray[0]);

    if (AvailabilityArray[0] !== undefined)
    {
        feedbackGiven = AvailabilityArray[0].FeedbackGiven;
    }
    else
    {
        feedbackGiven = "2";
    }

    console.log(feedbackGiven);
 
        if (feedbackGiven === "2") {
            //nothing
        }
        else {
            Swal.fire({
                text: "Olet jo tehnyt testin! Odota, että saat palautetta ennen uutta yritystä.",
                confirmButtonColor: '#27804c',
                imageUrl: 'images/stop.png',
                imageWidth: 300,
                imageHeight: 300,
                imageAlt: 'Custom image',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "./index.php?page=welcome";
                }
            })
        }
    }
    
  
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
        //console.log(startTime);
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
                console.log(count);
                end();
            
                console.log(ctotalScore + "/" + ccurrentQuestion);
            ckysymysTxt.style.display = 'none';
            cvastaus1Btn.style.display = 'none';
            cvastaus2Btn.style.display = 'none';
            cvastaus3Btn.style.display = 'none';  
            // ctulosTxt.innerHTML = "Sait " + ctotalScore + "/10 oikein. Aikasi oli " + seconds + " sekuntia.";
            let sec = seconds < 10 ? "0" + seconds : seconds;
            let min = minutes < 10 ? "0" + minutes : minutes;  
            ctulosTxt.innerHTML = minutes > 0 ? 
                                    "Sait " + ctotalScore + "/10 oikein. Aikasi oli " + min + "." + sec + "."
                                    : 
                                    "Sait " + ctotalScore + "/10 oikein. Aikasi oli " + sec + " sekuntia.";
            
            minutesToSeconds();
            totalSeconds = minutesSeconds + seconds;
            console.log(totalSeconds);

            function plusQuizesDone()
            {
                let getDatabaseArray = arrayFromPHP("quizesDoneData");
                let oldQuizesDone = getDatabaseArray[0].QuizesDone;

                oldQuizesDone++;

                let newQuizesDone =
                {
                    QuizesDone: oldQuizesDone,
                    StudentID: getDatabaseArray[0].StudentID
                }
                arrayToPHP(newQuizesDone, "plusQuizesDoneData");
            }

            plusQuizesDone();

            // checkAndAwardAchievs("competitive", seconds, ctotalScore, 0);
            checkAndAwardAchievs("competitive", totalSeconds, ctotalScore, 0);

            // variable viemään tulokset databaseen
            let getStudentID = arrayFromPHP("currentStudentID");
            let tulosDatabaseen =
            {
                StudentID: getStudentID[0].StudentID,
                Score: ctotalScore,
                Time: totalSeconds,
                Date: newdate
            }

            arrayToPHP(tulosDatabaseen, "endOfCompetitiveQuiz");

            UpdateDatabase();

            setTimeout(nextPage, 10000);
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
        window.location.href = "./index.php?page=scoreboard";
    }

    function UpdateDatabase()
    {
        let getDatabaseArray = arrayFromPHP("personalBestForUpdating");
        let oldScore = getDatabaseArray[0].BestScore;
        let oldTime = getDatabaseArray[0].BestTime;
        // let oldQuizesDone = getDatabaseArray[0].QuizesDone;

        if (ctotalScore > oldScore || oldScore === "0")
            {
            oldScore = ctotalScore;
        }
        
        if (totalSeconds < oldTime || oldTime === "0")
        {
            oldTime = totalSeconds;
        }
        
        // oldQuizesDone++;

        let newBestForDatabase =
        {
            BestScore: oldScore,
            BestTime: oldTime,
            // QuizesDone: oldQuizesDone,
            StudentID: getDatabaseArray[0].StudentID
        }
        console.log(newBestForDatabase);
        arrayToPHP(newBestForDatabase, "personalBestToUpdate");
    }
}

CheckAvailability();
startFastQuiz();