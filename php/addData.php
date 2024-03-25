<?php
 
header('Access-Control-Allow-Origin: *');

//! Retrieve the form data (all form data goes in here )
$id = $_POST['id'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];


// Connect to the MySQL database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dbname";
 
$connection = new mysqli($servername, $username, $password, $dbname);

// Check for errors
if ($connection->connect_error) {
  die('Connection failed: ' . $connection->connect_error);
}
 
// Construct the SQL query
$sql = "INSERT INTO crudTest (ID, FullName, Email, Phone) VALUES ('$id', '$name', '$email', '$phone')";
// $sql = "INSERT INTO crudTest (ID, FullName, Email, Phone) VALUES ('4', 'Abiola', 'Abiola', '89789667')";

// Execute the query
if ($connection->query($sql) === TRUE) {
  http_response_code(200);
  echo "<script> alert('Data added succesffuly')   </script>";
  // echo 'Data added successfully';
} else {
  http_response_code(500);
  echo 'Error adding data: ' . $connection->error;
}

// Close the database connection
$connection->close();
?>
