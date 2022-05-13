<?php
isset($_GET['page']) ? $page = $_GET['page'] : $page = '';
isset($_GET['id']) ? $id = $_GET['id'] : $id = '';

include 'dbConnection.php';

$sql = '';
$rows = [];

$studentId = 1; //testing purpose

//Get data from database and input it in JSON-format:
if ($page === 'quizqa' || $page === 'achievements') {
  $sql = "SELECT * FROM $page";
}
else if ($page === 'students') {
  $sql = "SELECT * FROM $page WHERE StudentID = $studentId";
} 

//Testing for cookiemonstro
else if ($page === 'getStudentId') {
  $sql = "SELECT StudentID FROM scoreboard WHERE ScoreID = $id";
} 
else if ($page === 'scoreboard') {
  $sql = "SELECT scoreboard.ScoreID, students.Name, scoreboard.Score, scoreboard.Time, scoreboard.Date
          FROM $page
          INNER JOIN students ON $page.studentID = students.studentID
          WHERE scoreboard.FeedbackGiven = 0
          ORDER BY scoreboard.scoreID";
}
else if ($page === 'feedbackForStudent') {
  $sql = "SELECT Feedback, FeedbackGiven
          FROM scoreboard
          WHERE FeedbackGiven = 1 AND studentID = $studentId";
}
else if ($page === 'personalBestForUpdating') {
  $sql = "SELECT BestTime, BestScore, QuizesDone
          FROM students
          WHERE studentID = $studentId";
}
else if ($page === 'studentachievements') {
  $sql = "SELECT students.StudentID, students.Name, achievements.AchievementID, achievements.POPtext
          FROM $page
          INNER JOIN students ON $page.studentID = students.studentID
          INNER JOIN achievements ON $page.AchievementID = achievements.AchievementID
          WHERE students.StudentID = $studentId";
}

///Testing for cookiemonstro
else if ($page === 'studentachievementsAesmouVersion') {
  $sql = "SELECT students.StudentID, students.Name, achievements.AchievementID, achievements.POPtext
          FROM studentachievements
          INNER JOIN students ON studentachievements.studentID = students.studentID
          INNER JOIN achievements ON studentachievements.AchievementID = achievements.AchievementID
          WHERE students.StudentID = $id";
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