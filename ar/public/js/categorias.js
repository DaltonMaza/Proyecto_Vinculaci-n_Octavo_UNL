document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.cat-btn');

  function updateModels(categoria) {
    for (let i = 1; i <= 5; i++) {
      const entidad = document.querySelector(`#modelo${i}`); // sin guion
      if (!entidad) continue;
      // Obligatorio con animation-mixer: quitar antes de reasignar
      entidad.removeAttribute('gltf-model');
      entidad.setAttribute('gltf-model', `#${categoria}-${i}`);
    }
  }

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      const categoria = boton.dataset.cat;
      botones.forEach(b => b.classList.remove('active'));
      boton.classList.add('active');
      updateModels(categoria);
      console.log('Categoría activa:', categoria);
    });
  });
});