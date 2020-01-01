<?php
  // To make sure we don't need to create the header section of the website on multiple pages, we instead create the header HTML markup in a separate file which we then attach to the top of every HTML page on our website. In this way if we need to make a small change to our header we just need to do it in one place. This is a VERY cool feature in PHP!
  require "header.php";
?>

    <main>
      <div class="wrapper-main">
        <section class="section-default">
          <h1>Sign Up</h1>
          <?php
          // Here we create an error message if the user made an error trying to sign up.
          if (isset($_GET["error"])) {
            if ($_GET["error"] == "emptyfields") {
              echo '<p class="signuperror">Fill in all fields!</p>';
            }
            else if ($_GET["error"] == "invalidusernameemail") {
              echo '<p class="signuperror">Invalid username and email!</p>';
            }
            else if ($_GET["error"] == "invalidusername") {
              echo '<p class="signuperror">Invalid username!</p>';
            }
            else if ($_GET["error"] == "invalidemail") {
              echo '<p class="signuperror">Invalid email!</p>';
            }
            else if ($_GET["error"] == "passwordcheck") {
              echo '<p class="signuperror">Your passwords do not match!</p>';
            }
            else if ($_GET["error"] == "usertaken") {
              echo '<p class="signuperror">Username is already taken!</p>';
            }
          }
          // Here we create a success message if the new user was created.
          else if (isset($_GET["signup"])) {
            if ($_GET["signup"] == "success") {
              echo '<p class="signupsuccess">Signup successful!</p>';
            }
          }
          ?>
          <form class="form-signup" action="php/signup.inc.php" method="post">
            <?php
            // Here we check if the user already tried submitting data.

            // We check username.
            if (!empty($_GET["username"])) {
              echo '<input type="text" name="username" placeholder="Username" value="'.$_GET["username"].'">';
            }
            else {
              echo '<input type="text" name="username" placeholder="Username">';
            }

            // We check email.
            if (!empty($_GET["email"])) {
              echo '<input type="text" name="email" placeholder="Email" value="'.$_GET["email"].'">';
            }
            else {
              echo '<input type="text" name="email" placeholder="Email">';
            }
            ?>
            <input type="password" name="password" placeholder="Password">
            <input type="password" name="password-repeat" placeholder="Repeat password">
            <button type="submit" name="signup-submit">Signup</button>
          </form>
          <!--
          NOTES FOR ME BEFORE DOING PHP!
          <form class="form-signup" action="php/signup.inc.php" method="post">
            <input type="text" name="username" placeholder="Username">
            <input type="text" name="email" placeholder="email">
            <input type="password" name="password" placeholder="Password">
            <input type="password" name="password-repeat" placeholder="Repeat password">
            <button type="submit" name="signup-submit">Signup</button>
          </form>
          -->
        </section>
      </div>
    </main>

<?php
  // And just like we include the header from a separate file, we do the same with the footer.
  require "footer.php";
?>
