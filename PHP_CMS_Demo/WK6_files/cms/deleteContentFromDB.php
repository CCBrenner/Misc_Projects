<!DOCTYPE HTML>
<html>
<head>
    <title>Record Update</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
</head>
<body class="text-center">
    
    <?php
    
    // Global Navigation
    require_once("navigation.php");

    // Database Connection
    require_once("databaseConnection.php");

    // Grabs offered id from selected row to delete of previous page
    $id = htmlspecialchars($_GET['page']);
    
    // SQL Statement used on this webpage
    $sql = "DELETE FROM content WHERE id='$id'";
    
    // Reports the record deletion status to the user 
    if (mysqli_query($conn, $sql)) {
        echo "<p>Record deleted successfully! Click --><a href='selectContentToModify.php' id='succa'> here </a><-- to go to Content table display page.</p>";
    } else {
        echo "Error deleting record: " . mysqli_error($conn);
    }

    // Closes DB connection
    mysqli_close($conn);
    
    ?>

</body>
</html>
