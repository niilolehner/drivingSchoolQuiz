"use strict";

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
  let resultArray = JSON.parse(xhReq.responseText);
  return resultArray;
}

// gets an array from PHP/MySQL (see getDatabaseData.php)
function arrayFromPHP2(pageName, ID) {
  let xhReq = new XMLHttpRequest();
  xhReq.open("GET", 'php/getDatabaseData.php?page=' + pageName +'&id=' + ID , false);
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