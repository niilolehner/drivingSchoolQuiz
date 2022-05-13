

$(document).ready(function () {
    $("#oppilasBtn").click(function () {  
        oppilas(); 
    });
});

function oppilas()
{
    let feedback = 0;

    if (feedback == 0) {
        window.location.href = "./index.php?page=welcome";
    }

    else
    {  
    
        if (feedback == 1) {
            Swal.fire({
                title: 'Sweet!',
                text: "Tähän tulee tietokannasta feedbackia",
                confirmButtonColor: '#27804c',
                imageUrl: 'images/feedback.png',
                imageWidth: 300,
                imageHeight: 300,
                imageAlt: 'Custom image',
            })
        }
    }
}