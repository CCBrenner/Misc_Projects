<!DOCTYPE HTML>
<html>
<head>
    <title>Create Record</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="responsiveStyles.css">
    <!-- TinyMCE -->
    <script src="https://cdn.tiny.cloud/1/nat3b3s8xd2yp25be0sotsiyevo4w4js9hikwy03nd9bixn1/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
</head>
<body class="text-center">

<?php

// Global Navigation
require_once("navigation.php");

// DB Connection
require_once("databaseConnection.php");

?>

<section>
    <form name="myForm" method="post" action="insertContentToDB.php">
        <fieldset>
            <h3 id="recFormTitle">Create Record</h3>

            <!-- Hidden input field assists in updating DB & debugging -->
            <input type="hidden" name="content_id" id="content_id">

            <section class="flexbox1">
                <span class="flexitem">
                    Enter a Title
                    <input type="text" name="title" id="title">
                </span>
                <span class="flexitem">
                    Enter some Keywords
                    <input type="text" name="metaKeywords" id="metaKeywords">
                </span>
                <span class="flexitem">
                    Enter a Description
                    <input type="text" name="metaDescription" id="metaDescription">
                </span>
            </section>
            <br />
            <p>Enter the Content</p>
            <textarea type="text" name="contentData" id="contentdata"></textarea>
            <!-- <input type="text" name="contentData" id="contentData" value="<?php //echo $contentData;?>"> -->
        </fieldset>
        <br />
        <input type="submit" class="btn btn-primary" name="subBtn" id="subBtn" value="Create Record">
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
