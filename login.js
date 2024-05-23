document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'bombeirosvoluntariosporto' && password === 'ipam2024') {
        alert("Bem vindo!");
        window.location.replace(window.location.origin + "/index.html");
        // Redirect to schedule page or perform other actions
    } else {
        alert('Utilizador ou palavra-passe errados.');
    }
});