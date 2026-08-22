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

// Count up the hero stats once they scroll into view. Each element's
// static text (e.g. "10+") is already the correct final value, so a
// failure here just leaves that number showing instead of animating.
const statEls = document.querySelectorAll('[data-count-to]');
if ('IntersectionObserver' in window && statEls.length) {
  const animateStat = (el) => {
    const target = parseInt(el.dataset.countTo, 10);
    const suffix = el.dataset.suffix || '';
    if (!Number.isFinite(target)) return;
    const duration = 1000;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStat(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  statEls.forEach((el) => statObserver.observe(el));
}
