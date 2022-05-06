// Fisher-Yates-Durstenfeld shuffle

function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

// this is a variable using an example array of objects, it would have to be a parse from a JSON from our DB to actually make sense;
let questionArray =  [ 
    
    {
        QaID: 1,
        Question: "Question 1",
        RightAnswer: "Wrong Answer1",
        WrongAnswer1: "Wrong Answer1",
        WrongAnswer2: "Wrong Answer1.2",
    },

    {
        QaID: 2,
        Question: "Question 2",
        RightAnswer: "Right Answer 2",
        WrongAnswer1: "Wrong Answer2.1",
        WrongAnswer2: "Wrong Answer2.2",
    },

    {
        QaID: 3,
        Question: "Question 3",
        RightAnswer: "Right Answer 3",
        WrongAnswer1: "Wrong Answer3.1",
        WrongAnswer2: "Wrong Answer3.2",
    }

  ];

let shuffledQuestionArray = shuffle(questionArray);

console.table(shuffledQuestionArray);