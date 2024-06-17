document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var formMessage = document.getElementById('formMessage');
    
    if(name && email && message) {
        formMessage.textContent = "Thank you for your message. I will get back to you soon!";
        formMessage.style.color = 'green';
        document.getElementById('contactForm').reset();
    } else {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = 'red';
    }
});
