const iconItems = document.querySelectorAll('.icon-item');
let currentIndex = 0;

function fadeOutAndIn() {
    // Elegimos un índice aleatorio para el ícono que se ocultará, asegurándonos de que no sea el actual
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * iconItems.length);
    } while (randomIndex === currentIndex);

    // Aplicamos la opacidad a todos los íconos
    iconItems.forEach((icon, index) => {
        if (index === currentIndex) {
            // El ícono que debe aparecer
            icon.style.opacity = '1';
        } else if (index === randomIndex) {
            // El ícono que debe desaparecer
            icon.style.opacity = '0';
        } else {
            // Los íconos que permanecen visibles
            icon.style.opacity = '1';
        }

        // Aplicamos una transición suave de opacidad
        icon.style.transition = 'opacity 1s ease-in-out';
    });

    // Actualizamos el índice para el siguiente ícono que aparecerá
    currentIndex = (currentIndex + 1) % iconItems.length;
}

// Iniciamos la animación para que ocurra cada 2 segundos
setInterval(fadeOutAndIn, 2000);
