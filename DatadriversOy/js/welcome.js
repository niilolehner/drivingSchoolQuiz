"use strict";

//variablet palautetta varten
let feedback;
let feedbackTxt;
let studentId;

//
function oppilas() {
    //haetaan db:Sta tieto onko oppilaalla palautetta
    let feedbackArray = arrayFromPHP("feedbackForStudent");

    //haetaan tiedot arraysta jos feedbackarray ei ole "undefined"(uusilla oppilailla on tyhjä)
    if (feedbackArray[0] !== undefined)
    {
        feedback = feedbackArray[0].FeedbackGiven;
        feedbackTxt = feedbackArray[0].Feedback;
        studentId = feedbackArray[0].StudentID;
    }
 
    //array databasen tallennusta varten
    let palauteSaatu =
    {
    FeedbackGiven: 2,
    StudentID: studentId
    };

    //jos palautetta ei ole, mitään ei tapahdu
    if (feedback === "0" || feedback === "2") {
        // empty, nothing.
    } else if (feedback === "1") {
        //jos palautetta on, se tulee näkyviin pop-upina. painettuaan ok nappulaa palautteesta, ilmoitus katoaa, ja databaseen vaihdetaan tieto että palaute on luettu. nyt oppilas voi tehdä competitiven uudelleen
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
        });
    }
}

setTimeout(() => {
    oppilas(); 
  }, 500);
