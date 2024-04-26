<?php
// Connect to your MySQL database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if file is selected
if(isset($_FILES["file"])) {
    // Read the file content
    $fileContent = file_get_contents($_FILES["file"]["tmp_name"]);
    
    // Insert the file content into the database
    $sql = "INSERT INTO register (file) VALUES (?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("b", $fileContent); // 'b' indicates a BLOB parameter
    $stmt->execute();
    
    if($stmt->affected_rows > 0) {
        echo "File content uploaded successfully.";
    } else {
        echo "Sorry, there was an error uploading file content.";
    }
    
    $stmt->close();
}

$conn->close();
?>