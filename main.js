const copy = {
  es: {
    skip: "Saltar al contenido",
    "nav.project": "Proyecto",
    "nav.about": "Sobre mí",
    "hero.kicker": "Proyectos y experimentos",
    "hero.title": "Construyo cosas, casi siempre por gusto.",
    "hero.lede": "Herramientas pequeñas que resuelven problemas míos. Si sirven para alguien más, mejor.",
    "project.label": "Proyecto",
    "project.desc": "Descarga playlists de YouTube Music como audio. GUI para Windows y CLI, perfiles de calidad y descargas incrementales.",
    "project.link": "Ver repo",
    "project.after": "El resto de mis proyectos vive en local, sin publicar.",
    "about.label": "Sobre mí",
    "about.text": "Soy laopro. Aprendo construyendo y publico lo que queda bien. Casi todo empieza como una necesidad mía; si termina sirviendo a alguien más, mejor.",
    "footer.handmade": "Hecho a mano.",
    title: "laopro — proyectos y experimentos",
    description: "Proyectos y experimentos de laopro. Herramientas pequeñas que resuelven problemas propios."
  },
  en: {
    skip: "Skip to content",
    "nav.project": "Project",
    "nav.about": "About",
    "hero.kicker": "Projects & experiments",
    "hero.title": "I build things, mostly for the fun of it.",
    "hero.lede": "Small tools that solve my own problems. If they help someone else, even better.",
    "project.label": "Project",
    "project.desc": "Downloads YouTube Music playlists as audio. Windows GUI and CLI, quality profiles, incremental downloads.",
    "project.link": "View repo",
    "project.after": "The rest of my projects live locally, unpublished.",
    "about.label": "About",
    "about.text": "I'm laopro. I learn by building and publish what turns out well. Most of it starts as a problem of my own; if it ends up helping someone else, even better.",
    "footer.handmade": "Handmade.",
    title: "laopro — projects & experiments",
    description: "laopro's projects and experiments. Small tools that solve my own problems."
  }
};

const preferred = (navigator.languages && navigator.languages[0]) || navigator.language || "es";
const lang = preferred.toLowerCase().startsWith("en") ? "en" : "es";
const text = copy[lang];

document.documentElement.lang = lang;

document.querySelectorAll("[data-i18n]").forEach((el) => {
  const value = text[el.dataset.i18n];
  if (value) el.textContent = value;
});

document.title = text.title;

const setMeta = (selector, value) => {
  const el = document.querySelector(selector);
  if (el) el.setAttribute("content", value);
};

setMeta('meta[name="description"]', text.description);
setMeta('meta[property="og:title"]', text.title);
setMeta('meta[property="og:description"]', text.description);
