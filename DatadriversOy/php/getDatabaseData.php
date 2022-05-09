<?php
isset($_GET['page']) ? $page = $_GET['page'] : $page = '';
isset($_GET['studentId']) ? $studentId = $_GET['studentId'] : $studentId = '';

include 'dbConnection.php';

$sql = '';
$rows = [];

$studentId = 1; //testing purpose

//Get data from database and input it in JSON-format:
if ($page === 'quizqa' || $page === 'scoreboard') {
  $sql = "SELECT * FROM $page";
}
else if ($page === 'student') {
  $sql = "SELECT * FROM $page WHERE StudentID = $studentId";
}
else if ($page === 'studentachievements') {
  $sql = "SELECT student.StudentID, student.Name, achievements.AchievementID, achievements.POPtext
          FROM $page
          INNER JOIN student ON $page.studentID = student.studentID
          INNER JOIN achievements ON $page.AchievementID = achievements.AchievementID
          WHERE student.StudentID = $studentId";
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