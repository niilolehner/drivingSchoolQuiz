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

// fires main achievements function in admin mode to check and award achievements when achievements.html is loaded (see $studentId on getDatabaseData.php)
checkAndAwardAchievs("admin", 0, 0, 0);

// fires the function that populates unlocked achievements on the achievements.html for the currently selected student (see $studentId on getDatabaseData.php)
listUnlockedAchievements();
