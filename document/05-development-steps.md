# 详细开发与构建步骤

## 步骤 1: 升级输入面板与基础统计

- 在原 HTML 页面输入区上方，添加 Task 1 / Task 2 的 Toggle 切换组件
- 编写 JS 统计模块，提交时计算：总词数、句子数、平均句长、TTR
- 增加 API Key 配置浮层，输入后通过 `localStorage.setItem('ielts_key', value)` 持久化

## 步骤 2: 动态 Prompt 组装与发送

- 绑定「开始批改」按钮事件：
  1. 读取 `localStorage` 中的 Key，若无则弹窗拦截引导输入
  2. 根据 Toggle 状态，将 Task 1 或 Task 2 的英文量表注入 System Prompt
  3. 将本地统计数据、题目、文章注入 User Prompt
  4. 切换 UI 为 Loading 状态，启动轮播提示文案

## 步骤 3: 打造健壮的响应解析模块（防御性编程）

- 接收到 DeepSeek 返回的 string 后：
  - **正则去噪**：`res.replace(/^```json\s*/i, '').replace(/```$/, '').trim()`
  - **Try-Catch 捕获**：`try { JSON.parse() } catch (e)`
  - **Fallback 兜底**：若解析失败，将原始文本放入滚动条 textarea 呈现给用户，绝不白屏

## 步骤 4: 动态数据渲染与 Tab 填充

- **评分总览 Tab**：填充 `prompt_analysis` 和 `evaluation_justification` 中的 4 维度卡片
- **作文批注 Tab**：`container.innerHTML = json.annotated_essay`，利用 CSS 对 `.ielts-grammar`、`.ielts-vocab` 等类名赋予不同高亮色
- **语法分析 Tab**：遍历 `grammar_issues_list` 渲染为可折叠手风琴组件
- **详细反馈 Tab**：填充优缺点卡片及 `coherence_flow` 宏观诊断文本
- **行动建议 Tab**：渲染 `next_steps` 中的 3 条精准行动点
- **侧边栏**：渲染 4 维度分数及 Overall 总分

## 步骤 5: 交互完善

- 按钮 loading 状态（禁用 + 加载动画 + 轮播提示文案）
- 错误提示 UI（网络错误/API 返回异常/超时）
- 重新批改功能（返回输入面板 + 保留原输入内容）
- API Key 配置界面（input + localStorage 持久化）