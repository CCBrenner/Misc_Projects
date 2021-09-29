<?php

// DB declaration
$serverName = "localhost:8889";
$username = "root";
$password = "root";
$dbname = "demo";

// Connection instance to mySQL server
$conn = new mysqli($serverName, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    // quit and show the exact connectio error occurring
    die("Connection failed: " . $conn->connect_error);
}

?>