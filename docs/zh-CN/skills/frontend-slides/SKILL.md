---
name: frontend-slides
description: 从零创建或从 PowerPoint 转换动画丰富的 HTML 演示文稿。适用于制作演讲/路演/培训幻灯片、将 PPT/PPTX 转为网页演示、优化现有 HTML 幻灯片。通过视觉预览帮助非设计人员选择风格。
---

# Frontend Slides（前端幻灯片）

基于 [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) 开源技能，已安装到本项目的 `.cursor/skills/frontend-slides/`。

## 适用场景

- 制作演讲稿、路演稿、培训课件、内部分享
- 将 `.ppt` / `.pptx` 转为浏览器可播放的 HTML 演示
- 优化已有 HTML 幻灯片的布局、动效与排版
- 不确定设计风格时，通过 3 张风格预览图做视觉选型

## 在 Cursor 中使用

1. 在 Agent 聊天输入 **`/frontend-slides`**
2. 或用 **`@`** 搜索并附加 `frontend-slides` 技能
3. 描述演示主题、受众、页数与内容（可直接粘贴大纲）

Agent 会读取 `.cursor/skills/frontend-slides/SKILL.md` 及配套参考文件执行。

## 核心原则

| 原则 | 说明 |
|------|------|
| 零依赖 | 默认输出单文件 HTML，内联 CSS/JS，无需 npm 构建 |
| 固定 16:9 舞台 | 1920×1080 画布整体缩放适配视口，单页禁止内部滚动 |
| 先展示后选择 | 生成风格预览，而非抽象问卷 |
| 差异化设计 | 避免紫色渐变 + Inter 等「AI 模板感」 |
| 可访问性 | 键盘导航、`prefers-reduced-motion` 支持 |

## 本地技能文件

```
.cursor/skills/frontend-slides/
├── SKILL.md              # 完整英文指令（Agent 主读）
├── STYLE_PRESETS.md      # 12 套风格预设与视口 CSS 基线
├── viewport-base.css     # 强制包含的视口适配 CSS
├── animation-patterns.md # 动效模式参考
├── html-template.md      # HTML 结构模板
└── scripts/
    └── extract-pptx.py   # PPT/PPTX 文本与图片提取
```

## PPT 转换

需要 Python 3 与 `python-pptx`：

```bash
pip install python-pptx
python .cursor/skills/frontend-slides/scripts/extract-pptx.py your-deck.pptx
```

提取后按新演示流程继续选风格并生成 HTML。

## 产出物

- 默认：`presentation.html` 或 `[名称].html`
- 含图片时：同级 `assets/` 目录
- 交付前在 1920×1080、1280×720、手机竖屏/横屏验证无溢出

## 参考

- 上游仓库：https://github.com/zarazhangrui/frontend-slides
- Cursor Skills 文档：https://cursor.com/cn/docs/skills
