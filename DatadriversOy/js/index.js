"use strict";

const navBar = document.getElementById('navBar');
const footerId = document.getElementById('footerId');

// Fisher–Yates algorithm (shuffles arrays)
function shuffle(inputArray) {
  // makes a deep copy
  let resultArray = JSON.parse(JSON.stringify(inputArray));
  for (let i = 0; i < resultArray.length - 1; i++) {
      let j = i + Math.floor(Math.random() * (resultArray.length - i));

      let temp = resultArray[j];
      resultArray[j] = resultArray[i];
      resultArray[i] = temp;
  }
  return resultArray;
}

// gets an array from PHP/MySQL
// id parameter can be left empty if controlled on the PHP side (see $StudentId on getDatabaseData.php)
function arrayFromPHP(pageName, id) {
  let xhReq = new XMLHttpRequest();
  xhReq.open("GET", 'php/getDatabaseData.php?page=' + pageName + '&id=' + id + '', false);
  xhReq.send(null);
  let resultArray = [];
  try {
    resultArray = JSON.parse(xhReq.responseText);
  }
  catch(e) {
    // no data in array of objects
  }
  return resultArray;
}

// posts an array to PHP/MySQL (see writeToDatabase.php)
function arrayToPHP(inputArray, pageName) {
  let jsonString = JSON.stringify(inputArray);
  let xhReq = new XMLHttpRequest();
  xhReq.open("POST", 'php/writeToDatabase.php?page=' + pageName);
  xhReq.setRequestHeader("Content-Type", "application/json");
  xhReq.send(jsonString);
}

// checks unlockedAchievsArray if achiev present, needs AchievementID (for example "1") as a string (see checkAndAwardAchievs() main function)
function isAchievUnlocked(inputUnlockedAchievsArray, inputAchievementID) {
  if (inputUnlockedAchievsArray.length === 0) {
    // empty, means no achievements are currently unlocked at all for the student
    return false;
  } else {
    return inputUnlockedAchievsArray.some(function(el) {
      return el.AchievementID === inputAchievementID;
    }); 
  }
}

// unlocks the achievement by writing it to the database, needs StudentID and AchievementID as integers (see checkAndAwardAchievs() main function)
function achievUnlock(inputStudentID, inputAchievementID) {
  let unlockArray = {
    StudentID: inputStudentID,
    AchievementID: inputAchievementID
  };
  arrayToPHP(unlockArray, "unlockAchievements");
}

// fires the animation for an achievement unlocking, needs the PopText and AchievementID as a string (see checkAndAwardAchievs() main function)
function achievAnim(inputPopText, inputAchievNum) {
  Swal.fire({
    title: "SAAVUTUS AVATTU",
    text: inputPopText,
    imageUrl: "images/" + inputAchievNum + ".png",
    imageWidth: 200,
  });
}

