<?php
// Header for cross-origin requests (if needed)
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json'); // Setting content type to JSON

// Database credentials
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'AllSaintsDatabase';

// Connect to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check for connection errors
if ($conn->connect_error) {
    die(json_encode(['error' => "Connection failed: " . $conn->connect_error]));
}

// Function to get count of applicants based on the program
function getCount($mysqli, $condition) {
    $sql = "SELECT COUNT(*) AS count FROM register WHERE $condition";
    $result = $mysqli->query($sql);
    if ($result) {
        $row = $result->fetch_assoc();
        return (int)$row['count'];
    } else {
        return 0; // Could log this error or handle differently
    }
}

// Array to hold the counts for each program
$programCounts = [
    'allApplicants' => getCount($conn, "JSON_VALUE(data, '$.Program') IS NOT NULL"), // Correctly check for any non-null program entry
    'fourYearMD' => getCount($conn, "JSON_VALUE(data, '$.Program') = '4-Year MD'"),
    'fiveYearMD' => getCount($conn, "JSON_VALUE(data, '$.Program') = '5-Year MD'"),
    'nursing' => getCount($conn, "JSON_VALUE(data, '$.Program') = 'B.S Nursing (BScn)'")
];

// Send the counts as JSON
echo json_encode($programCounts);

// Close the database connection
$conn->close();
?>
