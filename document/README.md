# 设计文档总纲

> IELTS Essay Grader — AI 驱动的雅思写作智能评分系统

## 项目目标

将静态 IELTS 作文评分 UI 原型，改造成调用 DeepSeek API 进行雅思作文实时评分的可用工具。

**核心挑战**：让 AI 评分尽可能接近雅思官方标准（±0.5 分偏差）。

## 核心优化策略

| # | 策略 | 说明 |
|---|------|------|
| 1 | **多任务支持** | UI Toggle 切换，完美支持 Task 1（小作文）与 Task 2（大作文）两套评分标准 |
| 2 | **Chain-of-Thought (CoT) 强制推理** | JSON 输出顺序设计为"先分析推理 → 再输出证据 → 最后给出分数"，消除幻觉 |
| 3 | **全文标签包裹法** | AI 直接返回带 HTML 安全标签的完整作文，前端 `innerHTML` 渲染，零高亮错位 |
| 4 | **Few-Shot Anchoring 锚定** | System Prompt 内嵌 4 篇官方判定的标准样文（Task 1/2 各 Band 5/8），框定评分严厉度 |
| 5 | **强制量化核对清单** | GRA/LR/TA 各维度必须逐项回答定量问题（如无错句占比、TTR、Overview 是否存在），AI 才能赋分 |
| 6 | **防守性编程** | Try-Catch + 正则去噪 + AbortController 超时 + Fallback textarea 兜底 |
| 7 | **教练属性** | 不只是判官，还提供逐句升级示范 + 刻意练习任务 + 白话翻译去术语化 |
| 8 | **单文件部署** | GitHub Pages，无后端，API Key 仅存 localStorage，零泄露 |

## 文档索引

按开发阅读顺序排列：

| 编号 | 文档 | 内容 | 状态 |
|------|------|------|------|
| 01 | [评分体系与量化对齐设计](01-scoring-system.md) | 官方 4 维度评分标准、Task 1/Task 2 差异、前端本地量化约束条件 | ✅ |
| 02 | [UI 与交互设计](02-ui-design.md) | 布局变更、Toggle 切换、Tab 说明、Loading 体验 | ✅ |
| 03 | [技术架构](03-technical-architecture.md) | 整体架构流程图、技术选型、API 配置 | ✅ |
| 04 | [核心 Prompt Engineering 设计](04-prompt-engineering.md) | System Prompt 动态生成框架、User Prompt 模板 | ✅ |
| 05 | [详细开发与构建步骤](05-development-steps.md) | 5 个开发步骤：输入面板 → Prompt 组装 → 响应解析 → 渲染 → 交互完善 | ✅ |
| 06 | [GitHub Pages 部署](06-deployment.md) | 部署方式、安全注意事项、使用流程 | ✅ |
| 07 | [已知局限与风险](07-limitations.md) | 风险项及其应对策略 | ✅ |
| 08 | [未来可能的优化方向](08-future-roadmap.md) | Few-Shot 锚定、多阶段 Pipeline、缓存方案 | ✅ |

## 开发流程建议

```
document/*.md（设计文档）→ review → index.html（编码实现）→ examples/（验证输出）
```

先写文档再写代码。文档是便宜的（改几行字 vs 改几百行代码），设计漏洞在文档阶段发现成本最低。

## 关键术语对照

| 缩写 | 全称 | 中文 |
|------|------|------|
| TA | Task Achievement / Task Response | 写作任务完成/回应情况 |
| CC | Coherence & Cohesion | 连贯与衔接 |
| LR | Lexical Resource | 词汇资源 |
| GRA | Grammatical Range & Accuracy | 语法多样性与准确性 |
| TTR | Type-Token Ratio | 词汇类型比（衡量词汇多样性） |
| CoT | Chain of Thought | 思维链推理 |
