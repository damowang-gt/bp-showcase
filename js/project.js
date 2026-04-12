(function() {
  const track = document.getElementById('slidesTrack');
  const slidesContainer = document.getElementById('slidesContainer');
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
            ${card.image ? `<img src="${card.image}" alt="${card.title}" class="card-image">` : ''}
            ${card.svg ? `<div class="card-image" style="display:flex;align-items:center;justify-content:center;background:var(--bg-main);">${card.svg}</div>` : ''}
            ${!card.image && !card.svg ? `<div class="card-icon">${getIcon(card.icon)}</div>` : ''}
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
            ${card.action ? `
              <a href="${card.action.url}" class="card-action-btn" target="_blank">
                ${card.action.text}
              </a>
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
        <div class="slide-content">
          <div class="cover-wrapper" style="margin-top: auto; margin-bottom: auto; padding-top: 20px; padding-bottom: 40px;">
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
            
            ${PROJECT_DATA.type ? `<div class="cover-type">${PROJECT_DATA.type}</div>` : ''}
            
            ${PROJECT_DATA.links ? `
              <div class="cover-links" style="margin-top: 40px; display: flex; gap: 20px; flex-wrap: wrap;">
                ${PROJECT_DATA.links.map(link => {
                  if (link.action === 'ppt') {
                    return `
                      <a href="#" onclick="window.openPptModal(event)" class="cover-link-btn">
                        ${getIcon(link.icon)}
                        ${link.title}
                      </a>
                    `;
                  }
                  return `
                    <a href="${link.url}" target="_blank" class="cover-link-btn">
                      ${getIcon(link.icon)}
                      ${link.title}
                    </a>
                  `;
                }).join('')}
              </div>
            ` : ''}
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
    initPptModal();
    updateActiveDot();
  }

  function initPptModal() {
    if (!PROJECT_DATA.pptLink) return;

    // 添加 PPT 模态框 DOM
    const modalHtml = `
      <div id="pptModal" class="ppt-modal">
        <div class="ppt-modal-content">
          <button class="ppt-close-btn" id="closePptBtn" aria-label="关闭PPT">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          <iframe id="pptIframe" class="ppt-iframe" src="" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    const modal = document.getElementById('pptModal');
    const iframe = document.getElementById('pptIframe');
    const closeBtn = document.getElementById('closePptBtn');

    // 绑定关闭事件
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      // 可选：清空 iframe src 以停止播放
      // iframe.src = '';
    });

    // 暴露全局打开方法
    window.openPptModal = function(e) {
      if (e) e.preventDefault();
      iframe.src = PROJECT_DATA.pptLink;
      modal.classList.add('active');
    };

    // 动态添加侧边栏 PPT 按钮
    const sideActions = document.querySelector('.side-actions');
    if (sideActions) {
      const pptBtn = document.createElement('a');
      pptBtn.href = '#';
      pptBtn.className = 'side-action-btn';
      pptBtn.title = '在线播放/编辑 PPT';
      pptBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
          <rect x="8" y="10" width="8" height="6" rx="1"/>
        </svg>
      `;
      pptBtn.addEventListener('click', window.openPptModal);
      sideActions.insertBefore(pptBtn, sideActions.firstChild);
    }
  }

  function createPagination() {
    pagination.innerHTML = `
      <button class="nav-btn" id="prevBtn" aria-label="上一页">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
      <div class="dots-container" id="dotsContainer"></div>
      <button class="nav-btn" id="nextBtn" aria-label="下一页">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
    `;
    
    const dotsContainer = document.getElementById('dotsContainer');
    
    for (let i = 0; i <= totalSlides; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === currentIndex) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
    
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
  }

  function updateActiveDot() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
    currentSlideEl.textContent = currentIndex + 1;
    
    // Toggle side actions visibility based on current slide
    const sideActions = document.querySelector('.side-actions');
    if (sideActions) {
      // Hide on the first cover slide (index 0), show on others
      if (currentIndex === 0) {
        sideActions.classList.remove('visible');
      } else {
        sideActions.classList.add('visible');
      }
    }
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
