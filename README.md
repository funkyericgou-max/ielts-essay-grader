# IELTS Essay Grader — 雅思作文智能批阅系统

AI 驱动的雅思写作评分工具，基于 DeepSeek API 实时评分，严格对齐剑桥官方 Band Descriptors。

## 🚀 快速开始

1. 打开 **[funkyericgou-max.github.io/ielts-essay-grader](https://funkyericgou-max.github.io/ielts-essay-grader/)**
2. 点击右上角 **⚙ 设置**，填入你的 [DeepSeek API Key](https://platform.deepseek.com/api_keys)
3. 选择 Task 1（小作文）或 Task 2（大作文）
4. 粘贴题目和作文 → 点击 **开始批改**
5. 查看 4 维度评分 + 逐句批注 + 升级示范 + 巩固练习

> 🔐 API Key 仅存储在浏览器本地，不会上传到任何服务器。

## ✨ 核心功能

| 功能 | 说明 |
|------|------|
| **双任务支持** | Task 1（图表描述）+ Task 2（议论文），自动切换评分标准 |
| **4 维度评分** | TA/CC/LR/GRA，严格对齐雅思官方 Band Descriptors |
| **作文批注** | 原文字句级高亮标注（语法/词汇/逻辑），悬停显示解释 |
| **语法分析** | 可展开的错误分类卡片，每条含原文→修改建议 |
| **逐句升级示范** | AI 挑选最具升级潜力的原句，展示"差在哪、怎么改" |
| **巩固练习** | 根据最短板自动生成改写练习，动手写才能进步 |
| **导出报告** | 一键下载完整 Markdown 批改报告 |
| **Few-Shot 锚定** | 内嵌官方考官判定的标准样文，AI 评分偏离度 ≤ ±0.5 |

## 🛠️ 技术栈

纯前端单文件部署，零后端依赖：

- **HTML + CSS + JavaScript**（单文件，约 1900 行）
- **DeepSeek Chat API**（`deepseek-chat` 模型）
- **GitHub Pages** 托管
- API Key 通过 `localStorage` 本地存储

## 📁 项目结构

```
├── README.md               ← 项目入口说明
├── index.html              ← 主应用（单文件）
├── .gitignore
├── document/               ← 设计文档（架构、评分体系、Prompt Engineering）
│   ├── README.md           ← 文档总纲
│   ├── 01-scoring-system.md
│   ├── 02-ui-design.md
│   ├── 03-technical-architecture.md
│   ├── 04-prompt-engineering.md
│   ├── 05-development-steps.md
│   ├── 06-deployment.md
│   ├── 07-limitations.md
│   └── 08-future-roadmap.md
└── examples/               ← 示例批改报告
    └── IELTS_批改报告_2026-07-20.md
```

## 📖 设计文档

完整的设计文档在 [`document/`](document/) 目录下，建议按以下顺序阅读：

1. [评分体系与量化对齐设计](document/01-scoring-system.md)
2. [UI 与交互设计](document/02-ui-design.md)
3. [技术架构](document/03-technical-architecture.md)
4. [核心 Prompt Engineering 设计](document/04-prompt-engineering.md)
5. [详细开发与构建步骤](document/05-development-steps.md)
6. [GitHub Pages 部署](document/06-deployment.md)
7. [已知局限与风险](document/07-limitations.md)
8. [未来可能的优化方向](document/08-future-roadmap.md)

## ⚠️ 免责声明

本工具提供 **AI 辅助评分**，非官方雅思评分。分数仅供参考学习，实际考试分数可能有所偏差。

## 📄 License

MIT
