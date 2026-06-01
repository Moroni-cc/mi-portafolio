import { proyectos } from './info.js';
import { initMenuToggle, staggerAnimation } from './utils.js';

function renderizar(filtro = 'all') {
    const grid = document.getElementById('proyectos-grid');
    if (!grid) return;

    const filtrados = filtro === 'all'
        ? proyectos
        : proyectos.filter(p => p.tecnologias.some(t => t.toLowerCase().includes(filtro.toLowerCase())));

    grid.innerHTML = '';

    if (filtrados.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fa-solid fa-folder-open text-4xl text-softGray/30 mb-4"></i>
                <p class="text-softGray text-sm">No hay proyectos con esa tecnología.</p>
            </div>`;
        return;
    }

    filtrados.forEach(p => {
        const article = document.createElement('article');
        article.className = 'proyecto-card group relative rounded-2xl overflow-hidden bg-deepBlue dark:bg-white border border-white/5 dark:border-gray-200 hover:border-highlight/50 dark:hover:border-highlight/50 transition-all duration-500 opacity-0 translate-y-8';

        const tagsHTML = p.tecnologias.map(t =>
            `<span class="text-[10px] bg-dark/50 dark:bg-gray-100 text-softGray dark:text-gray-600 px-2 py-1 rounded-full">${t}</span>`
        ).join('');

        article.innerHTML = `
            <div class="relative h-56 overflow-hidden">
                <img src="${p.imagen}" alt="${p.titulo}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out">
                <div class="absolute inset-0 bg-linear-to-t from-dark/90 via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="${p.link}" class="bg-highlight text-dark font-bold px-5 py-2 rounded-full text-xs uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:scale-105">
                        Ver Proyecto <i class="fa-solid fa-arrow-up-right-from-square ml-1"></i>
                    </a>
                </div>
            </div>
            <div class="p-5">
                <h3 class="text-lg font-bold mb-2 group-hover:text-highlight transition-colors duration-300">${p.titulo}</h3>
                <p class="text-softGray dark:text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">${p.descripcion}</p>
                <div class="flex flex-wrap gap-2">
                    ${tagsHTML}
                </div>
            </div>
        `;

        grid.appendChild(article);
    });

    staggerAnimation(grid.querySelectorAll('.proyecto-card'), 150);
}

function initFiltros() {
    const botones = document.querySelectorAll('.filtro-btn');

    botones.forEach(btn => {
        btn.addEventListener('click', () => {
            botones.forEach(b => {
                b.classList.remove('bg-highlight', 'text-dark');
                b.classList.add('bg-deepBlue', 'dark:bg-gray-100', 'text-softGray', 'dark:text-gray-600');
            });
            btn.classList.remove('bg-deepBlue', 'dark:bg-gray-100', 'text-softGray', 'dark:text-gray-600');
            btn.classList.add('bg-highlight', 'text-dark');

            renderizar(btn.dataset.filter);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initMenuToggle();
    renderizar();
    initFiltros();
});