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
    });
});



function Retrieve() {

  // Create a new XHR object
  let xhr = new XMLHttpRequest();

  let dataB = document.getElementById('data-container')
  let table = document.getElementById('myTable')
  let id = document.getElementById('res_id')
  let name = document.getElementById('res_name')
  let email = document.getElementById('res_email')
  let phone = document.getElementById('res_phone')

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
      const res = xhr.response
      res.forEach((row) => {
        // id.innerHTML = row.ID
        // name.innerHTML = row.FullName
        // email.innerHTML = row.Email
        // phone.innerHTML = row.Phone

        console.log(id);
      })

      for (i = 0; i <= res.length; i++) {
        // create a new row element
        const newRow = document.createElement("tr");

        // create a new cell element for each field in the row and add it to the row
        const idCell = document.createElement("td");
        idCell.textContent = res[i].ID;
        newRow.appendChild(idCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = res[i].FullName;
        newRow.appendChild(nameCell);

        const emailCell = document.createElement("td");
        emailCell.textContent = res[i].Email;
        newRow.appendChild(emailCell);

        const phoneCell = document.createElement("td");
        phoneCell.textContent = res[i].Phone;
        newRow.appendChild(phoneCell);

        // add the new row to the table
        table.appendChild(newRow);
      }
    } else {
      // The request failed, so handle the error appropriately
      alert("Request failed. Status:", xhr.status);
    }
  };

  // Send the XHR request to the server-side script
  xhr.send();

}
