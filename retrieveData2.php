<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'AllSaintsDatabase';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    echo json_encode(['error' => "Connection failed: " . $conn->connect_error]);
    exit;
}

$sql = "SELECT * FROM register";
$result = $conn->query($sql);
if (!$result) {
    echo json_encode(['error' => "Query failed: " . $conn->error]);
    exit;
}

$data = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    $data = [];
}

echo json_encode($data);
$conn->close();
?>
