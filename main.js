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
    setTimeout(() => {
      this.frame.src = '';
    }, 300); // Wait for animation
    document.body.style.overflow = '';
  },

  isOpen() {
    return this.modal && this.modal.classList.contains('active');
  }
};

const ProjectCards = {
  init() {
    // We bind to document to handle dynamically generated cards
    document.addEventListener('click', (e) => {
      const card = e.target.closest('.project-card[data-project]');
      if (card) {
        const projectId = card.dataset.project;
        const project = getProjectById(projectId);
        if (project && project.page) {
          Modal.open(project.page);
        }
      }
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
          // Optional: stop observing once animated
          // this.observer.unobserve(entry.target);
        }
      });
    }, options);

    // Apply animation classes to these elements
    const elementsToAnimate = document.querySelectorAll(
      '.bento-card, .bento-visual-col, .section-header h2'
    );

    elementsToAnimate.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      // Stagger animations based on index or position
      el.style.animationDelay = `${(index % 5) * 0.1}s`;
      this.observer.observe(el);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Modal.init();
  ProjectCards.init();
  
  // Initialize scroll animations slightly after to ensure DOM is ready
  setTimeout(() => {
    ScrollAnimations.init();
  }, 100);
});
