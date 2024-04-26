<?php

// Header for cross-origin requests (if needed)
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Database credentials (replace with your actual values)
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'AllSaintsDatabase';

// Connect to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$searchName = $_GET['searchName'];



// Prepare the SQL query
$sql = "SELECT serialNumber, 
                JSON_UNQUOTE(JSON_EXTRACT(data, '$.firstName')) AS firstName, 
                JSON_UNQUOTE(JSON_EXTRACT(data, '$.lastName')) AS lastName, 
                JSON_UNQUOTE(JSON_EXTRACT(data, '$.Program')) AS program, 
                JSON_UNQUOTE(JSON_EXTRACT(data, '$.Email')) AS email, 
                JSON_UNQUOTE(JSON_EXTRACT(data, '$.homePhone')) AS homePhone, 
                JSON_UNQUOTE(JSON_EXTRACT(data, '$.Term')) AS term 
        FROM register 
        WHERE JSON_UNQUOTE(JSON_EXTRACT(data, '$.firstName')) LIKE '%$searchName%' OR JSON_UNQUOTE(JSON_EXTRACT(data, '$.lastName')) LIKE '%$searchName%'
        ORDER BY serialNumber ASC";


// Execute the query
$result = $conn->query($sql);

// Prepare the data array
$data = array();

// Fetch data if results exist
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    // Handle empty result set by returning an empty array
    $data = [];
}

// Send the data as JSON
echo json_encode($data);

// Close the database connection
$conn->close();

?>