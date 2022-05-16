<?php
isset($_GET['page']) ? $page = $_GET['page'] : $page = '';
isset($_GET['studentId']) ? $studentId = $_GET['studentId'] : $studentId = '';

include 'dbConnection.php';

$sql = '';

//Get data in JSON-format and insert/update into database through prepared statements:
$requestPayload = file_get_contents("php://input");

$phpArray = json_decode($requestPayload, true);

if ($page === 'feedback') {
  $stmt = $conn->prepare("UPDATE `scoreboard` SET Feedback = ?, FeedbackGiven = ? WHERE ScoreID = ?");
  $stmt->bind_param("sis", $phpArray['keyFeedbackText'], $phpArray['keyFeedbackGiven'], $phpArray['keyScoreId']);
  $stmt->execute();
}
// else if ($page === 'scoreboard') { // !!!! this statement is non-functional, it's just an example for writing real syntax !!!!
//   $stmt = $conn->prepare("INSERT INTO $page (example1, example2, example3) VALUES (?, ?, ?)");
//   $stmt->bind_param("sss", $phpArray['example1'], $phpArray['example2'], $phpArray['example3']);
//   $stmt->execute();
// }
else if ($page === 'unlockAchievements') {
  $stmt = $conn->prepare("INSERT INTO `studentachievements` (`StudentID`, `AchievementID`) VALUES (?, ?)");
  $stmt->bind_param("ii", $phpArray['StudentID'], $phpArray['AchievementID']);
  $stmt->execute();
}
else if ($page === 'endOfCompetitiveQuiz') {
  $stmt = $conn->prepare("INSERT INTO `scoreboard` (`ScoreID`, `StudentID`, `Score`, `Time`, `Date`) VALUES (NULL, ?, ?, ?, ?)");
  $stmt->bind_param("iiis", $phpArray['StudentID'], $phpArray['Score'], $phpArray['Time'], $phpArray['Date']);
  $stmt->execute();
}
else if ($page === 'personalBestToUpdate') {
  $stmt = $conn->prepare("UPDATE `students` SET BestTime = ?, BestScore = ?, QuizesDone = ? WHERE studentID = ?");
  $stmt->bind_param("iiii", $phpArray['BestTime'], $phpArray['BestScore'], $phpArray['QuizesDone'], $phpArray['StudentID']);
  $stmt->execute();
}

mysqli_close($conn);
?>