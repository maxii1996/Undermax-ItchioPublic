window.addEventListener('load', () => {
    const loadingAnimation = document.getElementById('loading-animation');
    if(loadingAnimation) {
        loadingAnimation.style.display = 'block';
        setTimeout(() => {
            loadingAnimation.style.display = 'none';
        }, 1000); // Asegúrate de tener este elemento en tu HTML para que funcione
    }
});

// Implementación de drag & drop básico para los contenedores
document.addEventListener('DOMContentLoaded', function() {
    const dragContainers = document.querySelectorAll('.bundles-container, .news-container');
    dragContainers.forEach(container => {
        let isDown = false;
        let startX;
        let scrollLeft;

        container.addEventListener('mousedown', (e) => {
            isDown = true;
            container.classList.add('active');
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener('mouseleave', () => {
            isDown = false;
            container.classList.remove('active');
        });

        container.addEventListener('mouseup', () => {
            isDown = false;
            container.classList.remove('active');
        });

        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 3; // Ajustar la velocidad del drag aquí
            container.scrollLeft = scrollLeft - walk;
        });
    });
});
