# IELTS AI Grader — 雅思智能评分与练习工具

AI 驱动的雅思备考工具，涵盖 60 天学习计划、写作批改、口语评分、听力同义替换练习和背单词。评分基于 DeepSeek API + Groq Whisper，部署在 GitHub Pages。

> 🔗 **在线地址**: [funkyericgou-max.github.io/ielts-essay-grader](https://funkyericgou-max.github.io/ielts-essay-grader/)
> 📦 **仓库地址**: [github.com/funkyericgou-max/ielts-essay-grader](https://github.com/funkyericgou-max/ielts-essay-grader)

## 🚀 快速开始

1. 打开 **[funkyericgou-max.github.io/ielts-essay-grader](https://funkyericgou-max.github.io/ielts-essay-grader/)**
2. 首页右侧就是 **📅 60 天学习计划**（先选身份 Sophia），左侧栏是各功能入口
3. 选择模式：✏️ Writing 写作批改 / 🎙️ Speaking 口语批改 / 👂 Listening 听力同义替换 / 📚 Vocabulary 背单词
4. Writing/Speaking：点击右上角 **⚙ 设置**，填入对应的 API Key
5. 学习计划 / Listening / Vocabulary：无需任何 Key，即开即用

> 🔐 API Key 仅存储在浏览器本地，不会上传到任何服务器。

## ✨ 核心功能

| 功能 | 说明 |
|------|------|
| **60 天学习计划** | 逐日手填任务（内容 + 时长 + 完成勾选），每天可单独设目标时长，自动推进当前天，按 Eric/Sophia 身份隔离，零 API；每次进入选一次身份，首次自动铺好预设底稿（Eric = G类·冲 6.5 四科齐全；Sophia = A类四科双轨轮换） |
| **双任务支持** | Task 1（图表描述）+ Task 2（议论文），自动切换评分标准 |
| **4 维度评分** | TA/CC/LR/GRA，严格对齐雅思官方 Band Descriptors |
| **作文批注** | 原文字句级高亮标注（语法/词汇/逻辑），悬停显示解释 |
| **语法分析** | 可展开的错误分类卡片，每条含原文→修改建议 |
| **逐句升级示范** | AI 挑选最具升级潜力的原句，展示"差在哪、怎么改" |
| **巩固练习** | 根据最短板自动生成改写练习，动手写才能进步 |
| **口语评分** | 录音 → STT 转写 → FC/LR/GRA/P 四维度 AI 评分 + 流利度图表 |
| **听力练习** | 115 组高频同义替换游戏化练习，8 大场景，错误追踪 |
| **背单词** | 1000 个 G类核心词，闪卡浏览 + 间隔重复，按身份隔离，零 API |
| **导出报告** | 一键下载完整 Markdown 批改/练习报告 |
| **Few-Shot 锚定** | 内嵌官方考官判定的标准样文，AI 评分偏离度 ≤ ±0.5 |

## 🛠️ 技术栈

纯前端单文件部署，零后端依赖：

- **HTML + CSS + JavaScript**（单文件，约 7000 行 + 6 个数据文件）
- **DeepSeek Chat API**（`deepseek-chat` 模型）
- **GitHub Pages** 托管
- API Key 通过 `localStorage` 本地存储

## 📁 项目结构

```
├── README.md               ← 项目入口说明
├── index.html              ← 主应用（单文件逻辑）
├── vocabulary-data.js      ← 1000 个核心词数据
├── phonetics-data.js       ← 美式音标数据
├── speaking-topics.js      ← 口语 Part 2 Cue Card 题库
├── speaking-qa-topics.js   ← 口语 Part 1 / Part 3 话题组题库
├── simon-lessons.js        ← Simon 口语课示范材料库
├── study-plan-preset.js    ← 60 天预设计划数据（sophia = A类·四科双轨轮换）
├── study-plan-preset-eric.js ← 【不加载】Eric 的 G类 底稿存档（收起时保留，恢复用）
├── .gitignore
├── DOCS/               ← 设计文档（架构、评分体系、Prompt Engineering）
│   ├── README.md           ← 文档总纲
│   ├── 评分体系与量化对齐设计.md
│   ├── UI与交互设计.md
│   ├── 技术架构.md
│   ├── Prompt工程与设计.md
│   ├── 开发与构建步骤.md
│   ├── 部署说明.md
│   ├── 已知局限与风险.md
│   ├── 未来优化方向.md
│   ├── 口语功能整体设计.md
│   ├── 听力同义替换设计.md
│   └── 学习计划设计.md
└── examples/               ← 示例批改报告
    └── IELTS_批改报告_2026-07-20.md
```

## 📖 设计文档

完整的设计文档在 [`DOCS/`](DOCS/) 目录下，建议按以下顺序阅读：

1. [评分体系与量化对齐设计](DOCS/评分体系与量化对齐设计.md)
2. [UI 与交互设计](DOCS/UI与交互设计.md)
3. [技术架构](DOCS/技术架构.md)
4. [核心 Prompt Engineering 设计](DOCS/Prompt工程与设计.md)
5. [详细开发与构建步骤](DOCS/开发与构建步骤.md)
6. [GitHub Pages 部署](DOCS/部署说明.md)
7. [已知局限与风险](DOCS/已知局限与风险.md)
8. [未来可能的优化方向](DOCS/未来优化方向.md)
9. [口语功能整体设计](DOCS/口语功能整体设计.md)
10. [听力同义替换设计](DOCS/听力同义替换设计.md)
11. [学习计划设计](DOCS/学习计划设计.md)

## ⚠️ 免责声明

本工具提供 **AI 辅助评分**，非官方雅思评分。分数仅供参考学习，实际考试分数可能有所偏差。

## 📄 License

MIT
