<?php

header('Access-Control-Allow-Origin: *');

// Retrieve the form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

// Database credentials
$host = 'localhost'; // the name of the server where your website resides
$username = 'root'; 
$password = '';
$dbname = 'test';

// Create database connection 
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}  

// Prepare insert statement 
$sql = "INSERT INTO register ( name, email, phone) VALUES ('$name', '$email', '$phone')";

//! Execute the query wihout redirection statement
if ($conn->query($sql) === TRUE) {
    http_response_code(200);
    echo '<link rel="stylesheet" href="styles.css">';
    echo 'Data added successfully';
    echo '<a href="../../index.html">Go home</a>';
    echo '<a href="../../courses.html">Add another data </a>';
    
  } else {
    http_response_code(500);
    echo 'Error adding data: ' . $conn->error;
    echo '<a href="../../index.html">Go home</a>';
    echo '<a href="../../courses.html">Try again data </a>';
  }


// Close connection 
$conn->close();

?>