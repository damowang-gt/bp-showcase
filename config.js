const SITE_CONFIG = {
  name: '创业项目展示',
  tagline: '用创意改变世界',
  description: '探索前沿商业构想，见证创新力量',
  year: new Date().getFullYear()
};

const NAV_LINKS = [
  { label: '项目', href: '#projects' },
  { label: '关于', href: '#about' }
];

const PROJECTS = [
  {
    id: 'magic-bag',
    title: '惊喜食光魔法袋',
    category: '食品科技',
    year: 2025,
    featured: true,
    description: '门店当日余量食品盲盒交易平台，让浪费变惊喜。连接商家与消费者，实现三方共赢。',
    stats: [
      { label: '市场规模', value: '300亿+' },
      { label: '年增长率', value: '47%' }
    ],
    page: '惊喜食光魔法袋.html',
    pageTitle: '惊喜食光魔法袋 · 路演',
    subtitle: '门店当日库存 → 惊喜盲盒 · 让浪费变价值',
    heroStats: [
      { label: '余量食品盲盒市场', value: '300亿+' },
      { label: '中国烘焙市场规模', value: '1160亿' },
      { label: '用户已验证', value: '1000万+' }
    ]
  }
];

function getProjectById(id) {
  return PROJECTS.find(p => p.id === id);
}

function getFeaturedProject() {
  return PROJECTS.find(p => p.featured);
}

function renderProjectCard(project) {
  return `
    <article class="project-card ${project.featured ? 'project-featured' : ''}" data-project="${project.id}">
      <div class="card-image">
        <div class="card-image-placeholder" style="background: ${project.gradient || 'linear-gradient(135deg, #C45D2C 0%, #1B4D3E 100%)'}">
          <svg viewBox="0 0 200 120" class="placeholder-svg">
            <circle cx="100" cy="50" r="25" fill="rgba(255,255,255,0.3)"/>
            <path d="M85 65 L100 80 L115 65" stroke="rgba(255,255,255,0.5)" stroke-width="3" fill="none"/>
            <rect x="70" y="85" width="60" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
          </svg>
        </div>
        <div class="card-overlay">
          <span class="view-label">查看详情</span>
        </div>
      </div>
      <div class="card-content">
        <div class="card-meta">
          <span class="meta-tag">${project.category}</span>
          <span class="meta-dot"></span>
          <span class="meta-date">${project.year}</span>
        </div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.description}</p>
        <div class="card-stats">
          ${project.stats.map(stat => `
            <div class="stat">
              <span class="stat-value">${stat.value}</span>
              <span class="stat-label">${stat.label}</span>
            </div>
          `).join('')}
        </div>
        <div class="card-footer">
          <span class="learn-more">
            探索项目
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </article>
  `;
}

function renderComingSoonCard() {
  return `
    <article class="project-card project-coming-soon">
      <div class="coming-soon-content">
        <div class="coming-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="3"/>
            <path d="M12 8v4l2 2"/>
          </svg>
        </div>
        <h3>更多项目</h3>
        <p>精彩即将呈现...</p>
        <span class="soon-badge">Coming Soon</span>
      </div>
    </article>
  `;
}

function initProjectsGrid(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  let html = PROJECTS.map(renderProjectCard).join('');
  html += renderComingSoonCard();
  container.innerHTML = html;
}
