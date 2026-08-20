document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Cursor-tracked spotlight glow
window.addEventListener('pointermove', (e) => {
  document.body.style.setProperty('--spot-x', `${e.clientX}px`);
  document.body.style.setProperty('--spot-y', `${e.clientY}px`);
});

// Reveal-on-scroll for cards and list items.
// Content is visible by default in CSS; we only opt into the fade/slide
// animation once we're sure we can also guarantee items get revealed
// (observer fires + a hard fallback timer), so nothing can stay stuck hidden.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealItems.length) {
  document.documentElement.classList.add('reveal-ready');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
  );
  revealItems.forEach((item) => observer.observe(item));

  // Fail-safe: force-reveal anything the observer missed (e.g. background
  // tabs, unusual layouts, full-page screenshot tools) after a short delay.
  window.setTimeout(() => {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }, 2000);
}
