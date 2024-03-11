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

window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loading-animation').style.display = 'none';
    }, 1000); // Ajusta este tiempo según lo necesites
});
