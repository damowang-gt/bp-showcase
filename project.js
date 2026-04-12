(function() {
  const track = document.getElementById('slidesTrack');
  const slidesContainer = document.getElementById('slidesContainer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const pagination = document.getElementById('pagination');
  const currentSlideEl = document.getElementById('currentSlide');
  const totalSlidesEl = document.getElementById('totalSlides');
  
  let currentIndex = 0;
  const totalSlides = SLIDES.length;

  function renderSlide(slideData) {
    let cardsHtml = '';
    
    if (slideData.type === 'two-col' || slideData.type === 'three-col' || slideData.type === 'four-col') {
      const cols = slideData.type === 'two-col' ? 2 : slideData.type === 'three-col' ? 3 : 4;
      cardsHtml = `<div class="bento-grid cols-${cols}">`;
      
      slideData.cards.forEach(card => {
        cardsHtml += `
          <div class="bento-slide-card">
            <div class="card-icon">${getIcon(card.icon)}</div>
            <div class="card-title">${card.title}</div>
            ${card.badge ? `<span style="font-size:0.8rem;font-weight:600;color:#c45d2c;margin-bottom:8px;">${card.badge}</span>` : ''}
            ${card.subtitle ? `<div class="card-subtitle">${card.subtitle}</div>` : ''}
            ${card.content ? `<div class="card-content">${card.content}</div>` : ''}
            ${card.isList ? `
              <ul class="list-items">
                ${card.items.map(item => `<li>${item.text}</li>`).join('')}
              </ul>
            ` : ''}
            ${card.stat ? `
              <div class="card-stat">
                <div class="stat-value">${card.stat.value}</div>
                <div class="stat-label">${card.stat.label}</div>
              </div>
            ` : ''}
            ${card.highlight ? `
              <div class="highlight-box">
                <div class="highlight-value">${card.highlight.title || card.highlight.value}</div>
                ${card.highlight.desc ? `<div class="highlight-desc">${card.highlight.desc}</div>` : ''}
                ${card.highlight.label ? `<div class="highlight-desc">${card.highlight.label}${card.highlight.value2 ? ` · ${card.highlight.value2}${card.highlight.label2 ? ` ${card.highlight.label2}` : ''}` : ''}</div>` : ''}
              </div>
            ` : ''}
          </div>
        `;
      });
      
      cardsHtml += '</div>';
    }
    
    if (slideData.type === 'timeline') {
      cardsHtml = `
        <div class="timeline-grid">
          ${slideData.phases.map(phase => `
            <div class="timeline-card">
              <div class="timeline-period">${phase.period}</div>
              <h4>${phase.title}</h4>
              <p>${phase.desc}</p>
            </div>
          `).join('')}
        </div>
        <div class="risk-grid">
          ${slideData.riskCards.map(risk => `
            <span class="risk-pill">
              ${getIcon(risk.icon)}
              ${risk.text}
            </span>
          `).join('')}
        </div>
      `;
    }
    
    if (slideData.type === 'team') {
      cardsHtml = `
        <div class="team-grid">
          ${slideData.members.map(member => `
            <div class="team-card">
              <h3>${member.name}</h3>
              <div class="role">${member.role}</div>
              <p>${member.desc}</p>
            </div>
          `).join('')}
        </div>
        <div class="vision-card">
          ${getIcon('leaf')}
          <h2>${slideData.title}</h2>
          <p>${slideData.vision}</p>
          <div class="cta">${slideData.cta}</div>
        </div>
      `;
    }

    let footerHtml = '';
    if (slideData.footer) {
      footerHtml = `
        <div class="slide-footer">
          ${getIcon(slideData.footer.icon)}
          <div class="slide-footer-text">${slideData.footer.text}</div>
          ${slideData.footer.badge ? `<span class="badge">${slideData.footer.badge}</span>` : ''}
        </div>
      `;
    }

    return `
      <div class="slide">
        <div class="slide-content">
          <span class="slide-tag">${slideData.tag}</span>
          <h1 class="slide-title">${slideData.title}</h1>
          ${cardsHtml}
          ${footerHtml}
        </div>
      </div>
    `;
  }

  function renderCoverSlide() {
    return `
      <div class="slide">
        <div class="slide-content" style="justify-content: center;">
          <div class="cover-wrapper">
            <div class="cover-tags">
              ${PROJECT_DATA.tags.map(tag => `<span class="cover-tag">${tag}</span>`).join('')}
            </div>
            <h1 class="cover-title">${PROJECT_DATA.title}</h1>
            <p class="cover-subtitle">${PROJECT_DATA.subtitle}</p>
            <p class="cover-desc">${PROJECT_DATA.description}</p>
            
            <div class="cover-stats">
              ${PROJECT_DATA.stats.map(stat => `
                <div class="cover-stat">
                  <div class="stat-value">${stat.value}</div>
                  <div class="stat-label">${stat.label}</div>
                  <div class="stat-sub">${stat.sub}</div>
                </div>
              `).join('')}
            </div>
            
            <div class="cover-quote">
              <div class="quote-text">${PROJECT_DATA.quote}</div>
              <div class="quote-highlights">
                ${PROJECT_DATA.highlights.map(h => `
                  <span class="quote-badge">
                    ${getIcon(h.icon)}
                    ${h.text}
                  </span>
                `).join('')}
              </div>
            </div>
            
            <div class="cover-type">S2B2C · 本地即时 · 当日余量食物盲盒交易平台</div>
          </div>
        </div>
      </div>
    `;
  }

  function init() {
    let html = renderCoverSlide();
    SLIDES.forEach(slide => {
      html += renderSlide(slide);
    });
    track.innerHTML = html;
    
    totalSlidesEl.textContent = totalSlides;
    createPagination();
    updateSlide();
  }

  function createPagination() {
    pagination.innerHTML = '';
    for (let i = 0; i <= totalSlides; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === currentIndex) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      pagination.appendChild(dot);
    }
  }

  function updateActiveDot() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
    currentSlideEl.textContent = currentIndex + 1;
  }

  function goToSlide(index) {
    if (index < 0) index = 0;
    if (index > totalSlides) index = totalSlides;
    currentIndex = index;
    track.style.transform = `translateY(-${currentIndex * 100}%)`;
    updateActiveDot();
  }

  function nextSlide() { goToSlide(currentIndex + 1); }
  function prevSlide() { goToSlide(currentIndex - 1); }

  // Button events
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    }
  });

  // Touch gestures
  let touchStartY = 0;
  slidesContainer.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });
  slidesContainer.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(diff) > 50) {
      if (diff < 0) nextSlide();
      else prevSlide();
    }
  });

  // Mouse wheel
  let wheelTimeout;
  slidesContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => {
      if (e.deltaY > 0) nextSlide();
      else if (e.deltaY < 0) prevSlide();
    }, 50);
  }, { passive: false });

  init();
})();
