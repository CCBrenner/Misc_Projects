<!DOCTYPE html>
<html>
<head>
    <title>Create Record</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php 

    // Global Navigation
    require_once("navigation.php");

    // Declare form variables to be used in code here
    $title = htmlspecialchars($_POST['title']);   // assigns the content from input element with name 'title' to the variable
    $metaKeywords = htmlspecialchars($_POST['metaKeywords']);
    $metaDescription = htmlspecialchars($_POST['metaDescription']);
    $contentData = htmlspecialchars($_POST['contentData']);

    // DB Connection
    require_once("databaseConnection.php");

    // This page's SQL Command Declaration
    $sql = "INSERT INTO content(title, metaKeywords, metaDescription, contentData) VALUES ('$title', '$metaKeywords', '$metaDescription', '$contentData')";

    if (mysqli_query($conn, $sql)) {
        echo "<section><p>Record created successfully! Click --><a href='selectContentToModify.php' id='succa'> here </a><-- to go to Content table display page.</p></section";
    } else {
        // I wanted to check that data can be inserted to DB before loading this page but the design here disallows for that; oh well
        echo "Error: " . $sql . " " . mysqli_error($conn);
    }

    ?>
</body>
</html>
