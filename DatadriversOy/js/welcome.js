"use strict";

function oppilas() {
    let feedbackArray = arrayFromPHP("feedbackForStudent");
    let feedback = feedbackArray[0].FeedbackGiven;
    let feedbackTxt = feedbackArray[0].Feedback;
    let studentId = feedbackArray[0].StudentID;

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
