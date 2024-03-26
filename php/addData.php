<?php
 
header('Access-Control-Allow-Origin: *');

//! Retrieve the form data (all form data goes in here )
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$homePhone = $_POST['homePhone'];
$mobilePhone = $_POST['mobilePhone'];
$term = $_POST['termOption'];
$program = $_POST['program'];
$bday = $_POST['bday'];
$gender = $_POST['gender'];
$streetAddress = $_POST ['$streetAddress'];
$streetAddress2 = $_POST ['$streetAddress2'];
$country = $_POST ['country'];
$city = $_POST ['city'];
$state = $_POST ['state-province-region'];
$postal = $_POST ['postal'];
$citizenship = $_POST['citizenship'];
$visa = $_POST['visaStatus'];
$sponsorFName = $_POST['fname2'];
$sponsorLName = $_POST['lname2'];
$sponsorGender = $_POST['gender1'];
$sponsorEmail = $_POST['email2'];
$sponsorPhone = $_POST['sponsorNumber'];
$sponsorStreetAddress = $_POST ['$sponsorStreetAddress'];
$sponsorStreetAddress2 = $_POST ['$sponsorStreetAddress2'];
$sponsorCountry = $_POST ['country2'];
$sponsorCity = $_POST ['city2'];
$sponsorState = $_POST ['state-province-region2'];
$sponsorPostal = $_POST ['postal2'];
$institution = $_POST['institution'];
$institutionDateFrom = $_POST['dateFrom'];
$institutionDateTo = $_POST['dateTo'];
$degree = $_POST['degree'];
$institutionCityCountry = $_POST['city-country'];
$GED = $_POST['GED'];
$currentlyEnrolled = $_POST['choice1'];
$transferStudent = $_POST['choice2'];
$withdrawnStatus = $_POST['choice3'];
$arrestedStatus = $_POST['choice4'];
$substanceAbuse = $_POST['choice5'];
$personalStatement = $_POST['personalStatement'];
$reqDoc = $_POST['requiredDocuments']; // use cloudinary
$source = $_POST['source'];
$personalSavings = $_POST['personalSavings'];
$govtLoans = $_POST['govtLoans'];
$familySupport = $_POST['familySupport'];
$privateLoans = $_POST['privateLoans'];
$otherFinance = $_POST['otherFinance'];
$aknowledgement  = $_POST['choice'];
$signature = $_POST['signature'];
$dateSigned = $_POST['dateSigned'];



// Connect to the MySQL database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "allsaintsuniversity";
 
$connection = new mysqli($servername, $username, $password, $dbname);

// Check for errors
if ($connection->connect_error) {
  die('Connection failed: ' . $connection->connect_error);
}
 
// Construct the SQL query

$sql = "INSERT INTO application (firstName, lastName, email, homePhone, mobilePhone, Term, Program, birthDate, Gender, streetAddress, streetAddress2, Country, City, stateProvinceRegion, Postal, Citizenship, visaStatus, sponsorFirstName, sponsorLastName, sponsorGender, sponsorEmail, sponsorPhone, sponsorStreetAddress, sponsorStreetAddress2, sponsorCountry, sponsorCity, sponsorState, sponsorPostal, Institution, institutionDateFrom, institutionDateTo, Degree, institutionCityCountry, GED, currentlyEnrolled, transferStudent, withdrawnStatus, arrestedStatus, substanceAbuse, personalStatement, heardFrom, personalSavings, governmentLoans, familySupport, privateLoans, otherFinance, Aknowledgement, applicantSignature, dateSigned ) VALUES ('$fname', '$lname', '$email', '$homePhone' , '$mobilePhone' , '$term' , '$program' , '$bday' , '$gender' , '$streetAddress' , '$streetAddress2' , '$country' , '$city' , '$state' , '$postal' , '$citizenship' , '$visa' , '$sponsorFName' , '$sponsorLName' , '$sponsorGender' , '$sponsorEmail' , '$sponsorPhone' , '$sponsorStreetAddress' , '$sponsorStreetAddress2' , '$sponsorCountry' , '$sponsorCity' , '$sponsorState' , '$sponsorPostal' , '$institution' , '$institutionDateFrom' , '$institutionDateTo' , '$degree' , '$institutionCityCountry' , '$GED' , '$currentlyEnrolled' , '$transferStudent' , '$withdrawnStatus' , '$arrestedStatus' , '$substanceAbuse' , '$personalStatement' , '$source' , '$personalSavings' , '$govtLoans' , '$familySupport' , '$privateLoans' , '$otherFinance' , '$aknowledgement' , '$signature' , '$dateSigned')";
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
