"use strict";

const navBar = document.getElementById('navBar');
const footerId = document.getElementById('footerId');

// Fisher–Yates algorithm (shuffles arrays)
function shuffle(inputArray) {
  // makes a deep copy
  let resultArray = JSON.parse(JSON.stringify(inputArray));
  for (let i = 0; i < resultArray.length - 1; i++) {
      let j = i + Math.floor(Math.random() * (resultArray.length - i));

      let temp = resultArray[j];
      resultArray[j] = resultArray[i];
      resultArray[i] = temp;
  }
  return resultArray;
}

// gets an array from PHP/MySQL (see getDatabaseData.php)
function arrayFromPHP(pageName) {
  let xhReq = new XMLHttpRequest();
  xhReq.open("GET", 'php/getDatabaseData.php?page=' + pageName, false);
  xhReq.send(null);
  let resultArray = {};
  try {
    resultArray = JSON.parse(xhReq.responseText);
  }
  catch(e) {
    // array empty
  }
  return resultArray;
}

// gets an array from PHP/MySQL (see getDatabaseData.php)
function arrayFromPHP2(pageName, id) {
  let xhReq = new XMLHttpRequest();
  xhReq.open("GET", 'php/getDatabaseData.php?page=' + pageName +'&id=' + id + '', false);
  xhReq.send(null);
  let resultArray = JSON.parse(xhReq.responseText);
  return resultArray;
}

// posts an array to PHP/MySQL (see writeToDatabase.php)
function arrayToPHP(inputArray, pageName) {
  let jsonString = JSON.stringify(inputArray);
  let xhReq = new XMLHttpRequest();
  xhReq.open("POST", 'php/writeToDatabase.php?page=' + pageName);
  xhReq.setRequestHeader("Content-Type", "application/json");
  xhReq.send(jsonString);
}

//Get elements to animation and content.
function animate() {
  let url = window.location.href;

  if(url.includes('?page=welcome') === false && url.includes('?page=userChoose') === false ){  
    setTimeout(() => {
      navBar.classList.add('active');
    }, 200)
  }
  
  if(url.includes('?page=welcome')){
    const welcomePage = document.getElementById('welcomePage');
    setTimeout(() => {
      welcomePage.classList.add('active');
    }, 800);
  }
  else if(url.includes('?page=competitive')){
    const quizCompetitive = document.getElementById('quizCompetitive');
    setTimeout(() => {
        quizCompetitive.classList.add('active');
    }, 800);
  }
  if(url.includes('?page=teacher')){
    setTimeout(() => {
      tableContainer.classList.add('active');
    }, 800);
  }
  if(url.includes('?page=casual')){
    const quizCasual = document.getElementById('quizCasual');
    setTimeout(() => {
        quizCasual.classList.add('active');
    }, 800);
  }
  if(url.includes('?page=studentachievements')){  
    const achievementID = document.getElementById('achievementID');
    setTimeout(() => {
        achievementID.classList.add('active');
    }, 800);
  }

  if(url.includes('?page=welcome') === false && url.includes('?page=userChoose') === false ){  
    setTimeout(() => {
      footerId.classList.add('active');
    }, 1200);
  }
  
}

animate()