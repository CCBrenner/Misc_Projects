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
    
    echo "
        <p>Are you sure you want to delete record $id?</p>
        <a href='deleteContentFromDB.php?page=" . $id . "' class='btn btn-danger'>Delete</a>
        <a href='selectContentToModify.php' class='btn btn-primary'>Cancel</a>
    ";

    ?>

</body>
</html>
