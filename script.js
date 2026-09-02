(() => {
  document.documentElement.classList.add('js');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const body = document.body;
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  const closeNav = () => {
    if (!navToggle || !nav) return;
    navToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    body.classList.remove('nav-open');
  };

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const willOpen = navToggle.getAttribute('aria-expanded') !== 'true';
      navToggle.setAttribute('aria-expanded', String(willOpen));
      nav.classList.toggle('is-open', willOpen);
      body.classList.toggle('nav-open', willOpen);
    });

    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeNav();
    });
  }

  const revealItems = [...document.querySelectorAll('.reveal')];
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
    let rafId = 0;
    window.addEventListener('pointermove', (event) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--mx', `${event.clientX}px`);
        document.documentElement.style.setProperty('--my', `${event.clientY}px`);
        rafId = 0;
      });
    }, { passive: true });
  }

  const filterButtons = [...document.querySelectorAll('.filter-chip')];
  const menuItems = [...document.querySelectorAll('.menu-item')];
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });

      menuItems.forEach((item) => {
        const categories = (item.dataset.category || '').split(' ');
        const visible = filter === 'all' || categories.includes(filter);
        item.classList.toggle('is-hidden', !visible);
      });
    });
  });

  const berlinParts = () => {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Berlin',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23'
    }).formatToParts(new Date());
    return Object.fromEntries(parts.filter((part) => part.type !== 'literal').map((part) => [part.type, part.value]));
  };

  const updateOpenStatus = () => {
    const openNow = document.querySelector('#open-now');
    const todayStatus = document.querySelector('#today-status');
    if (!openNow || !todayStatus) return;

    const parts = berlinParts();
    const minutesNow = (Number(parts.hour) * 60) + Number(parts.minute);
    const lateDay = parts.weekday === 'Fri' || parts.weekday === 'Sat';
    const closeMinutes = lateDay ? 24 * 60 : 23 * 60;
    const isOpen = minutesNow >= 9 * 60 && minutesNow < closeMinutes;
    const closeLabel = lateDay ? '00:00' : '23:00';

    openNow.textContent = isOpen ? `Jetzt offen · bis ${closeLabel}` : `Geschlossen · ab 09:00`;
    openNow.classList.toggle('is-closed', !isOpen);
    todayStatus.textContent = isOpen ? `Jetzt offen · Sonnenallee 74` : 'Sonnenallee 74 · Berlin-Neukölln';
  };

  updateOpenStatus();
  window.setInterval(updateOpenStatus, 60_000);

  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
