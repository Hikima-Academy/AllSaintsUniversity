console.log("hello");

document.getElementById('dateSearchBtn').addEventListener('click', function () {
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;
    if (startDate && endDate) {
        if (startDate <= endDate) {
            fetch(`searchDate.php?startDate=${startDate}&endDate=${endDate}`)
                .then(response => response.json())
                .then(data => {
                    const table = document.getElementById('data-container');
                    table.innerHTML = ''; // Clear existing data
                    console.log(data.length);

                    if (data.length == 0) {
                        alert("No data found for the selected date range.");
                    }

                    data.forEach(item => {
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

                        row.append(serialNumberCell, firstNameCell, lastNameCell, programCell, emailCell, homePhoneCell, termCell, optionCell);
                        table.appendChild(row);
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
        } else {
            alert("Start Date provided is after End Date");
        }
    } else {
        alert('Please select both start and end dates.');
    }
});
