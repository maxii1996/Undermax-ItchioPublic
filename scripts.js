// Eliminación de la animación de carga después de 1 segundo
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading-animation').style.display = 'none';
    }, 1000);
});

// Inicialización de eventos para animaciones de hover
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.05)';
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });
});
