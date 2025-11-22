function abrirSeccion(nombreSeccion) {
  var todasLasSecciones = document.getElementsByClassName("seccion");

  for (var i = 0; i < todasLasSecciones.length; i++) {
    todasLasSecciones[i].classList.remove("activo");
  }

  var seccionAMostrar = document.getElementById(nombreSeccion);
  if (seccionAMostrar) {
    seccionAMostrar.classList.add("activo");
  }
}
