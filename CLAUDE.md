# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

IELTS AI Grader — AI 驱动的雅思写作 + 口语 + 听力三模式智能评分与练习工具。纯前端单文件（`index.html`），通过 DeepSeek Chat API 实时评分，Groq Whisper 免费语音转写，部署在 GitHub Pages。

**v3 已包含**：听力同义替换模块——纯客户端游戏化练习，零 API 调用，115 组高频同义词对 + 陷阱词参考。

## Commands

```bash
# 本地开发 — 直接打开或启动静态服务
open index.html
# 或
python3 -m http.server 8080

# 部署 — 推送到 main 分支即自动部署
git push origin main
# GitHub Pages: https://funkyericgou-max.github.io/ielts-essay-grader/
# 仓库: https://github.com/funkyericgou-max/ielts-essay-grader
```

没有构建工具、lint、测试套件。这是一个零依赖的单文件纯前端项目。

## Architecture

### 应用状态机

```
首页 (Home) ──→ Writing 工作区
           ├──→ Speaking 工作区
           └──→ Listening 工作区
```

`AppState.mode`: `'home'` | `'writing'` | `'speaking'` | `'listening'`

### 数据流 — 写作

```
用户输入 (Task 类型 + 题目 + 作文)
  → 前端本地统计 (词数/句数/平均句长/TTR)
  → JS 动态组装 System Prompt + User Prompt
  → fetch() 调用 DeepSeek Chat API (temperature=0.3)
  → 正则去噪 + JSON.parse + Try-Catch 防御解析
  → innerHTML 渲染 annotated_essay + 填充 7 个 Tab + 侧边栏
```

### 数据流 — 口语

```
用户录音 (MediaRecorder API, WebM Opus)
  ├─→ 前端音频分析 (Web Audio API): WPM / 停顿 / 音量变化
  └─→ Groq Whisper API (免费 STT): audioBlob → 转写文本
          │
          ▼
     前端文本分析: 填充词 / 自我纠正 / TTR / 平均句长
          │
          ▼
     JS 动态组装口语 System Prompt + User Prompt (含音频元数据)
          │
          ▼
     DeepSeek Chat API (temperature=0.3)
          │
          ▼
     前端渲染: 侧边栏(FC/LR/GRA/P) + 6 Tab (含流利度可视化图表)
```

### 数据流 — 听力（纯客户端，零 API）

```
用户选择分类范围 → 随机抽取 10 组同义词对
  → 随机选 target 词 (题干或音频侧)
  → 生成 tile grid (正确答案 + 干扰项，含中文释义)
  → 用户点选所有同义词 → 提交判定
  → 正确(绿) / 误选(红) / 漏选(灰) 着色反馈
  → 侧边栏实时更新进度 / 正确率 / 连对 / 分类掌握度
  → 10 轮结束后展示完整结果 + 错误回顾
```

### 关键模块位置（均在 `index.html` 内）

| 模块 | 大致区域 | 说明 |
|------|---------|------|
| CSS 变量与主题 | `:root` 块 | 颜色、字体、阴影、Band 分数色阶 |
| 首页入口 | `#homePage` | Writing / Speaking / Listening 三张入口卡片 |
| 写作工作区 | `#writingWorkspace` | 现有全部 UI（保持不变） |
| 写作输入面板 | `#inputPanel` | Task Toggle + 题目/作文 textarea + 字数警告 |
| 写作结果视图 | `.grading-view` + `.tab` | 7 个 Tab |
| 语音工作区 | `#speakingWorkspace` | Cue Card + 录音区 + Canvas 波形 + 结果视图 |
| 录音管理 | `AudioRecorder` 类 | start/pause/resume/stop/playback |
| 音频分析 | `AudioAnalyzer` 类 | WPM/停顿检测/音量变化 |
| 波形绘制 | `WaveformRenderer` 类 | Canvas 实时波形 |
| STT 调用 | `callGroqWhisper()` | FormData 上传音频 → 转写文本 |
| API 调用 | `callDeepSeekAPI()` | 写作 + 口语共用，fetch → 正则去噪 → JSON.parse → fallback |
| Prompt 组装 | `buildSystemPrompt()` / `buildSpeakingSystemPrompt()` | 动态注入 Band Descriptors + 量化指标 |
| 渲染 | `renderResults()` / `renderSpeakingResults()` | 填充侧边栏 + 各 Tab |
| 设置弹窗 | `#apiKeyModal` | DeepSeek Key + Groq Key |
| 听力工作区 | `#listeningWorkspace` | 大纲展示 + 游戏模式，纯客户端，零 API |
| 同义词数据 | `LISTENING_CATEGORIES` / `LISTENING_TRAP_GROUPS` | 115 组同义词对嵌入为 JS 常量 |
| 游戏引擎 | `startListeningGame()` → `submitListeningRound()` | 10 轮随机匹配，tile 点选，正确/误选/漏选着色 |

