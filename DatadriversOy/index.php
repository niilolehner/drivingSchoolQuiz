<?php
require 'includes/header.php';
?>

<div id="context"></div>

<?php
//Context comes here
$page = 'quiz'; //testing purpose

if ($page === 'quiz') {
    include 'pages/quiz.html';
}


require 'includes/footer.php';
?>


