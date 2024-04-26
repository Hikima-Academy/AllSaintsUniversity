
const addDataForm = document.getElementById('upload');

addDataForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(addDataForm);

  //   configure the path to the php file
  fetch('addData.php', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (response.ok) {
        // alert('Data added successfully');
        console.log(response);
        window.location = "applicationMessage.html";
      } else {
        alert('Error adding data:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error adding data:', error);
      alert("Error");
    });
});




