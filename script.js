document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  // Show the quote arrows after a second quote slide is added.
  const quoteCarousel = document.querySelector('#quoteCarousel');
  if (quoteCarousel) {
    const quoteSlides = quoteCarousel.querySelectorAll('.carousel-inner > .carousel-item');
    const quoteControls = quoteCarousel.querySelector('.quote-carousel-controls');
    if (quoteControls && quoteSlides.length < 2) quoteControls.hidden = true;
  }

  const revealItems = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries, revealObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));

  document.querySelectorAll('#mainNav .nav-link, #mainNav .nav-cta').forEach((link) => {
    link.addEventListener('click', () => {
      const nav = document.querySelector('#mainNav');
      if (nav.classList.contains('show') && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });
});
