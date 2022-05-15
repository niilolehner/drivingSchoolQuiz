<?php
    require 'includes/header.php';

if ($page === 'welcome') {
    include 'pages/welcome.html';
}

if ($page === 'userChoose') {
    include 'pages/userChoose.html';
    ?><script src="./js/userChoose.js" defer></script><?php
}

if ($page === 'competitive') {
    include 'pages/competitive.html';
    ?><script src="./js/competitive.js" defer></script><?php
}

if ($page === 'casual') {
    include 'pages/casual.html';
    ?><script src="./js/casual.js" defer></script><?php
}

if ($page === 'studentachievements') {
    include 'pages/achievements.html';
    ?><script src="./js/achievements.js" defer></script><?php
}

if ($page === 'teacher') {
    include 'pages/teacher.html';
    ?><script src="./js/teacher.js" defer></script><?php
}


if ($page !== 'welcome' && $page !== 'userChoose') {
    require 'includes/footer.php';
}
?>

    
    
    
    
    