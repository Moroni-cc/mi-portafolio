import { habilidadesPrincipales, habilidadesAdicionales, perfil } from './info.js';
import { initMenuToggle, staggerAnimation } from './utils.js';


function renderizarHabilidades() {
    const grid = document.getElementById('skills-grid');
    const extra = document.getElementById('additional-skills');

    if (grid) {
        grid.innerHTML = '';

        habilidadesPrincipales.forEach(skill => {
            const div = document.createElement('div');
            div.className = 'skill-card bg-deepBlue dark:bg-white rounded-xl p-6 flex flex-col items-center gap-3 hover:bg-deepBlue/80 dark:hover:bg-gray-50 transition group border border-white/5 dark:border-gray-200 dark:shadow-sm opacity-0 translate-y-6';

            const iconoHTML = skill.icono
                ? `<i class="${skill.icono} text-3xl ${skill.color} group-hover:scale-110 transition"></i>`
                : `<span class="text-2xl font-bold ${skill.color} group-hover:scale-110 transition">${skill.texto}</span>`;

            div.innerHTML = `
                ${iconoHTML}
                <span class="text-xs font-medium">${skill.nombre}</span>
                <span class="text-[10px] text-softGray dark:text-gray-500 uppercase tracking-wider">${skill.nivel}</span>
            `;

            grid.appendChild(div);
        });

        staggerAnimation(grid.querySelectorAll('.skill-card'), 100);
    }

    if (extra) {
        extra.innerHTML = '';

        habilidadesAdicionales.forEach(skill => {
            const div = document.createElement('div');
            div.className = 'flex items-center gap-2 text-softGray hover:text-light dark:hover:text-dark transition opacity-0 translate-y-4';

            const iconoHTML = skill.icono
                ? `<i class="${skill.icono} ${skill.color} text-xl"></i>`
                : `<span class="${skill.color} text-xs font-bold">${skill.texto}</span>`;

            div.innerHTML = `
                ${iconoHTML}
                <span class="text-xs font-medium">${skill.nombre}</span>
            `;

            extra.appendChild(div);
        });

        setTimeout(() => staggerAnimation(extra.querySelectorAll('div'), 80), 400);
    }
}

// ============================================
// VALIDACIÓN DE FORMULARIO
// ============================================
// Esta parte no sabia como hacerlo de manera eficiente asi que lepedi ayuda a la ia 

function initFormulario() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = form.querySelector('[name="nombre"]');
        const email = form.querySelector('[name="email"]');
        const mensaje = form.querySelector('[name="mensaje"]');

        // Limpiar errores previos
        form.querySelectorAll('.error-msg').forEach(el => el.remove());
        form.querySelectorAll('.ring-red-500').forEach(el => el.classList.remove('ring-2', 'ring-red-500'));

        let valido = true;

        const mostrarError = (campo, msg) => {
            campo.classList.add('ring-2', 'ring-red-500');
            const p = document.createElement('p');
            p.className = 'error-msg text-red-400 text-[10px] mt-1';
            p.textContent = msg;
            campo.parentElement.appendChild(p);
            valido = false;
        };

        if (!nombre.value.trim()) mostrarError(nombre, 'El nombre es obligatorio');
        if (!email.value.trim()) mostrarError(email, 'El email es obligatorio');
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) mostrarError(email, 'Email inválido');
        if (!mensaje.value.trim()) mostrarError(mensaje, 'El mensaje es obligatorio');

        if (!valido) return;

        // Enviar via mailto usando email del perfil
        const subject = encodeURIComponent(`Contacto desde portafolio - ${nombre.value}`);
        const body = encodeURIComponent(`Nombre: ${nombre.value}\nEmail: ${email.value}\n\nMensaje:\n${mensaje.value}`);
        window.location.href = `mailto:${perfil.email}?subject=${subject}&body=${body}`;

        // Mensaje de éxito
        const exito = document.createElement('div');
        exito.className = 'bg-green-500/20 border border-green-500 text-green-400 rounded-xl p-4 mt-4 text-center text-sm animate-pulse';
        exito.innerHTML = '<i class="fa-solid fa-check-circle mr-2"></i>¡Mensaje preparado! Se abrirá tu cliente de correo.';
        form.appendChild(exito);
        form.reset();
        setTimeout(() => exito.remove(), 5000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initMenuToggle();
    renderizarHabilidades();
    initFormulario();
});