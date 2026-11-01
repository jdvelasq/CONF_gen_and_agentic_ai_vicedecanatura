(() => {
  const deck = document.querySelector('.deck');
  const progress = document.getElementById('progress');
  const previous = document.getElementById('prev');
  const next = document.getElementById('next');
  let slides = [];
  let current = 0;

  function show(index) {
    if (!slides.length) return;
    current = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === current);
      slide.setAttribute('aria-hidden', String(i !== current));
    });
    progress.textContent = `${current + 1} / ${slides.length}`;
    previous.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    if (location.hash !== `#${current + 1}`) history.replaceState(null, '', `#${current + 1}`);
  }

  previous.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  document.addEventListener('keydown', event => {
    if (['ArrowRight', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); show(current + 1); }
    if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); show(current - 1); }
    if (event.key === 'Home') show(0);
    if (event.key === 'End') show(slides.length - 1);
    if (event.key.toLowerCase() === 'f' && !event.ctrlKey && !event.metaKey) {
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen?.();
    }
  });
  window.addEventListener('hashchange', () => {
    const index = Number(location.hash.slice(1)) - 1;
    if (Number.isInteger(index)) show(index);
  });

  async function initialize() {
    try {
      const response = await fetch('slides.json', { cache: 'no-store' });
      if (!response.ok) throw new Error(`No se pudo cargar slides.json (${response.status})`);
      const filenames = await response.json();
      if (!Array.isArray(filenames) || !filenames.length || !filenames.every(name => typeof name === 'string' && /^[a-zA-Z0-9_-]+\.html$/.test(name))) {
        throw new Error('slides.json debe contener una lista de nombres HTML válidos.');
      }
      const fragments = await Promise.all(filenames.map(async filename => {
        // Cargar decenas de slides en paralelo puede cortar conexiones sueltas.
        const result = await fetch(`slides/${filename}`, { cache: 'no-store' })
          .catch(() => fetch(`slides/${filename}`, { cache: 'no-store' }));
        if (!result.ok) throw new Error(`No se pudo cargar ${filename} (${result.status})`);
        const documentFragment = new DOMParser().parseFromString(await result.text(), 'text/html');
        const section = documentFragment.body.querySelector(':scope > section.slide');
        if (!section || documentFragment.body.children.length !== 1) throw new Error(`Estructura inválida en ${filename}`);
        return section;
      }));
      deck.replaceChildren(...fragments);
      slides = fragments;
      const initial = Number(location.hash.slice(1)) - 1;
      show(Number.isInteger(initial) ? initial : 0);
    } catch (error) {
      progress.textContent = 'Error';
      previous.disabled = true;
      next.disabled = true;
      const message = document.createElement('p');
      message.className = 'load-error';
      message.textContent = `No se pudo cargar la presentación: ${error.message}. Usa un servidor local o GitHub Pages.`;
      deck.replaceChildren(message);
    }
  }
  initialize();
})();
