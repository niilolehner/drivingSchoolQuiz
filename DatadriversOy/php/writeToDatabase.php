<?php 

// dummy code to test passing variables from JS to PHP through JSON

include 'dbConnection.php';

$requestPayload = file_get_contents("php://input");

$phpArray = json_decode($requestPayload, true);

var_dump($phpArray);

?>