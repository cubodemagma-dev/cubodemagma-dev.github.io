// Función para cargar imágenes desde la carpeta 'imagenes'
function loadImages() {
    const imageContainers = document.querySelectorAll('.image-container');
    const imageNames = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'];
    
    imageContainers.forEach((container, index) => {
        if (imageNames[index]) {
            const img = document.createElement('img');
            img.src = `imagenes/${imageNames[index]}`;
            img.alt = `Imagen del proyecto ${index + 1}`;
            
            // Si la imagen no existe, mostrar un mensaje
            img.onerror = function() {
                container.textContent = 'Imagen no encontrada';
                container.style.color = '#888888';
            };
            
            container.appendChild(img);
        }
    });
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadImages);
