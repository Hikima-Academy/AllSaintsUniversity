document.addEventListener('DOMContentLoaded', function() {
  const addDataForm = document.getElementById('upload');

  addDataForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Validate birth date and date range
    if (!validateBirthDate() || !validateDateRange()) {
      return; // Stop the function if there's a validation error
    }

    // If validation passes, process the form data
    const formData = new FormData(addDataForm);
    
    fetch('addData.php', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          console.log(response);
          window.location = "applicationMessage.html";
        } else {
          alert('Error adding data: ' + response.statusText);
        }
      })
      .catch(error => {
        console.error('Error adding data:', error);
        alert("Error");
      });
  });

  function validateBirthDate() {
    const birthDateInput = document.querySelector('input[name="bday"]');
    const birthDate = new Date(birthDateInput.value);
    const currentDate = new Date();
    const tenYearsAgo = new Date(currentDate.getFullYear() - 10, currentDate.getMonth(), currentDate.getDate());

    if (birthDate > tenYearsAgo) {
      alert('Please enter a birth year more than 10 years ago.');
      birthDateInput.style.borderColor = 'red';
      return false;
    } else {
      birthDateInput.style.borderColor = '';
      return true;
    }
  }

  function validateDateRange() {
    const dateFromInput = document.querySelector('input[name="dateFrom"]');
    const dateToInput = document.querySelector('input[name="dateTo"]');
    const dateFrom = new Date(dateFromInput.value);
    const dateTo = new Date(dateToInput.value);

    if (dateFrom >= dateTo) {
      alert('The "Date From" must be before the "Date To".');
      dateFromInput.style.borderColor = 'red';
      dateToInput.style.borderColor = 'red';
      return false;
    } else {
      dateFromInput.style.borderColor = '';
      dateToInput.style.borderColor = '';
      return true;
    }
  }

  var dateSignedElement = document.getElementById('dateSigned');
  if (dateSignedElement) {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = yyyy + '-' + mm + '-' + dd;
      dateSignedElement.value = today;
  } else {
      console.error("DateSigned element not found.");
  }
  

});
