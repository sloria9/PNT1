document.getElementById('registroform').addEventListener('submit', function (event) {
    let nombre = document.getElementById('nombre').value;
    let experiencia = document.querySelector('input[name="experiencia"]:checked');
    let comida = document.querySelector('input[name="comida"]:checked');

    // Validación
    if (!nombre) {
        document.getElementById('nombreerror').textContent = 'El nombre es obligatorio';
        event.preventDefault(); // Detener el envío
    } else if (!experiencia) {
        alert('Debes puntuar la experiencia.');
        event.preventDefault(); // Detener el envío
    } else if (!comida) {
        alert('Debes puntuar la comida.');
        event.preventDefault(); // Detener el envío
    } else {
        alert('¡Gracias por responder! Te esperamos pronto!');
    }
});
