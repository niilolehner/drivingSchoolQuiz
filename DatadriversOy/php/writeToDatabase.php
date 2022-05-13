<?php
isset($_GET['page']) ? $page = $_GET['page'] : $page = '';
isset($_GET['studentId']) ? $studentId = $_GET['studentId'] : $studentId = '';

include 'dbConnection.php';

$sql = '';

$studentId = 1; //testing purpose

//Get data in JSON-format and insert/update into database through prepared statements:
$requestPayload = file_get_contents("php://input");

$phpArray = json_decode($requestPayload, true);

if ($page === 'students') { // !!!! this statement is non-functional, it's just an example for writing real syntax !!!!
  $stmt = $conn->prepare("INSERT INTO $page (example1, example2, example3) VALUES (?, ?, ?)");
  $stmt->bind_param("sss", $phpArray['example1'], $phpArray['example2'], $phpArray['example3']);
  $stmt->execute();
}
// else if ($page === 'scoreboard') { // !!!! this statement is non-functional, it's just an example for writing real syntax !!!!
//   $stmt = $conn->prepare("INSERT INTO $page (example1, example2, example3) VALUES (?, ?, ?)");
//   $stmt->bind_param("sss", $phpArray['example1'], $phpArray['example2'], $phpArray['example3']);
//   $stmt->execute();
// }
else if ($page === 'scoreboard') {
  $stmt = $conn->prepare("UPDATE $page SET Feedback = ?, FeedbackGiven = ? WHERE ScoreID = ?");
  $stmt->bind_param("sis", $phpArray['keyFeedbackText'] , $phpArray['keyFeedbackGiven'], $phpArray['keyScoreId']);
  $stmt->execute();
}
else if ($page === 'studentachievements') {
  $stmt = $conn->prepare("INSERT INTO $page (`StudentID`, `AchievementID`) VALUES (?, ?)");
  $stmt->bind_param("ii", $phpArray['StudentID'], $phpArray['AchievementID']);
  $stmt->execute();
}

mysqli_close($conn);

?>