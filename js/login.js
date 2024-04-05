document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".loginForm").addEventListener("submit", function(event) {
      event.preventDefault();
  

      let username = document.querySelector('input[name="uname"]').value;
      let password = document.querySelector('input[name="psw"]').value;
  

      if (username === "admin" && password === "password") {
        window.location.href="dashboard.html";
      } else {
        alert("Incorrect username or password. Please try again.");
      }
    });
  });
  