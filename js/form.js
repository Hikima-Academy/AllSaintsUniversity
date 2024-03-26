console.log("hello");
const addDataForm = document.getElementById('upload');

addDataForm.addEventListener('submit', function event() {
  event.preventDefault();

  const formData = new FormData(addDataForm);

  //   configure the path to the php file
  fetch('../addData.php', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (response.ok) {
        alert('Data added successfully');
      } else {
        alert('Error adding data:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error adding data:', error);
      alert("Error");
    });
});



function Retrieve() {

  // Create a new XHR object
  let xhr = new XMLHttpRequest();
  let fname = document.getElementByName('fname');
  let lname = document.getElementByName('lname');
  let email = document.getElementByName('email');
  let homePhone = document.getElementByName('homePhone');
  let mobilePhone = document.getElementByName('mobilePhone');
  let term = document.getElementByName('termOption');
  let program = document.getElementByName('program');
  let bday = document.getElementByName('bday');
  let gender = document.getElementByName('gender');
  let streetAddress = document.getElementByName('$streetAddress');
  let streetAddress2 = document.getElementByName('$streetAddress2');
  let country = document.getElementByName('country');
  let city = document.getElementByName('city');
  let state = document.getElementByName('state-province-region');
  let postal = document.getElementByName('postal');
  let citizenship = document.getElementByName('citizenship');
  let visa = document.getElementByName('visaStatus');
  let sponsorFName = document.getElementByName('fname2');
  let sponsorLName = document.getElementByName('lname2');
  let sponsorGender = document.getElementByName('gender1');
  let sponsorEmail = document.getElementByName('email2');
  let sponsorPhone = document.getElementByName('sponsorNumber');
  let sponsorStreetAddress = document.getElementByName('$sponsorStreetAddress');
  let sponsorStreetAddress2 = document.getElementByName('$sponsorStreetAddress2');
  let sponsorCountry = document.getElementByName('country2');
  let sponsorCity = document.getElementByName('city2');
  let sponsorState = document.getElementByName('state-province-region2');
  let sponsorPostal = document.getElementByName('postal2');
  let institution = document.getElementByName('institution');
  let institutionDateFrom = document.getElementByName('dateFrom');
  let institutionDateTo = document.getElementByName('dateTo');
  let degree = document.getElementByName('degree');
  let institutionCityCountry = document.getElementByName('city-country');
  let GED = document.getElementByName('GED');
  let currentlyEnrolled = document.getElementByName('choice1');
  let transferStudent = document.getElementByName('choice2');
  let withdrawnStatus = document.getElementByName('choice3');
  let arrestedStatus = document.getElementByName('choice4');
  let substanceAbuse = document.getElementByName('choice5');
  let personalStatement = document.getElementByName('personalStatement');
  let reqDoc = document.getElementByName('requiredDocuments'); // use cloudinary
  let source = document.getElementByName('source');
  let personalSavings = document.getElementByName('personalSavings');
  let govtLoans = document.getElementByName('govtLoans');
  let familySupport = document.getElementByName('familySupport');
  let privateLoans = document.getElementByName('privateLoans');
  let otherFinance = document.getElementByName('otherFinance');
  let aknowledgement = document.getElementByName('choice');
  let signature = document.getElementByName('signature');
  let dateSigned = document.getElementByName('dateSigned');


  let dataB = document.getElementById('data-container')
  let table = document.getElementById('myTable')




  // Set the URL of the server-side script that will retrieve data from the database
  let url = "../retrieveData.php";

  // Set the request method to GET and the URL of the server-side script
  xhr.open("GET", url);

  // Set the response type to JSON
  xhr.responseType = "json";

  // Set a callback function to handle the response from the server-side script
  xhr.onload = function () {
    if (xhr.status === 200) {
      // The request was successful, so do something with the retrieved data
      console.log(xhr.response);
      const res = xhr.response;
      //   res.forEach((row) => {
      //     // id.innerHTML = row.ID
      //     // name.innerHTML = row.FullName
      //     // email.innerHTML = row.Email
      //     // phone.innerHTML = row.Phone

      //     console.log(fname);
      //   })

      //   for (i = 0; i <= res.length; i++) {
      //     // create a new row element
      //     const newRow = document.createElement("tr");

      //     // create a new cell element for each field in the row and add it to the row
      //     const idCell = document.createElement("td");
      //     idCell.textContent = res[i].ID;
      //     newRow.appendChild(idCell);

      //     const nameCell = document.createElement("td");
      //     nameCell.textContent = res[i].FullName;
      //     newRow.appendChild(nameCell);

      //     const emailCell = document.createElement("td");
      //     emailCell.textContent = res[i].Email;
      //     newRow.appendChild(emailCell);

      //     const phoneCell = document.createElement("td");
      //     phoneCell.textContent = res[i].Phone;
      //     newRow.appendChild(phoneCell);

      //     // add the new row to the table
      //     table.appendChild(newRow);
      //   }
      // } else {
      //   // The request failed, so handle the error appropriately
      //   alert("Request failed. Status:", xhr.status);
      // }
    };

    // Send the XHR request to the server-side script
    xhr.send();

  }
}
