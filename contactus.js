document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var contactMethod = document.querySelector('input[name="contact-method"]:checked');
  
    // Perform form validation
    if (name.length < 2) {
      alert('Name must be at least 2 characters long.');
      return;
    }
  
    if (!email.endsWith('@gmail.com')) {
      alert('Please enter a valid Gmail address.');
      return;
    }
  
    if (!phone.match(/^\d{11,12}$/)) {
      alert('Please enter a valid phone number (11-12 digits).');
      return;
    }
  
    if (message.trim().length === 0) {
      alert('Message cannot be empty.');
      return;
    }
  
    if (!contactMethod) {
      alert('Please select a preferred contact method.');
      return;
    }
  
    // Process form submission (e.g., send data to server)
    // Here, you can use AJAX or any other technique to handle form submission
  
    // Clear form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
  
    alert('Form submitted successfully!');
  });
  