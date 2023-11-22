function iniciarSesion() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar las credenciales del usuario
    var usuario = usuarios.find(u => u.email === email && u.password === password);

    if (usuario) {
        // Almacenar la información del usuario que ha iniciado sesión en localStorage
        localStorage.setItem('usuarioActual', JSON.stringify(usuario));

        // Redirigir a la página principal después de iniciar sesión
        window.location.href = 'pagina_principal.html';
    } else {
        alert('Correo electrónico o contraseña incorrectos. Intenta nuevamente.');
    }
}
