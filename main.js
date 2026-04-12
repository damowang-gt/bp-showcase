document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const projectFrame = document.getElementById('projectFrame');
  const backdrop = modal.querySelector('.modal-backdrop');

  const projectCards = document.querySelectorAll('.project-card[data-project]');

  const projectUrls = {
    'magic-bag': '惊喜食光魔法袋.html'
  };

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.dataset.project;
      if (projectUrls[projectId]) {
        projectFrame.src = projectUrls[projectId];
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    projectFrame.src = '';
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.project-card, .section-header').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  document.head.insertAdjacentHTML('beforeend', `
    <style>
      .in-view {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    </style>
  `);
});
