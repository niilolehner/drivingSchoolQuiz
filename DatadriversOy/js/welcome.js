"use strict";

function oppilas() {
    let feedbackArray = arrayFromPHP("feedbackForStudent");

    let feedback = feedbackArray[0].FeedbackGiven;
    let feedbackTxt = feedbackArray[0].Feedback;

    
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
        });
    }
}
setTimeout(() => {
    oppilas(); 
  }, 500);
