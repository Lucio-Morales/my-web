// src/loader.ts

export function removeInitialLoader() {
  // Esperamos a que el DOM esté completamente cargado
  window.addEventListener('load', async () => {
    // También esperamos a que las fuentes estén listas
    await document.fonts.ready;

    const loader = document.getElementById('initial-loader');
    if (!loader) return;

    // Aplica un fade-out suave
    loader.style.opacity = '0';

    // Luego de la transición (300ms), lo quitamos del DOM
    setTimeout(() => {
      loader.remove();
    }, 300);
  });
}
