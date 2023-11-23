document.addEventListener('DOMContentLoaded', function () {
    // Obtener la información del usuario que ha iniciado sesión
    var usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));

    if (usuarioActual) {
        // Mostrar el nombre del usuario en la página
        document.getElementById('usuarioInfo').innerText = 'Hola, ' + usuarioActual.nombres + ' ' + usuarioActual.apellidos;
    } else {
        // Redirigir a la página de inicio de sesión si no hay usuario actual
        window.location.href = 'inicio_sesion.html';
    }
});

function cerrarSesion() {
    // Eliminar la información del usuario al cerrar sesión
    localStorage.removeItem('usuarioActual');
    // Redirigir a la página de inicio de sesión
    window.location.href = 'inicio_sesion.html';
}
