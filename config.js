const SITE_CONFIG = {
  name: '观澜星辰',
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
    page: '/projects/magic-bag/',
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
    page: '/projects/care-desktop/',
    pageTitle: '关怀桌面 · 银发智能桌面',
    subtitle: '银发族的数字桥梁，一键连接',
    heroStats: [
      { label: '60+人口', value: '2.8亿' },
      { label: '订阅定价', value: '9.9元/月' },
      { label: '旧手机改造潜力', value: '3000万+' }
    ],
    gradient: 'linear-gradient(135deg, rgba(30,111,92,0.85) 0%, rgba(226,140,76,0.85) 100%), url("https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1200&q=80")',
    imagePosition: 'center 30%'
  },
  {
    id: 'huanju-planet',
    title: '换居星球',
    category: '内部孵化 · 零中介直租',
    year: 2026,
    featured: true,
    description: '每个用户仅可发布一条求租+一条出租，从底层杜绝中介刷屏。平台只做信息展示与联系撮合，不涉及合同签订与资金——极轻模式，极高信任。',
    stats: [
      { label: '中国住房租赁市场', value: '2.5万亿' },
      { label: '租客反感中介费', value: '76%' }
    ],
    page: '/projects/huanju-planet/',
    pageTitle: '换居星球 · 内部创业孵化BP',
    subtitle: '一人·一房 · 无中介直租信息撮合',
    heroStats: [
      { label: '市场规模', value: '2.5万亿' },
      { label: '租房人口', value: '2.4亿+' },
      { label: '平台信息撮合边际成本', value: '0佣金' }
    ],
    gradient: 'linear-gradient(135deg, rgba(26,52,71,0.85) 0%, rgba(60,141,188,0.85) 100%), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80")',
    imagePosition: 'center center'
  },
  {
    id: 'guanlan-vc',
    title: '观澜星辰',
    category: 'Web3 × AI Agent创投',
    year: 2026,
    featured: true,
    description: '全球首个由多智能体(Multi-Agent)完全驱动的去中心化创投网络。消除人为偏见，AI自动完成立项调研与风控尽调，合格即触发智能合约，全自动向创业者拨付USDC/USDT稳定币资金。',
    stats: [
      { label: '稳定币流动性', value: '$24.8M+' },
      { label: '平均尽调至放款', value: '1h' }
    ],
    page: '/projects/guanlan-vc/presentation',
    website: '/projects/guanlan-vc/',
    pageTitle: '观澜星辰 · AI Agent 全自动创投网络',
    subtitle: '提交创业想法，AI 尽调 · 稳定币直投',
    heroStats: [
      { label: '流动资金池', value: '$24.8M+' },
      { label: '已评估项目', value: '1284' },
      { label: '人为干预', value: '0' }
    ],
    gradient: 'linear-gradient(135deg, rgba(10,25,50,0.85) 0%, rgba(30,10,60,0.85) 100%), url("https://images.unsplash.com/photo-1639762681485-074b7f4ec626?auto=format&fit=crop&w=1200&q=80")',
    imagePosition: 'center center'
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
        
        ${project.website ? `
        <a href="${project.website}" class="bento-card bento-cta-card bento-cta-outline">
          <span>直达项目官网</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </a>
        ` : ''}
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
