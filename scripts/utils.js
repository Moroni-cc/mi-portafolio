export function initMenuToggle() {
    const btnToggle = document.getElementById('menu-toggle');
    const menuMovil = document.getElementById('menu-movil');
    const btnCerrar = document.getElementById('menu-close');

    if (!btnToggle || !menuMovil) return;

    const cerrar = () => {
        menuMovil.classList.remove('translate-x-0');
        menuMovil.classList.add('translate-x-full');
        document.body.style.overflow = '';
    };

    const abrir = () => {
        menuMovil.classList.remove('translate-x-full');
        menuMovil.classList.add('translate-x-0');
        document.body.style.overflow = 'hidden';
    };

    btnToggle.addEventListener('click', abrir);
    btnCerrar?.addEventListener('click', cerrar);
    menuMovil.querySelectorAll('a').forEach(link => link.addEventListener('click', cerrar));
    menuMovil.addEventListener('click', (e) => { if (e.target === menuMovil) cerrar(); });
}

/**
 * Observador de intersección para animaciones al scroll
 * @param {string} selector - Selector CSS de los elementos a observar
 * @param {string} animClass - Clase CSS a agregar cuando es visible
 */
export function initScrollAnimations(selector = '.animate-on-scroll', animClass = 'animate-visible') {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animClass);
                entry.target.classList.remove('opacity-0', 'translate-y-6');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll(selector).forEach(el => observer.observe(el));
}

/**
 * Anima elementos con delay escalonado
 * @param {NodeList} elements - Elementos a animar
 * @param {number} delay - Delay base en ms
 */
export function staggerAnimation(elements, delay = 100) {
    elements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.remove('opacity-0', 'translate-y-6', 'translate-y-8');
            el.classList.add('transition-all', 'duration-500', 'ease-out');
        }, i * delay);
    });
}