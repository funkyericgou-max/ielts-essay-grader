# IELTS Essay Grader — 项目纲要

## 项目目标

基于现有的 `ielts-essay-grading.html` 精美 UI，将其从一个**静态演示原型**改造成一个**真实调用 DeepSeek v4 Pro API 进行雅思作文实时评分**的可用工具。

**核心挑战**：让 AI 评分尽可能接近雅思官方标准（±0.5 分偏差）。

## 核心优化组合拳

1. **多任务支持**：UI 提供 Toggle 切换，完美支持 Task 1（小作文）与 Task 2（大作文）两套评分标准
2. **Chain-of-Thought (CoT) 强制推理**：JSON 输出顺序设计为"先分析推理 → 再输出证据 → 最后给出分数"，彻底消除"盲猜"幻觉
3. **全文标签包裹法**：AI 直接返回带 HTML 安全标签的完整作文，前端 `innerHTML` 渲染，零高亮错位
4. **轻量行动导向**：砍掉冗余的 4 周训练计划，改为 3 条精准的"下一步核心行动建议"
5. **防御性编程**：Try-Catch + 正则去噪 + Fallback textarea 兜底，绝不白屏
6. 部署到 **GitHub Pages**，无后端依赖，仅供小范围使用

## 文档索引

项目详细设计文档位于 `document/` 目录下，按以下顺序阅读：

| 编号 | 文档 | 内容 |
|------|------|------|
| 01 | [评分体系与量化对齐设计](document/01-scoring-system.md) | 官方 4 维度评分标准、Task 1/Task 2 差异、前端本地量化约束条件 |
| 02 | [UI 与交互设计](document/02-ui-design.md) | 布局变更、Toggle 切换、Tab 说明、Loading 体验 |
| 03 | [技术架构](document/03-technical-architecture.md) | 整体架构流程图、技术选型、API 配置 |
| 04 | [核心 Prompt Engineering 设计](document/04-prompt-engineering.md) | System Prompt 动态生成框架、User Prompt 模板 |
| 05 | [详细开发与构建步骤](document/05-development-steps.md) | 5 个开发步骤：输入面板 → Prompt 组装 → 响应解析 → 渲染 → 交互完善 |
| 06 | [GitHub Pages 部署](document/06-deployment.md) | 部署方式、安全注意事项、使用流程 |
| 07 | [已知局限与风险](document/07-limitations.md) | 6 项风险及其应对策略 |
| 08 | [未来可能的优化方向](document/08-future-roadmap.md) | Few-Shot 锚定、多阶段 Pipeline、缓存方案 |