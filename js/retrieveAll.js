console.log("hello");

document.addEventListener('DOMContentLoaded', function() {
    fetch('retrieveData2.php') // Adjust the URL to your PHP script
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('data-container');
        data.forEach(item => {
            const row = tableBody.insertRow();
            
            // Corrected to match the JSON keys exactly as they are expected to be
            const serialNumberCell = row.insertCell(0);
            const dateTimeCell = row.insertCell(1);
            const firstNameCell = row.insertCell(2);
            const lastNameCell = row.insertCell(3);
            const programCell = row.insertCell(4);
            const emailCell = row.insertCell(5);
            const homePhoneCell = row.insertCell(6);
            const mobilePhoneCell = row.insertCell(7);
            const termCell = row.insertCell(8);
            const birthDateCell = row.insertCell(9);
            const genderCell = row.insertCell(10);
            const streetAddressCell = row.insertCell(11);
            const streetAddress2Cell = row.insertCell(12);
            const countryCell = row.insertCell(13);
            const cityCell = row.insertCell(14);
            const stateCell = row.insertCell(15);
            const postalCodeCell = row.insertCell(16);
            const citizenshipCell = row.insertCell(17);
            const visaStatusCell = row.insertCell(18);
            const sponsorFirstNameCell = row.insertCell(19);
            const sponsorLastNameCell = row.insertCell(20);
            const sponsorGenderCell = row.insertCell(21);
            const sponsorEmailCell = row.insertCell(22);
            const sponsorPhoneCell = row.insertCell(23);
            const sponsorStreetAddressCell = row.insertCell(24);
            const sponsorStreetAddress2Cell = row.insertCell(25);
            const sponsorCountryCell = row.insertCell(26);
            const sponsorCityCell = row.insertCell(27);
            const sponsorStateCell = row.insertCell(28);
            const sponsorPostalCell = row.insertCell(29);
            const institutionCell = row.insertCell(30);
            const institutionDateFromCell = row.insertCell(31);
            const institutionDateToCell = row.insertCell(32);
            const optionCell = row.insertCell(33);

            serialNumberCell.innerHTML = item.serialNumber; // Correct case
            dateTimeCell.innerHTML = item.dateTime;
            firstNameCell.innerHTML = item.firstName; // Correct case
            lastNameCell.innerHTML = item.lastName; // Correct case
            programCell.innerHTML = item.Program; // Assuming this should be lowercase
            emailCell.innerHTML = item.Email; // Assuming this should be lowercase
            homePhoneCell.innerHTML = item.homePhone; // Correct case
            mobilePhoneCell.innerHTML = item.mobilePhone;
            termCell.innerHTML = item.Term; // Assuming this should be lowercase
            birthDateCell.innerHTML = item.birthDate;
            genderCell.innerHTML = item.Gender;
            streetAddressCell.innerHTML = item.streetAddress;
            streetAddress2Cell.innerHTML = item.streetAddress2;
            countryCell.innerHTML = item.Country;
            cityCell.innerHTML = item.City;
            stateCell.innerHTML = item.stateProvinceRegion;
            postalCodeCell.innerHTML = item.postalCode;
            citizenshipCell.innerHTML = item.Citizenship;
            visaStatusCell.innerHTML = item.visaStatus;
            sponsorFirstNameCell.innerHTML = item.sponsorFirstName;
            sponsorLastNameCell.innerHTML = item.sponsorLastName;
            sponsorGenderCell.innerHTML = item.sponsorGender;
            sponsorEmailCell.innerHTML = item.sponsorEmail;
            sponsorPhoneCell.innerHTML = item.sponsorPhone;
            sponsorStreetAddressCell.innerHTML = item.sponsorStreetAddress;
            sponsorStreetAddress2Cell.innerHTML = item.sponsorStreetAddress2;
            sponsorCountryCell.innerHTML = item.sponsorCountry;
            sponsorCityCell.innerHTML = item.sponsorCity;
            sponsorStateCell.innerHTML = item.sponsorState;
            sponsorPostalCell.innerHTML = item.sponsorPostal;
            institutionCell.innerHTML = item.Institution;
            institutionDateFromCell.innerHTML = item.institutionDateFrom;
            institutionDateToCell.innerHTML = item.institutionDateTo;
            optionCell.innerHTML = `<a href="#" class="btn">View</a>`; // Assuming every row has a view button
            console.log("idk");
            
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});
