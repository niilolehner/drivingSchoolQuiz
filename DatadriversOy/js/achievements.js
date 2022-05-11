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

// check that the achievements are not already unlocked
// also check if requirements of locked achievements are satisfied for unlock
// unlock the achievements
// trigger achievements animation
//
// modeInput is "admin", "competitive" or "casual" as string, timeInput is minutes as integer
// scoreInput is correct answers given as integer, streakInput is correct answer streak as integer
function checkAndAwardAchievs(modeInput, timeInput, scoreInput, streakInput) {
  let mode = modeInput;
  let time = timeInput;
  let score = scoreInput;
  let streak = streakInput;
  // the 'students' table entry for QuizesDone needs to be updated on quiz completion, before checkAndAwardAchievs is fired
  let studentInfo = arrayFromPHP("students");
  let quizesCompleted = Number(studentInfo[0].QuizesDone);
  let keksi = studentInfo[0].Keksi;
  let achievementsInfo = arrayFromPHP("achievements");
  let unlockedAchievsArray = arrayFromPHP("studentachievements");
  let numberOfAchievs = unlockedAchievsArray.length;
  if (isAchievUnlocked(unlockedAchievsArray, '1') === false && streak >= 5) {

  }
  if (isAchievUnlocked(unlockedAchievsArray, '2') === false && streak >= 15) {
 
  }
  if (isAchievUnlocked(unlockedAchievsArray, '3') === false && streak >= 30) {

  }
  if (isAchievUnlocked(unlockedAchievsArray, '4') === false && streak >= 50) {

  }
  if (isAchievUnlocked(unlockedAchievsArray, '5') === false && quizesCompleted >= 1) {

  }
  if (isAchievUnlocked(unlockedAchievsArray, '6') === false && quizesCompleted >= 5) {

  }
  if (isAchievUnlocked(unlockedAchievsArray, '7') === false && quizesCompleted >= 10) {

  }
  if (isAchievUnlocked(unlockedAchievsArray, '8') === false && quizesCompleted >= 20) {

  }
  if (isAchievUnlocked(unlockedAchievsArray, '9') === false && quizesCompleted >= 50) {

  }
  if (isAchievUnlocked(unlockedAchievsArray, '10') === false && quizesCompleted >= 100) {

  }
  if (isAchievUnlocked(unlockedAchievsArray, '11') === false && quizesCompleted >= 200) {

  }
  if (isAchievUnlocked(unlockedAchievsArray, '12') === false && mode === "competitive" && time <= 5 && score === 10) {

  }
  if (isAchievUnlocked(unlockedAchievsArray, '13') === false && mode === "competitive" && time >= 15 && score === 10) {

  }
  if (isAchievUnlocked(unlockedAchievsArray, '14') === false && mode === "competitive" && score === 0) {

  }
  if (isAchievUnlocked(unlockedAchievsArray, '15') === false && keksi === "1") {

  }
  if (isAchievUnlocked(unlockedAchievsArray, '16') === false && numberOfAchievs === 15) {
    
  }


}

checkAndAwardAchievs("admin", 0, 0, 0);

listUnlockedAchievements();
