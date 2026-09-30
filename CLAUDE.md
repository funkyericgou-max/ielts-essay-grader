# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

IELTS AI Grader — AI 驱动的雅思 60 天学习计划 + 写作 + 口语 + 听力 + 背单词工具。纯前端，通过 DeepSeek Chat API 实时评分，Groq Whisper 免费语音转写，部署在 GitHub Pages。

**v3 已包含**：听力同义替换模块——纯客户端游戏化练习，零 API 调用，115 组高频同义词对 + 陷阱词参考。

**v4 已包含**：背单词模块——1000 个 G类核心词（`vocabulary-data.js`），闪卡浏览 + 间隔重复，双身份（Eric / Sophia）进度独立，零 API 调用。

**v4.1 已包含**：闪卡改版——正面显示 `音标 + 词性 + 英文例句`（音标查 `phonetics-data.js`，美式 IPA），去分类；「不认识」自动翻面看答案；浏览卡遵循间隔重复调度（等级 1-4 按 1/2/4/7 天到期回到浏览卡，等级 5 满级毕业）；键盘快捷键 `←` 不认识 `→` 认识 `空格` 翻面 `↑/↓` 上/下一张。

**v4.2 已包含**：分享学习进展——侧边栏「📤 分享学习进展」生成文字总结（距上次分享时长 + 新增学习/掌握 + 累计数据），一键复制到剪贴板；快照存 `localStorage.vocab_share_progress` 按身份隔离。

**v4.3 已包含**：单词朗读——闪卡正面 🔊 按钮 + 侧边栏「自动朗读」开关，用浏览器内置 TTS（`speechSynthesis`）零下载朗读单词。

**v5 已包含**：口语三场景拆分——口语工作区顶部可切换 **Part 1（面试问答）/ Part 2（Cue Card 独白，行为不变）/ Part 3（抽象讨论）**。Part 1/3 用「一题一录」答题队列：选一组题（`speaking-qa-topics.js` 题库）→ 逐题短录音或文字作答 → 全部答完**一次批量** Groq 转写 + **一次** DeepSeek 综合评分（合并 Q/A 转写，FC/LR/GRA/P 给整场一次综合分）。评分 System/User Prompt、`task_type`、结果概览标签与可见 Tab（P1/P3 隐藏「升级示范」）均按 Part 动态配置（`SPEAKING_PART_CONFIG`）；录音上限按 Part（P1 60s / P2 300s / P3 120s）。

**v6 已包含**：60 天学习计划——首页由「四张全屏入口大卡片」改为**左功能入口栏 + 右 60 天计划**两栏。左侧收拢写作/口语/听力/背单词四个入口 + 学习身份切换；右侧是 60 天计划：总览（三阶段可折叠 + 每天一条横条）⇄ 单日详情两层，每天可手填任意条任务（内容 + 时长 + 完成勾选，可增删上下移），每天单独设目标时长（默认 6h），当前天自动推进且可手动钉住。进度存 `localStorage.study_plan_progress`（按 Eric/Sophia 身份隔离，与背单词共用身份），零 API。首次进入某身份时自动铺好 `study-plan-preset.js` 里的底稿（当前只开放 **Sophia** = A类 · 四科双轨轮换 · Day A 听力+写作 / Day B 阅读+口语 · 60 天 232 条；**Eric 的 G类 计划已暂时收起**，按钮不再出现、已存的 eric 计划每次启动被清空，底稿留在不加载的 `study-plan-preset-eric.js` 里，恢复只需改 `PLAN_IDENTITIES` 一行），无按钮无确认框；`plan.seeded` 记的是已铺过哪份预设（key 形如 `'sophia@1'`，不是 boolean——早先它没有预设时会误写 `true`，导致预设补上后永远铺不进去，已修），清空后不会自己长回来。身份**不持久化**：每次打开都会落到 `PLAN_IDENTITIES` 的第一个身份（当前只有 Sophia，所以打开即 Sophia 的计划，身份门已移除——只剩一个身份时入口栏显示静态标识不摆按钮）。曾经做过的「计划页身份密码」已移除（纯前端挡不住开发者工具，为这点价值承担锁死风险不划算）。首次访问的 API Key 引导弹窗也已移除，改为用户自己点 ⚙ 设置。**本轮不含 AI 阶段复盘**（纯静态无后端，需人工导入结果，形态待定）。

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

