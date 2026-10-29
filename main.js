const copy = {
  es: {
    skip: "Saltar al contenido",
    "nav.project": "Proyectos",
    "nav.about": "Sobre mí",
    "hero.l1": "Hago",
    "hero.l2": "pequeñas",
    "hero.l3": "herramientas.",
    "hero.ep": "Proyectos:05",
    "hero.sub": "Apps y scripts",
    "project.label": "Proyectos",
    "project.desc": "Descarga playlists de YouTube Music como audio. GUI para Windows y CLI, perfiles de calidad y descargas incrementales.",
    "project.desc2": "Convierte grabaciones de pantalla silenciosas en clips verticales con voz y subtítulos quemados. Sin APIs de pago: Python y ffmpeg.",
    "project.desc3": "Survivors con personajes brainrot, directo en Roblox. Hecho en Luau.",
    "project.desc4": "Cliente de YouTube Music en la terminal, escrito en Rust. Busca y reproduce sin cuenta: sin navegador ni Electron.",
    "project.desc5": "Interfaz de terminal para Claude: pestañas, edición de archivos y comandos, sobre el Agent SDK. TypeScript y OpenTUI.",
    "project.link": "Ver repo",
    "project.play": "Jugar",
    "project.after": "El resto son experimentos en local.",
    "about.label": "Sobre mí",
    "about.text": "Soy laopro. Aprendo construyendo y publico lo que sale bien.",
    "footer.handmade": "Hecho a mano.",
    title: "laopro — proyectos y experimentos",
    description: "Proyectos y experimentos de laopro. Herramientas pequeñas que resuelven problemas propios."
  },
  en: {
    skip: "Skip to content",
    "nav.project": "Projects",
    "nav.about": "About",
    "hero.l1": "I make",
    "hero.l2": "small",
    "hero.l3": "tools.",
    "hero.ep": "Projects:05",
    "hero.sub": "Apps & scripts",
    "project.label": "Projects",
    "project.desc": "Downloads YouTube Music playlists as audio. Windows GUI and CLI, quality profiles, incremental downloads.",
    "project.desc2": "Turns silent screen recordings into vertical clips with voice and burned captions. No paid APIs: Python and ffmpeg.",
    "project.desc3": "Brainrot survivors, straight on Roblox. Built in Luau.",
    "project.desc4": "YouTube Music client for the terminal, written in Rust. Search and play without an account: no browser, no Electron.",
    "project.desc5": "A terminal UI for Claude: tabs, file edits and commands, built on the Agent SDK. TypeScript and OpenTUI.",
    "project.link": "View repo",
    "project.play": "Play",
    "project.after": "The rest are experiments on my machine.",
    "about.label": "About",
    "about.text": "I'm laopro. I learn by building and publish what turns out well.",
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

// Eva title cards squeeze each line horizontally; lines too long for the card get squeezed further to fit
const fit = () => {
  document.querySelectorAll("[data-fit]").forEach((el) => {
    const room = el.closest(".card").clientWidth;
    el.style.transform = `scaleX(${Math.min(parseFloat(el.dataset.fit), room / el.offsetWidth)})`;
  });
};
fit();
document.fonts.ready.then(fit);
window.addEventListener("resize", fit);
