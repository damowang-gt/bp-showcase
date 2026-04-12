const PROJECT_DATA = {
  id: 'magic-bag',
  title: '惊喜食光魔法袋',
  subtitle: '门店当日库存 → 惊喜盲盒 · 让浪费变价值',
  description: '一个连接"门店当日剩余食品"和"消费者"的本地即时食物盲盒交易平台。',
  // 在此处配置在线PPT的分享链接（支持腾讯文档、飞书、金山文档等）
  // 确保链接是公开可访问的。如果是嵌入链接（iframe src），效果最好。
  pptLink: 'https://docs.qq.com/slide/DS3F6WGtCRUZJdVpz',
  gradient: 'linear-gradient(135deg, #1B4D3E 0%, #C45D2C 100%)',
  tags: ['百亿赛道', '反浪费立法', '高频刚需'],
  stats: [
    { label: '余量食品盲盒市场', value: '300亿+', sub: '2024年 · 年复合增长率47%' },
    { label: '中国烘焙市场规模', value: '1160亿', sub: '2025年 · 门店33.8万家' },
    { label: '用户已验证', value: '1000万+', sub: '头部平台覆盖' }
  ],
  quote: '"一杯奶茶钱，带走一袋高质烘焙惊喜"',
  highlights: [
    { icon: 'store', text: '商家 · 变废为钱' },
    { icon: 'smile', text: '用户 · 3-5折' },
    { icon: 'leaf', text: '每日拯救数千份食物' }
  ],
  links: [
    { title: '在线演示/编辑 PPT', action: 'ppt', icon: 'ppt' },
    { title: '查看生态价值飞轮图', url: 'ecosystem-flywheel.html', icon: 'project-diagram' },
    { title: '查看有赞双向赋能分析', url: 'youzan-synergy.html', icon: 'handshake' }
  ]
};

