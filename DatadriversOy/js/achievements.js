"use strict";

// populate the achievements.html
function listUnlockedAchievements() {  
  let unlockedAchievsArray = arrayFromPHP("studentachievements");
  unlockedAchievsArray.forEach(({AchievementID, POPtext})=>{ 
  document.getElementById('unlockedAchievsList').innerHTML +='<img class="miniachiev" src="images/' + `${AchievementID}` + '.png">' + ' ' + `${POPtext}`});
}

// check unlockedAchievsArray if achiev present, needs AchievementID (for example "1") as a string
function isAchievUnlocked(inputUnlockedAchievsArray, inputAchievementID) {
  return inputUnlockedAchievsArray.some(function(el) {
    return el.AchievementID === inputAchievementID;
  }); 
}

// unlocks the achievement, needs StudentID and AchievementID as integers
function achievUnlock(inputStudentID, inputAchievementID) {
  let unlockArray = {
    StudentID: inputStudentID,
    AchievementID: inputAchievementID
  }
  arrayToPHP(unlockArray, "unlockAchievements");
}

// fires the animation for an achievement unlocking, needs the PopText and AchievementID as a string
function achievAnim(inputPopText, inputAchievementID) {
  Swal.fire({
    title: "Saavutus avattu!",
    text: inputPopText,
    imageUrl: "images/" + inputAchievementID + ".png",
    imageWidth: 200,
  })
}

// check DB that achievements are not already unlocked
// also check if requirements of locked achievements are satisfied for unlock
// record unlocked achievements to DB
// trigger achievements unlock animation
// *************************************************************************************************
// *modeInput is "admin", "competitive" or "casual" as string, timeInput is seconds as integer     *
// *scoreInput is correct answers given as integer, streakInput is correct answer streak as integer*
// *************************************************************************************************
function checkAndAwardAchievs(modeInput, timeInput, scoreInput, streakInput) {
  // the 'students' table entry for QuizesDone needs to be updated on quiz completion, before checkAndAwardAchievs is fired
  let studentInfo = arrayFromPHP("students");
  let quizesCompleted = Number(studentInfo[0].QuizesDone);
  let achievementsInfo = arrayFromPHP("achievements");
  let unlockedAchievsArray = arrayFromPHP("studentachievements");
  // 1. 5x vastaussarja! (oikein peräkkäin)
  if (isAchievUnlocked(unlockedAchievsArray, "1") === false && streakInput >= 5) {
    achievUnlock(studentInfo[0].StudentID, 1)
    achievAnim(achievementsInfo[0].PopText, "1");  
  }
  // 2. 15x vastaussarja! (oikein peräkkäin)
  if (isAchievUnlocked(unlockedAchievsArray, "2") === false && streakInput >= 15) {
    achievUnlock(studentInfo[0].StudentID, 2)
    achievAnim(achievementsInfo[1].PopText, "2");  
  }
  // 3. 30x vastaussarja! (oikein peräkkäin)
  if (isAchievUnlocked(unlockedAchievsArray, "3") === false && streakInput >= 30) {
    achievUnlock(studentInfo[0].StudentID, 3)
    achievAnim(achievementsInfo[2].PopText, "3");  
  }
  // 4. 50x vastaussarja! (oikein peräkkäin)
  if (isAchievUnlocked(unlockedAchievsArray, "4") === false && streakInput >= 50) {
    achievUnlock(studentInfo[0].StudentID, 4)
    achievAnim(achievementsInfo[3].PopText, "4");  
  }
  // 5. Ensimmäinen visa suoritettu!
  if (isAchievUnlocked(unlockedAchievsArray, "5") === false && quizesCompleted >= 1) {
    achievUnlock(studentInfo[0].StudentID, 5)
    achievAnim(achievementsInfo[4].PopText, "5");  
  }
  // 6. 5 visaa suoritettu!
  if (isAchievUnlocked(unlockedAchievsArray, "6") === false && quizesCompleted >= 5) {
    achievUnlock(studentInfo[0].StudentID, 6)
    achievAnim(achievementsInfo[5].PopText, "6");  
  }
  // 7. 10 visaa suoritettu!
  if (isAchievUnlocked(unlockedAchievsArray, "7") === false && quizesCompleted >= 10) {
    achievUnlock(studentInfo[0].StudentID, 7)
    achievAnim(achievementsInfo[6].PopText, "7");  
  }
  // 8. 20 visaa suoritettu!
  if (isAchievUnlocked(unlockedAchievsArray, "8") === false && quizesCompleted >= 20) {
    achievUnlock(studentInfo[0].StudentID, 8)
    achievAnim(achievementsInfo[7].PopText, "8");  
  }
  // 9. 50 visaa suoritettu!
  if (isAchievUnlocked(unlockedAchievsArray, "9") === false && quizesCompleted >= 50) {
    achievUnlock(studentInfo[0].StudentID, 9)
    achievAnim(achievementsInfo[8].PopText, "9");  
  }
  // 10. 100 visaa suoritettu!
  if (isAchievUnlocked(unlockedAchievsArray, "10") === false && quizesCompleted >= 100) {
    achievUnlock(studentInfo[0].StudentID, 10)
    achievAnim(achievementsInfo[9].PopText, "10");  
  }
  // 11. 200 visaa suoritettu!
  if (isAchievUnlocked(unlockedAchievsArray, "11") === false && quizesCompleted >= 200) {
    achievUnlock(studentInfo[0].StudentID, 11)
    achievAnim(achievementsInfo[10].PopText, "11");  
  }
  // 12. Salama (suoritit visan alle X minuutissa, 100% oikein)
  if (isAchievUnlocked(unlockedAchievsArray, "12") === false && modeInput === "competitive" && timeInput <= 300 && scoreInput === 10) {
    achievUnlock(studentInfo[0].StudentID, 12)
    achievAnim(achievementsInfo[11].PopText, "12");  
  }
  // 13. Hitaasti, mutta varmasti... (visaan vastaaminen kesti yli X minuuttia, 100% oikein)
  if (isAchievUnlocked(unlockedAchievsArray, "13") === false && modeInput === "competitive" && timeInput >= 600 && scoreInput === 10) {
    achievUnlock(studentInfo[0].StudentID, 13)
    achievAnim(achievementsInfo[12].PopText, "13");  
  }
  // 14. Surullinen Panda (suoritti visan 100% väärin)
  if (isAchievUnlocked(unlockedAchievsArray, "14") === false && modeInput === "competitive" && scoreInput === 0) {
    achievUnlock(studentInfo[0].StudentID, 14)
    achievAnim(achievementsInfo[13].PopText, "14");  
  }
  // 15. Keksihirviö (salainen saavutus, opettaja voi myöntää sen)
  if (isAchievUnlocked(unlockedAchievsArray, "15") === false && studentInfo[0].Keksi === "1") {
    achievUnlock(studentInfo[0].StudentID, 15)
    achievAnim(achievementsInfo[14].PopText, "15");  
  }
  // 16. Maraton (kaikki muut saavutukset avattu)
  if (isAchievUnlocked(unlockedAchievsArray, "16") === false && unlockedAchievsArray.length === 15) {
    achievUnlock(studentInfo[0].StudentID, 16)
    achievAnim(achievementsInfo[15].PopText, "16");  
  }
}

// testing purposes, commenting out
checkAndAwardAchievs("admin", 0, 0, 0);

listUnlockedAchievements();
