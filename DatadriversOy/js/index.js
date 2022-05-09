"use strict";

// Fisher–Yates shuffle Algorithm
function shuffle(inputArray) {
  let sourceArray = JSON.parse(JSON.stringify(inputArray));
  for (let i = 0; i < sourceArray.length - 1; i++) {
      let j = i + Math.floor(Math.random() * (sourceArray.length - i));

      let temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
  }
  return sourceArray;
}

// gets an array from PHP
function arrayFromPHP() {
  let xhReq = new XMLHttpRequest();
  xhReq.open("GET", 'php/getDatabaseData.php', false);
  xhReq.send(null);
  let resultArray = JSON.parse(xhReq.responseText);
  return resultArray;
}

// storing array for use
let sortedQuestionArray = arrayFromPHP();

// shuffling original array (do each time a new set of questions is needed)
let shuffledQuestionArray = shuffle(sortedQuestionArray);

// print to console for testing purposes
console.log(sortedQuestionArray);
console.log(shuffledQuestionArray);





/*let context = '';

//Get JSON data.
$(document).ready(function(){
    $.get('php/getDatabaseData.php', function(data){
        let result = JSON.parse(data) ;

        context +='<header class="masthead">';
          context +='<header class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">';
            context +='<div class="d-flex justify-content-center">';
              context +='<div class="text-center">';
                context +='<div class="card">';
                  context +='<h1 class="mx-auto my-0 text-uppercase">QUIZ</h1>';
                  context +='<form >';
                    context +='<h3 id="kysymys" class="text-white-50 mx-auto mt-2 mb-5">' + result[2].Question + '</h3>';
                    context +='<a id="vastaus1" class="btn btn-primary" href="#about">' + result[2].RightAnswer + '</a>';
                    context +='<a id="vastaus2" class="btn btn-primary" href="#about">' + result[2].WrongAnswer1 + '</a>';
                    context +='<a id="vastaus3" class="btn btn-primary" href="#about">' + result[2].WrongAnswer2 + '</a>'; 
                  context +='</form>';
                context +='</div>';
              context +='</div>';
            context +='</div>';
          context +='</header>';

          $("#context").html(context);
    });
});*/