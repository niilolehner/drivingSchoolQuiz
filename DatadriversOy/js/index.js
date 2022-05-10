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
  let inputArray = JSON.parse(xhReq.responseText);
  // makes a deep copy
  let resultArray = JSON.parse(JSON.stringify(inputArray));
  return resultArray;
}