const Modal = {
  modal: null,
  frame: null,
  closeBtn: null,
  backdrop: null,

  init() {
    this.modal = document.getElementById('projectModal');
    this.frame = document.getElementById('projectFrame');
    this.closeBtn = document.getElementById('modalClose');
    this.backdrop = this.modal.querySelector('.modal-backdrop');

    this.bindEvents();
  },

  bindEvents() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }
    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => this.close());
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });
  },

  open(url) {
    if (!this.modal || !this.frame) return;
    this.frame.src = url;
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  close() {
    if (!this.modal || !this.frame) return;
    this.modal.classList.remove('active');
    this.frame.src = '';
    document.body.style.overflow = '';
  },

  isOpen() {
    return this.modal && this.modal.classList.contains('active');
  }
};

const ProjectCards = {
  init() {
    const cards = document.querySelectorAll('.project-card[data-project]');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        const projectId = card.dataset.project;
        const project = getProjectById(projectId);
        if (project && project.page) {
          Modal.open(project.page);
        }
      });
    });
  }
};

const ScrollAnimations = {
  observer: null,

  init() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, options);

    document.querySelectorAll('.project-card, .section-header').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      this.observer.observe(el);
    });

    this.injectStyles();
  },

  injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .in-view {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
    document.head.appendChild(style);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Modal.init();
  ProjectCards.init();
  ScrollAnimations.init();
});
