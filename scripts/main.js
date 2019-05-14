
// Cambiae imagen
var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/tigres.png') {
      miImage.setAttribute('src','tigres.png');
    } else {
      miImage.setAttribute('src', 'images/tigres.png');
    }
}

//Titulo personalizado
var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Convierte te en un tigre, ' + miNombre;
}


if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Conviertete en un tigre, ' + nombreAlmacenado;
}


miBoton.onclick = function() {
    estableceNombreUsuario();
}