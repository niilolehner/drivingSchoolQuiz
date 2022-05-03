<?php
//Params to connect to a database
$dbHost = "localhost";
$dbUser = "<username>";
$dbPass = "<user password>";
$dbName = "<database name>";

//Connection to database
$conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);

if (!$conn) {
    die("Database connection failed!");
}

?>
