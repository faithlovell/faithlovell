/*checks if user email input is a valid format */

window.onload = function() {
    emailjs.init('5leR5kTMyoXolX04a');

    document.getElementById('contact-form').addEventListener('submit', function(event) {    
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var emailInput = document.getElementById('user_email');
        var phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        var phoneInput = document.getElementById('user_phone');
        var errorMessage = "";      
        event.preventDefault();

        var email = emailInput.value;
        var phone = phoneInput.value;

        if (!emailRegex.test(email)) {
            errorMessage += "You have not entered a valid email address!<br>";
            console.log("email is not valid");
        }
        if (!document.getElementById('user_lname').value.trim()) {
            errorMessage += "You have not entered a last name!<br>";
            console.log("last name is not valid");
        }
        if (!document.getElementById('user_fname').value.trim()) {
            errorMessage += "You have not entered a first name!<br>";
            console.log("first name is not valid");
        }
        if (!phoneRegex.test(phone)) {
            errorMessage += "You have not entered a valid phone number! Please enter it in the 123-456-7890 format.<br>";
            console.log("phone number is not valid");
        }
        if (!document.getElementById('user_message').value.trim()) {
            errorMessage += "You have not entered a message!<br>";
            console.log("message is not valid");
        }

        var errorElement = document.getElementById('error');

        if (errorMessage !== "") {
            errorElement.innerHTML = errorMessage;
        } else {
            emailjs.sendForm('contact_service', 'contact_form', this)
        }
    });
}