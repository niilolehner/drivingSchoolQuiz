"use strict";

// populates achievements.html with unlocked achievements
function listUnlockedAchievements() {
  let unlockedAchievsArray = arrayFromPHP("unlockedAchievements");
  if (unlockedAchievsArray.length === 0) {
    // empty, no achievements to load
  } else {
    unlockedAchievsArray.forEach(({AchievementID, POPtext})=>{ 
    document.getElementById('unlockedAchievsList').innerHTML +='<img class="miniachiev" src="images/' + `${AchievementID}` + '.png">' + ' ' + `${POPtext}`});
  }  
}

// fires main achievements function in admin mode
// see $studentId on getDatabaseData.php to select student
checkAndAwardAchievs("admin", 0, 0, 0);

// fires the function that populates achievements.html
// see $studentId on getDatabaseData.php to select student
listUnlockedAchievements();
