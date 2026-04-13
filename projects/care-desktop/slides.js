const PROJECT_DATA = {
  id: 'care-desktop',
  title: '关怀桌面',
  subtitle: '银发族的数字桥梁，一键连接',
  description: '基于AccessibilityService深度定制，将微信视频、防误触、语音播报封装成“关怀卡片”，让长辈秒变智能达人。',
  pptLink: '', // 如果有在线PPT链接可以填入这里
  gradient: 'linear-gradient(135deg, #1e6f5c 0%, #e28c4c 100%)',
  tags: ['万亿银发赛道', '无障碍引擎', '高频刚需'],
  stats: [
    { label: '60+人口', value: '2.8亿', sub: '空巢比例过半' },
    { label: '订阅定价', value: '9.9元/月', sub: '子女付费意愿87%' },
    { label: '旧手机改造潜力', value: '3000万+', sub: '硬件增量市场' }
  ],
  quote: '"让2.8亿长辈不掉队，关怀桌面不仅是Launcher，更是银发数字生活的操作系统。"',
  highlights: [
    { icon: 'check', text: '无障碍一键直达' },
    { icon: 'shield', text: '系统级防误触' },
    { icon: 'heart', text: '安全守护矩阵' }
  ],
  type: 'B2C · 银发经济 · 软硬一体适老操作系统',
  links: [
    { title: '在线演示/编辑 PPT', action: 'ppt', icon: 'ppt' }
  ]
};

