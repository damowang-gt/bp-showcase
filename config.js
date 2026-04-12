const SITE_CONFIG = {
  name: '创业项目展示',
  tagline: '用创意改变世界',
  description: '探索前沿商业构想，见证创新力量',
  year: new Date().getFullYear()
};

const NAV_LINKS = [
  { label: '项目', href: '#projects' },
  { label: '平台数据', href: '#about' }
];

const PROJECTS = [
  {
    id: 'magic-bag',
    title: '惊喜食光魔法袋',
    category: '食品科技 · O2O',
    year: 2025,
    featured: true,
    description: '门店当日余量食品盲盒交易平台，让浪费变惊喜。以"一杯奶茶钱，带走高质烘焙惊喜"为切入点，连接本地商家与年轻消费者，实现三方共赢与环保闭环。',
    stats: [
      { label: '市场规模(2024)', value: '300亿+' },
      { label: '年复合增长率', value: '47%' }
    ],
    page: '惊喜食光魔法袋.html',
    pageTitle: '惊喜食光魔法袋 · 路演',
    subtitle: '门店当日库存 → 惊喜盲盒 · 让浪费变价值',
    heroStats: [
      { label: '余量食品盲盒市场', value: '300亿+' },
      { label: '中国烘焙市场规模', value: '1160亿' },
      { label: '用户已验证', value: '1000万+' }
    ],
    gradient: 'linear-gradient(135deg, #1B4D3E 0%, #C45D2C 100%)'
  }
];

function getProjectById(id) {
  return PROJECTS.find(p => p.id === id);
}

function renderProjectCard(project, index) {
  const isReverse = index % 2 !== 0 ? 'reverse' : '';
  
  return `
    <div class="bento-project ${isReverse}">
      <div class="bento-visual-col" style="background: #111;">
        <div class="bento-visual-bg" style="background: ${project.gradient}"></div>
        <a href="${project.page}" class="bento-visual-link">
          <div class="bento-visual-content">
            <span class="bento-tag">${project.category}</span>
            <h3>${project.title}</h3>
          </div>
        </a>
      </div>
      
      <div class="bento-data-col">
        <div class="bento-card bento-data-desc">
          <h4>项目愿景</h4>
          <p>${project.description}</p>
        </div>
        
        ${project.stats.map(stat => `
          <div class="bento-card bento-data-stat">
            <div class="stat-val">${stat.value}</div>
            <div class="stat-lbl">${stat.label}</div>
          </div>
        `).join('')}
        
        <a href="${project.page}" class="bento-card bento-cta-card">
          <span>查看完整路演详情</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  `;
}

function renderComingSoonCard() {
  return `
    <div class="bento-project">
      <div class="bento-visual-col" style="background: #F5F5F7; border: 2px dashed #D1D1D6; box-shadow: none;">
        <div class="bento-visual-content" style="color: #86868B; text-shadow: none;">
          <h3>更多项目<br>即将呈现</h3>
        </div>
      </div>
      <div class="bento-data-col">
        <div class="bento-card coming-soon-bento">
          <h3>Stay Tuned...</h3>
        </div>
      </div>
    </div>
  `;
}

function initProjectsGrid(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  let html = PROJECTS.map((project, index) => renderProjectCard(project, index)).join('');
  html += renderComingSoonCard();
  container.innerHTML = html;
}
