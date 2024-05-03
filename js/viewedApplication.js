document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const applicantId = urlParams.get('id');

    fetch(`viewedApplication.php?id=${applicantId}`)
        .then(response => response.text())
        .then(text => {
            try {
                const data = JSON.parse(text);
                const table = document.getElementById("myTable");
                

                data.forEach(function (item) {
                    let parsedData = JSON.parse(item.data); // Parsing the nested JSON string
                    document.getElementById('applicationTitle').textContent = `${parsedData.firstName}'s Application`; // Updates the title dynamically

                    // Function to create and append row elements
                    function addRow(name, value) {
                        let row = document.createElement("tr");
                        let cellHeader = document.createElement("th");
                        cellHeader.textContent = name;
                        let cellData = document.createElement("td");

                        // Check if the value has a link or not
                        if (value && typeof value === 'object' && value.full_path) {
                            let link = `<a href="uploads/${value.full_path}" target="_blank" class="btn">View Document</a>`;
                            cellData.innerHTML = link;
                        } else {
                            cellData.textContent = value || "N/A"; // Display "N/A" if value is empty
                        }

                        row.appendChild(cellHeader);
                        row.appendChild(cellData);
                        table.appendChild(row);
                    }

                    // Append data to the table
                    addRow("Serial Number", item.serialNumber);
                    addRow("DateTime", item.dateTime);
                    addRow("First Name", parsedData.firstName);
                    addRow("Last Name", parsedData.lastName);
                    addRow("Program", parsedData.Program);
                    addRow("Email", parsedData.Email);
                    addRow("Home Phone", parsedData.homePhone);
                    addRow("Mobile Phone", parsedData.mobilePhone);
                    addRow("Term", parsedData.Term);
                    addRow("Birth Date", parsedData.birthDate);
                    addRow("Gender", parsedData.Gender);
                    addRow("Street Address", parsedData.streetAddress);
                    addRow("Street Address 2", parsedData.streetAddress2);
                    addRow("Country", parsedData.Country);
                    addRow("City", parsedData.City);
                    addRow("State/Province/Region", parsedData.stateProvinceRegion);
                    addRow("Postal Code", parsedData.postalCode);
                    addRow("Citizenship", parsedData.Citizenship);
                    addRow("Visa Status", parsedData.visaStatus);
                    addRow("Sponsor First Name", parsedData.sponsorFirstName);
                    addRow("Sponsor Last Name", parsedData.sponsorLastName);
                    addRow("Sponsor Gender", parsedData.sponsorGender);
                    addRow("Sponsor Email", parsedData.sponsorEmail);
                    addRow("Sponsor Phone", parsedData.sponsorPhone);
                    addRow("Sponsor Street Address", parsedData.sponsorStreetAddress);
                    addRow("Sponsor Street Address 2", parsedData.sponsorStreetAddress2);
                    addRow("Sponsor Country", parsedData.sponsorCountry);
                    addRow("Sponsor City", parsedData.sponsorCity);
                    addRow("Sponsor State", parsedData.sponsorState);
                    addRow("Sponsor Postal", parsedData.sponsorPostal);
                    addRow("Institution", parsedData.Institution);
                    addRow("Institution Date From", parsedData.institutionDateFrom);
                    addRow("Institution Date To", parsedData.institutionDateTo);
                    addRow("Degree", parsedData.Degree);
                    addRow("Institution City/Country", parsedData.institutionCityCountry);
                    addRow("GED", parsedData.GED);
                    addRow("Currently Enrolled", parsedData.currentlyEnrolled);
                    addRow("Transfer Student", parsedData.transferStudent);
                    addRow("Withdrawn Status", parsedData.withdrawnStatus);
                    addRow("Arrested Status", parsedData.arrestedStatus);
                    addRow("Substance Abuse", parsedData.substanceAbuse);
                    addRow("Personal Statement", parsedData.personalStatement);
                    addRow("Required Documents", parsedData.reqDoc);
                    addRow("Heard From", parsedData.heardFrom);
                    addRow("Personal Savings", parsedData.personalSavings);
                    addRow("Government Loans", parsedData.governmentLoans);
                    addRow("Family Support", parsedData.familySupport);
                    addRow("Private Loans", parsedData.privateLoans);
                    addRow("Other Finance", parsedData.otherFinance);
                    addRow("Acknowledgement", parsedData.Aknowledgement);
                    addRow("Applicant Signature", parsedData.applicantSignature);
                    addRow("Date Signed", parsedData.dateSigned);
                });
            } catch (error) {
                console.error('Error parsing JSON:', text);
                throw error;
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

document.getElementById('exportBtn').addEventListener('click', function () {
    window.location.href = 'export.php';
});