没有构建工具、lint、测试套件。零依赖纯前端项目：1 个逻辑文件（`index.html`）+ 6 个数据文件（`vocabulary-data.js`、`phonetics-data.js`、`speaking-topics.js`、`speaking-qa-topics.js`、`simon-lessons.js`、`study-plan-preset.js`），其余数据（听力同义词对）仍以 JS 常量内联在 `index.html` 内。`simon-lessons.js` 为 Simon 口语课示范学习材料库（v2.9 起已接入口语工作区「📖 Simon 示范任务」）；`speaking-qa-topics.js` 为口语 Part 1 / Part 3 话题组题库（v5 起接入三场景答题队列）；`study-plan-preset.js` 为 60 天计划预设计划数据（v6 起由 `spSeedPresetIfNeeded()` 在选身份时自动铺设，按身份提供，非按钮导入）。另有一个**不被加载**的 `study-plan-preset-eric.js`：Eric 那份 420 条 G类 底稿的存档处，恢复时把它贴回主文件即可。

## Architecture

### 应用状态机

```
首页 = 60 天计划页（左入口栏 + 右计划）
  ├──→ Writing 工作区
  ├──→ Speaking 工作区
  ├──→ Listening 工作区
  └──→ Vocabulary 工作区
```

状态是纯全局变量 `appMode`（**没有 `AppState` 对象**）：`'home'` | `'writing'` | `'speaking'` | `'listening'` | `'vocabulary'`。`enterMode(mode)` 给 `#homePage` 加 `.hidden` 并给目标工作区加 `.active`（`.workspace.active{display:contents}`）；`goHome()` 反向操作并顺带重置计划视图、定位到当前天。

### 数据流 — 写作

```
用户输入 (Task 类型 + 题目 + 作文)
  → 前端本地统计 (词数/句数/平均句长/TTR)
  → JS 动态组装 System Prompt + User Prompt
  → fetch() 调用 DeepSeek Chat API (temperature=0.3)
  → 正则去噪 + JSON.parse + Try-Catch 防御解析
  → innerHTML 渲染 annotated_essay + 填充 7 个 Tab + 侧边栏
```

### 数据流 — 口语（Part 2 单段 / Part 1/3 多题两态）

```
入口选择 Part (P1问答 | P2独白 | P3讨论) → 按 Part 显隐 题面输入/答题队列
        │
        ├─ P2 单段: 输入 Cue Card → 录一段 1-2 min
        └─ P1/P3 队列: 📚题库选话题组(speaking-qa-topics.js) → 逐题「一题一录」
              每停止一题写入 item{audioBlob,url|manualText,answered} → 全答完
        │
        ▼
   (P2) 单段 analyzeAudio + Groq Whisper
   (P1/P3) 逐题 analyzeAudio + Groq Whisper → 合并 Q/A 转写 + aggregateSessionMeta
        │
        ▼
     前端文本分析: 填充词 / 自我纠正 / TTR / 平均句长（答案拼接文本）
        │
        ▼
     buildSpeakingSystemPrompt(part) / UserPrompt(part) —— task_type/时长期望/
     量化阈值/是否升级范文 全按 SPEAKING_PART_CONFIG[part] 注入
        │
        ▼
     DeepSeek Chat API (temperature=0.3) 一次评分 → parseResponse
        │
        ▼
     前端渲染: 概览标签按 Part + 可见 Tab(applySpeakingTabs) + 转写批注 + 侧栏
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

### 数据流 — 背单词（纯客户端，零 API）

```
进入背单词工作区 → 选择身份 (Eric / Sophia)
  ├─→ Tab1 闪卡浏览: 搜索 + 分类筛选 → 翻卡看释义/例句 → 认识/不认识
  └─→ Tab2 间隔重复: 到期词 + 每日新词(20) → 三档评分(不认识/模糊/认识)
          │
          ▼
  写入 localStorage.vocab_progress (按身份隔离, {level, next})
          │
          ▼
  侧边栏实时更新: 已掌握 / 学习中 / 今日待复习 / 分类掌握度
```

### 数据流 — 60 天学习计划（纯客户端，零 API）

```
进入首页 → 直接落到 PLAN_IDENTITIES 第一个身份（当前只有 Sophia），读 localStorage.study_plan_progress
        │
        ├─→ 总览: 按 phases 分三块可折叠模块（1–20 / 21–45 / 46–60），每块一列横条
        │        每条 = Day N + 学科 tag + 进度条 + 已完成 a/b；默认只展开当前天所在阶段
        │        当前天 = manualDay ?? 第一个还有未勾选任务的天
        └─→ 点某天 → 单日详情: 目标时长编辑器 + 任务清单
                 增/删/上下移（按稳定 id，不是下标）/ 勾选 / 改文本与时长
        │
        ▼
  写回 localStorage.study_plan_progress（结构改动立即存，文本/时长编辑防抖 400ms）
