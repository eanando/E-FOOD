document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    
    if (name && phone) {
        // Simpan nama pengguna di localStorage
        localStorage.setItem('username', name);
        // Tampilkan pesan selamat datang
        showWelcomeMessage(name);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var name = localStorage.getItem('username');
    if (name) {
        showWelcomeMessage(name);
    }
});

function showWelcomeMessage(name) {
    document.getElementById('welcomeMessage').textContent = 'Hai, ' + name;
    navigateTo('welcome');
}

function navigateTo(page) {
    var sections = document.querySelectorAll('.page');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    document.getElementById(page).style.display = 'block';
}
