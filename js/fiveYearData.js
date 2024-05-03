console.log("hello");

document.addEventListener('DOMContentLoaded', function () {
    fetch('retrieveFiveYear.php')
        .then(response => response.text())  // First convert to text to see what's coming
        .then(text => {
            try {
                const data = JSON.parse(text);
                const table = document.getElementById("myTable");

                data.forEach(function (item) {
                    let parsedData = JSON.parse(item.data); // Parsing the nested JSON string
                    let row = document.createElement("tr"); // Assuming you want to add rows to a table
                    let serialNumberCell = document.createElement("td");
                    let dateTimeCell = document.createElement("td");
                    let firstNameCell = document.createElement("td");
                    let lastNameCell = document.createElement("td");
                    let programCell = document.createElement("td");
                    let emailCell = document.createElement("td");
                    let homePhoneCell = document.createElement("td");
                    let mobilePhoneCell = document.createElement("td");
                    let termCell = document.createElement("td");
                    let birthDateCell = document.createElement("td");
                    let genderCell = document.createElement("td");
                    let streetAddressCell = document.createElement("td");
                    let streetAddress2Cell = document.createElement("td");
                    let countryCell = document.createElement("td");
                    let cityCell = document.createElement("td");
                    let stateCell = document.createElement("td");
                    let postalCodeCell = document.createElement("td");
                    let citizenshipCell = document.createElement("td");
                    let visaStatusCell = document.createElement("td");
                    let sponsorFirstNameCell = document.createElement("td");
                    let sponsorLastNameCell = document.createElement("td");
                    let sponsorGenderCell = document.createElement("td");
                    let sponsorEmailCell = document.createElement("td");
                    let sponsorPhoneCell = document.createElement("td");
                    let sponsorStreetAddressCell = document.createElement("td");
                    let sponsorStreetAddress2Cell = document.createElement("td");
                    let sponsorCountryCell = document.createElement("td");
                    let sponsorCityCell = document.createElement("td");
                    let sponsorStateCell = document.createElement("td");
                    let sponsorPostalCell = document.createElement("td");
                    let institutionCell = document.createElement("td");
                    let institutionDateFromCell = document.createElement("td");
                    let institutionDateToCell = document.createElement("td");
                    let degreeCell = document.createElement("td");
                    let institutionCityCountryCell = document.createElement("td");
                    let GEDCell = document.createElement("td");
                    let currentlyEnrolledCell = document.createElement("td");
                    let transferStudentCell = document.createElement("td");
                    let withdrawnStatusCell = document.createElement("td");
                    let arrestedStatusCell = document.createElement("td");
                    let substanceAbuseCell = document.createElement("td");
                    let personalStatementCell = document.createElement("td");
                    let requiredDocCell = document.createElement("td");
                    let heardFromCell = document.createElement("td");
                    let personalSavingsCell = document.createElement("td");
                    let governmentLoansCell = document.createElement("td");
                    let familySupportCell = document.createElement("td");
                    let privateLoansCell = document.createElement("td");
                    let otherFinanceCell = document.createElement("td");
                    let AknowledgementCell = document.createElement("td");
                    let applicantSignatureCell = document.createElement("td");
                    let dateSignedCell = document.createElement("td");
                    let optionCell = document.createElement("td");



                    serialNumberCell.textContent = `${item.serialNumber}`; // Access the parsed data
                    dateTimeCell.textContent = `${item.dateTime}`; // Access the parsed data
                    firstNameCell.textContent = `${parsedData.firstName}`; // Access the parsed data
                    lastNameCell.textContent = `${parsedData.lastName}`; // Access the parsed data
                    programCell.textContent = `${parsedData.Program}`; // Access the parsed data
                    emailCell.textContent = `${parsedData.Email}`; // Access the parsed data
                    homePhoneCell.textContent = `${parsedData.homePhone}`; // Access the parsed data
                    mobilePhoneCell.textContent = `${parsedData.mobilePhone}`; // Access the parsed data
                    termCell.textContent = `${parsedData.Term}`; // Access the parsed data
                    birthDateCell.textContent = `${parsedData.birthDate}`; // Access the parsed data
                    genderCell.textContent = `${parsedData.Gender}`; // Access the parsed data
                    streetAddressCell.textContent = `${parsedData.streetAddress}`; // Access the parsed data
                    streetAddress2Cell.textContent = `${parsedData.streetAddress2}`;
                    countryCell.textContent = `${parsedData.Country}`;
                    cityCell.textContent = `${parsedData.City}`;
                    stateCell.textContent = `${parsedData.stateProvinceRegion}`;
                    postalCodeCell.textContent = `${parsedData.postalCode}`;
                    citizenshipCell.textContent = `${parsedData.Citizenship}`;
                    visaStatusCell.textContent = `${parsedData.visaStatus}`;
                    sponsorFirstNameCell.textContent = `${parsedData.sponsorFirstName}`;
                    sponsorLastNameCell.textContent = `${parsedData.sponsorLastName}`;
                    sponsorGenderCell.textContent = `${parsedData.sponsorGender}`;
                    sponsorEmailCell.textContent = `${parsedData.sponsorEmail}`;
                    sponsorPhoneCell.textContent = `${parsedData.sponsorPhone}`;
                    sponsorStreetAddressCell.textContent = `${parsedData.sponsorStreetAddress}`;
                    sponsorStreetAddress2Cell.textContent = `${parsedData.sponsorStreetAddress2}`;
                    sponsorCountryCell.textContent = `${parsedData.sponsorCountry}`;
                    sponsorCityCell.textContent = `${parsedData.sponsorCity}`;
                    sponsorStateCell.textContent = `${parsedData.sponsorState}`;
                    sponsorPostalCell.textContent = `${parsedData.sponsorPostal}`;
                    institutionCell.textContent = `${parsedData.Institution}`;
                    institutionDateFromCell.textContent = `${parsedData.institutionDateFrom}`;
                    institutionDateToCell.textContent = `${parsedData.institutionDateTo}`;
                    degreeCell.textContent = `${parsedData.Degree}`;
                    institutionCityCountryCell.textContent = `${parsedData.institutionCityCountry}`;
                    GEDCell.textContent = `${parsedData.GED}`;
                    currentlyEnrolledCell.textContent = `${parsedData.currentlyEnrolled}`;
                    transferStudentCell.textContent = `${parsedData.transferStudent}`;
                    withdrawnStatusCell.textContent = `${parsedData.withdrawnStatus}`;
                    arrestedStatusCell.textContent = `${parsedData.arrestedStatus}`;
                    substanceAbuseCell.textContent = `${parsedData.substanceAbuse}`;
                    personalStatementCell.textContent = `${parsedData.personalStatement}`;
                    
                    let requiredDoc = parsedData.reqDoc;
                    console.log(requiredDoc );

                    if (requiredDoc && typeof requiredDoc === 'object' && requiredDoc.full_path) {
                        // Construct a link using the full_path property
                        let link = `<a href="uploads/${requiredDoc.full_path}" target="_blank" class="btn">View Document</a>`;
                        requiredDocCell.innerHTML = link;
                    } else {
                        requiredDocCell.textContent = "No documents";
                    }


                    heardFromCell.textContent = `${parsedData.heardFrom}`;
                    personalSavingsCell.textContent = `${parsedData.personalSavings}`;
                    governmentLoansCell.textContent = `${parsedData.governmentLoans}`;
                    familySupportCell.textContent = `${parsedData.familySupport}`;
                    privateLoansCell.textContent = `${parsedData.privateLoans}`;
                    otherFinanceCell.textContent = `${parsedData.otherFinance}`;
                    AknowledgementCell.textContent = `${parsedData.Aknowledgement}`;
                    applicantSignatureCell.textContent = `${parsedData.applicantSignature}`;
                    dateSignedCell.textContent = `${parsedData.dateSigned}`;



                    optionCell.innerHTML = `<a href="viewedApplication.html?id=${item.serialNumber}" class="btn">View</a>`; // Assuming every row has a view button

                    row.appendChild(serialNumberCell);
                    row.appendChild(dateTimeCell);
                    row.appendChild(firstNameCell);
                    row.appendChild(lastNameCell);
                    row.appendChild(programCell);
                    row.appendChild(emailCell);
                    row.appendChild(homePhoneCell);
                    row.appendChild(mobilePhoneCell);
                    row.appendChild(termCell);
                    row.appendChild(birthDateCell);
                    row.appendChild(genderCell);
                    row.appendChild(streetAddressCell);
                    row.appendChild(streetAddress2Cell);
                    row.appendChild(countryCell);
                    row.appendChild(cityCell);
                    row.appendChild(stateCell);
                    row.appendChild(postalCodeCell);
                    row.appendChild(citizenshipCell);
                    row.appendChild(visaStatusCell);
                    row.appendChild(sponsorFirstNameCell);
                    row.appendChild(sponsorLastNameCell);
                    row.appendChild(sponsorGenderCell);
                    row.appendChild(sponsorEmailCell);
                    row.appendChild(sponsorPhoneCell);
                    row.appendChild(sponsorStreetAddressCell);
                    row.appendChild(sponsorStreetAddress2Cell);
                    row.appendChild(sponsorCountryCell);
                    row.appendChild(sponsorCityCell);
                    row.appendChild(sponsorStateCell);
                    row.appendChild(sponsorPostalCell);
                    row.appendChild(institutionCell);
                    row.appendChild(institutionDateFromCell);
                    row.appendChild(institutionDateToCell);
                    row.appendChild(degreeCell);
                    row.appendChild(institutionCityCountryCell);
                    row.appendChild(GEDCell);
                    row.appendChild(currentlyEnrolledCell);
                    row.appendChild(transferStudentCell);
                    row.appendChild(withdrawnStatusCell);
                    row.appendChild(arrestedStatusCell);
                    row.appendChild(substanceAbuseCell);
                    row.appendChild(personalStatementCell);
                    row.appendChild(requiredDocCell);
                    row.appendChild(heardFromCell);
                    row.appendChild(personalSavingsCell);
                    row.appendChild(governmentLoansCell);
                    row.appendChild(familySupportCell);
                    row.appendChild(privateLoansCell);
                    row.appendChild(otherFinanceCell);
                    row.appendChild(AknowledgementCell);
                    row.appendChild(applicantSignatureCell);
                    row.appendChild(dateSignedCell);
                    row.appendChild(optionCell);

                    table.appendChild(row); // Append the new row to the table
                });
            } catch (error) {
                console.error('Error parsing JSON:', text);
                throw error;  // Re-throw to be caught by the catch block below
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

document.getElementById('exportBtn').addEventListener('click', function () {
    window.location.href = 'export.php';
});
