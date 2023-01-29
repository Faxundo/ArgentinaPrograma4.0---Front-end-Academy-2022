var barra = document.getElementById("desplegable");
var descargar_pagina = document.getElementById("descargar_pagina");
var perfil_profesional = document.getElementById("perfil_profesional");
var estado = barra.dataset.estado;

perfil_profesional.addEventListener('click', function(){
    if (estado == 0) {
        barra.style.display = "block";
        estado = 1;
    } else {
        barra.style.display = "none";
        estado = 0;
    }
});


descargar_pagina.addEventListener('click', function(){
    window.print();
});

