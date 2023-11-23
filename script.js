function agregarResena() {
    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var resena = document.getElementById('resena').value;

    // Crear un nuevo elemento de reseña
    var nuevaResena = document.createElement('div');
    nuevaResena.className = 'review';
    nuevaResena.innerHTML = '<strong>' + nombre + ':</strong> ' + resena;

    // Agregar la nueva reseña al contenedor de reseñas
    document.getElementById('reviews').appendChild(nuevaResena);

    // Limpiar el formulario después de agregar la reseña
    document.getElementById('reviewForm').reset();
}
