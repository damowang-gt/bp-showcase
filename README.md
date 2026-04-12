# BP 网站

创业项目展示平台，基于 GitHub Pages 部署。

## 技术方案

- **纯静态方案**：无需构建，直接部署到 GitHub Pages
- **数据驱动**：所有项目配置在 `config.js` 中统一管理
- **模块化 CSS**：使用 CSS 变量系统，统一设计规范

## 文件结构

```
bp/
├── index.html              # 网站首页
├── config.js                # 项目配置（新增项目只需修改这里）
├── styles.css               # 全局样式
├── main.js                  # 交互逻辑
├── .nojekyll               # GitHub Pages 部署配置
├── README.md               # 项目文档
│
├── 惊喜食光魔法袋.html      # 项目详情页示例
└── project-template.html    # 项目页面模板
```

## 添加新项目

### 步骤 1：在 config.js 中添加项目配置

```javascript
const PROJECTS = [
  {
    id: 'your-project-id',        // 唯一ID，不能重复
    title: '项目名称',
    category: '行业分类',
    year: 2025,
    featured: true,               // true=首页置顶显示
    description: '项目简短描述',
    stats: [
      { label: '指标名称', value: '数值' },
      { label: '指标名称', value: '数值' }
    ],
    page: 'your-project.html',    // 项目详情页文件名
    pageTitle: '项目名称 · 路演',
    subtitle: '项目副标题',
    heroStats: [
      { label: '指标名称', value: '数值' }
    ]
  }
];
```

### 步骤 2：创建项目详情页

复制 `project-template.html` 作为模板，修改以下占位符：

| 占位符 | 说明 |
|--------|------|
| `{PROJECT_TITLE}` | 项目标题 |
| `{PROJECT_CATEGORY}` | 项目分类 |
| `{PROJECT_SUBTITLE}` | 项目副标题 |
| `{PROJECT_STATS_HTML}` | 项目统计数据的HTML |
| `{SLIDES_CONTENT}` | 路演幻灯片内容 |

### 步骤 3：在 main.js 中注册项目URL

编辑 `main.js`，在 `projectUrls` 对象中添加：

```javascript
const projectUrls = {
  'magic-bag': '惊喜食光魔法袋.html',
  'your-project-id': 'your-project.html'
};
```

## 项目页面模板使用说明

项目详情页使用全屏幻灯片设计，支持：

- 键盘上下箭头导航
- 鼠标滚轮切换
- 触摸滑动切换
- 右侧垂直分页点

### 幻灯片结构

```html
<div class="slides-container">
  <div class="slides-track" id="slidesTrack">
    <!-- 每个 slide 是一个幻灯片 -->
    <div class="slide">
      <div class="slide-content">
        <!-- 幻灯片内容 -->
      </div>
    </div>
  </div>
</div>
```

## 设计系统

### 颜色变量

```css
--color-cream: #FAF7F2;       /* 背景色 */
--color-forest: #1B4D3E;       /* 主色-森林绿 */
--color-caramel: #C45D2C;      /* 强调色-焦糖橙 */
--color-sage: #8BA888;         /* 辅助色 */
```

### 字体

- 标题：`Playfair Display`
- 正文：`DM Sans`

## 部署

### GitHub Pages

1. 将代码推送到 GitHub 仓库
2. 进入仓库 Settings → Pages
3. Source 选择 `main` 分支
4. 等待部署完成（约1-2分钟）

### 本地预览

直接用浏览器打开 `index.html` 即可。

## 后续维护

- 修改首页文案：编辑 `index.html`
- 修改网站配置：编辑 `config.js` 中的 `SITE_CONFIG`
- 修改导航链接：编辑 `config.js` 中的 `NAV_LINKS`
- 修改样式：编辑 `styles.css`
- 修改交互逻辑：编辑 `main.js`
