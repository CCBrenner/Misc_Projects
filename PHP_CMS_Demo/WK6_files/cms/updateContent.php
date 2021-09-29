<!DOCTYPE HTML>
<html>
<head>
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <title>Update Record</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="responsiveStyles.css">
    <!-- TinyMCE -->
    <script src="https://cdn.tiny.cloud/1/nat3b3s8xd2yp25be0sotsiyevo4w4js9hikwy03nd9bixn1/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
    
</head>
</head>
<body class="text-center">

    <?php

    // Global Navigation
    require_once("navigation.php");

    // Database Connection
    require_once("databaseConnection.php");

    // Initalize variable for query string
    $page = htmlspecialchars($_GET['page']);   // get the page variable from the borwser URL string and put in local variable

    // This page's SQL Statement Declaration
    $sql = "SELECT * FROM content WHERE id='$page'";

    // Assigns SQL query results to variable
    $result = mysqli_query($conn, $sql);

    // Checks that there are records in the table before performing actions
    if(mysqli_num_rows($result) > 0) {

        // Fetches the row data from the current row in the loop
        while($row = mysqli_fetch_assoc($result)) {

            // Create local variables for autofill of form fields
            $title = $row['title'];
            $metaKeywords = $row['metaKeywords'];
            $metaDescription = $row['metaDescription'];
            $contentData = $row['contentData'];

        }

    } else {
        echo "Zero results.";
    }

    // Closes the database connection safely and securly (Procedural style)
    mysqli_close($conn);

    ?>

    <section>
        <form name="myForm" method="post" action="updateContentToDB.php">
            <fieldset>
                <h3 id="recFormTitle">Update Record</h3>

                <!-- Hidden input field assists in updating DB & debugging -->
                <input type="hidden" name="content_id" id="content_id" value="<?php echo $page;?>">

                <section class="flexbox1">
                    <span class="flexitem">
                        Title
                        <input type="text" name="title" id="title" value="<?php echo $title;?>">
                    </span>
                    <span class="flexitem">
                        Keywords
                        <input type="text" name="metaKeywords" id="metaKeywords" value="<?php echo $metaKeywords;?>">
                    </span>
                    <span class="flexitem">
                        Description
                        <input type="text" name="metaDescription" id="metaDescription" value="<?php echo $metaDescription;?>">
                    </span>
                </section>
                <br />
                <p>Content</p>
                <textarea type="text" name="contentData" id="contentdata"><?php echo $contentData;?></textarea>
                <!-- <input type="text" name="contentData" id="contentData" value="<?php //echo $contentData;?>"> -->
            </fieldset>
            <br />
            <input type="submit" class="btn btn-primary" name="subBtn" id="subBtn" value="Update Record">     
        </form>
    </section>
    <script>
        tinymce.init({
            selector: 'textarea',
            plugins: 'a11ychecker advcode casechange formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker',
            toolbar: 'a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed permanentpen table',
            toolbar_mode: 'floating',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
        });
    </script>
</body>
</html>
