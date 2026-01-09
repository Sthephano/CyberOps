// --- Para módulos principales ---
const modules = document.querySelectorAll("details.module");

modules.forEach(mod => {
  mod.addEventListener("toggle", () => {
    if (mod.open) {
      modules.forEach(other => {
        if (other !== mod) other.removeAttribute("open");
      });
    }
  });
});

// --- Para capítulos dentro de cada módulo ---
const chapters = document.querySelectorAll("details.chapter");

chapters.forEach(chap => {
  chap.addEventListener("toggle", () => {
    if (chap.open) {
      const siblings = chap.parentElement.querySelectorAll("details.chapter");
      siblings.forEach(other => {
        if (other !== chap) other.removeAttribute("open");
      });
    }
  });
});
