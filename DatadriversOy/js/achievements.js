"use strict";

// populates the achievements.html
function listUnlockedAchievements() {
  let unlockedAchievsArray = arrayFromPHP("unlockedAchievements");
  if (Object.keys(unlockedAchievsArray).length === 0 && unlockedAchievsArray.constructor === Object) {
    // array empty, no achievements to load
  } else {
    unlockedAchievsArray.forEach(({AchievementID, POPtext})=>{ 
    document.getElementById('unlockedAchievsList').innerHTML +='<img class="miniachiev" src="images/' + `${AchievementID}` + '.png">' + ' ' + `${POPtext}`});
  }  
}

// checks unlockedAchievsArray if achiev present, needs AchievementID (for example "1") as a string (see checkAndAwardAchievs() main function)
function isAchievUnlocked(inputUnlockedAchievsArray, inputAchievementID) {
  if (Object.keys(inputUnlockedAchievsArray).length === 0 && inputUnlockedAchievsArray.constructor === Object) {
    return false;
  } else {
    return inputUnlockedAchievsArray.some(function(el) {
      return el.AchievementID === inputAchievementID;
    }); 
  }
}

// unlocks the achievement, needs StudentID and AchievementID as integers (see checkAndAwardAchievs() main function)
function achievUnlock(inputStudentID, inputAchievementID) {
  let unlockArray = {
    StudentID: inputStudentID,
    AchievementID: inputAchievementID
  }
  arrayToPHP(unlockArray, "unlockAchievements");
}

// fires the animation for an achievement unlocking, needs the PopText and AchievementID as a string (see checkAndAwardAchievs() main function)
function achievAnim(inputPopText, inputAchievNum) {
  Swal.fire({
    title: "SAAVUTUS AVATTU",
    text: inputPopText,
    imageUrl: "images/" + inputAchievNum + ".png",
    imageWidth: 200,
  })
}

// !!! this is the main achievements function !!!
// checks DB that achievements are not already unlocked
// also checks if requirements of locked achievements are satisfied for unlock
// records unlocked achievements to DB if not already unlocked
// also triggers achievements unlock animation
// *************************************************************************************************
// *modeInput is "admin", "competitive" or "casual" as string, timeInput is seconds as integer     *
// *scoreInput is correct answers given as integer, streakInput is correct answer streak as integer*
// *************************************************************************************************
function checkAndAwardAchievs(modeInput, timeInput, scoreInput, streakInput) {
  // the 'students' table entry for QuizesDone needs to be updated on quiz completion, before checkAndAwardAchievs is fired
  let studentInfo = arrayFromPHP("students");
  let quizesCompleted = Number(studentInfo[0].QuizesDone);
  let unlockedAchievsArray = arrayFromPHP("unlockedAchievements");
  if (isAchievUnlocked(unlockedAchievsArray, "1") === false && streakInput >= 5) {
    achievUnlock("5x vastaussarja!", 1)
  }
  if (isAchievUnlocked(unlockedAchievsArray, "2") === false && streakInput >= 15) {
    achievUnlock(studentInfo[0].StudentID, 2)
    achievAnim("15x vastaussarja!", "2");  
  }
  if (isAchievUnlocked(unlockedAchievsArray, "3") === false && streakInput >= 30) {
    achievUnlock(studentInfo[0].StudentID, 3)
    achievAnim("30x vastaussarja!", "3");  
  }
  if (isAchievUnlocked(unlockedAchievsArray, "4") === false && streakInput >= 50) {
    achievUnlock(studentInfo[0].StudentID, 4)
    achievAnim("50x vastaussarja!", "4");  
  }
  if (isAchievUnlocked(unlockedAchievsArray, "5") === false && quizesCompleted >= 1) {
    achievUnlock(studentInfo[0].StudentID, 5)
    achievAnim("Ensimmäinen visa suoritettu!", "5");  
  }
  if (isAchievUnlocked(unlockedAchievsArray, "6") === false && quizesCompleted >= 5) {
    achievUnlock(studentInfo[0].StudentID, 6)
    achievAnim("5 visaa suoritettu!", "6");  
  }
  if (isAchievUnlocked(unlockedAchievsArray, "7") === false && quizesCompleted >= 10) {
    achievUnlock(studentInfo[0].StudentID, 7)
    achievAnim("10 visaa suoritettu!", "7");  
  }
  if (isAchievUnlocked(unlockedAchievsArray, "8") === false && quizesCompleted >= 20) {
    achievUnlock(studentInfo[0].StudentID, 8)
    achievAnim("20 visaa suoritettu!", "8");  
  }
  if (isAchievUnlocked(unlockedAchievsArray, "9") === false && quizesCompleted >= 50) {
    achievUnlock(studentInfo[0].StudentID, 9)
    achievAnim("50 visaa suoritettu!", "9");  
  }
  if (isAchievUnlocked(unlockedAchievsArray, "10") === false && quizesCompleted >= 100) {
    achievUnlock(studentInfo[0].StudentID, 10)
    achievAnim("100 visaa suoritettu!", "10");  
  }
  if (isAchievUnlocked(unlockedAchievsArray, "11") === false && quizesCompleted >= 200) {
    achievUnlock(studentInfo[0].StudentID, 11)
    achievAnim("200 visaa suoritettu!", "11");  
  }
  // suoritti visan alle X minuutissa, 100% oikein
  if (isAchievUnlocked(unlockedAchievsArray, "12") === false && modeInput === "competitive" && timeInput <= 300 && scoreInput === 10) {
    achievUnlock(studentInfo[0].StudentID, 12)
    achievAnim("Salama", "12");  
  }
  // visaan vastaaminen kesti yli X minuuttia, mutta 100% oikein
  if (isAchievUnlocked(unlockedAchievsArray, "13") === false && modeInput === "competitive" && timeInput >= 600 && scoreInput === 10) {
    achievUnlock(studentInfo[0].StudentID, 13)
    achievAnim("Hitaasti, mutta varmasti...", "13");  
  }
  // suoritti visan 100% väärin
  if (isAchievUnlocked(unlockedAchievsArray, "14") === false && modeInput === "competitive" && scoreInput === 0) {
    achievUnlock(studentInfo[0].StudentID, 14)
    achievAnim("Surullinen Panda", "14");  
  }
  // salainen saavutus, opettaja voi myöntää sen
  if (isAchievUnlocked(unlockedAchievsArray, "15") === false && studentInfo[0].Keksi === "1") {
    achievUnlock(studentInfo[0].StudentID, 15)
    achievAnim("Keksihirviö", "15");  
  }
  // kaikki muut saavutukset avattu
  if (isAchievUnlocked(unlockedAchievsArray, "16") === false && unlockedAchievsArray.length === 15) {
    achievUnlock(studentInfo[0].StudentID, 16)
    achievAnim("Maraton", "16");  
  }
}

// testing purposes, commenting out
// checkAndAwardAchievs("admin", 0, 0, 0);

listUnlockedAchievements();
