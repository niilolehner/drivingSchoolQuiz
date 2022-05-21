"use strict";
let feedback;
let feedbackTxt;
let studentId;

function oppilas() {
    let feedbackArray = arrayFromPHP("feedbackForStudent");

    if (feedbackArray[0] !== undefined)
    {
        feedback = feedbackArray[0].FeedbackGiven;
        feedbackTxt = feedbackArray[0].Feedback;
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
