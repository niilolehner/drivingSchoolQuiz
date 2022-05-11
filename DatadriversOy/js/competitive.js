 var startTime, endTime;

function start() {
        startTime = performance.now();
    };

function end() {
  endTime = performance.now();
  var timeDiff = endTime - startTime; //in ms 
  // strip the ms 
  timeDiff /= 1000; 
  
  // get seconds 
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
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

    csubmitBtn.addEventListener("click", csubmit);

    let ccurrentQuestion = 0;
    let cscore = 0;
    let cstreak = 0; 

function startFastQuiz() {
    
    csubmitBtn.onclick = () => {
        start();
        ckysymysTxt.innerHTML = cshuffledQuestionArray[ccurrentQuestion].Question;
        cvastaus1Btn.innerHTML = cshuffledQuestionArray[ccurrentQuestion].RightAnswer;
        cvastaus2Btn.innerHTML = cshuffledQuestionArray[ccurrentQuestion].WrongAnswer1;
        cvastaus3Btn.innerHTML = cshuffledQuestionArray[ccurrentQuestion].WrongAnswer2;
        console.log(startTime);
    }

        cvastaus1Btn.onclick = () => {
            if (cshuffledQuestionArray[ccurrentQuestion].RightAnswer == cvastaus1Btn.innerHTML) {
                cscore++;
                cstreak++;
                next();
            }
            else if (cshuffledQuestionArray[ccurrentQuestion].WrongAnswer1 || cshuffledQuestionArray[ccurrentQuestion].WrongAnswer2) {
                cstreak = 0;
                next();
            }
        }

        cvastaus2Btn.onclick = () => {
            if (cshuffledQuestionArray[ccurrentQuestion].RightAnswer == cvastaus2Btn.innerHTML) {
                cscore++;
                cstreak++;
                next();
            }
            else if (cshuffledQuestionArray[ccurrentQuestion].WrongAnswer1 || cshuffledQuestionArray[ccurrentQuestion].WrongAnswer2) {
                cstreak = 0;
                next();
            }
        }

        cvastaus3Btn.onclick = () => {
            if (cshuffledQuestionArray[ccurrentQuestion].RightAnswer == cvastaus3Btn.innerHTML) {
                cscore++;
                cstreak++;
                next();
            }
            else if (cshuffledQuestionArray[ccurrentQuestion].WrongAnswer1 || cshuffledQuestionArray[ccurrentQuestion].WrongAnswer2) {
                cstreak = 0;
                next();
            }
        }

    function next() {
        if (ccurrentQuestion == 9) {
                ccurrentQuestion++;
                end();
                console.log(ccurrentQuestion);
                console.log(cscore);
                console.log(cstreak);
        ckysymysTxt.innerHTML = " ";
        cvastaus1Btn.innerHTML = " ";
        cvastaus2Btn.innerHTML = " ";
        cvastaus3Btn.innerHTML = " ";
    }
    else
    {
            ccurrentQuestion++;
    
            ckysymysTxt.innerHTML = cshuffledQuestionArray[ccurrentQuestion].Question;
            cvastaus1Btn.innerHTML = cshuffledQuestionArray[ccurrentQuestion].RightAnswer;
            cvastaus2Btn.innerHTML = cshuffledQuestionArray[ccurrentQuestion].WrongAnswer1;
            cvastaus3Btn.innerHTML = cshuffledQuestionArray[ccurrentQuestion].WrongAnswer2;
    
            console.log(ccurrentQuestion);
            console.log(cscore);
            console.log(cstreak);
        }
    }
    }

startFastQuiz();
