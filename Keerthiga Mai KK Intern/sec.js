document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter both username and password.');
            return;
        }
        alert('Login successful!');
        loginForm.reset();
    });
});
