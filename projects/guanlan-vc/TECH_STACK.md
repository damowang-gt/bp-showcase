# 观澜星辰 (Guanlan VC) 技术栈文档

本项目“观澜星辰”为全球首个基于多智能体（Multi-Agent）驱动的 Web3 全自动创投网络的官方落地页与演示系统。项目采用了现代化的前端开发标准与模拟 Web3 交互逻辑，确保兼具优秀的视觉体验和高互动性。

## 🎨 前端界面 (Frontend Interface)

### 1. HTML5 (结构层)
* **语义化标签**: 广泛使用 `<nav>`, `<section>`, `<main>`, `<footer>` 等语义化结构，确保页面对搜索引擎（SEO）与辅助工具（无障碍访问）友好。
* **响应式布局**: 基于 `viewport` 的元标签控制，适配移动端与桌面端屏幕。
* **Bento Grid**: 采用模块化“便当盒”网格布局设计，通过 CSS Grid 实现模块化信息的高效展示。

### 2. CSS3 (表现层)
* **深色科幻主题 (Dark Theme)**: 使用径向渐变 (`radial-gradient`) 和深度科幻配色 (`#0a0f1e`, `#00f2fe`)，配合透明毛玻璃效果 (`backdrop-filter: blur`)。
* **科技网格背景**: 使用纯 CSS 线性渐变 (`linear-gradient`) 动态绘制的 `.bg-mesh` 科技感背景网格，代替静态图片以提高性能。
* **CSS 动画与过渡**: 利用 `transition` 与 `transform` 实现了丝滑的卡片悬浮与按钮反馈；`@keyframes`（如 FontAwesome 的 `fa-pulse` 和 `fa-spin`）呈现了 AI 正在评估时的运行动态。
* **Flexbox & Grid**: 大量应用弹性盒子 (`flex`) 与 CSS 网格 (`grid`) 构建响应式的 Agent 流程与特征模块卡片，确保各个屏幕尺寸下的完美排版。

### 3. JavaScript (交互与逻辑层)
采用原生 Vanilla JS (ES6+) 构建，无需依赖庞大的前端框架，保持极致轻量。
* **模态框系统**: 实现了自定义 Modal (Wallet, Submit BP, Deposit LP)，包含开闭过渡动画与点击外部遮罩关闭逻辑。
* **交互状态管理**: 记录并管理 `walletConnected`, `walletAddress`, `walletBalance` 等模拟全局状态。
* **DOM 动态操作与计时器队列**: 使用 `setTimeout` 异步链式调用，通过 `activateStep` 和 `completeStep` 两个方法动态更改元素的 `class` 和 `innerHTML`，完美模拟了多智能体 (Multi-Agent) 立项、规划、尽调等串行与并行的评估流程。

## 🛠 Web3 & 外部依赖

### 1. Web3 概念集成 (模拟)
目前展示版本通过前端 JS 模拟了链上交互的核心体验：
* **Wallet Connection**: 模拟 MetaMask, WalletConnect 与 Coinbase Wallet 的连接行为。
* **Smart Contract Execution**: 模拟了项目通过 AI 尽调后，系统调用智能合约将 USDC 稳定币拨款至创始人钱包的业务逻辑流。

### 2. 字体与图标库 (Assets)
* **字体库**: `Inter` (Google Fonts)，专门针对数字界面设计的无衬线字体，具有极佳的辨识度与极简风格。
* **图标库**: `FontAwesome 6`，大量使用了实体与品牌 SVG 图标（如以太坊图标、微芯片、钱包），增强了 UI 的直观表达。

## 🚀 后续扩展方向 (Next Steps)
未来从演示系统演进为正式的 DApp 时，计划引入以下技术栈：
* **框架**: 迁移至 `Next.js` (React) 实现更复杂的组件状态管理与路由。
* **Web3 交互**: 集成 `ethers.js` 或 `viem`，并结合 `wagmi` / `Web3Modal` 实现真实的钱包连接与智能合约交互。
* **AI 代理层**: 后端集成 `LangChain` 或 `AutoGen` 框架，连接 OpenAI (GPT-4) 驱动的多智能体协同评估系统。