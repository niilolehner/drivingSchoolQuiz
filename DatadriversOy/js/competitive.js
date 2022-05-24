"use strict";

//variablet ajastinta varten
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

//ajastin käytiin
function start(){
    count = setInterval(timer, 1000); 
}

// ajastin pysähtyy
function end(){
  clearInterval(count)   
}

//päivämäärän asetus oikeaan muotoon databasea varten
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var newdate = year + "-" + month + "-" + day; 

//tarkistetaan onko oppilas oikeutettu tekemään competitive quizin (jos on jo tehnyt eikä ole saanut vielä palautetta, ei pääse sivulle)
function CheckAvailability()
{
    let feedbackGiven;
    let AvailabilityArray = arrayFromPHP("AvailabilityForCompetitive");

    //jos ei ole mitään tietoa (uusi pelaaja), pääsee pelaamaan
    if (AvailabilityArray[AvailabilityArray.length - 1] !== undefined)
    {
        feedbackGiven = AvailabilityArray[AvailabilityArray.length - 1].FeedbackGiven;
    }
    else
    {
        feedbackGiven = "2";
    }

        //jos on uusi tai on saanut palautteen (=2), pääsee pelaamaan. Muutoin estetään pelaamiseen pääsy
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
    
 // kysymys-vastaus-array tietokannasta
let csortedQuestionArray = arrayFromPHP("quizqa");

// sekoitetaan kysymykset
let cshuffledQuestionArray = shuffle(csortedQuestionArray); 

//etsitään peliä varten tarvittavat elementit html:sta
const ckysymysTxt = document.getElementById("ckysymys");
const cvastaus1Btn = document.getElementById("cvastaus1");
const cvastaus2Btn = document.getElementById("cvastaus2");
const cvastaus3Btn = document.getElementById("cvastaus3");
const csubmitBtn = document.getElementById("csubmit");
const ctulosTxt = document.getElementById("ctulokset");
const cnavbarResponsive = document.getElementById("navbarResponsive");
const cbtnChoose = document.getElementById("btnChoose");

csubmitBtn.addEventListener("click", csubmit); //toiminta aloitusnappiin

//variablet tuloksia varten
let ccurrentQuestion = 0;
let wrongclick = 0;
let cscore = 0;
let ctotalScore = 0;

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
    
//alla oleva oli tarkoitus rikkoa pienempiin osiin ja funktiohin, sekä viedä omalle sivulleen, mutta aika loppui kesken
//tästä alkaa varsinainen pelinaloitusfunktio
function startFastQuiz() {
            //piilotetaan kysymys ja vastaukset
            ckysymysTxt.style.visibility = 'hidden';
            cvastaus1Btn.style.visibility = 'hidden';
            cvastaus2Btn.style.visibility = 'hidden';
            cvastaus3Btn.style.visibility = 'hidden';
    
    //tehdään vastausarray ja sekoitetaan vastaukset arrayn sisällä
    let canswerArray = [cshuffledQuestionArray[ccurrentQuestion].RightAnswer, cshuffledQuestionArray[ccurrentQuestion].WrongAnswer1, cshuffledQuestionArray[ccurrentQuestion].WrongAnswer2];
    var cAnswers = shuffleArray(canswerArray);

    //asetetaan kysymys ja sekoitetut vastaukset paikoilleen html:n
    ckysymysTxt.innerHTML = cshuffledQuestionArray[ccurrentQuestion].Question;
    cvastaus1Btn.innerHTML = cAnswers[0];
    cvastaus2Btn.innerHTML = cAnswers[1];
    cvastaus3Btn.innerHTML = cAnswers[2];
    
    //käynnistetään peli napista; kysymys ja vastaukset tulevat näkyviin, navigointipalkista nappulat piiloon, ja aika lähtee käyntiin
    csubmitBtn.onclick = () => {
        start();
            ckysymysTxt.style.visibility = 'visible';
            cvastaus1Btn.style.visibility = 'visible';
            cvastaus2Btn.style.visibility = 'visible';
            cvastaus3Btn.style.visibility = 'visible';
            csubmitBtn.style.visibility = 'hidden';
            cnavbarResponsive.style.visibility = 'hidden';
            cbtnChoose.style.visibility = 'hidden';
    }

    //tarkistetaan onko vastaus oikein vai väärin, asetetaan nappulan väri sen mukaan, ja mennään eteenpäin/pysytään paikallaan
    cvastaus1Btn.onclick = () => {
        if (cshuffledQuestionArray[ccurrentQuestion].RightAnswer == cvastaus1Btn.innerHTML) {
            cvastaus1Btn.setAttribute('class', 'btn btn-primary m-2 correct');
            setTimeout(() => {
                cvastaus1Btn.classList.remove('correct');
                cvastaus1Btn.setAttribute('class', 'btn btn-primary m-2');
                next();
            }, 300);
        }
        else if (cshuffledQuestionArray[ccurrentQuestion].WrongAnswer1 || cshuffledQuestionArray[ccurrentQuestion].WrongAnswer2) {
            cvastaus1Btn.setAttribute('class', 'btn btn-primary m-2 incorrect');
            wrongclick++;
            setTimeout(() => {
                cvastaus1Btn.classList.remove('incorrect');
            }, 1000);
        }
    }
    cvastaus2Btn.onclick = () => {
        if (cshuffledQuestionArray[ccurrentQuestion].RightAnswer == cvastaus2Btn.innerHTML) {
            cvastaus2Btn.setAttribute('class', 'btn btn-primary m-2 correct');
            setTimeout(() => {
                cvastaus2Btn.classList.remove('correct');
                cvastaus2Btn.setAttribute('class', 'btn btn-primary m-2');
                next();
            }, 300);
        }
        else if (cshuffledQuestionArray[ccurrentQuestion].WrongAnswer1 || cshuffledQuestionArray[ccurrentQuestion].WrongAnswer2) {
            cvastaus2Btn.setAttribute('class', 'btn btn-primary m-2 incorrect');
            wrongclick++;
            setTimeout(() => {
                cvastaus2Btn.classList.remove('incorrect');
            }, 1000);
        }
    }
    cvastaus3Btn.onclick = () => {
        if (cshuffledQuestionArray[ccurrentQuestion].RightAnswer == cvastaus3Btn.innerHTML) {
            cvastaus3Btn.setAttribute('class', 'btn btn-primary m-2 correct');
            setTimeout(() => {
                cvastaus3Btn.classList.remove('correct');
                cvastaus3Btn.setAttribute('class', 'btn btn-primary m-2');
                next();
            }, 300);
        }
        else if (cshuffledQuestionArray[ccurrentQuestion].WrongAnswer1 || cshuffledQuestionArray[ccurrentQuestion].WrongAnswer2) {
            cvastaus3Btn.setAttribute('class', 'btn btn-primary m-2 incorrect');
            wrongclick++;
            setTimeout(() => {
                cvastaus3Btn.classList.remove('incorrect');
            }, 1000);
        }
    }  

    //kun vastaus yllä on oikein.. 
    function next() {
    //jos on 10 kysymystä täynnä, lopetetaan peli
        if (ccurrentQuestion == 9) {
            //lisätään variableihin tulokset
            ccurrentQuestion++;

            if (wrongclick == 0) {
            cscore = 1;
            }
            else {
            cscore = 0;
            }
            ctotalScore = ctotalScore + cscore;
                
            end(); //ajastin kiinni
            
            //kysymykset ja vastaukset piiloon
            ckysymysTxt.style.display = 'none';
            cvastaus1Btn.style.display = 'none';
            cvastaus2Btn.style.display = 'none';
            cvastaus3Btn.style.display = 'none';  

            //käännetään aikaa oikeaan muotoon
            let sec = seconds < 10 ? "0" + seconds : seconds;
            let min = minutes < 10 ? "0" + minutes : minutes;  

            if (minutes === 0) {
                sec = seconds;
                min = '';
            }

            //tulokset näkyviin oppilaalle
            ctulosTxt.innerHTML = minutes > 0 ? 
                                    "Sait " + ctotalScore + "/" + ccurrentQuestion + " oikein. Aikasi oli " + min + "." + sec + "."
                                    : 
                                    "Sait " + ctotalScore + "/" + ccurrentQuestion + " oikein. Aikasi oli " + sec + " sekuntia.";
            
            minutesToSeconds(); //käänetään minuutit sekunneiksi db:ta varten
            totalSeconds = minutesSeconds + seconds; //lasketaan kokonaissekunnit

            //lisätään oppilaalle yksi quiz tehdyksi (lisää) databaseen
            function plusQuizesDone()
            {
                let getDatabaseArray = arrayFromPHP("quizesDoneData");
                let oldQuizesDone = getDatabaseArray[0].QuizesDone;
                oldQuizesDone++;
                let newQuizesDone =
                {
                    QuizesDone: oldQuizesDone,
                    StudentID: getDatabaseArray[0].StudentID
                };
                arrayToPHP(newQuizesDone, "plusQuizesDoneData");
            }
            plusQuizesDone();
            
            //tarkistetaan tulokset achievemenetteja varten
            checkAndAwardAchievs("competitive", totalSeconds, ctotalScore, 0);
            // variable viemään tulokset databaseen
            let getStudentID = arrayFromPHP("currentStudentID");
            let tulosDatabaseen =
            {
                StudentID: getStudentID[0].StudentID,
                Score: ctotalScore,
                Time: totalSeconds,
                Date: newdate
            };
            //tulokset databaseen
            arrayToPHP(tulosDatabaseen, "endOfCompetitiveQuiz");
            UpdateDatabase();
            setTimeout(nextPage, 5000);
    }
    else
    //jos ei ole kymmentä kysymystä täynnä, jatketaan peliä uudella kierroksella
        {
            //lasketaan kierroksen pisteet ja tallennetaan variableihin
            ccurrentQuestion++;

            if (wrongclick == 0) {
            cscore = 1;
            }
            else {
            cscore = 0;
            }
                ctotalScore = ctotalScore + cscore;
                
            //sufflataan taas (uuden kysymyksen) vastaukset ja laitetaan kaikki oikeille paikoilleen html:n
            let canswerArray = [cshuffledQuestionArray[ccurrentQuestion].RightAnswer, cshuffledQuestionArray[ccurrentQuestion].WrongAnswer1, cshuffledQuestionArray[ccurrentQuestion].WrongAnswer2];
            var cAnswers = shuffleArray(canswerArray);
            
            ckysymysTxt.innerHTML = cshuffledQuestionArray[ccurrentQuestion].Question;
            cvastaus1Btn.innerHTML = cAnswers[0];
            cvastaus2Btn.innerHTML = cAnswers[1];
            cvastaus3Btn.innerHTML = cAnswers[2];

            //nollataan uudelle kierrokselle klikintarkistusvariablet
            cscore = 0;
            wrongclick = 0;
        }
    }

    //vaihtaa sivulta pois quizin jälkeen
    function nextPage() {
        window.location.href = "./index.php?page=scoreboard";
    }

    //päivittää tietokantaan opiskelijan "personal best" -tiedot
    function UpdateDatabase()
    {
        let getDatabaseArray = arrayFromPHP("personalBestForUpdating");
        let oldScore = getDatabaseArray[0].BestScore;
        let oldTime = getDatabaseArray[0].BestTime;

        if (ctotalScore > oldScore || oldScore === "0")
            {
            oldScore = ctotalScore;
        }
        
        if (totalSeconds < oldTime || oldTime === "0")
        {
            oldTime = totalSeconds;
        }

        let newBestForDatabase =
        {
            BestScore: oldScore,
            BestTime: oldTime,
            StudentID: getDatabaseArray[0].StudentID
        };
        arrayToPHP(newBestForDatabase, "personalBestToUpdate");
    }
}

//sivulle mentäessä tarkistaa ensin onko sivulle oikeutta mennä. Sen jälkeen käynnistää nappulasta itse quizin.
CheckAvailability();
startFastQuiz();