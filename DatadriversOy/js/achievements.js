"use strict";

// populate the achievements.html
function listUnlockedAchievements() {  
  let unlockedAchievsArray = arrayFromPHP("studentachievements");
  unlockedAchievsArray.forEach(({AchievementID, POPtext})=>{ 
  document.getElementById('unlockedAchievsList').innerHTML +='<img class="miniachiev" src="images/' + `${AchievementID}` + '.png">' + ' ' + `${POPtext}`});
}

listUnlockedAchievements();

// check unlockedAchievsArray if achiev present, needs AchievementID as a string
function isAchievUnlocked(unlockedAchievsArray, AchievementID) {
  return unlockedAchievsArray.some(function(el) {
    return el.AchievementID === AchievementID;
  }); 
}
// check that the achievements are not already unlocked
// also check if requirements of locked achievements are satisfied for unlock
// unlock the achievements
// trigger achievements animation
function checkAndAwardAchievs(timeInput, scoreInput, streakInput) {
  let time = timeInput;
  let score = scoreInput;
  let streak = streakInput;
  // the 'students' table entry for QuizesDone needs to be updated before checkAndAwardAchievs is fired
  let studentInfo = arrayFromPHP("students");
  let quizesCompleted = Number(studentInfo[0].QuizesDone);
  let keksi = ""; // substitute ""- with studentInfo[0].Keksi as soon as Keksi is in the DB
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
  if (isAchievUnlocked(unlockedAchievsArray, '12') === false && time <= 5) {

  }
  if (isAchievUnlocked(unlockedAchievsArray, '13') === false && time >= 15) {

  }
  if (isAchievUnlocked(unlockedAchievsArray, '14') === false && score === 0) {

  }
  if (isAchievUnlocked(unlockedAchievsArray, '15') === false && keksi === true) {

  }
  if (isAchievUnlocked(unlockedAchievsArray, '16') === false && numberOfAchievs === 15) {

  }


}

checkAndAwardAchievs(6, 0, 60);
