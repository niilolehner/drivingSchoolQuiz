<?php
isset($_GET['page']) ? $page = $_GET['page'] : $page = '';
isset($_GET['studentId']) ? $studentId = $_GET['studentId'] : $studentId = '';

include 'dbConnection.php';

$sql = '';
$rows = [];

$studentId = 1; //testing purpose

//Get data in JSON-format and insert/update into database through prepared statements:
$requestPayload = file_get_contents("php://input");

$phpArray = json_decode($requestPayload, true);

if ($page === 'students') {
  $stmt = $conn->prepare("INSERT INTO $page (example1, example2, example3) VALUES (?, ?, ?)");
  $stmt->bind_param("sss", $example1 , $example2, $example3);
  $stmt->execute();
}
else if ($page === 'scoreboard') {
  $stmt = $conn->prepare("INSERT INTO $page (example1, example2, example3) VALUES (?, ?, ?)");
  $stmt->bind_param("sss", $example1 , $example2, $example3);
  $stmt->execute();
}
else if ($page === 'studentachievements') {
  $stmt = $conn->prepare("INSERT INTO $page (`StudentID`, `AchievementID`) VALUES (?, ?)");
  $stmt->bind_param("ii", $example1, $example2);
  $stmt->execute();
}

mysqli_close($conn);

?>