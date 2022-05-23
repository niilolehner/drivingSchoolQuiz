<?php
require 'includes/header.php';

switch ($page) {
    case 'welcome':
        include 'pages/welcome.html';
?><script src="./js/welcome.js" defer></script><?php
        break;
    case 'userChoose':
        include 'pages/userChoose.html';
        break;
    case 'casual':
        include 'pages/casual.html';
?><script src="./js/casual.js" defer></script><?php
        break;
    case 'competitive':
        include 'pages/competitive.html';
?><script src="./js/competitive.js" defer></script><?php
        break;
    case 'studentachievements':
        include 'pages/achievements.html';
?><script src="./js/achievements.js" defer></script><?php
        break;
    case 'scoreboard':
        include 'pages/scoreboard.html';
?><script src="./js/scoreboard.js" defer></script><?php
        break;
    case 'teacher':
        include 'pages/teacher.html';
?><script src="./js/teacher.js" defer></script><?php
        break;
}

require 'includes/footer.php';
?>