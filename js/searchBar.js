console.log("hello");

document.getElementById('nameSearchBtn').addEventListener('click', function () {
    var searchName = document.getElementById('searchName').value;


        if (searchName) {
            fetch(`searchBar.php?searchName=${encodeURIComponent(searchName)}`) 
                .then(response => response.json())
                .then(data => {
                    const tableBody = document.getElementById('data-container');
                    tableBody.innerHTML = ''; // Clear existing data

                    if (data.length == 0) {
                        alert("No name found");
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
                        tableBody.appendChild(row);
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
        } else {
            alert('Please enter valid name');
        }
});