### AI 标注的 CSS 类体系

#### 写作标注（4 种）

- `.ielts-good` — 优秀词汇/句型（绿色下划线）
- `.ielts-grammar` — 语法/时态错误（橙色下划线）
- `.ielts-vocab` — 词汇误用/中式英语（紫色下划线）
- `.ielts-suggest` — 逻辑推进不顺（蓝色下划线）

#### 口语标注（2 种）

- `.ielts-fluency` — 流利度问题（填充词/重复/自我纠正）（黄色下划线）
- `.ielts-pronounce` — 可能的发音问题（粉色下划线）

标签属性**必须使用单引号**（防止破坏 JSON 结构）：`<span class='ielts-grammar' data-comment='主谓不一致' data-suggest='has'>have</span>`。CSS 通过 `::after` 伪元素 + `attr(data-comment)` 实现悬停显示提示。

## Key Design Decisions

### 文档优先的开发流程

```
DOCS/*.md (设计) → review → index.html (实现) → examples/ (验证)
```

11 个设计文档在 [DOCS/](DOCS/) 下，覆盖评分体系、UI 设计、技术架构、Prompt Engineering、开发步骤、部署、局限性、未来路线、口语整体设计和听力同义替换设计。**修改任何功能前，先读对应设计文档。**

### CoT 三步推理法（Prompt 核心）

写作和口语共用同一推理框架。System Prompt 要求 AI 对每个维度执行：① 定档（从 Band 9 向下找最高满足档）→ ② 微调（决定是否 ±0.5）→ ③ 举证（摘录原文硬证据）。JSON 字段顺序也强制执行此推理链（先 `evaluation_justification`，最后 `overall`），以消除幻觉。

### 前端量化约束

**写作**：词数、句子数、平均句长、TTR 作为硬约束传入 User Prompt。Task 1 < 150 词 / Task 2 < 250 词 → TA ≤ 5.0；平均句长 < 12 → GRA ≤ 6.0；TTR < 0.45 → LR < 7.0。

**口语**：WPM、停顿次数/占比、填充词占比、自我纠正次数、音量变化方差 作为硬约束传入 User Prompt。WPM < 100 → FC ≤ 6.0；停顿占比 > 10% → FC ≤ 5.5；填充词占比 > 5% → FC 上限 -0.5。

### 防御性 JSON 解析

```javascript
// 三步防御：正则去噪 → JSON.parse → Fallback textarea
const cleaned = raw.replace(/^```json\s*/i, '').replace(/```$/, '').trim();
try { return JSON.parse(cleaned); } catch (e) { /* 渲染原始文本到 textarea */ }
```

### 口语评分独有设计决策

- **发音评分是间接推断**：纯文本模型无法直接"听"音频，前端提取音量变化等元数据 + AI 综合推断。P 维度 analysis 中强制标注"AI 推断，仅供参考"。
- **Groq Whisper 选型理由**：无限免费、50+ 语言、LPU 加速、与 OpenAI Whisper API 兼容（可无缝切换）。
- **双 Key 管理**：DeepSeek Key（评分）+ Groq Key（STT），在同一设置弹窗独立管理。Groq Key 缺失仅拦截口语模式，写作不受影响。

## API Key 管理

| Key | 用途 | 存储位置 | 获取地址 |
|-----|------|---------|---------|
| `deepseek_api_key` | 写作 + 口语评分 | `localStorage` | [platform.deepseek.com](https://platform.deepseek.com) |
| `groq_api_key` | 语音转文字 (STT) | `localStorage` | [console.groq.com](https://console.groq.com)（免费注册） |

- **API Key 不会上传到 GitHub**（`.gitignore` 已排除 `key.txt`）
- **首次访问时**弹出友好的引导窗口说明 Key 用途，用户可选择「暂不设置」

## Project Constraints

- **评分精度目标**：AI 评分偏离度 ≤ ±0.5（通过 Few-Shot 锚定 + 量化约束 + temperature=0.3 控制）
- **口语发音评分**：AI 间接推断，非真实音频分析，需向用户标注
- **Task 1 / Task 2 差异**：两套完全不同的 Band Descriptors 量表和 TA 侧重点
- **部署约束**：纯静态 GitHub Pages，无后端，API Key 不可写入源码
- **代码量**：单文件约 4300 行，按模块注释分隔
- **已知风险**：AI 评分偏差、同篇多次评分不一致（temperature=0.3 缓解）、JSON 截断（防御解析兜底）、STT 转写误差、发音间接推断不准
