<?php
    require 'includes/header.php';

if ($page === 'userChoose') {
    include 'pages/userChoose.html';
}

if ($page === 'welcome') {
    include 'pages/welcome.html';
}

if ($page === 'competitive') {
    include 'pages/competitive.html';
}

if ($page === 'casual') {
    include 'pages/casual.html';
}

if ($page === 'studentachievements') {
    include 'pages/achievements.html';
}

if ($page === 'teacher') {
    include 'pages/teacher.html';
}


if ($page !== 'welcome' && $page !== 'userChoose') {
    require 'includes/footer.php';
}
?>