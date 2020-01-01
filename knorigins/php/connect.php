<?php
$dbServername = "localhost";
$dbUsername = "dbrownel_admin";
$dbPassword = "Meadow1010";
$dbName = "dbrownel_knorigins";

$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
