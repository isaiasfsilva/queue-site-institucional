// Yes Queue — institutional site behavior.
// Deliberately dependency-free (no CDN, no build step) so this site can be
// deployed as plain static files anywhere.

// ---------------------------------------------------------------------------
// CONFIGURE THIS: the base URL of the actual running Yes Queue application
// (the app itself lives outside this static site — see apps/web in the main
// project). Every element with a `data-app-link="/path"` attribute gets its
// href set to APP_BASE_URL + that path. Update this one value for your real
// deployment (e.g. "https://app.yesqueue.com") before going live.
const APP_BASE_URL = 'https://app.yesqueue.com';
// ---------------------------------------------------------------------------

document.querySelectorAll('[data-app-link]').forEach((el) => {
  el.setAttribute('href', APP_BASE_URL + el.getAttribute('data-app-link'));
});

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
