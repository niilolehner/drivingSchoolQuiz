"use strict";

let context = '';

//Get JSON data.
$(document).ready(function(){
    $.get('http://localhost/Fullstack/Team_Awesome/DatadriversOy/php/getDatabaseData.php', function(data){
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
});
