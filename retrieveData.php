<?php

// Header for cross-origin requests (if needed)
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json'); // Ensuring the correct content type is set for JSON output

// Database credentials (replace with your actual values)
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'AllSaintsDatabase';

// Connect to the database
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_set_charset($conn, "utf8"); // Ensure the charset is set to utf8 to avoid encoding issues


// Check for connection errors
if ($conn->connect_error) {
    die(json_encode(['error' => 'Connection failed: ' . $conn->connect_error]));
}

// Prepare the SQL query
$sql = "SELECT serialNumber, 
               JSON_UNQUOTE(JSON_EXTRACT(data, '$.firstName')) AS firstName, 
               JSON_UNQUOTE(JSON_EXTRACT(data, '$.lastName')) AS lastName, 
               JSON_UNQUOTE(JSON_EXTRACT(data, '$.Program')) AS program, 
               JSON_UNQUOTE(JSON_EXTRACT(data, '$.Email')) AS email, 
               JSON_UNQUOTE(JSON_EXTRACT(data, '$.homePhone')) AS homePhone, 
               JSON_UNQUOTE(JSON_EXTRACT(data, '$.Term')) AS term 
        FROM register 
        ORDER BY serialNumber ASC 
        LIMIT 15";
// serialNumber, firstName, lastName, Program AS program, Email AS email, homePhone, Term AS term 


// Execute the query
$result = $conn->query($sql);

// Check if query was successful
if ($result === false) {
    die(json_encode(['error' => 'Query failed: ' . $conn->error]));
}

// Prepare the data array
$data = array();

// Fetch data if results exist
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row; // Directly use the row data as it's already properly formatted
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