const PROJECT_DATA = {
  id: 'guanlan-vc',
  title: '观澜星辰',
  subtitle: '提交创业想法，AI 尽调 · 稳定币直投',
  description: '全球首个由多智能体(Multi-Agent)完全驱动的去中心化创投网络。消除人为偏见，AI自动完成立项调研与风控尽调，合格即触发智能合约，全自动向创业者拨付稳定币资金。',
  gradient: 'linear-gradient(135deg, rgba(10,25,50,0.85) 0%, rgba(30,10,60,0.85) 100%)',
  tags: ['Web3', 'AI Agent', '去中心化VC'],
  stats: [
    { label: '稳定币流动性', value: '$24.8M+', sub: '全球Web3投资者提供' },
    { label: '平均尽调至放款', value: '1h', sub: '传统VC需要3-6个月' },
    { label: '人为干预', value: '0', sub: '100%智能体决策' }
  ],
  quote: '"让每一次创新都被看见，让每一份代码都有价值。"',
  highlights: [
    { icon: 'robot', text: 'AI自动尽调调研' },
    { icon: 'coins', text: '稳定币智能合约放款' },
    { icon: 'globe', text: '全球流动性资金池' }
  ],
  type: 'Web3 × AI Agent · 全自动创投网络',
  links: [
    { title: '直达项目官网', url: './', icon: 'globe' }
  ]
};

const SLIDES = [
  {
    id: 'pain-point',
    tag: '传统创投痛点 · 效率低下与偏见',
    title: '传统融资难如登天',
    type: 'two-col',
    cards: [
      {
        icon: 'users',
        title: '立项到融资周期长',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
        content: '一个人想要创业，从立项、研发投产到找融资，整个过程需要经历极其漫长的周期。',
        highlight: { title: '人工介入过多', desc: 'BP撰写、反复路演、机构尽调' }
      },
      {
        icon: 'alert-triangle',
        title: '资源错配与偏见',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
        content: '优秀的早期想法往往因为缺乏“人脉”或背景不佳而被埋没。',
        stat: { value: '3-6个月', label: '传统VC平均投资周期' }
      }
    ],
    footer: {
      icon: 'zap',
      text: '我们亟需一种更公平、更高效的机制来评估和支持真正有价值的创新。'
    }
  },
  {
    id: 'solution',
    tag: '观澜星辰 · 核心解决方案',
    title: '无人参与的 AI 创投平台',
    type: 'three-col',
    cards: [
      {
        icon: 'file-text',
        title: '1. 提交项目想法',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
        content: '创业者无需华丽的BP，只需提交核心想法与项目文档。'
      },
      {
        icon: 'robot',
        title: '2. Agent 深度评估',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80',
        content: '由多智能体组成的AI评委会接管项目的调研、商业化及市场规划。'
      },
      {
        icon: 'check-circle',
        title: '3. 自动触发拨款',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
        content: '评估通过后，系统自动调用资金池，将资金发放到创业者账户。'
      }
    ]
  },
  {
    id: 'funding',
    tag: '资金来源 · Web3与区块链结合',
    title: '稳定币流动性资金池',
    type: 'two-col',
    cards: [
      {
        icon: 'link',
        title: '连接区块链',
        image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=600&q=80',
        isList: true,
        items: [
          { text: '平台与区块链网络深度连接' },
          { text: '资金全流程链上公开透明' },
          { text: '规避传统金融的高昂跨境损耗' }
        ]
      },
      {
        icon: 'coins',
        title: '全球投资人群',
        image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=600&q=80',
        isList: true,
        items: [
          { text: '吸引全球各地的稳定币持有者' },
          { text: '将资金托管至平台进行二次投资' },
          { text: '实现AI筛选下的高效变现与复利' }
        ]
      }
    ],
    footer: {
      icon: 'shield',
      text: '利用稳定币(USDC/USDT)的形式进行交易，资金发放直达项目人，没有任何中间环节抽成。'
    }
  },
  {
    id: 'workflow',
    tag: '智能体网络',
    title: 'AI Agent的无缝协作',
    type: 'two-col',
    cards: [
      {
        icon: 'search',
        title: '调研Agent',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
        content: '负责竞品分析、市场规模预测与政策合规审查。',
        highlight: { value: '秒级', label: '抓取全网数据' }
      },
      {
        icon: 'trending-up',
        title: '风控与决策Agent',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
        content: '构建商业化落地路径，评估项目可行性，决定是否调动资金池进行投资。',
        highlight: { value: '绝对理性', label: '排除主观偏见' }
      }
    ]
  },
  {
    id: 'vision',
    tag: '星辰大海',
    title: '重塑未来创投格局',
    type: 'team',
    vision: '没有人为干预，只有纯粹的技术信仰与理性判断。观澜星辰，连接全球资本与每一位真正的创新者。',
    cta: '加入观澜星辰节点',
    members: [
      { name: '全球创客', role: 'Idea Provider', desc: '提交能够改变世界的点子' },
      { name: '稳定币持有者', role: 'Liquidity Provider', desc: '提供资金支持，享受创新红利' }
    ]
  }
];

const ICONS = {
  robot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>',
  coins: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 0111 16.09"/><path d="M7 6h1v4"/><path d="M16.71 13.88l.7.71-2.82 2.82"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
  'alert-triangle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  'file-text': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
  'check-circle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  'trending-up': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>'
};

function getIcon(name) {
  return ICONS[name] || '';
}