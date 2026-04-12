const PROJECT_DATA = {
  id: 'huanju-planet',
  title: '换居星球',
  subtitle: '一人·一房 · 无中介直租信息撮合',
  description: '每个用户仅可发布一条求租+一条出租，从底层杜绝中介刷屏。平台只做信息展示与联系撮合，不涉及合同签订与资金——极轻模式，极高信任。',
  pptLink: '', // 如果有在线PPT链接可以填入这里
  gradient: 'linear-gradient(135deg, rgba(26,52,71,0.85) 0%, rgba(60,141,188,0.85) 100%), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80")',
  tags: ['有赞内部孵化', '零中介费', '真实房源'],
  stats: [
    { label: '中国住房租赁市场', value: '2.5万亿', sub: '行业规模庞大' },
    { label: '租房人口', value: '2.4亿+', sub: '2026E 预测数据' },
    { label: '反感中介费比例', value: '76%', sub: '租客痛点明确' }
  ],
  quote: '“一人一房”规则创造了稀缺的信任资产，成为直租领域的“豆瓣租房”升级版。',
  highlights: [
    { icon: 'shield', text: '一人一房反中介' },
    { icon: 'handshake', text: '直联直聊无佣金' },
    { icon: 'check', text: '零合规与法律风险' }
  ],
  type: '内部孵化项目 · C2C 直租撮合平台',
  links: [
    { title: '在线演示/编辑 PPT', action: 'ppt', icon: 'ppt' }
  ]
};

const SLIDES = [
  {
    id: 'market-pain',
    tag: '市场痛点 · 苦中介久矣',
    title: '传统租房平台之困',
    type: 'three-col',
    cards: [
      {
        icon: 'users',
        title: '中介房源泛滥',
        content: '58、贝壳等平台充斥中介批量发布的重复虚假房源，个人房东/租客被淹没，沟通成本极高。'
      },
      {
        icon: 'credit-card',
        title: '高额中介费',
        content: '动辄半个月到一个月租金的中介费，让租客和房东都感到压力，而平台并未提供对等价值。'
      },
      {
        icon: 'file-text',
        title: '签约流程复杂',
        content: '现有平台捆绑合同与支付，但法律风险与纠纷不断；用户真正需要的只是“找到对的人”。'
      }
    ]
  },
  {
    id: 'solution',
    tag: '回归本质 · 极轻模式',
    title: '换居星球：回归信息撮合本质',
    type: 'two-col',
    cards: [
      {
        icon: 'check',
        title: '一人一条规则 · 天然反中介',
        isList: true,
        items: [
          { text: '每个认证用户（手机号绑定）只能发布一条出租与一条求租。' },
          { text: '中介无法批量发房，真实个人自然浮现。' }
        ]
      },
      {
        icon: 'handshake',
        title: '直联直聊 · 无中介费',
        isList: true,
        items: [
          { text: '双方可查看联系方式并直接沟通。' },
          { text: '平台不参与定价、不代收租金、不介入合同——彻底规避法律风险。' }
        ]
      }
    ],
    footer: {
      icon: 'map-signs',
      text: '轻量LBS + 标签匹配：基于位置、通勤偏好、房屋特征进行双向推荐，提高撮合效率。'
    }
  },
  {
    id: 'monetization',
    tag: '多引擎驱动 · 变现清晰',
    title: '商业化变现深度分析',
    type: 'four-col',
    cards: [
      {
        icon: 'crown',
        title: '会员订阅',
        subtitle: 'ARPU ¥9.9~19.9/月',
        content: '享优先展示、谁看过我、智能刷新等。保守估计付费率8%~12%。<br><br><strong>10万DAU年收入可达千万级。</strong>'
      },
      {
        icon: 'target',
        title: '精准广告',
        subtitle: 'CPC / 品牌合作',
        content: '嵌入搬家、保洁、家具租赁等本地服务广告。基于LBS与用户画像投放。<br><br><strong>与有赞商家生态联动。</strong>'
      },
      {
        icon: 'share',
        title: '佣金导流',
        subtitle: 'CPS分成',
        content: '推荐第三方电子合同、信用查询、维修等服务，用户跳转交易，平台抽佣。<br><br><strong>纯导流分润，轻资产。</strong>'
      },
      {
        icon: 'bar-chart',
        title: '数据洞察',
        subtitle: 'B端报告/API',
        content: '向研究机构、房产开发商提供区域租金走势、供需热度、通勤数据。<br><br><strong>中长期资产变现，毛利极高。</strong>'
      }
    ]
  },
  {
    id: 'moat',
    tag: '护城河分析',
    title: '为什么换居星球难以复制？',
    type: 'three-col',
    cards: [
      {
        icon: 'shield',
        title: '规则即壁垒',
        content: '“一人一条”规则与中介利益相悖，大平台难以跟进（会损失现有中介广告收入）。换居星球从零构建纯净社区。'
      },
      {
        icon: 'scale',
        title: '零法律风险',
        content: '不参与合同与资金，完全符合《电子商务法》对信息服务平台的定义，合规成本几乎为零，扩张无政策阻力。'
      },
      {
        icon: 'network',
        title: '双边网络效应',
        content: '真实房源越多，吸引更多真实租客；反之亦然。社区氛围一旦形成，用户迁移成本极高。'
      }
    ]
  },
  {
    id: 'synergy',
    tag: '有赞孵化 · 内部资源协同',
    title: '战略协同与孵化路线',
    type: 'two-col',
    cards: [
      {
        icon: 'refresh',
        title: '与有赞生态的战略协同',
        content: '作为“本地生活”板块拼图，商家可接入搬家/保洁广告；租住人群反哺零售/美业SaaS。<br><br><strong>复用有赞技术中台与支付能力，极低研发成本。</strong>'
      },
      {
        icon: 'flag',
        title: '孵化执行路线',
        isList: true,
        items: [
          { text: '<strong>Q2 2026:</strong> MVP上线，有赞云开发，杭京试点内测。' },
          { text: '<strong>Q3-Q4 2026:</strong> 拓至10城，目标认证用户15w，启动会员/广告测试。' },
          { text: '<strong>2027:</strong> 覆盖30城，A轮融资或并入有赞本地生活事业部。' }
        ]
      }
    ],
    footer: {
      icon: 'rocket',
      text: '申请内部孵化资金80万元，期望获有赞云技术与流量扶持，预计18个月内实现盈亏平衡。'
    }
  }
];

const ICONS = {
  ppt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/><rect x="8" y="10" width="8" height="6" rx="1"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  handshake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15v5s-4 2-8-2-4-8-4-8 2-4 6-4h2"/><path d="M12 15v5s4 2 8-2 4-8 4-8-2-4-6-4h-2"/><path d="M12 15L8 9l-4 4M12 15l4-6 4 4"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
  'credit-card': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
  'file-text': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
  'map-signs': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22V2"/><path d="M5 9l2-2 2 2"/><path d="M19 13l-2 2-2-2"/><path d="M5 16h14"/><path d="M5 6h14"/></svg>',
  crown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
  'bar-chart': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>',
  scale: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h21v11a2 2 0 0 1-2 2h-6"></path><polyline points="10 5 10 1 14 1 14 5"></polyline></svg>',
  network: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"></path><line x1="12" y1="11" x2="12" y2="8"></line></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>',
  flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4E6c0-1.1.9-2 2-2h4"/><circle cx="15" cy="9" r="1"/></svg>'
};

function getIcon(name) {
  return ICONS[name] || '';
}