// Projects page — filter functionality

document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.proj-card');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const tags = card.dataset.tags || '';
        const show = filter === 'all'
          || (filter === 'completed' && tags.includes('completed'))
          || (filter === 'in-progress' && tags.includes('in-progress'))
          || (filter === 'full-stack' && tags.includes('full-stack'))
          || (filter === 'security' && (tags.includes('security') || tags.includes('network')));

        card.classList.toggle('hidden', !show);
      });
    });
  });
});