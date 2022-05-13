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

    csubmitBtn.addEventListener("click", csubmit);

    let ccurrentQuestion = 0;
    let wrongclick = 0;
    let cscore = 0;
    let ctotalScore = 0;


function startFastQuiz() {
            ckysymysTxt.style.visibility = 'hidden';
            cvastaus1Btn.style.visibility = 'hidden';
            cvastaus2Btn.style.visibility = 'hidden';
            cvastaus3Btn.style.visibility = 'hidden';
    
    csubmitBtn.onclick = () => {
        start();
            ckysymysTxt.style.visibility = 'visible';
            cvastaus1Btn.style.visibility = 'visible';
            cvastaus2Btn.style.visibility = 'visible';
            cvastaus3Btn.style.visibility = 'visible';
            csubmitBtn.style.visibility = 'hidden';
        ckysymysTxt.innerHTML = cshuffledQuestionArray[ccurrentQuestion].Question;
        cvastaus1Btn.innerHTML = cshuffledQuestionArray[ccurrentQuestion].RightAnswer;
        cvastaus2Btn.innerHTML = cshuffledQuestionArray[ccurrentQuestion].WrongAnswer1;
        cvastaus3Btn.innerHTML = cshuffledQuestionArray[ccurrentQuestion].WrongAnswer2;
        console.log(startTime);
    }

       cvastaus1Btn.onclick = () => {
            if (cshuffledQuestionArray[ccurrentQuestion].RightAnswer == cvastaus1Btn.innerHTML) {
                next();
            }
            else if (cshuffledQuestionArray[ccurrentQuestion].WrongAnswer1 || cshuffledQuestionArray[ccurrentQuestion].WrongAnswer2) {
            wrongclick++;
            }
        }
    cvastaus2Btn.onclick = () => {
            if (cshuffledQuestionArray[ccurrentQuestion].RightAnswer == cvastaus2Btn.innerHTML) {
                next();
            }
            else if (cshuffledQuestionArray[ccurrentQuestion].WrongAnswer1 || cshuffledQuestionArray[ccurrentQuestion].WrongAnswer2) {
            wrongclick++;
            }
        }

        cvastaus3Btn.onclick = () => {
            if (cshuffledQuestionArray[ccurrentQuestion].RightAnswer == cvastaus3Btn.innerHTML) {
                next();
            }
            else if (cshuffledQuestionArray[ccurrentQuestion].WrongAnswer1 || cshuffledQuestionArray[ccurrentQuestion].WrongAnswer2) {
            wrongclick++;
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

            // variable viemään tulokset databaseen 
            let tulosDatabaseen =
            {
                StudentID: 2,
                Score: ctotalScore,
                Time: seconds,
                Date: newdate
            }

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
            
            ckysymysTxt.innerHTML = cshuffledQuestionArray[ccurrentQuestion].Question;
            cvastaus1Btn.innerHTML = cshuffledQuestionArray[ccurrentQuestion].RightAnswer;
            cvastaus2Btn.innerHTML = cshuffledQuestionArray[ccurrentQuestion].WrongAnswer1;
            cvastaus3Btn.innerHTML = cshuffledQuestionArray[ccurrentQuestion].WrongAnswer2;
    
            console.log(ccurrentQuestion);
            console.log(ctotalScore);

            cscore = 0;
            wrongclick = 0;
        }
    }
    }

startFastQuiz();
