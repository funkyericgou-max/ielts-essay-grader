# 已知局限与风险

| 风险 | 程度 | 应对 |
|------|------|------|
| AI 评分与官方结果可能存在偏差 | **高** | 明确标注「AI 辅助评分」；通过 Band Descriptors 量表 + 三步法 + 量化对齐规则尽量校准 |
| 同一篇作文多次评分结果不一致 | 中 | 设置 temperature=0.3 降低随机性 |
| API 调用有延迟 | 中 | 添加加载动画 + 轮播提示文案 |
| 输出 JSON 格式异常（含 Markdown 包裹或截断） | 中 | 前端做健壮的解析和容错：正则去噪 + Try-Catch + Fallback textarea |
| 长作文 + 长 Prompt 可能超过 Token 限制 | 低 | 控制 Prompt 长度，必要时截断 |
| API Key 暴露风险 | 低 | 仅存在 localStorage，不上传 GitHub；Key 有使用量限制即可控 |