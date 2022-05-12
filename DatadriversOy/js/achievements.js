"use strict";

// populate the achievements.html
function listUnlockedAchievements() {  
  let unlockedAchievsArray = arrayFromPHP("studentachievements");
  unlockedAchievsArray.forEach(({AchievementID, POPtext})=>{ 
  document.getElementById('unlockedAchievsList').innerHTML +='<img class="miniachiev" src="images/' + `${AchievementID}` + '.png">' + ' ' + `${POPtext}`});
}

// check unlockedAchievsArray if achiev present, needs AchievementID (for example "1") as a string
function isAchievUnlocked(unlockedAchievsArray, AchievementID) {
  return unlockedAchievsArray.some(function(el) {
    return el.AchievementID === AchievementID;
  }); 
}

// check DB that achievements are not already unlocked
// also check if requirements of locked achievements are satisfied for unlock
// record unlocked achievements to DB
// trigger achievements unlock animation
// ***********************************************************************************************
// modeInput is "admin", "competitive" or "casual" as string, timeInput is minutes as integer
// scoreInput is correct answers given as integer, streakInput is correct answer streak as integer
// ***********************************************************************************************
function checkAndAwardAchievs(modeInput, timeInput, scoreInput, streakInput) {
  let mode = modeInput;
  let time = timeInput;
  let score = scoreInput;
  let streak = streakInput;
  let unlockAchiev = "";
  // the 'students' table entry for QuizesDone needs to be updated on quiz completion, before checkAndAwardAchievs is fired
  let studentInfo = arrayFromPHP("students");
  let quizesCompleted = Number(studentInfo[0].QuizesDone);
  let keksi = studentInfo[0].Keksi;
  let achievementsInfo = arrayFromPHP("achievements");
  let unlockedAchievsArray = arrayFromPHP("studentachievements");
  let numberOfAchievs = unlockedAchievsArray.length;
  if (isAchievUnlocked(unlockedAchievsArray, '1') === false && streak >= 5) {
    unlockAchiev = {
      StudentID: studentInfo[0].StudentID,
      AchievementID: 1
    }
    arrayToPHP(unlockAchiev, "studentachievements");
  }
  if (isAchievUnlocked(unlockedAchievsArray, '2') === false && streak >= 15) {
    unlockAchiev = {
      StudentID: studentInfo[0].StudentID,
      AchievementID: 2
    }
    arrayToPHP(unlockAchiev, "studentachievements");
  }
  if (isAchievUnlocked(unlockedAchievsArray, '3') === false && streak >= 30) {
    unlockAchiev = {
      StudentID: studentInfo[0].StudentID,
      AchievementID: 3
    }
    arrayToPHP(unlockAchiev, "studentachievements");
  }
  if (isAchievUnlocked(unlockedAchievsArray, '4') === false && streak >= 50) {
    unlockAchiev = {
      StudentID: studentInfo[0].StudentID,
      AchievementID: 4
    }
    arrayToPHP(unlockAchiev, "studentachievements");
  }
  if (isAchievUnlocked(unlockedAchievsArray, '5') === false && quizesCompleted >= 1) {
    unlockAchiev = {
      StudentID: studentInfo[0].StudentID,
      AchievementID: 5
    }
    arrayToPHP(unlockAchiev, "studentachievements");
  }
  if (isAchievUnlocked(unlockedAchievsArray, '6') === false && quizesCompleted >= 5) {
    unlockAchiev = {
      StudentID: studentInfo[0].StudentID,
      AchievementID: 6
    }
    arrayToPHP(unlockAchiev, "studentachievements");
  }
  if (isAchievUnlocked(unlockedAchievsArray, '7') === false && quizesCompleted >= 10) {
    unlockAchiev = {
      StudentID: studentInfo[0].StudentID,
      AchievementID: 7
    }
    arrayToPHP(unlockAchiev, "studentachievements");
  }
  if (isAchievUnlocked(unlockedAchievsArray, '8') === false && quizesCompleted >= 20) {
    unlockAchiev = {
      StudentID: studentInfo[0].StudentID,
      AchievementID: 8
    }
    arrayToPHP(unlockAchiev, "studentachievements");
  }
  if (isAchievUnlocked(unlockedAchievsArray, '9') === false && quizesCompleted >= 50) {
    unlockAchiev = {
      StudentID: studentInfo[0].StudentID,
      AchievementID: 9
    }
    arrayToPHP(unlockAchiev, "studentachievements");
  }
  if (isAchievUnlocked(unlockedAchievsArray, '10') === false && quizesCompleted >= 100) {
    unlockAchiev = {
      StudentID: studentInfo[0].StudentID,
      AchievementID: 10
    }
    arrayToPHP(unlockAchiev, "studentachievements");
  }
  if (isAchievUnlocked(unlockedAchievsArray, '11') === false && quizesCompleted >= 200) {
    unlockAchiev = {
      StudentID: studentInfo[0].StudentID,
      AchievementID: 11
    }
    arrayToPHP(unlockAchiev, "studentachievements");
  }
  if (isAchievUnlocked(unlockedAchievsArray, '12') === false && mode === "competitive" && time <= 5 && score === 10) {
    unlockAchiev = {
      StudentID: studentInfo[0].StudentID,
      AchievementID: 12
    }
    arrayToPHP(unlockAchiev, "studentachievements");
  }
  if (isAchievUnlocked(unlockedAchievsArray, '13') === false && mode === "competitive" && time >= 15 && score === 10) {
    unlockAchiev = {
      StudentID: studentInfo[0].StudentID,
      AchievementID: 13
    }
    arrayToPHP(unlockAchiev, "studentachievements");
  }
  if (isAchievUnlocked(unlockedAchievsArray, '14') === false && mode === "competitive" && score === 0) {
    unlockAchiev = {
      StudentID: studentInfo[0].StudentID,
      AchievementID: 14
    }
    arrayToPHP(unlockAchiev, "studentachievements");
  }
  if (isAchievUnlocked(unlockedAchievsArray, '15') === false && keksi === "1") {
    unlockAchiev = {
      StudentID: studentInfo[0].StudentID,
      AchievementID: 15
    }
    arrayToPHP(unlockAchiev, "studentachievements");
  }
  if (isAchievUnlocked(unlockedAchievsArray, '16') === false && numberOfAchievs === 15) {
    unlockAchiev = {
      StudentID: studentInfo[0].StudentID,
      AchievementID: 16
    }
    arrayToPHP(unlockAchiev, "studentachievements");   
  }
}

// testing purposes, commenting out
// checkAndAwardAchievs("admin", 0, 0, 0);

listUnlockedAchievements();
