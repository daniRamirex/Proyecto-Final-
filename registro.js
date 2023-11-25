function guardarRegistro() {
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var genero = document.getElementById('genero').value;

    var usuario = {
        nombres: nombres,
        apellidos: apellidos,
        email: email,
        password: password,
        genero: genero
    };

    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    document.getElementById('registroForm').reset();

    // Redirigir a la página de inicio de sesión
    window.location.href = 'inicio_sesion.html';
}
