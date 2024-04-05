<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Access-Control-Allow-Origin: *');

// Retrieve the form data


$firstName = $_POST['fname'];
$lastName = $_POST['lname'];
$Email = $_POST['email'];
$homePhone = $_POST['homeNumber'];
$mobilePhone = $_POST['mobileNumber'];
$Term = $_POST['termOption'];
$Program = $_POST['program'];
$birthDate = $_POST['bday'];
$Gender = $_POST['gender'];
$streetAddress = $_POST['streetAddress'];
$streetAddress2 = $_POST['streetAddress2'];
$Country = $_POST['country'];
$City = $_POST['city'];
$stateProvinceRegion = $_POST['state-province-region'];
$postalCode = $_POST['postal'];
$Citizenship = $_POST['citizenship'];
$visaStatus = $_POST['visaStatus'];
$sponsorFirstName = $_POST['fname2'];
$sponsorLastName = $_POST['lname2'];
$sponsorGender = $_POST['gender1'];
$sponsorEmail = $_POST['email2'];
$sponsorPhone = $_POST['sponsorNumber'];
$sponsorStreetAddress = $_POST['sponsorStreetAddress'];
$sponsorStreetAddress2 = $_POST['sponsorStreetAddress2'];
$sponsorCountry = $_POST['country2'];
$sponsorCity = $_POST['city2'];
$sponsorState = $_POST['state-province-region2'];
$sponsorPostal = $_POST['postal2'];
$Institution = $_POST['institution'];
$institutionDateFrom = $_POST['dateFrom'];
$institutionDateTo = $_POST['dateTo'];
$Degree = $_POST['degree'];
$institutionCityCountry = $_POST['city-country'];
$GED = $_POST['GED'];
$currentlyEnrolled = $_POST['choice1'];
$transferStudent = $_POST['choice2'];
$withdrawnStatus = $_POST['choice3'];
$arrestedStatus = $_POST['choice4'];
$substanceAbuse = $_POST['choice5'];
$personalStatement = $_POST['personalStatement'];
$reqDoc = $_POST['requiredDocuments']; // use cloudinary
$heardFrom = $_POST['source'];
$personalSavings = $_POST['personalSavings'];
$governmentLoans = $_POST['govtLoans'];
$familySupport = $_POST['familySupport'];
$privateLoans = $_POST['privateLoans'];
$otherFinance = $_POST['otherFinance'];
$Aknowledgement = $_POST['choice'];
$applicantSignature = $_POST['signature'];
$dateSigned = $_POST['dateSigned'];

// Database credentials
$host = 'localhost'; // the name of the server where your website resides
$username = 'root'; 
$password = '';
$dbname = 'allsaints';

// Create database connection 
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}  


// Prepare insert statement 
// $sql = "INSERT INTO application (firstName,	lastName,	Email, homePhone,	mobilePhone,	Term,	Program,	birthDate,	Gender,	streetAddress,	streetAddress2,	Country,	City,	stateProvinceRegion,	postalCode,	Citizenship,	visaStatus,	sponsorFirstName,	sponsorLastName,	sponsorGender,	sponsorEmail,	sponsorPhone,	sponsorStreetAddress,	sponsorStreetAddress2,	sponsorCountry,	sponsorCity,	sponsorState,	sponsorPostal,	Institution,	institutionDateFrom,	institutionDateTo,	Degree,	institutionCityCountry,	GED,	currentlyEnrolled,	transferStudent,	withdrawnStatus,	arrestedStatus,	substanceAbuse,	personalStatement,	heardFrom,	personalSavings,	governmentLoans,	familySupport,	privateLoans,	otherFinance,	Aknowledgement,	applicantSignature,	dateSigned) VALUES ('$firstName',	'$lastName',	'$Email',	'$homePhone',	'$mobilePhone',	'$Term',	'$Program',	'$birthDate',	'$Gender',	'$streetAddress',	'$streetAddress2',	'$Country',	'$City',	'$stateProvinceRegion',	'$postalCode',	'$Citizenship',	'$visaStatus',	'$sponsorFirstName',	'$sponsorLastName',	'$sponsorGender',	'$sponsorEmail',	'$sponsorPhone',	'$sponsorStreetAddress',	'$sponsorStreetAddress2',	'$sponsorCountry',	'$sponsorCity',	'$sponsorState',	'$sponsorPostal',	'$Institution',	'$institutionDateFrom',	'$institutionDateTo',	'$Degree',	'$institutionCityCountry',	'$GED',	'$currentlyEnrolled',	'$transferStudent',	'$withdrawnStatus',	'$arrestedStatus',	'$substanceAbuse',	'$personalStatement',	'$heardFrom',	'$personalSavings',	'$governmentLoans',	'$familySupport',	'$privateLoans',	'$otherFinance',	'$Aknowledgement',	'$applicantSignature',	'$dateSigned')";


$sql = "INSERT INTO register (firstName,	lastName,	Email, homePhone,	mobilePhone,	Term,	Program,	birthDate,	Gender,	streetAddress, streetAddress2, Country, City,	stateProvinceRegion,	postalCode,	Citizenship,	visaStatus,	sponsorFirstName,	sponsorLastName,	sponsorGender,	sponsorEmail,	sponsorPhone,	sponsorStreetAddress,	sponsorStreetAddress2,	sponsorCountry,	sponsorCity,	sponsorState,	sponsorPostal,	Institution,	institutionDateFrom,	institutionDateTo) VALUES ('$firstName',	'$lastName',	'$Email',	'$homePhone',	'$mobilePhone',	'$Term',	'$Program',	'$birthDate',	'$Gender',	'$streetAddress', '$streetAddress2', '$Country', '$City', '$stateProvinceRegion', '$postalCode', '$Citizenship', '$visaStatus', '$sponsorFirstName',	'$sponsorLastName',	'$sponsorGender',	'$sponsorEmail',	'$sponsorPhone',	'$sponsorStreetAddress',	'$sponsorStreetAddress2',	'$sponsorCountry',	'$sponsorCity',	'$sponsorState',	'$sponsorPostal',	'$Institution',	'$institutionDateFrom',	'$institutionDateTo')";

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