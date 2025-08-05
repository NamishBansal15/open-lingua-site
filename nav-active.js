// highlight current nav link based on pathname, but do NOT emphasize the logo itself
(() => {
  const current = window.location.pathname.split('/').pop(); // e.g., "index.html" or ""
  const normalizedCurrent = current === '' ? 'index.html' : current;

  document.querySelectorAll('nav a').forEach(a => {
    // skip the logo link (assuming it's wrapped in .logo)
    if (a.closest('.logo')) return;

    const href = a.getAttribute('href');
    if (!href) return;

    const normalizedHref = (href === './' || href === '/' ) ? 'index.html' : href;

    if (normalizedHref === normalizedCurrent) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });

  // keep "About" dropdown toggle active when on its subpages
  const aboutToggle = document.querySelector('nav li.dropdown > .dropdown-toggle');
  if (aboutToggle) {
    if (normalizedCurrent.startsWith('about-')) {
      aboutToggle.classList.add('active');
    } else {
      aboutToggle.classList.remove('active');
    }
  }
})();
