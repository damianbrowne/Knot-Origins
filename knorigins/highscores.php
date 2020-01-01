<?php
  require "header.php";
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Highscores</title>
    <link rel="icon" href="./assets/images/smartzombie.png">
    <link href="./css/kstyles.css" rel="stylesheet" type="text/css">
    <meta charset="utf-8"/>
  </head>

  <body>
    <div id="wrapper">

      <!-- LOADING -->
      <div id="loading" style="display:none;">
        <h1>Loading...</h1>
        <img src="https://media.giphy.com/media/137uPqnSre7ORq/giphy.gif">
      </div>

      <!-- LOBBY -->
      <div id="lobby-container">
        <div id="logo" class="fant-font">
          <img src="./assets/images/knotlogo.png">
          <p>[ HIGHSCORES ]</p>
        </div>
        <br/>

        <div id="lobby-options">
          <?php
            $sql = "SELECT * FROM score_list ORDER BY score DESC";

            //id, username, score (instead of *)
            $result = mysqli_query($conn, $sql);
            $resultCheck = mysqli_num_rows($result);

            if ($resultCheck > 0) {
              $place = 1 ;
              while ($row = mysqli_fetch_assoc($result)) {
                echo $place . ". " . $row['username'] . ": " . $row['score'] . "<br>";
                $place++ ;
              }
            }
          ?>
        </div>
      </div>
    </div>
  </body>
</html>
