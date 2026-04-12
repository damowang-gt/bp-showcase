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

    const elementsToAnimate = document.querySelectorAll(
      '.bento-card, .bento-visual-col, .section-header h2'
    );

    elementsToAnimate.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      el.style.animationDelay = `${(index % 5) * 0.1}s`;
      this.observer.observe(el);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    ScrollAnimations.init();
  }, 100);
});