const SLIDES = [
  {
    id: 'market-pain',
    tag: '万亿银发赛道 · 真实痛点',
    title: '巨大的市场，未被满足的需求',
    type: 'three-col',
    cards: [
      {
        icon: 'users',
        title: '2.8亿',
        subtitle: '60+ 人口，空巢比例过半',
        image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=600&q=80',
        content: '智能手机渗透率68%，但市面“简易模式”仅放大字体，解决不了微信视频、误触等核心障碍。'
      },
      {
        icon: 'credit-card',
        title: '9.9元/月',
        subtitle: '低决策门槛订阅',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
        content: '25-45岁子女87%愿为父母支付“一杯咖啡钱”，LTV预估超200元，高粘性刚需。'
      },
      {
        icon: 'microchip',
        title: '3000万+',
        subtitle: '旧手机改造潜力',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
        content: '与回收商合作预装关怀桌面，作为“长辈机”二次销售，硬件增量市场清晰。'
      }
    ]
  },
  {
    id: 'product-advantage',
    tag: '深度无障碍自动化 · 绝非表面适老',
    title: '为什么关怀桌面是更优解？',
    type: 'two-col',
    cards: [
      {
        icon: 'frown',
        title: '传统老人模式局限',
        image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=600&q=80',
        isList: true,
        items: [
          { text: '微信视频需5步以上，老人无法独立发起' },
          { text: '误触状态栏关闭网络，儿女联系失联' },
          { text: '无语音反馈，视力退化者不知道点没点上' },
          { text: '缺乏安全守护，独居风险高' }
        ]
      },
      {
        icon: 'rocket',
        title: '关怀桌面 · 技术壁垒',
        image: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&w=600&q=80',
        isList: true,
        items: [
          { text: '<strong>无障碍一键直达</strong> —— 模拟点击，微信视频/语音一步完成' },
          { text: '<strong>系统级防误触</strong> —— 下拉拦截、布局锁定，设置入口隐藏' },
          { text: '<strong>全局TTS语音</strong> —— 点击即播报，听觉确认' },
          { text: '<strong>安全守护矩阵</strong> —— 跌倒检测、SOS、未移动预警' }
        ]
      }
    ],
    footer: {
      icon: 'check',
      text: '对比普通老人桌面：关怀桌面实现应用内自动化（微信视频一键直达）、深度防误触拦截、支持远程配置与跌倒监测。'
    }
  },
  {
    id: 'business',
    tag: '务实的商业化路径 · 依托真实场景落地',
    title: '从工具到入口的变现矩阵',
    type: 'three-col',
    cards: [
      {
        icon: 'microchip',
        title: '硬件预装与旧机改造',
        subtitle: '低成本获客基本盘',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
        content: '与二手手机回收商（如转转、爱回收）及区域运营商合作，提供“旧机适老改造”刷机包或预装方案。<br><br><strong>落地模式：</strong> 按授权装机量收取软件买断费（如 5-10元/台），实现低成本批量获客。'
      },
      {
        icon: 'crown',
        title: '子女端增值服务',
        subtitle: '按年付费降低决策门槛',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
        content: '长辈免费使用基础桌面，子女端App提供高价值守护功能：<strong>远程屏幕协助、反诈骗实时预警、长辈活动轨迹异常提醒</strong>。<br><br><strong>落地模式：</strong> 推出 29.9元/年 的基础守护包，以极低年费快速打穿子女付费意愿。'
      },
      {
        icon: 'handshake',
        title: '银发本地生活服务分发',
        subtitle: '精准流量的 CPS 变现',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80',
        content: '桌面作为长辈最高频的数字入口，接入本地合规的养老服务（如：陪诊看病、上门家政、适老化产品购买）。<br><br><strong>落地模式：</strong> 采用严格筛选的白名单制，通过服务抽成（CPS）实现长效变现，不接任何干扰性广告。'
      }
    ],
    footer: {
      icon: 'map-signs',
      text: '<strong>变现节奏：</strong> 早期通过“旧机改造”快速铺量验证产品；中期依靠“子女守护包”实现现金流打平；后期依托高频入口向“银发服务分发平台”演进。'
    }
  },
  {
    id: 'roadmap',
    tag: '务实推进 · 产品已落地',
    title: '产品现状与发展里程碑',
    type: 'two-col',
    cards: [
      {
        icon: 'check',
        title: '当前进展：核心技术已验证',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
        isList: true,
        items: [
          { text: '<strong>底层引擎：</strong> 基于无障碍服务的自动化脚本已跑通，核心功能（如微信一键视频）成功率高' },
          { text: '<strong>防误触系统：</strong> 状态栏拦截、系统设置隐藏等核心能力已在主流安卓机型验证' },
          { text: '<strong>产品原型：</strong> V1.0 安卓 APK 已完成打包，正在进行小范围测试' }
        ]
      },
      {
        icon: 'flag-checkered',
        title: '未来规划：从工具到平台',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
        isList: true,
        items: [
          { text: '<strong>阶段一：</strong> 完善核心工具体验，启动种子用户内测，打磨交互细节' },
          { text: '<strong>阶段二：</strong> 上线子女端 App，跑通“长辈端免费使用 + 子女端按年付费”的商业闭环' },
          { text: '<strong>阶段三：</strong> 拓展硬件渠道合作，与二手数码回收平台建立“旧机适老改造”预装合作' },
          { text: '<strong>阶段四：</strong> 接入本地适老服务资源，开启 CPS 商业分发平台演进' }
        ]
      }
    ]
  }
];

const ICONS = {
  ppt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/><rect x="8" y="10" width="8" height="6" rx="1"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
  'credit-card': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
  microchip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
  frown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4E6c0-1.1.9-2 2-2h4"/><circle cx="15" cy="9" r="1"/></svg>',
  gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>',
  crown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  handshake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15v5s-4 2-8-2-4-8-4-8 2-4 6-4h2"/><path d="M12 15v5s4 2 8-2 4-8 4-8-2-4-6-4h-2"/><path d="M12 15L8 9l-4 4M12 15l4-6 4 4"/></svg>',
  'map-signs': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22V2"/><path d="M5 9l2-2 2 2"/><path d="M19 13l-2 2-2-2"/><path d="M5 16h14"/><path d="M5 6h14"/></svg>',
  'user-tie': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  'flag-checkered': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>'
};

function getIcon(name) {
  return ICONS[name] || '';
}