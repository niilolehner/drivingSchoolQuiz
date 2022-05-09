const kysymys = document.getElementById("kysymys");
const vastaus1 = document.getElementById("vastaus1");
const vastaus2 = document.getElementById("vastaus2");
const vastaus3 = document.getElementById("vastaus3");


    function changeQuestion() {

        let question = shuffledQuestionArray[0].Question;
        document.getElementById("kysymys").innerHTML = question;

        let ans1 = shuffledQuestionArray[0].RightAnswer;
        document.getElementById("vastaus1").innerHTML = ans1;

        let ans2 = shuffledQuestionArray[0].WrongAnswer1;
        document.getElementById("vastaus2").innerHTML = ans2;

        let ans3 = shuffledQuestionArray[0].WrongAnswer2;
        document.getElementById("vastaus3").innerHTML = ans3;
    }
