function calcular() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var marca = document.getElementById('marca').value;

    var total = 0;

    if (document.getElementById('contado').checked) {
        total += 0;
    } else if (document.getElementById('credito').checked) {
        total += 0;
    } else {
        alert("Seleccione un tipo de financiamiento");
        return;
    }

    if (marca == "") {
        alert("Seleccione una marca de vehiculo");
        return;
    } else if (marca == "HONDA") {
        total += 140000;
    } else if (marca == "NISSAN") {
        total += 180000;
    } else if (marca == "TOYOTA") {
        total += 155000;
    } else if (marca == "MAZDA") {
        total += 110000;
    } else if (marca == "HYUNDAI") {
        total += 130000;
    } else if (marca == "KIA") {
        total += 190000;
    } else if (marca == "MITSUBISHI") {
        total += 160000;
    } else if (marca == "SUZUKI") {
        total += 175000;
    }

    if (document.getElementById('aire').checked) {
        total += 3500;
    }

    if (document.getElementById('gps').checked) {
        total += 3500;
    }

    if (document.getElementById('seguro').checked) {
        total += 3500;
    }

    if (document.getElementById('quemacocos').checked) {
        total += 3500;
    }

    if (document.getElementById('trasera').checked) {
        total += 3500;
    }

    if (document.getElementById('frontal').checked) {
        total += 3500;
    }

    document.getElementById('contenido-resultado').innerHTML = 'Nombre: ' + nombre + '<br>Correo: ' + correo + '<br>Marca: ' + marca + '<br>Total: $' + total + ' MXN';
    document.getElementById('resultado-cotizacion').style.display = 'block';
}

document.getElementById('formulario-cotizacion').addEventListener('submit', function(e) {
    e.preventDefault();
    calcular();
});