const SLIDES = [
  {
    id: 'market-pain',
    tag: '巨大的结构性浪费 · 明确的商业机会',
    title: '商家痛 · 用户痒 · 市场空窗',
    type: 'two-col',
    cards: [
      {
        icon: 'trash',
        title: '商家高报损 · 千亿烘焙的浪费',
        content: '现烤烘焙/日料/熟食"日清"丢弃，平均报损率 <strong>12%~18%</strong>，单店月损失可达 <strong>¥3000~8000</strong>。',
        highlight: { title: '不敢打折', desc: '影响正价 · 丢弃负罪 · 处理尴尬' }
      },
      {
        icon: 'users',
        title: '年轻消费者 · 性价比+猎奇',
        content: '<strong>1.2亿</strong> Z世代及年轻白领，愿意为"盲盒惊喜"和环保买单，但缺乏正规低价渠道。',
        stat: { value: '70%', label: '消费者愿尝试余量折扣食品' }
      }
    ],
    footer: {
      icon: 'chart',
      text: '海外Too Good To Go 年营收数亿欧元 · 国内惜食魔法袋覆盖2万+门店，证明模式可盈利、可规模化。',
      badge: '烘焙余量盲盒细分 · 年增长47%'
    }
  },
  {
    id: 'valueProposition',
    tag: '惊喜食光 · 一个魔法袋解决三方痛点',
    title: '变浪费为惊喜 · 三方价值重构',
    type: 'three-col',
    cards: [
      {
        icon: 'pie-chart',
        title: '商家 · 止损增收',
        subtitle: '原本丢弃 = 利润',
        content: '单店日均增收约 ¥80~150，不冲击正价体系，提升环保品牌形象。',
        stat: { value: '+30%', label: '预估净利润提升' }
      },
      {
        icon: 'gift',
        title: '用户 · 超值惊喜',
        subtitle: '3~5折拿下当日鲜食',
        content: '盲盒神秘感 + 高性价比，LBS附近门店自提，环保消费新体验。',
        stat: { value: '¥5.9~24.9', label: '主流价格带' }
      },
      {
        icon: 'seedling',
        title: '社会 · 减少浪费',
        subtitle: '让食物尽其用',
        content: '符合《反食品浪费法》，每单减少碳排放，未来部分收益反哺公益。',
        stat: { value: '1%', label: '拟捐赠流水支持光盘行动' }
      }
    ]
  },
  {
    id: 'product',
    tag: '轻量闭环 · 15天可上线验证',
    title: '两端赋能 · 数据驱动',
    type: 'two-col',
    cards: [
      {
        icon: 'user',
        title: '用户端小程序',
        badge: 'LBS·盲盒·核销',
        isList: true,
        items: [
          { text: '附近3-5km门店 · 神秘盲盒卡片' },
          { text: '倒计时紧迫感 · 保底价值提示' },
          { text: '到店扫码取货 · 拍照评价惊喜度' }
        ]
      },
      {
        icon: 'shop',
        title: '商家端后台',
        badge: '一键发布·数据看板',
        isList: true,
        items: [
          { text: '极速入驻 · 证照上传' },
          { text: '选择余量数量/售价 · 自动计算折扣' },
          { text: '止损金额/回收金额可视化' }
        ]
      }
    ],
    footer: {
      icon: 'shield',
      text: '<strong>平台风控：</strong>商家审核·保证金·开盒评价机制·限定闭店前上架，确保食品安全与品牌。'
    }
  },
  {
    id: 'business',
    tag: '已验证盈利模型 · 可持续收入',
    title: '商业模式清晰 · 多方共赢',
    type: 'two-col',
    cards: [
      {
        icon: 'coins',
        title: '平台收入构成',
        isList: true,
        items: [
          { text: '<strong>佣金抽成</strong> 10%~20% (早期优惠引流)' },
          { text: '<strong>会员订阅</strong> (后期) 免配送费/优先抢购' },
          { text: '<strong>广告与私域推广</strong> 竞价排名/社群新品推介' },
          { text: '<strong>公益联动</strong> 强化社会企业标签' }
        ],
        stat: { value: '单店日均增收 ≈¥100' }
      },
      {
        icon: 'building',
        title: '生态闭环验证',
        content: '不仅是一门生意，更是一个多方受益的增长飞轮。点击下方查看生态价值关系图：',
        action: { text: '查看生态价值飞轮图 ➔', url: 'ecosystem-flywheel.html' },
        highlight: { value: '2万+', label: '门店', value2: '1000万+', label2: '用户' },
        sub: '证明市场接受度与盈利能力'
      }
    ],
    footer: {
      icon: 'check',
      text: '核心闭环：商家免费入驻→发布余量→用户低价购买→平台抽佣+商家止损，多方共赢。'
    }
  },
  {
    id: 'growth',
    tag: '独家资源 · 爆发式增长路径',
    title: '冷启动即规模 · 持续裂变',
    type: 'four-col',
    cards: [
      {
        icon: 'handshake',
        title: '有赞生态战略赋能',
        content: '利用有赞SaaS、私域及小红书资源实现冷启动。深度分析请点击下方链接：<br><br><a href="youzan-synergy.html" class="inline-link-btn" target="_blank">查看有赞双向赋能分析 ➔</a>'
      },
      {
        icon: 'store',
        title: '头部连锁撬动',
        content: '先攻克区域内头部烘焙连锁品牌，利用其品牌效应吸引首批用户。'
      },
      {
        icon: 'graduation',
        title: '高校渗透 · 长期蓄水',
        content: '每年1000万+大学毕业生人群。"1元抢盲盒"+校园大使。'
      },
      {
        icon: 'share',
        title: '裂变 · 私域',
        content: '邀请好友助力解锁盲盒；引导加入"周边捡漏群"提升复购。'
      }
    ]
  },
  {
    id: 'roadmap',
    tag: '清晰路线 · 风险可控',
    title: '三步走战略 · 稳扎稳打',
    type: 'timeline',
    phases: [
      { period: '15天', title: '原型验证', desc: 'MVP小程序，单一城市10-20家试点，跑通核销与商家意愿。' },
      { period: '2个月', title: '区域扩张', desc: '完善数据看板+裂变，覆盖核心商圈，用户破万。' },
      { period: '6个月+', title: '规模化运营', desc: '多城市复制，引入连锁品牌，探索配送，强化公益合作。' }
    ],
    riskCards: [
      { icon: 'lock', text: '食品安全保证金+强制弹窗' },
      { icon: 'star', text: '开盒评价差评下架' },
      { icon: 'clock', text: '仅闭店前2小时上架' }
    ]
  },
  {
    id: 'team',
    tag: '核心团队 · 社会愿景',
    title: '让食物尽其用',
    type: 'team',
    vision: '探索城市美食，珍惜一粥一饭。商业向善，多方共赢。',
    cta: '惊喜食光魔法袋 · 邀请您共同见证',
    members: [
      { name: '王文涛', role: '产品经理 · 需求/营销', desc: '直销背景，深刻理解商家痛点与地推' },
      { name: '谢飞', role: '全栈开发', desc: '负责开发测试，技术落地能力强' }
    ]
  }
];

const ICONS = {
  ppt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/><rect x="8" y="10" width="8" height="6" rx="1"/></svg>',
  store: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  smile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6.5 21.5C3 18 2 13 2 10c0-3.5 2-6.5 5-8 0 3.5 1 7 4.5 9.5"/><path d="M11 2c2.5 2 4 4.5 4 8 0 3-1.5 6-4.5 8"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
  'pie-chart': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.21 15.89A10 10 0 118 2.83"/><path d="M22 12A10 10 0 0012 2v10z"/></svg>',
  gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>',
  seedling: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22V10"/><path d="M12 10c2-2.5 6-3 6-6a6 6 0 00-12 0c0 3 4 3.5 6 6z"/><path d="M12 10c-2-2.5-6-3-6-6a6 6 0 0112 0c0 3-4 3.5-6 6z"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  shop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  coins: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 0111 16.09"/><path d="M7 6h1v4"/><path d="M16.71 13.88l.7.71-2.82 2.82"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
  graduation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
  ranking: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0012 0V2z"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
  handshake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15v5s-4 2-8-2-4-8-4-8 2-4 6-4h2"/><path d="M12 15v5s4 2 8-2 4-8 4-8-2-4-6-4h-2"/><path d="M12 15L8 9l-4 4M12 15l4-6 4 4"/></svg>',
  'project-diagram': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="9" y="15" width="6" height="6" rx="1"/><path d="M6 9v2c0 1.1.9 2 2 2h8a2 2 0 002-2V9"/><path d="M12 13v2"/></svg>'
};

function getIcon(name) {
  return ICONS[name] || '';
}
