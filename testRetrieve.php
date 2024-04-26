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

// Retrieve all files from the database
$sql = "SELECT file FROM register";
$result = $conn->query($sql);

// Check if files were found
if ($result->num_rows > 0) {
    // Output data of each file
    while ($row = $result->fetch_assoc()) {
        echo "File Name: " . $row["file"] . "<br>";
        
        // Set appropriate headers for file download
        header("Content-type: application/octet-stream");
        header("Content-Disposition: attachment; filename=\"" . $row["file"] . "\"");
        
        // Output the file content
        echo $row["file"];
        echo "<br>";
    }
} else {
    echo "No files found in the database.";
}

$conn->close();
?>