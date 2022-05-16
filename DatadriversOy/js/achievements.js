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

// fires main achievements function in admin mode (see $studentId on getDatabaseData.php to select student)
checkAndAwardAchievs("admin", 0, 0, 0);

// fire this function at the end of competitive quiz mode (see $studentId on getDatabaseData.php to select student)
// checkAndAwardAchievs("competitive", seconds, ctotalScore, 0);

// fire this function at each correct answer in casual quiz mode (see $studentId on getDatabaseData.php to select student)
// checkAndAwardAchievs("casual", 0, 0, streak);

// fires the function that populates achievements.html (see $studentId on getDatabaseData.php to select student)
listUnlockedAchievements();
