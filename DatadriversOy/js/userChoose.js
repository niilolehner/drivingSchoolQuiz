

$(document).ready(function () {
    $("#oppilasBtn").click(function () {  
        oppilas(); 
    });
});

function oppilas() {
   
    let feedbackArray = arrayFromPHP("feedbackForStudent");

    let feedback = feedbackArray[0].FeedbackGiven;
    let feedbackTxt = feedbackArray[0].Feedback;

    if (feedback == 0) {
        window.location.href = "./index.php?page=welcome";
    }

    else {
    
        if (feedback == 1) {
            Swal.fire({
                title: 'Sweet!',
                text: feedbackTxt,
                confirmButtonColor: '#27804c',
                imageUrl: 'images/feedback.png',
                imageWidth: 300,
                imageHeight: 300,
                imageAlt: 'Custom image',
            }).then((result) => {
                if (result.isConfirmed) {
                    nextPage();
                }
            })
        }
    }

    function nextPage() {
        window.location.href = "./index.php?page=welcome";
    }
}