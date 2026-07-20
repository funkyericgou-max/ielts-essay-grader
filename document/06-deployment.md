# GitHub Pages 部署

## 部署方式

1. 在 GitHub 上创建仓库（如 `ielts-essay-grader`）
2. 将 `index.html` 推送到仓库
3. 在仓库 Settings → Pages 中启用，选择 main 分支
4. 访问 `https://<用户名>.github.io/ielts-essay-grader`

## 安全注意事项

- DeepSeek API Key 通过浏览器 `localStorage` 存储，**永远不会上传到 GitHub**
- 用户首次使用需要在页面设置中输入自己的 API Key
- 前端直接调用 DeepSeek API（利用 DeepSeek 的 CORS 支持）

## 使用流程

1. 打开 GitHub Pages 链接
2. 点击设置图标，输入 DeepSeek API Key（仅需一次，自动保存）
3. 选择 Task 类型（Task 1 或 Task 2）
4. 粘贴作文题目和自己的作文
5. 点击「开始批改」
6. 等待 5-10 秒后查看评分结果