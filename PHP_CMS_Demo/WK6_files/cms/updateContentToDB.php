<head>
    <title>Update Record</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
</head>
<body>    
    <?php

    // Global Navigation
    require_once("navigation.php");

    $id = htmlspecialchars($_POST['content_id']);   // this is the PK in the content db table to perform the update
    $title = htmlspecialchars($_POST['title']);
    $metaKeywords = htmlspecialchars($_POST['metaKeywords']);
    $metaDescription = htmlspecialchars($_POST['metaDescription']);
    $contentData = htmlspecialchars($_POST['contentData']);

    // Database Connection
    require_once("databaseConnection.php");

    // This page's SQL Statement Declaration
    $sql = "UPDATE content SET title='$title', metaKeywords='$metaKeywords', metaDescription='$metaDescription', contentData='$contentData' WHERE id='$id'";

    if (mysqli_query($conn, $sql)) {
        echo "<article><p>Record updated successfully! Click --><a href='selectContentToModify.php' id='succa'> here </a><-- to go to Content table display page.</p></article>";
    } else {
        // I wanted to check that data can be inserted to DB before loading this page but the design here disallows for that; oh well
        echo "Error: " . $sql . " " . mysqli_error($conn);
    }

    // Closes the database connection safely and securly (Object-oriented style)
    $conn -> close();

    ?>
</body>
