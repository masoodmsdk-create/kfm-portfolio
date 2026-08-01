document.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
      easing: 'ease-out-cubic'
    });
  }

  const counters = document.querySelectorAll('[data-target]');
  counters.forEach((counter) => {
    const target = Number(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';
    let start = 0;
    const duration = 1400;
    const startTime = performance.now();

    const step = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const current = Math.floor(progress * target);
      counter.textContent = `${current}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        counter.textContent = `${target}${suffix}`;
      }
    };

    requestAnimationFrame(step);
  });

  document.addEventListener('mousemove', (event) => {
    const hero = document.querySelector('.profile-shell');
    if (!hero) return;

    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    hero.style.setProperty('--rx', `${(-y * 6).toFixed(2)}deg`);
    hero.style.setProperty('--ry', `${(x * 8).toFixed(2)}deg`);
  });
});
