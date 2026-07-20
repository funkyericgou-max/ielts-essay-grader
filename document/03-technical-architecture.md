# 技术架构

## 整体架构

```
用户输入 (选择 Task 类型 + 题目 + 作文)
    │
    ▼
前端本地计算 ──────→ 基础统计（词数/句数/TTR/平均句长）
    │
    ▼
JS 动态组装 ──────→ 根据 Task 类型，抽取对应的官方 Band Descriptors 量表
    │
    ▼
构造 API 请求 ──────→ System Prompt（含 CoT 三步算法 + 量化对齐 + 全文标签规则 + JSON 顺序约束）
                      + User Prompt（含统计数据 + 文本）
    │
    ▼
DeepSeek v4 Pro API（temperature=0.3，低随机性稳定输出）
    │
    ▼
前端健壮解析 ──────→ Try-Catch 捕获机制（预防 JSON 截断，提供源码级 Fallback 渲染）
    │
    ▼
动态渲染 UI ──────→ 使用 innerHTML 直接渲染带标签的全文批注，其余字段填充各 Tab
```

## 技术选型

| 层级 | 技术 | 原因 |
|------|------|------|
| 前端 | 纯 HTML + CSS + JavaScript | 单文件部署、无依赖、便携 |
| API | DeepSeek Chat Completions API | 高性能、性价比高、中文友好 |
| API Key | 浏览器 localStorage | 用户自行填入，不上传 GitHub |
| 托管 | GitHub Pages | 纯静态，免费，小规模使用 |

## API 配置

```javascript
const API_CONFIG = {
  endpoint: 'https://api.deepseek.com/v1/chat/completions',
  model: 'deepseek-chat',  // DeepSeek V4 Pro
  apiKey: localStorage.getItem('deepseek_api_key'),
  temperature: 0.3,        // 低随机性稳定输出
  maxTokens: 4096          // 足够容纳详细反馈
};