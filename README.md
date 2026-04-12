# BP 网站

创业项目展示平台，基于 GitHub Pages 部署。

## 技术方案

- **纯静态方案**：无需构建，直接部署到 GitHub Pages
- **数据驱动**：所有项目配置在对应的 `slides.js` 中统一管理
- **模块化架构**：HTML、CSS、JS、数据分离，便于维护和扩展

## 文件结构

```
bp/
├── index.html              # 网站首页
├── config.js               # 首页项目配置
├── styles.css              # 全局样式（Bento Grid 设计系统）
├── main.js                 # 首页交互逻辑
│
├── 项目详情页/
│   ├── 惊喜食光魔法袋.html   # 项目详情页
│   ├── project.css         # 项目详情页样式
│   ├── project.js          # 项目详情页交互
│   └── slides.js           # 项目路演幻灯片数据
│
├── .nojekyll               # GitHub Pages 部署配置
├── README.md               # 项目文档
└── project-template.html    # 项目页面模板
```

## 添加新项目

### 步骤 1：创建项目详情文件

复制 `惊喜食光魔法袋.html` 所在的文件夹结构，创建：
- `your-project.html` — 项目详情页HTML
- `your-project.css` — 项目样式（可复用 project.css）
- `your-project.js` — 项目交互逻辑（可复用 project.js）
- `your-slides.js` — 项目路演数据

### 步骤 2：配置路演数据

在 `your-slides.js` 中定义：

```javascript
const PROJECT_DATA = {
  id: 'your-project',
  title: '项目名称',
  subtitle: '项目副标题',
  // ...其他配置
};

const SLIDES = [
  {
    id: 'slide-1',
    tag: '幻灯片标签',
    title: '幻灯片标题',
    type: 'two-col', // two-col, three-col, four-col, timeline, team
    cards: [
      {
        icon: 'chart',
        title: '卡片标题',
        content: '卡片内容',
        stat: { value: '30%', label: '增长率' }
      }
    ]
  }
];
```

### 步骤 3：在首页添加项目入口

编辑 `config.js` 中的 `PROJECTS` 数组：

```javascript
const PROJECTS = [
  // 现有项目...
  {
    id: 'your-project',
    title: '你的项目',
    category: '行业分类',
    description: '项目简述',
    stats: [
      { label: '指标', value: '数值' }
    ],
    page: 'your-project.html',
    gradient: 'linear-gradient(135deg, #颜色1 0%, #颜色2 100%)'
  }
];
```

## 项目详情页结构

每个幻灯片支持多种布局类型：

| 类型 | 说明 | 适用场景 |
|------|------|----------|
| `two-col` | 2列Bento网格 | 双栏对比、问题-解决方案 |
| `three-col` | 3列Bento网格 | 三方价值、三大亮点 |
| `four-col` | 4列Bento网格 | 四个策略、四个步骤 |
| `timeline` | 时间线布局 | 路线图、发展阶段 |
| `team` | 团队展示布局 | 团队成员、愿景使命 |

## 设计系统

### 全局样式变量 (styles.css)

```css
--bg-main: #F5F5F7;       /* 背景色 */
--bg-card: #FFFFFF;        /* 卡片背景 */
--text-main: #1D1D1F;      /* 主文字 */
--text-secondary: #86868B; /* 次要文字 */
--text-inverse: #FFFFFF;   /* 反色文字 */

--radius-sm: 16px;         /* 圆角 */
--radius-md: 24px;
--radius-lg: 32px;
--radius-xl: 40px;

--shadow-bento: 0 4px 24px rgba(0, 0, 0, 0.04);
--shadow-hover: 0 12px 32px rgba(0, 0, 0, 0.08);
```

## 部署

### GitHub Pages

1. 将代码推送到 GitHub 仓库
2. 进入仓库 Settings → Pages
3. Source 选择 `main` 分支
4. 等待部署完成（约1-2分钟）

### 本地预览

```bash
cd /path/to/bp
python3 -m http.server 8080
# 访问 http://localhost:8080
```
