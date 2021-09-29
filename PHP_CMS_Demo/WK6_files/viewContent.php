<?php

// DB Connection
require_once("cms/databaseConnection.php");

// Where you could authenticate

$page = htmlspecialchars($_GET['page']);

$sql = "SELECT * FROM content WHERE id='$page'";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        // echo "id: " . $row['id'] . "- Title: " . $row['title'];
        
        $title = $row['title'];
        $metaDescription = $row['metaDescription'];
        $metaKeywords = $row['metaKeywords'];
        $contentData = $row['contentData'];
   
    }
} else {
    echo "No results found.";
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title><?php echo $title; ?></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?php echo $metaDescription; ?>">
    <meta name="keywords" content="<?php echo $metaKeywords; ?>">
    <meta name="author" content="Collyn Brenner">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
    body,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif}
    .w3-bar,h1,button {font-family: "Montserrat", sans-serif}
    .fa-anchor,.fa-coffee {font-size:200px}
    </style>
    <script defer>
        // Used to toggle the menu on small screens when clicking on the menu button
        function myFunction() {
            var x = document.getElementById("navDemo");
            if (x.className.indexOf("w3-show") == -1) {
                x.className += " w3-show";
            } else { 
                x.className = x.className.replace(" w3-show", "");
            }
        }
    </script>
</head>
<body>

<!-- Navbar -->
<div class="w3-top">
    <div class="w3-bar w3-red w3-card w3-left-align w3-large">
        <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" href="javascript:void(0);" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
        <a href="http://localhost:8888/wk6_files/viewContent.php?page=7" class="w3-bar-item w3-button w3-padding-large w3-white">Home</a>
        <a href="http://localhost:8888/wk6_files/viewContent.php?page=1" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Record 1</a>
        <a href="http://localhost:8888/wk6_files/viewContent.php?page=7" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Record 7</a>
        <a href="http://localhost:8888/wk6_files/viewContent.php?page=19" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Record 19</a>
        <a href="#bookmark" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">To Generated Section</a>
    </div>

    <!-- Navbar on small screens -->
    <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
        <a href="http://localhost:8888/wk6_files/viewContent.php?page=1" class="w3-bar-item w3-button w3-padding-large">Record 1</a>
        <a href="http://localhost:8888/wk6_files/viewContent.php?page=7" class="w3-bar-item w3-button w3-padding-large">Record 7</a>
        <a href="http://localhost:8888/wk6_files/viewContent.php?page=19" class="w3-bar-item w3-button w3-padding-large">Record 19</a>
    </div>
</div>

<!-- Header -->
<header class="w3-container w3-red w3-center" style="padding:128px 16px">
    <h1 class="w3-margin w3-jumbo">LAMP Stack Front-end Demo</h1>
    <a href="https://www.linkedin.com/in/collyn-b-7a6942a8/" target="blank">
        <button class="w3-button w3-black w3-padding-large w3-large w3-margin-top">Collyn Brenner on LinkedIn</button>
    </a>
    </header>

<!-- First Grid -->
<div class="w3-row-padding w3-padding-64 w3-container">
    <div class="w3-content">
        <div class="w3-twothird">
            <h1>Welcome to the Demo!</h1>
            <h5 class="w3-padding-32">This resposive webpage is a front-end demo for a project that I made for a 6-week Advanced Web 
                Design & Development class that I was 
                enrolled in at Trevecca Nazarene University in 2021. This front-end demo was built from a W3Schools responsive template and goes beyond 
                the course requirements, however I felt as though for both the benefit of the viewer and developer that it might be of some benefit 
                to add. I prefer to be result-oriented and a demo of what the user would see seemed logical to provide for this project.</h5>

            <p class="w3-text-grey">The below section is dynamically-generated from PHP, MySQL, Apache & Tiny MCE. TinyMCE
                allows admins to change the content of an area of text in a website through use of a text editor that generates 
                HTML elements and the inner text. The section below demos its purpose in a context to provide a vision of what is 
                possible with this technology.</p>
            </div>

            <div class="w3-third w3-center">
            <i class="fa fa-anchor w3-padding-64 w3-text-red"></i>
        </div>
    </div>
</div>

<!-- Second Grid -->
<div class="w3-row-padding w3-light-grey w3-padding-64 w3-container"  id="bookmark">
    <div class="w3-content">
        <div class="w3-third w3-center">
            <i class="fa fa-coffee w3-padding-64 w3-text-red w3-margin-right"></i>
        </div>


        <!--  PHP $CONTENTDATA INSERTION INTO PAGE IS LOCATED HERE -->
        <?php echo htmlspecialchars_decode($contentData); ?>


    </div>
</div>

<div class="w3-container w3-black w3-center w3-opacity w3-padding-64">
    <h1 class="w3-margin w3-xlarge">Quote of the day: “How many programmers does it take to change a light bulb? None, that’s a hardware problem.”</h1>
</div>

<!-- Footer -->
<footer class="w3-container w3-padding-64 w3-center w3-opacity">  
    <div class="w3-xlarge w3-padding-32">
        <i class="fa fa-facebook-official w3-hover-opacity"></i>
        <i class="fa fa-instagram w3-hover-opacity"></i>
        <i class="fa fa-snapchat w3-hover-opacity"></i>
        <i class="fa fa-pinterest-p w3-hover-opacity"></i>
        <i class="fa fa-twitter w3-hover-opacity"></i>
        <a href="https://www.linkedin.com/in/collyn-b-7a6942a8/" target="blank"><i class="fa fa-linkedin w3-hover-opacity"></i></a>
    </div>
    <p  class="w3-text-grey">***Produced by Collyn Christopher Brennner***</p>
</footer>
</body>
</html>
