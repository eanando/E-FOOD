
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    
    if (name && phone) {
        document.getElementById('welcomeMessage').textContent = 'Hai, ' + name;
        document.getElementById('loginForm').reset();
    }
});
