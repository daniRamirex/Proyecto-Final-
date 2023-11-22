// Función que valida y guarda el registro
function validarYGuardarRegistro() {
    // Obtenemos los valores de los campos
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var genero = document.getElementById("genero").value;

    // Verificamos si algún campo está vacío
    if (nombres === "" || apellidos === "" || email === "" || password === "" || genero === "") {
        // Si hay campos vacíos, mostramos un mensaje de alerta
        alert("Por favor, complete todos los campos.");
    } else {
        // Si todos los campos están llenos, llamamos a la función para guardar el registro
        guardarRegistro();
    }
}

// Función que guarda el registro (aquí iría tu lógica de registro)
function guardarRegistro() {
    console.log("Registro exitoso!");
}
