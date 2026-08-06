# urovo-learning

优博讯销售新人集训在线学习平台。

线上地址：https://xiao3414.github.io/urovo-learning/

## 目录

```text
src/
  data/
    trainingContent.js   课程内容
    products.js          产品图鉴数据
    exam.js              考试题目
    menu.js              侧边栏菜单
  views/                 页面
  components/            组件
public/
  products/              产品 WebP 图片
scripts/                 维护脚本（见下）
```

## 开发

```bash
npm install
npm run dev
```

## 部署

推送到 `main` 分支，GitHub Actions 自动发布到 GitHub Pages。

## 维护脚本

| 脚本 | 用途 |
|------|------|
| `fetch_official_images.py` | 从官网下载产品图 → WebP |
| `update_products_webp.py` | 同步 products.js 图片路径 |
| `extract_pptx.py` | 从桌面「集训课件」提取文本 |
| `generate_products_js.py` | 从 PPT 元数据生成 products.js |
| `extract_product_images.py` | 从 PPT 提取产品图（备用） |
| `parse_products.py` | 解析 PPT 产品列表 |

更新产品图：

```bash
python scripts/fetch_official_images.py
python scripts/update_products_webp.py
```

## 技术栈

Vue 3 · Element Plus · Pinia · Vite
