"use strict";
let feedback;
let feedbackTxt;
let studentId;

function oppilas() {
    let feedbackArray = arrayFromPHP("feedbackForStudent");

    if (feedback !== undefined)
    {
        feedback = feedbackArray[0].FeedbackGiven;
    }
    if (feedbackTxt !== undefined)
    {
        feedbackTxt = feedbackArray[0].Feedback;
    }
    if (studentId !== undefined)
    {
        studentId = feedbackArray[0].StudentID;
    }
 
    let palauteSaatu =
{
    FeedbackGiven: 2,
    StudentID: studentId
}
    
    if (feedback === "0" || feedback === "2") {
        // empty, nothing.
    } else if (feedback === "1") {
        Swal.fire({
            text: feedbackTxt,
            confirmButtonColor: '#27804c',
            imageUrl: 'images/feedback.png',
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'Custom image',
        }).then((result) => {
        if (result.isConfirmed) {
            arrayToPHP(palauteSaatu, "feedbackGot");
        }
    })
    }
}

setTimeout(() => {
    oppilas(); 
  }, 500);
