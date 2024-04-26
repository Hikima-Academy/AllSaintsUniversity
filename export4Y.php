<?php
$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'AllSaintsDatabase';


// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Define the filename with the current date
$fileName = "export_data_" . date('Ymd') . ".csv";

header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename="' . $fileName . '"');

$output = fopen("php://output", "w");

// Add the header of the CSV file
fputcsv($output, array('serialNumber', 'dateTime', 'data'));

// Query to fetch data from your table
$sql = "SELECT * FROM register WHERE JSON_VALUE(data, '$.Program') = '4-Year MD'"; // Customize column names and table
foreach ($conn->query($sql) as $row) {
    fputcsv($output, $row); // Write row to CSV
}

fclose($output);
?>
