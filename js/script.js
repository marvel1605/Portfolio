// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Gauge ring fill + counter animation, triggered once when hero scrolls into view
const CIRCUMFERENCE = 327; // 2 * PI * 52, matches the SVG radius in style.css
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function animateCount(el, target, duration = 1200) {
  if (prefersReducedMotion) {
    el.textContent = target;
    return;
  }
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function activateGauges() {
  document.querySelectorAll('.gauge').forEach(gauge => {
    const target = Number(gauge.dataset.target) || 0;
    const fillCircle = gauge.querySelector('[data-fill]');
    const counter = gauge.querySelector('.counter');

    // Cap the visual ring fill at 100% of a 0-40 scale so small % values still read clearly
    const ringPercent = Math.min(target / 40, 1);
    const offset = CIRCUMFERENCE - ringPercent * CIRCUMFERENCE;

    if (fillCircle) {
      fillCircle.style.strokeDashoffset = prefersReducedMotion
        ? offset
        : CIRCUMFERENCE;
      requestAnimationFrame(() => {
        fillCircle.style.strokeDashoffset = offset;
      });
    }
    if (counter) animateCount(counter, target);
  });
}

const heroObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activateGauges();
      observer.disconnect();
    }
  });
}, { threshold: 0.35 });

const gaugePanel = document.querySelector('.gauge-panel');
if (gaugePanel) heroObserver.observe(gaugePanel);
