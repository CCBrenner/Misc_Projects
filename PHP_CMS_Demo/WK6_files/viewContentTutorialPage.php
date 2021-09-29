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
        $metaDescrition = $row['metaDescription'];
        $metaKeywords = $row['metaKeywords'];
        $contentData = $row['contentData'];
   
    }
} else {
    echo "No results found.";
}

?>



<html>
<head>
    <meta charset="utf-8">
    <meta name="description" content="<?php echo $metaDescription; ?>">
    <meta name="keywords" content="<?php echo $metaKeywords; ?>">
    <title><?php echo $title; ?></title>
</head>
<body>
    <?php echo $contentData; ?>
</body>
</html>