// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav ul');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }

  // Project filter (project.html)
  const filterButtons = document.querySelectorAll('.filter-row button');
  const cards = document.querySelectorAll('.project-card');
  if (filterButtons.length && cards.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        cards.forEach(card => {
          const show = f === 'all' || card.dataset.tags.includes(f);
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // Contact form -> mailto (contact.html)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const subject = encodeURIComponent(`Portfolio contact from ${name || 'website visitor'}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:makkinakarthik0@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // Newsletter/CTA email field (index.html) -> also mailto
  const ctaForm = document.querySelector('#cta-form');
  if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = ctaForm.email.value.trim();
      const subject = encodeURIComponent('Project inquiry from portfolio site');
      const body = encodeURIComponent(`Reach me back at: ${email}`);
      window.location.href = `mailto:makkinakarthik0@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // Copy email to clipboard (contact.html)
  document.querySelectorAll('[data-copy]').forEach(el => {
    el.addEventListener('click', () => {
      navigator.clipboard?.writeText(el.dataset.copy);
      const original = el.textContent;
      el.textContent = 'Copied!';
      setTimeout(() => (el.textContent = original), 1400);
    });
  });
});
