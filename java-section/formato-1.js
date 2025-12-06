document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('button[data-target]');
    if (!btn) return;
    var nombreSeccion = btn.getAttribute('data-target');
    abrirSeccion(nombreSeccion);
  });

  function abrirSeccion(nombreSeccion) {
    var todasLasSecciones = document.getElementsByClassName("seccion");
    for (var i = 0; i < todasLasSecciones.length; i++) {
      todasLasSecciones[i].classList.remove("activo");
      todasLasSecciones[i].setAttribute('aria-hidden', 'true');
    }
    var seccionAMostrar = document.getElementById(nombreSeccion);
    if (seccionAMostrar) {
      seccionAMostrar.classList.add("activo");
      seccionAMostrar.setAttribute('aria-hidden', 'false');
      history.replaceState(null, '', '#' + nombreSeccion);
    }
  }

  var initial = location.hash ? location.hash.replace('#', '') : 'inicio';
  abrirSeccion(initial);
});
