<?php
isset($_GET['page']) ? $page = $_GET['page'] : $page = '';
isset($_GET['id']) ? $id = $_GET['id'] : $id = '';

include 'dbConnection.php';

$sql = '';
$rows = [];

$studentId = 10; //testing purpose

//Get data from database and input it in JSON-format:
if ($page === 'quizqa' || $page === 'achievements') {
  $sql = "SELECT * FROM $page";
}
else if ($page === 'students') {
  $sql = "SELECT * FROM students WHERE StudentID = $studentId";
}
else if ($page === 'scoreboard') {
  $sql = "SELECT students.Name, scoreboard.Score, scoreboard.Time, scoreboard.Date
          FROM scoreboard
          INNER JOIN students ON scoreboard.studentID = students.studentID
          WHERE scoreboard.FeedbackGiven = 0
          ORDER BY scoreboard.Date DESC";
}
else if ($page === 'scoreboard1') {
  $sql = "SELECT Name, BestTime FROM students WHERE BestTime <> 0 ORDER BY BestTime ASC";
}
else if ($page === 'scoreboard2') {
  $sql = "SELECT Name, BestScore FROM students WHERE BestScore <> 0 ORDER BY BestScore DESC";
}
else if ($page === 'scoreboard3') {
  $sql = "SELECT Name, QuizesDone FROM students WHERE QuizesDone <> 0 ORDER BY QuizesDone DESC";
}
else if ($page === 'getStudentID') {
  $sql = "SELECT StudentID FROM students WHERE Name = '$id'";
}
else if ($page === 'getScoreID') {
  $sql = "SELECT ScoreID FROM scoreboard WHERE StudentID = $id AND FeedbackGiven = 0";
}
else if ($page === 'feedbackForStudent') {
  $sql = "SELECT Feedback, FeedbackGiven, StudentID
          FROM scoreboard
          WHERE FeedbackGiven = 1 AND studentID = $studentId";
}
else if ($page === 'AvailabilityForCompetitive') {
  $sql = "SELECT FeedbackGiven
          FROM scoreboard
          WHERE studentID = $studentId";
}
else if ($page === 'quizesDoneData') {
  $sql = "SELECT StudentID, QuizesDone
          FROM students
          WHERE studentID = $studentId";
}
else if ($page === 'currentStudentID') {
  $sql = "SELECT StudentID
          FROM students
          WHERE studentID = $studentId";
}
else if ($page === 'personalBestForUpdating') {
  $sql = "SELECT StudentID, BestTime, BestScore, QuizesDone
          FROM students
          WHERE studentID = $studentId";
}
else if ($page === 'unlockedAchievements') {
  $sql = "SELECT students.StudentID, students.Name, achievements.AchievementID, achievements.POPtext
          FROM studentachievements
          INNER JOIN students ON studentachievements.studentID = students.studentID
          INNER JOIN achievements ON studentachievements.AchievementID = achievements.AchievementID
          WHERE students.StudentID = $studentId";
}

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  while ($row = mysqli_fetch_assoc($result)) {
    array_push($rows, $row);
  }

  echo json_encode($rows);
}
else {
  echo 'No data';
}
mysqli_close($conn);

?>