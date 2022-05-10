"use strict";

  // populates the achievements.html
  function listUnlockedAchievs() {
  
    let unlockedAchievsArray = arrayFromPHP("studentachievements");
  
    unlockedAchievsArray.forEach(({AchievementID, POPtext})=>{ 
  
    document.getElementById('unlockedAchievsList').innerHTML +='<img class="miniachiev" src="images/' + `${AchievementID}` + '.png">' + ' ' + `${POPtext}`});
  
  }