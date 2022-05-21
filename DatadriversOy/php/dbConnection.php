<?php
//Params to connect to a database
$dbHost = "localhost";
$dbUser = "quizapp";
$dbPass = "supersecurepswd123";
$dbName = "db101";

//Connection to database
$conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);

if (!$conn) {
    die("Database connection failed!");
}
?>
