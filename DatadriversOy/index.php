<?php
require 'includes/header.php';
?>

<?php
//Context comes here
$page = 'casual'; //testing purpose

if ($page === 'welcome') {
    include 'pages/welcome.html';
}

if ($page === 'competitive') {
    include 'pages/competitive.html';
}

if ($page === 'casual') {
    include 'pages/casual.html';
}

if ($page === 'achievements') {
    include 'pages/achievements.html';
}

if ($page === 'teacher') {
    include 'pages/teacher.html';
}
?>

<?php
require 'includes/footer.php';
?>


