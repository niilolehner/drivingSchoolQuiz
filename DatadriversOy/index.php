<?php
    require 'includes/header.php';
?>

<?php
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
if ($page !== 'welcome'){
    require 'includes/footer.php';
}
?>