```

### 关键模块位置（`index.html` 内 + `vocabulary-data.js`）

| 模块 | 大致区域 | 说明 |
|------|---------|------|
| CSS 变量与主题 | `:root` 块 | 颜色、字体、阴影、Band 分数色阶 |
| 首页入口栏 | `#homePage` + `.home-rail` | 左栏：Writing / Speaking / Listening / Vocabulary 四个入口 + 学习身份切换。身份按钮由 `PLAN_IDENTITIES` 驱动（当前只有 Sophia） |
| 60 天学习计划 | `#homePlan` 区 + `.plan-*` | 总览三阶段折叠（`#planOverview`，`phases` 数据驱动）⇄ 单日详情（`#planDetailWrap`）；每天一条横条 = Day + tag + 进度条 + 完成数；任务用稳定 id 标识；进度 `localStorage.study_plan_progress` 按身份隔离 |
| 计划视图路由 | `renderStudyPlan()` / `openPlanDay()` / `backToPlanOverview()` | 总览 / 详情两态切换（身份门已移除，只剩一个身份）；`spCurrentDay()` 算当前天（manualDay 优先） |
| 阶段折叠 | `spTogglePhase()` / `spPhasesFor()` / `spPhaseStats()` | 总览分块；`planOpenPhases`（内存，不落盘）记展开集合，null = 只开当前天所在阶段 |
| 计划任务操作 | `spAddTask()` / `spDeleteTask()` / `spMoveTask()` / `spToggleTask()` | 全部按任务 id 定位；改值不重建 DOM，结构改动重建后按元素 id 恢复焦点 |
| 计划身份 | `planIdentity`（仅内存） | 刻意不持久化：`initStudyPlan()` 不读任何存储 → 每次打开都重新选；入口栏分段切换同会话内换身份 |
| 预设计划 | `study-plan-preset.js` + `spSeedPresetIfNeeded()` | `STUDY_PLAN_PRESETS`（按身份）；选身份时自动铺，`plan.seeded` 保证幂等；用户已有内容绝不覆盖。当前只有 `sophia` = A类四科双轨（Day A 听力+写作 / Day B 阅读+口语，奇偶交替；P3 模考日落在偶数天，Day 46 起，Day 60 封卷）；`eric` 的 G类底稿移到了不加载的 `study-plan-preset-eric.js` |
| 写作工作区 | `#writingWorkspace` | 现有全部 UI（保持不变） |
| 写作输入面板 | `#inputPanel` | Task Toggle + 题目/作文 textarea + 字数警告 |
| 写作结果视图 | `.grading-view` + `.tab` | 7 个 Tab |
| 语音工作区 | `#speakingWorkspace` | Cue Card + 录音区 + Canvas 波形 + 结果视图 |
| 口语题库 | `speaking-topics.js` + `speaking-qa-topics.js` + `#speakingTopicModal` | P2：2026.9-12 新题 Cue Card，分类卡片点选填入 textarea；P1/P3：话题组卡片点选启动答题队列 |
| Simon 示范任务 | `simon-lessons.js` + `#simonTaskModal` | 按场景分流：P1 问答示范(lesson 2, examPart=p1)展开示例可「🎤 试答这题」→ 走 QA 单题录音/文字评分；P2 独白示范(lesson 3-7) → 填此题/同类真题 → 录音评分。进度 `localStorage.simon_lesson_progress`（done + 按场景 pos） |
| 录音管理 | `AudioRecorder` 类 | start/pause/resume/stop/playback |
| 音频分析 | `AudioAnalyzer` 类 | WPM/停顿检测/音量变化 |
| 波形绘制 | `WaveformRenderer` 类 | Canvas 实时波形 |
| STT 调用 | `callGroqWhisper()` | FormData 上传音频 → 转写文本 |
| API 调用 | `callAPI()` | 写作 + 口语共用，fetch → 正则去噪 → JSON.parse → fallback |
| Prompt 组装 | `buildSystemPrompt()` / `buildSpeakingSystemPrompt(part)` | 动态注入 Band Descriptors + 量化指标；口语按 Part 注入 task_type/时长期望/阈值 |
| 渲染 | `renderResults()` / `renderSpeakingResult()` | 填充侧边栏 + 各 Tab（口语 `applySpeakingTabs(part)` 控制可见 Tab） |
| 口语三场景 | `#spPartToggle` + `switchSpeakingPart()` / `SPEAKING_PART_CONFIG` | 顶部 P1/P2/P3 分段切换，`speakingPart` 全局状态驱动输入形态/录音上限/Prompt |
| P1/P3 答题队列 | `startSpeakingQASession()` / `renderQaSession()` / `finishSpeakingQASession()` | 逐题一题一录（音频 `item.audioBlob` 或文字 `item.manualText`）→ `runSpeakingQASessionGrading()` 批量转写+一次评分 |
| P1/P3 题库 | `speaking-qa-topics.js` | `SPEAKING_PART1_TOPICS`（6 话题组）/ `SPEAKING_PART3_TOPICS`（6 主题组），各 4 题/组 |
| 题库弹窗 | `#speakingTopicModal` + `openSpeakingTopicBank(part)` | p2 分类 Cue Card 网格；p1/p3 话题组卡片，点选后启动答题队列 |
| 设置弹窗 | `#apiKeyModal` | DeepSeek Key + Groq Key |
| 听力工作区 | `#listeningWorkspace` | 大纲展示 + 游戏模式，纯客户端，零 API |
| 同义词数据 | `LISTENING_CATEGORIES` / `LISTENING_TRAP_GROUPS` | 115 组同义词对嵌入为 JS 常量 |
| 游戏引擎 | `startListeningGame()` → `submitListeningRound()` | 10 轮随机匹配，tile 点选，正确/误选/漏选着色 |
| 背单词工作区 | `#vocabularyWorkspace` | 身份选择 + 单词卡 + 间隔重复双 Tab，键盘快捷键（←/→/空格/↑/↓），纯客户端，零 API |
| 词汇数据 | `vocabulary-data.js` + `phonetics-data.js` | `VOCAB_CATEGORIES` / `VOCAB_ALL_WORDS`（1000 词，10 分类 × 100）+ `VOCAB_PHONETICS`（美式音标） |
| 身份与进度 | `vocab_progress` (localStorage) | 按身份隔离 `{ eric, sophia }`，每词 `{ level: 0..5, next }` |
| 间隔重复引擎 | `applyVocabRating()` → `startVocabReview()` | 三档评分调度，到期词优先 + 每日新词 20 个 |

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

