export const habilidadesPrincipales = [
    { nombre: "HTML5", icono: "fa-brands fa-html5", color: "text-orange-500", nivel: "Avanzado" },
    { nombre: "CSS3", icono: "fa-brands fa-css3-alt", color: "text-blue-500", nivel: "Avanzado" },
    { nombre: "JavaScript", icono: "fa-brands fa-js", color: "text-yellow-400", nivel: "Avanzado" },
    { nombre: "React", icono: "fa-brands fa-react", color: "text-cyan-400", nivel: "Avanzado" },
    { nombre: "Next.js", icono: null, texto: "NEXT", color: "text-light dark:text-dark", nivel: "Intermedio" },
    { nombre: "Node.js", icono: "fa-brands fa-node", color: "text-green-500", nivel: "Avanzado" },
    { nombre: "Tailwind", icono: "fa-solid fa-wind", color: "text-cyan-300", nivel: "Avanzado" },
    { nombre: "MongoDB", icono: "fa-brands fa-envira", color: "text-green-400", nivel: "Intermedio" }
];

export const habilidadesAdicionales = [
    { nombre: "Bootstrap", icono: "fa-brands fa-bootstrap", color: "text-purple-500", nivel: "Intermedio" },
    { nombre: "AXIOS", icono: null, texto: "AXIOS", color: "text-purple-400", nivel: "Intermedio" },
    { nombre: "Redux", icono: "fa-brands fa-react", color: "text-purple-400", nivel: "Intermedio" },
    { nombre: "MySQL", icono: "fa-solid fa-database", color: "text-cyan-400", nivel: "Intermedio" },
    { nombre: "WordPress", icono: "fa-brands fa-wordpress", color: "text-orange-400", nivel: "Intermedio" },
    { nombre: "Material UI", icono: "fa-solid fa-code", color: "text-pink-400", nivel: "Intermedio" }
];

export const proyectos = [
    {
        id: 1,
        titulo: "Plumbing Company",
        descripcion: "Sitio web corporativo para empresa de plomería con sistema de citas, catálogo de servicios y panel de administración. Desarrollado con React y Node.js.",
        imagen: "/img4.jpeg",
        tecnologias: ["React", "Node.js", "MongoDB", "Tailwind"],
        link: "#",
        destacado: true
    },
    {
        id: 2,
        titulo: "Analytics Dashboard",
        descripcion: "Panel de análisis de datos en tiempo real con gráficos interactivos, reportes automatizados y exportación de datos. Stack MERN completo.",
        imagen: "/img5.jpeg",
        tecnologias: ["React", "Express", "MongoDB", "Chart.js"],
        link: "#",
        destacado: true
    },
    {
        id: 3,
        titulo: "Task Manager",
        descripcion: "Aplicación de gestión de tareas con drag & drop, colaboración en equipo, notificaciones en tiempo real y sincronización multi-dispositivo.",
        imagen: "/img6.jpeg",
        tecnologias: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
        link: "#",
        destacado: true
    },
    {
        id: 4,
        titulo: "E-Commerce Platform",
        descripcion: "Plataforma de comercio electrónico con carrito de compras, pasarela de pagos integrada, gestión de inventario y panel de administración.",
        imagen: "/img1.jpeg",
        tecnologias: ["React", "Redux", "Stripe", "Firebase"],
        link: "#",
        destacado: false
    },
    {
        id: 5,
        titulo: "Portfolio CMS",
        descripcion: "Sistema de gestión de contenidos para portafolios con editor visual, plantillas personalizables y SEO optimizado.",
        imagen: "/img2.jpeg",
        tecnologias: ["Next.js", "Sanity", "Tailwind", "Vercel"],
        link: "#",
        destacado: false
    },
    {
        id: 6,
        titulo: "Weather App",
        descripcion: "Aplicación meteorológica con pronóstico extendido, alertas personalizadas y visualización de datos climáticos en mapas interactivos.",
        imagen: "/img3.jpeg",
        tecnologias: ["React", "OpenWeather API", "Leaflet", "PWA"],
        link: "#",
        destacado: false
    }
];

export const perfil = {
    nombre: "Raúl Moroni Capcha Cadillo",
    titulo: "Full Stack Developer",
    logo: "./public/logop.png",
    foto: "./public/profile.png",
    experiencia: 4,
    cvLink: "#",
    email: "raul.moroni@example.com"
};

export const expertise = [
    { area: "Backend", porcentaje: 95 },
    { area: "CSS", porcentaje: 92 },
    { area: "Frontend", porcentaje: 90 }
];

export const review = {
    from: "Australia",
    texto: '"Exceptional work! The attention to detail is remarkable. Delivered on time with clean code."'
};

export const socialLinks = [
    { platform: "GitHub", url: "https://github.com/Moroni-cc", icono: "fa-brands fa-github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/ra%C3%BAl-moroni-capcha-cadillo-659a41341/", icono: "fa-brands fa-linkedin-in" },
    { platform: "Twitter", url: "https://x.com/MoroniRaul", icono: "fa-brands fa-twitter" }
];