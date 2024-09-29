document.getElementById('registroform').addEventListener('submit', function (event) {
    let nombre = document.getElementById('nombre').value;
    let experiencia = document.querySelector('input[name="experiencia"]:checked');
    let comida = document.querySelector('input[name="comida"]:checked');

    if (!nombre) {
        document.getElementById('nombreerror').textContent = 'El nombre es obligatorio';
        event.preventDefault(); // Detener el envío
    }

    if (!experiencia) {
        alert('Debes puntuar la experiencia.');
        event.preventDefault(); // Detener el envío
    }

    if (!comida) {
        alert('Debes puntuar la comida.');
        event.preventDefault(); // Detener el envío
    }
});
