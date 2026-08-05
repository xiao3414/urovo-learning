# urovo-learning

优博讯 **销售新人集训** 在线学习平台，面向销售团队。

在线访问：`https://xiao3414.github.io/urovo-learning/`

## 项目结构

```text
src/
  data/
    trainingContent.js   ← 所有课程页面内容（知识要点、话术、FAQ、案例）
    exam.js              ← 考试题目
    menu.js              ← 侧边栏菜单
  views/                 ← 各模块页面
  components/            ← 通用组件
public/
  favicon.svg            ← 站点图标
scripts/
  extract_pptx.py        ← 从桌面课件提取文本（开发用，不复制 PPT）
```

**不包含：** PPT 原文件、构建产物、node_modules（均在 `.gitignore` 中）。

## 本地开发

```bash
npm install
npm run dev
```

## 部署

推送到 `main` 分支后，GitHub Actions 自动构建并发布到 GitHub Pages。

## 更新内容

### 日常改文字（最常见）

直接编辑 `src/data/trainingContent.js` 或 `src/data/exam.js`，预览后 push。

### 从 PPT 同步新课件

1. 确保桌面有「集训课件」文件夹（脚本默认路径）
2. 运行 `python scripts/extract_pptx.py` 生成 `scripts/pptx_extracted.json`
3. 将提取的要点**整理**进 `src/data/trainingContent.js`（非原文粘贴）
4. **不要**把 PPT 或 `pptx_extracted.json` 提交到 Git

## 技术栈

Vue 3 · Element Plus · Pinia · Vite · GitHub Pages
