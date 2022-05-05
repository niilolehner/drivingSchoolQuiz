<?php
include 'dbConnection.php';

isset($_GET['page']) ? $page = $_GET['page'] : $page = '';
isset($_GET['studentName']) ? $studentName = $_GET['studentName'] : $studentName = '';
$sql = '';
$JSON = array();
$page = 'studentachievements'; //testing purpose


//Get student data from database:
if ($page === 'student') {
  $sql = "SELECT * FROM '$page' WHERE Name = '$studentName'";
} else if ($page === 'studentachievements') {
  $sql = "SELECT * 
          FROM $page
          INNER JOIN student ON $page.studentID = student.studentID
          INNER JOIN achievements ON $page.AchievementID = achievements.AchievementID";
}

$result = $conn->query($sql);
$rowCount = mysqli_num_rows($result);
$row = $result->fetch_assoc();

/*
while($row = $result->fetch_array()){
    $JSON['studentachievements'][] = $row;
}

  //input data to JSON
 echo json_encode($JSON); 
*/

$Testing = "Hello World!";

// $conn->close();

?>