console.log("hello");
document.addEventListener('DOMContentLoaded', function() {
    fetch('retrieveData.php') // Adjust the URL to your PHP script
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('data-container');
        data.forEach(item => {
            const row = tableBody.insertRow();
            
            // Corrected to match the JSON keys exactly as they are expected to be
            const serialNumberCell = row.insertCell(0);
            const firstNameCell = row.insertCell(1);
            const lastNameCell = row.insertCell(2);
            const programCell = row.insertCell(3);
            const emailCell = row.insertCell(4);
            const homePhoneCell = row.insertCell(5);
            const termCell = row.insertCell(6);
            const optionCell = row.insertCell(7);

            serialNumberCell.innerHTML = item.serialNumber; // Correct case
            firstNameCell.innerHTML = item.firstName; // Correct case
            lastNameCell.innerHTML = item.lastName; // Correct case
            programCell.innerHTML = item.program; // Assuming this should be lowercase
            emailCell.innerHTML = item.email; // Assuming this should be lowercase
            homePhoneCell.innerHTML = item.homePhone; // Correct case
            termCell.innerHTML = item.term; // Assuming this should be lowercase
            optionCell.innerHTML = `<a href="#" class="btn">View</a>`; // Assuming every row has a view button
            
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});
