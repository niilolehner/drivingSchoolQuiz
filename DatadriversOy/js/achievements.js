"use strict";

// gets unlocked achievements info
function getUnlockedAchievs() {

    let unlockedAchievsArray = arrayFromPHP("studentachievements");
  
    return unlockedAchievsArray;
  
  }
  
  // populates the achievements.html
  function listUnlockedAchievs() {
  
    let unlockedAchievsArray = getUnlockedAchievs();
  
    unlockedAchievsArray.forEach(({AchievementID, POPtext})=>{ 
  
    document.getElementById('unlockedAchievsList').innerHTML +='<img class="miniachiev" src="images/' + `${AchievementID}` + '.png">' + ' ' + `${POPtext}`});
  
  }