13 个设计文档在 [DOCS/](DOCS/) 下，覆盖评分体系、UI 设计、技术架构、Prompt Engineering、开发步骤、部署、局限性、未来路线、口语整体设计、听力同义替换设计、背单词设计和 60 天学习计划设计。**修改任何功能前，先读对应设计文档。**

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
- **不主动弹引导窗**：需要配置时由用户自己点右上角 `⚙ 设置`；仅在提交批改而 Key 缺失时按需提示（首次访问的欢迎弹窗已移除）

## Project Constraints

- **评分精度目标**：AI 评分偏离度 ≤ ±0.5（通过 Few-Shot 锚定 + 量化约束 + temperature=0.3 控制）
- **口语发音评分**：AI 间接推断，非真实音频分析，需向用户标注
- **Task 1 / Task 2 差异**：两套完全不同的 Band Descriptors 量表和 TA 侧重点
- **部署约束**：纯静态 GitHub Pages，无后端，API Key 不可写入源码
- **代码量**：`index.html` 逻辑约 7000 行 + `vocabulary-data.js` 数据约 1000 词，按模块注释分隔
- **已知风险**：AI 评分偏差、同篇多次评分不一致（temperature=0.3 缓解）、JSON 截断（防御解析兜底）、STT 转写误差、发音间接推断不准
- **改 CSS 时的顺序陷阱**：同权重的规则靠"谁在后面谁赢"，所以**基础规则必须写在对应的 `@media` 之前**。曾经 `.sidebar{position:sticky}` 被放在 `@media(max-width:1024px){.sidebar{position:fixed}}` 之后，把移动端的抽屉压回了 sticky —— 侧边栏占满一整行把正文挤到屏幕外，四个工作区在手机上全空白，而且几乎看不出来（页面只是"空"）。**新增响应式规则时，优先紧跟在基础规则后面写覆盖，或统一放在 `<style>` 末尾**。内联 `style` 同理：它会压过一切外部 CSS，需要响应式变化的样式别写在内联里。
