
$(document).ready(function () {
        $("#oppilasBtn").click(function () {

        Swal.fire({
        title: 'Sweet!',
        text: "Tähän tulee tietokannasta feedbackia",
        confirmButtonColor: '#27804c',
        imageUrl: 'images/feedback.png',
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: 'Custom image',
    })
    });
});