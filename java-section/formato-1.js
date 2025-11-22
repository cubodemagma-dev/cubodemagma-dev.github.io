function abrirSeccion(nombreSeccion) {
  var todasLasSecciones = document.getElementsByClassName("seccion");

  for (var i = 0; i < todasLasSecciones.lenght; i++) {
    todasLasSecciones[i].classList.remove("activo");
  }

  document.getElementById(nombreSeccion).classList.add("activo");
}
