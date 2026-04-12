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
    category: '本地生活 · S2B2C ',
    year: 2025,
    featured: true,
    description: '门店当日余量食品盲盒交易平台，让浪费变惊喜。以"一杯奶茶钱，带走高质烘焙惊喜"为切入点，连接本地商家与年轻消费者，实现三方共赢与环保闭环。',
    stats: [
      { label: '市场规模(2024)', value: '300亿+' },
      { label: '年复合增长率', value: '47%' }
    ],
    page: 'projects/magic-bag/index.html',
    pageTitle: '惊喜食光魔法袋 · 路演',
    subtitle: '门店当日库存 → 惊喜盲盒 · 让浪费变价值',
    heroStats: [
      { label: '余量食品盲盒市场', value: '300亿+' },
      { label: '中国烘焙市场规模', value: '1160亿' },
      { label: '用户已验证', value: '1000万+' }
    ],
    gradient: 'linear-gradient(135deg, rgba(27,77,62,0.9) 0%, rgba(196,93,44,0.9) 100%), url("https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80")',
    imagePosition: 'center 40%'
  },
  {
    id: 'care-desktop',
    title: '关怀桌面',
    category: '银发经济 · 智能适老',
    year: 2026,
    featured: true,
    description: '基于AccessibilityService深度定制，将微信视频、防误触、语音播报封装成“关怀卡片”，让长辈秒变智能达人。',
    stats: [
      { label: '60+ 人口', value: '2.8亿' },
      { label: '子女付费意愿', value: '87%' }
    ],
    page: 'projects/care-desktop/index.html',
    pageTitle: '关怀桌面 · 银发智能桌面',
    subtitle: '银发族的数字桥梁，一键连接',
    heroStats: [
      { label: '60+人口', value: '2.8亿' },
      { label: '订阅定价', value: '9.9元/月' },
      { label: '旧手机改造潜力', value: '3000万+' }
    ],
    gradient: 'linear-gradient(135deg, rgba(30,111,92,0.85) 0%, rgba(226,140,76,0.85) 100%), url("https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1200&q=80")',
    imagePosition: 'center 30%'
  }
];

function getProjectById(id) {
  return PROJECTS.find(p => p.id === id);
}

function renderProjectCard(project, index) {
  const isReverse = index % 2 !== 0 ? 'reverse' : '';
  const bgPos = project.imagePosition || 'center center';
  
  return `
    <div class="bento-project ${isReverse}">
      <div class="bento-visual-col" style="background: #111;">
        <div class="bento-visual-bg" style="background: ${project.gradient}; background-size: cover; background-position: ${bgPos};"></div>
        <a href="${project.page}" class="bento-visual-link">
          <div class="bento-visual-content">
            <span class="bento-tag">${project.category}</span>
            <h3>${project.title}</h3>
            <p class="bento-visual-subtitle">${project.subtitle}</p>
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

function initProjectsGrid(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  let html = PROJECTS.map((project, index) => renderProjectCard(project, index)).join('');
  container.innerHTML = html;
}
