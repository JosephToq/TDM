//array para las imagenes
let imagenes = ["assets/imagen1.png", "assets/imagen2.png", "assets/imagen3.png"];
let indiceActual = 0;

function cambiarImagender() {
    // Obtener el elemento de la imagen
    let imagen = document.getElementById("image-cambiar");
    
    // Aumentar el índice
    indiceActual++;
    
    // Si el índice supera el número de imágenes, reiniciarlo a 0
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }
    // Cambiar la imagen
        imagen.src = imagenes[indiceActual];
}

// Función para retroceder a la imagen anterior
function cambiarImagenizq() {
    // Obtener el elemento de la imagen
    let imagen = document.getElementById("image-cambiar");
    // Reducir el índice
    indiceActual--;
    
    // Si el índice es menor que 0, ir a la última imagen
    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }

    // Cambiar la imagen
    imagen.src = imagenes[indiceActual];
}

//mostrar info
function intercambairTextos(){
    let texto1 = document.getElementById("texto1");
    let texto2 = document.getElementById("texto2");

    // Si el primer texto está visible, lo ocultamos y mostramos el segundo
    if (texto1.style.display === "block") {
        texto1.style.display = "none";
        texto2.style.display = "block";
    } else {
        // Si el segundo texto está visible, lo ocultamos y mostramos el primero
        texto1.style.display = "block";
        texto2.style.display = "none";
    }
}
