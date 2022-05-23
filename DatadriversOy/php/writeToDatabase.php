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

else if ($page === 'feedbackGot') {
  $stmt = $conn->prepare("UPDATE `scoreboard` SET FeedbackGiven = ? WHERE StudentID = ?");
  $stmt->bind_param("ii", $phpArray['FeedbackGiven'], $phpArray['StudentID']);
  $stmt->execute();
}

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

else if ($page === 'plusQuizesDoneData') {
  $stmt = $conn->prepare("UPDATE `students` SET QuizesDone = ? WHERE studentID = ?");
  $stmt->bind_param("ii", $phpArray['QuizesDone'], $phpArray['StudentID']);
  $stmt->execute();
}

else if ($page === 'personalBestToUpdate') {
  $stmt = $conn->prepare("UPDATE `students` SET BestTime = ?, BestScore = ? WHERE studentID = ?");
  $stmt->bind_param("iii", $phpArray['BestTime'], $phpArray['BestScore'], $phpArray['StudentID']);
  $stmt->execute();
}

else if ($page === 'giveCookie') {
  $stmt = $conn->prepare("UPDATE `students` SET Keksi = ? WHERE students.StudentID = ?");
  $stmt->bind_param("ii", $phpArray['Keksi'], $phpArray['StudentNum']);
  $stmt->execute();
}

mysqli_close($conn);
?>