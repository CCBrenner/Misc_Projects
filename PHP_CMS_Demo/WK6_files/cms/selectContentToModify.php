<!DOCTYPE html>
<html>
<head>
    <title>Content Table</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
    <script src="sorttable.js"></script>
</head>
<body>
    <?php

    // Global Navigation
    require_once("navigation.php");

    // DB Connection
    require_once("databaseConnection.php");


    // Start of pulling and rendering data to client from DB

    // This page's SQL Statement Declaration
    $sql = "SELECT * FROM content";

    // Check connection
    if ($result = mysqli_query($conn, $sql)) {

        // Check if data rows exist
        $rownum = mysqli_num_rows($result);
        if ($rownum > 0) {
            echo "
            <article>    
                <table class='text-center sortable'>
                    <th id='tableTitle' colspan=8>'Content' Table</th> <!-- <- I would like to render this dynamically in the future. -->
                    <tr>
                        <th colspan=2>Actions</th>
                        <th></th>
                        <th>ID/PK</th>
                        <th>Title</th>
                        <th>Meta Keywords</th>
                        <th>Meta Description</th>
                        <th>Content Data</th>
                    </tr>
            ";

            // while loop for rendering each DB record in Content table
            while($row = mysqli_fetch_array($result)) {
                echo "
                    <tr>
                        <td><a href='updateContent.php?page=" . $row['id'] . "'>Edit</a></td>
                        <td><a href='deleteContent.php?page=" . $row['id'] . "'>Delete" . "</a></td>
                        <td></td>
                        <td>" . $row['id'] . "</td>
                        <td>" . $row['title'] . "</td>
                        <td>" . $row['metaKeywords'] . "</td>
                        <td>" . $row['metaDescription'] . "</td>
                        <td>" . $row['contentData'] . "</td>
                    </tr>
                ";
            }
            
            echo "
                    <tr>
                        <td colspan=2><a href='createContent.php'>Create Record</a></td>
                    </tr>
                </table>
            </article>
            ";

            // frees up memory
            mysqli_free_result($result);
        }
        else {
            echo "There are no data rows to access in this table.";
        }

    } else {
        echo "Error: Failed to connect to the database.";
    }
    ?>
</body>
</html>
