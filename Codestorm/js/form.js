document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitButton = document.getElementById("submit-button");
    const messageDiv = document.getElementById("message");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // Display the message
      messageDiv.textContent = "Form submitted";

      // You can also add more logic here, such as submitting the form data via AJAX.
    });
  });

