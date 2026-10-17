
function mostrarSeccion(nombreSeccion) {
    // Ocultamos las 3 secciones
    document.getElementById('informacion').classList.add('oculto');
    document.getElementById('informacion-casino').classList.add('oculto');
    document.getElementById('informacion-loteria').classList.add('oculto');

    
    if (nombreSeccion === 'informacion') {
        document.getElementById('informacion').classList.remove('oculto');
    } else if (nombreSeccion === 'casino') {
        document.getElementById('informacion-casino').classList.remove('oculto');
    } else if (nombreSeccion === 'loteria') {
        document.getElementById('informacion-loteria').classList.remove('oculto');
    }
}
