function loadLogo() {
    const logoContainer = document.getElementById('logoContainer');
    const img = document.createElement('img');
    img.src = './imagenes/GRAF01.png';
    img.alt = 'Logo del estudio AeloBOX';
    
    img.onerror = function() {
        logoContainer.textContent = 'Logo no encontrado';
        logoContainer.style.color = '#888888';
    };
    
    logoContainer.appendChild(img);
}

document.addEventListener('DOMContentLoaded', loadLogo);