// !!! this is the main achievements function !!!
// desired studentId needs to be selected on getDatabaseData.php (see $studentId variable)
// checks DB that achievements are not already unlocked
// also checks if requirements of locked achievements are satisfied for unlock
// records unlocked achievements to DB
// also triggers achievements unlock animation
// the following parameters need to be set up when fired at the end of/in a quiz, or on the achiev page:
// ***************************************************************************************************************
// *modeInput is "admin", "competitive" or "casual" as string, timeInput is total seconds as integer             *
// *scoreInput is total correct answers given as integer, streakInput is highest correct answer streak as integer*
// ***************************************************************************************************************
function checkAndAwardAchievs(modeInput, timeInput, scoreInput, streakInput) {
  // the 'students' table entry for QuizesDone needs to be updated at quiz completion, BEFORE checkAndAwardAchievs is fired
  let studentInfo = arrayFromPHP("students");
  let quizesCompleted = Number(studentInfo[0].QuizesDone);
  let unlockedAchievsArray = arrayFromPHP("unlockedAchievements");
  if (isAchievUnlocked(unlockedAchievsArray, "1") === false && modeInput === "casual" &&  streakInput >= 5) {
    achievUnlock(studentInfo[0].StudentID, 1);
    achievAnim("5x vastaussarja!", "1"); 
  }
  if (isAchievUnlocked(unlockedAchievsArray, "2") === false && modeInput === "casual" && streakInput >= 15) {
    achievUnlock(studentInfo[0].StudentID, 2);
    achievAnim("15x vastaussarja!", "2");  
  }
  if (isAchievUnlocked(unlockedAchievsArray, "3") === false && modeInput === "casual" && streakInput >= 30) {
    achievUnlock(studentInfo[0].StudentID, 3);
    achievAnim("30x vastaussarja!", "3");  
  }
  if (isAchievUnlocked(unlockedAchievsArray, "4") === false && modeInput === "casual" && streakInput >= 50) {
    achievUnlock(studentInfo[0].StudentID, 4);
    achievAnim("50x vastaussarja!", "4");  
  }
  if (isAchievUnlocked(unlockedAchievsArray, "5") === false && modeInput === "competitive"  && quizesCompleted > 0) {
    achievUnlock(studentInfo[0].StudentID, 5);
    achievAnim("Ensimmäinen visa suoritettu!", "5");  
  }
  if (isAchievUnlocked(unlockedAchievsArray, "6") === false && modeInput === "competitive"  && quizesCompleted >= 5) {
    achievUnlock(studentInfo[0].StudentID, 6);
    achievAnim("5 visaa suoritettu!", "6");  
  }
  if (isAchievUnlocked(unlockedAchievsArray, "7") === false && modeInput === "competitive"  && quizesCompleted >= 10) {
    achievUnlock(studentInfo[0].StudentID, 7);
    achievAnim("10 visaa suoritettu!", "7");  
  }
  if (isAchievUnlocked(unlockedAchievsArray, "8") === false && modeInput === "competitive"  && quizesCompleted >= 20) {
    achievUnlock(studentInfo[0].StudentID, 8);
    achievAnim("20 visaa suoritettu!", "8");  
  }
  if (isAchievUnlocked(unlockedAchievsArray, "9") === false && modeInput === "competitive"  && quizesCompleted >= 50) {
    achievUnlock(studentInfo[0].StudentID, 9);
    achievAnim("50 visaa suoritettu!", "9");  
  }
  if (isAchievUnlocked(unlockedAchievsArray, "10") === false && modeInput === "competitive"  && quizesCompleted >= 100) {
    achievUnlock(studentInfo[0].StudentID, 10);
    achievAnim("100 visaa suoritettu!", "10");  
  }
  if (isAchievUnlocked(unlockedAchievsArray, "11") === false && modeInput === "competitive"  && quizesCompleted >= 200) {
    achievUnlock(studentInfo[0].StudentID, 11);
    achievAnim("200 visaa suoritettu!", "11");  
  }
  // suoritti visan alle X minuutissa, 100% oikein
  if (isAchievUnlocked(unlockedAchievsArray, "12") === false && modeInput === "competitive" && timeInput <= 200 && scoreInput === 10) {
    achievUnlock(studentInfo[0].StudentID, 12);
    achievAnim("Salama", "12");  
  }
  // visaan vastaaminen kesti yli X minuuttia, mutta 100% oikein
  if (isAchievUnlocked(unlockedAchievsArray, "13") === false && modeInput === "competitive" && timeInput >= 400 && scoreInput === 10) {
    achievUnlock(studentInfo[0].StudentID, 13);
    achievAnim("Hitaasti, mutta varmasti...", "13");  
  }
  // suoritti visan 100% väärin
  if (isAchievUnlocked(unlockedAchievsArray, "14") === false && modeInput === "competitive" && scoreInput === 0) {
    achievUnlock(studentInfo[0].StudentID, 14);
    achievAnim("Surullinen Panda", "14");  
  }
  // salainen saavutus, opettaja voi myöntää sen
  if (isAchievUnlocked(unlockedAchievsArray, "15") === false && studentInfo[0].Keksi === "1") {
    achievUnlock(studentInfo[0].StudentID, 15);
    achievAnim("Keksihirviö", "15");  
  }
  // kaikki muut saavutukset avattu
  if (isAchievUnlocked(unlockedAchievsArray, "16") === false && unlockedAchievsArray.length === 15) {
    achievUnlock(studentInfo[0].StudentID, 16);
    achievAnim("Maraton", "16");  
  }
}

//Get elements and show content after x seconds.
function animate() {
  let url = window.location.href;

  if(url.includes('?page=welcome') === false && url.includes('?page=userChoose') === false && url.includes('index') === true){  
    setTimeout(() => {
      navBar.classList.add('active');
    }, 200);
  }
  if(url.includes('?page=welcome')){
    const welcomePage = document.getElementById('welcomePage');
    setTimeout(() => {
      welcomePage.classList.add('active');
    }, 800);
  }
  else if(url.includes('?page=competitive')){
    const quizCompetitive = document.getElementById('quizCompetitive');
    setTimeout(() => {
        quizCompetitive.classList.add('active');
    }, 800);
  }
  if(url.includes('?page=teacher')){
    setTimeout(() => {
      tableContainer.classList.add('active');
    }, 800);
  }
  if(url.includes('?page=scoreboard')){
    setTimeout(() => {
      tableScoreboard.classList.add('active');
    }, 800);
  }
  if(url.includes('?page=casual')){
    const quizCasual = document.getElementById('quizCasual');
    setTimeout(() => {
        quizCasual.classList.add('active');
    }, 800);
  }
  if(url.includes('?page=studentachievements')){  
    const achievementID = document.getElementById('achievementID');
    setTimeout(() => {
        achievementID.classList.add('active');
    }, 800);
  }
  if(url.includes('?page=welcome') === false && url.includes('?page=userChoose') === false && url.includes('index') === true){  
    setTimeout(() => {
      footerId.classList.add('active');
    }, 1200);
  } 
}

animate()