document.addEventListener('DOMContentLoaded', () => {
  // Delegación simple: escucha clicks en nav y cambia secciones
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-target]');
    if (!btn) return;
    const nombreSeccion = btn.getAttribute('data-target');
    abrirSeccion(nombreSeccion);
  });

  function abrirSeccion(nombreSeccion) {
    const todasLasSecciones = document.getElementsByClassName("seccion");
    for (let i = 0; i < todasLasSecciones.length; i++) {
      todasLasSecciones[i].classList.remove("activo");
      todasLasSecciones[i].setAttribute('aria-hidden', 'true');
    }
    const seccionAMostrar = document.getElementById(nombreSeccion);
    if (seccionAMostrar) {
      seccionAMostrar.classList.add("activo");
      seccionAMostrar.setAttribute('aria-hidden', 'false');
      // opcional: actualizar hash para navegación/recarga
      history.replaceState(null, '', '#' + nombreSeccion);
    }
  }

  // Abrir sección por hash al cargar
  const initial = location.hash ? location.hash.replace('#', '') : null;
  if (initial) abrirSeccion(initial);
});
