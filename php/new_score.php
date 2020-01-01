<?php
  include_once './connect.php';

  $player_username = $_POST['username'];
  $player_score = $_POST['final-score'];
  $player_num = $_POST['num-players'];
  $player_difficulty = $_POST['difficulty'];

  $sql = "INSERT INTO score_list (username, score) VALUES ('$player_username', '$player_score');";
  mysqli_query($conn, $sql);
  header('Location: ../index.php');
?>
