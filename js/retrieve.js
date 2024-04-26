document.addEventListener('DOMContentLoaded', function () {
    fetch('retrieveData.php')
        .then(response => response.json())  // Directly parse JSON
        .then(data => {
            const table = document.getElementById("data-container");
            table.innerHTML = ''; // Clear existing data

            data.forEach(function (item) {
                let row = document.createElement("tr");
                let serialNumberCell = document.createElement("td");
                let firstNameCell = document.createElement("td");
                let lastNameCell = document.createElement("td");
                let programCell = document.createElement("td");
                let emailCell = document.createElement("td");
                let homePhoneCell = document.createElement("td");
                let termCell = document.createElement("td");
                let optionCell = document.createElement("td");

                serialNumberCell.textContent = item.serialNumber;
                firstNameCell.textContent = item.firstName;
                lastNameCell.textContent = item.lastName;
                programCell.textContent = item.program;
                emailCell.textContent = item.email;
                homePhoneCell.textContent = item.homePhone;
                termCell.textContent = item.term;
                optionCell.innerHTML = `<a href="viewedApplication.html?id=${item.serialNumber}" class="btn">View</a>`;

                row.appendChild(serialNumberCell);
                row.appendChild(firstNameCell);
                row.appendChild(lastNameCell);
                row.appendChild(programCell);
                row.appendChild(emailCell);
                row.appendChild(homePhoneCell);
                row.appendChild(termCell);
                row.appendChild(optionCell);

                table.appendChild(row); // Append the new row to the table
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

fetch('applicantCount.php')  // Adjust this path to where your PHP script is hosted
    .then(response => response.json())
    .then(data => {
        document.getElementById('countAll').textContent = data.allApplicants;
        document.getElementById('count4Year').textContent = data.fourYearMD;
        document.getElementById('count5Year').textContent = data.fiveYearMD;
        document.getElementById('nursing').textContent = data.nursing;
    })
    .catch(error => console.error('Error fetching data:', error));
