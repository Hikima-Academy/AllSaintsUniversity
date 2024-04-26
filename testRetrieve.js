document.addEventListener('DOMContentLoaded', function () {
    fetch('testRetrieve.php')
        .then(response => response.json())  // Directly parse JSON
        .then(data => {
            const table = document.getElementById("data-container");
            table.innerHTML = ''; // Clear existing data

            data.forEach(function (item) {
                let row = document.createElement("tr");
                let serialNumberCell = document.createElement("td");

                let optionCell = document.createElement("td");

                serialNumberCell.textContent = item.serialNumber;

                optionCell.innerHTML = `<a href="viewedApplication.html?id=${item.serialNumber}" class="btn">View</a>`;

                row.appendChild(serialNumberCell);

                row.appendChild(optionCell);

                table.appendChild(row); // Append the new row to the table
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});


