# UROVO APAC Official Website — 完整 redesign brief（供 AI 实施）

> **文档用途**：将当前项目从「UROVO Sales Training / 优博讯销售培训」重新定位为「UROVO APAC Official Website / 优博讯亚太地区企业官网」。  
> **当前阶段**：分析与 Benchmark 已完成；**尚未开始代码改造**（等待实施指令）。  
> **仓库**：https://github.com/xiao3414/urovo-learning  
> **线上**：https://xiao3414.github.io/urovo-learning/  
> **本地**：http://localhost:5173  

---

## 0. 给接手 AI 的核心指令

1. **这不是换标题**，是产品定位 + 信息架构 + UI/UX 的重新设计。
2. **目标用户**：APAC 企业客户、采购决策者、IT/Ops Manager、SI、Channel Partner — **不是**内部销售培训对象。
3. **English 为主视觉语言**，中文为辅助；默认 locale 应为 `en`。
4. **真实数据原则**：所有数字、案例、认证必须来自项目已有数据；不知道就不写。
5. **禁止**：复制 Zebra/Honeywell/Datalogic 视觉；AI 模板感（全屏紫蓝渐变、glass、粒子、假统计、假客户 Logo）；对外暴露销售话术/SPIN/BANT/考试。
6. **保留底层数据**，通过隐藏、重组、改名、重路由完成转型；考试等内部功能代码可保留但不进公开导航。
7. **实施顺序**：分 Phase 执行，不要一次性重写全站（见文末 Phase 清单）。
8. **完成后**：commit + push 到 `main`（项目约定）。

---

## 1. 项目现状（技术栈）

| 项 | 说明 |
|---|---|
| 框架 | Vue 3 + Vite 5 + Vue Router 4 |
| UI | Element Plus（全量引入） |
| 状态 | Pinia（locale、exam localStorage） |
| i18n | 自研 `src/i18n/` + composables（非 vue-i18n） |
| 部署 | GitHub Pages，`base: '/urovo-learning/'` |
| 布局 | **左侧固定 Sidebar 280px** + 顶栏 Breadcrumb — **典型 LMS，必须移除** |

### 核心文件

```
src/
├── components/AppLayout.vue      # 当前：Sidebar + Header（需改为 SiteLayout）
├── components/SidebarMenu.vue      # 培训侧栏（官网应停用）
├── components/TrainingPage.vue     # 四 Tab 内容壳（需改造）
├── views/HomeView.vue              # 培训向首页（需完全重写）
├── views/products/Catalog.vue      # 产品列表（保留，官网化）
├── views/products/Detail.vue       # 产品详情（保留，改 CTA）
├── views/产品学习|软件生态|行业方案|销售训练/*.vue
├── views/考试系统/Index.vue        # 内部功能，隐藏
├── data/menu.js                    # 培训菜单（需替换为 siteNav）
├── data/products.js                # 40 款产品，8 品类
├── data/trainingContent.js         # 12 模块中文内容
├── data/exam.js                    # 考试（隐藏）
├── i18n/content/trainingContent.en.js  # APAC 英文培训内容（可作官网文案基础）
├── i18n/products.en.js             # 产品英文展示文案
├── assets/styles/tokens.css        # Design tokens
└── router/index.js                 # 16 个公开路由
public/products/*.webp              # 真实产品图
```

---

## 2. 当前信息架构（培训站）

### 导航树

| 一级 | 二级 | 路由 |
|------|------|------|
| 产品图鉴 | — | `/products`, `/products/:id` |
| 产品学习 | PDA / RFID / POS | `/product/pda` 等 |
| 软件生态 | UEE / UMS | `/software/uee` 等 |
| 行业方案 | 物流 / 制造 / 零售 | `/industry/logistics` 等 |
| 销售训练 | 公司与品牌 / 客户分析 / 话术 / 内部协作 | `/sales/*` |
| 考试系统 | — | `/exam` |

### 首页现有 Section

1. Hero — 蓝色渐变；「智能数据终端 · 全系列产品**培训**」；CTA：图鉴 / **开始学习** / **结业考试**
2. 明星产品 — 6 款硬编码
3. 产品分类 — 来自 `products.js` 动态 chips
4. **培训模块** — 遍历 menu 卡片

### TrainingPage.vue 四 Tab

- 知识要点（intro HTML + specs）
- **销售话术**（scripts — 不可对客户公开）
- 客户问题 FAQ
- 成功案例 cases

---

## 3. 必须移除的「培训」概念（公开 UI）

**不得出现在主导航 / 首页 / Footer：**

Sales Training · 培训 · 学习 · 开始学习 · 结业考试 · 考试系统 · 知识要点 · 销售话术 · 客户分析 · SPIN · BANT · 内部协作 · 学习进度 · 培训模块 · 进入销售培训

**必须从公开 IA 隐藏的页面：**

| 路由 | 原因 |
|------|------|
| `/exam` | 内部认证 |
| `/sales/customer-analysis` | SPIN/BANT |
| `/sales/scripts` | 内部话术库 |
| `/sales/collaboration` | IPD/SC05/渠道内部流程 |
| 所有 TrainingPage 的 **scripts Tab** | 内部销售用语 |

**代码可保留、路由可改为 `/internal/*` 或不链出。**

---

## 4. 可直接转为官网的内容（真实数据）

| 数据源 | 官网用途 |
|--------|----------|
| `products.js` + Catalog/Detail | **Products** 核心（40 SKU，8 品类） |
| `productPDA/RFID/POS` intro+specs | 产品线概述（去培训语气） |
| `softwareUEE/UMS` | **Software** 页 |
| `industryLogistics/Manufacturing/Retail` | **Solutions**（仅这 3 个） |
| `salesCompany` 定位/里程碑/规模 | **About**（剔除销售准则、SC05、OA） |
| 各模块 `faqs[]` | FAQ |
| 各模块 `cases[]` | Case Studies（优衣库等需审慎 — 仅展示已有条目） |
| `file.en.urovo.com` | Resources → Downloads（真实外链） |
| `www.urovo.com` | Footer / About |
| `public/products/*.webp` | Hero / Featured 摄影 |
| `trainingContent.en.js` | 英文官网文案基础（需改为官网语气） |

### 现有数据 **不支持** 的栏目（不要凭空创建）

- **Transportation** — 无独立方案页（物流内容可部分覆盖，但不等同 Transportation 品类页）
- **Healthcare** — PDA intro 提及场景，**无**独立 Solution 页与 cases 模块
- **Accessories** — `products.js` 无此品类
- 虚假 News / 假 White Papers / 假客户 Logo 墙

### Why UROVO 可引用的真实数据点（来自 `salesCompany`）

- 20 年 AIDC（2006 首款 PDA）
- Rugged PDA 全球第二（VDC 2024）
- UEE 400 万+ 活跃设备
- 100+ 国家与地区、100+ 服务网点
- 500+ 全球伙伴
- 7.8 万+ m² 制造、800 万+ 台/年产能
- 1500+ 员工
- Red Dot（RT40、DT50 5G）
- 深交所 300531

**无 APAC 具体办公室地址则不写假邮箱/假地址。** 可用 Contact 页 + 链官方站。

---

## 5. 新信息架构（目标）

```
HOME                          /
PRODUCTS                      /products
  └─ Category filter          /products?category=pda
  └─ Product Detail           /products/:id
SOLUTIONS                     /solutions
  └─ Smart Logistics          /solutions/logistics
  └─ Retail                   /solutions/retail
  └─ Smart Manufacturing      /solutions/manufacturing
SOFTWARE                      /software
  └─ UEE                      /software/uee
  └─ UMS                      /software/ums
RESOURCES                     /resources
  └─ Downloads                → file.en.urovo.com
  └─ Case Studies             /resources/case-studies（聚合 cases）
ABOUT                         /about
  └─ About UROVO              /about/company
  └─ APAC Focus               /about/apac
CONTACT                       /contact
```

### 旧路由迁移建议（redirect，不删代码）

| 旧路由 | 新定位 |
|--------|--------|
| `/industry/logistics` | `/solutions/logistics` |
| `/sales/company` | `/about/company` |
| `/product/pda` | `/products?category=pda` 或品类说明页 |
| `/exam` | 隐藏；可选 `/internal/exam` |

---

## 6. 新 Header 导航

### Desktop（Sticky：Hero 透明 → 滚动后白底 + border）

```
[Logo UROVO APAC]   Products ▾   Solutions ▾   Software ▾   Resources ▾   About ▾     [EN|中文]  [Contact Sales]
```

**Dropdown（来自真实数据，轻量 2 级，非 Zebra 级 Mega Menu）：**

- **Products** → 8 品类（动态 `productCategories`）+ View All
- **Solutions** → Logistics / Retail / Manufacturing（仅 3 个）
- **Software** → UEE / UMS
- **Resources** → Product Downloads (file.en.urovo.com) / Case Studies
- **About** → About UROVO / APAC

### Mobile

- Hamburger 抽屉 + **Contact Sales 置顶 CTA**
- **删除左侧 Sidebar**

### 品类 EN 映射（`products.js` id → 官网名）

| id | EN |
|----|-----|
| pda | Mobile Computers |
| tablet | Enterprise Tablets |
| wearable | Wearables |
| rfid | RFID |
| pos | Payment Terminals |
| scanner | Barcode Scanners |
| printer | Printers |

---

## 7. 首页 Section 结构（完全重写 HomeView.vue）

| # | Section | 说明 |
|---|---------|------|
| 1 | **Hero** | APAC 价值主张 + 双 CTA + 产品视觉（非全蓝矩形） |
| 2 | **Proof strip**（可选） | 仅真实：VDC #2、Red Dot、UEE 4M+ |
| 3 | **Featured Products** | 4–6 旗舰，企业产品卡（非「明星产品/培训」） |
| 4 | **Product Portfolio** | 8 品类动态 grid |
| 5 | **Industry Solutions** | 3 行业卡 + outcome 一句 |
| 6 | **Software Ecosystem** | UEE + UMS |
| 7 | **Why UROVO** | 4–5 维度，仅真实资料 |
| 8 | **Resources teaser** | Downloads + Case Studies |
| 9 | **Contact CTA band** | Contact Sales |
| 10 | **Footer** | 全站链接 + 语言 + Copyright |

**删除：** 培训模块、开始学习、考试、学习统计。

### Hero 设计方向

- **布局**：左文案 55% + 右产品 collage（DT630 / RT40S / RFID 等 `public/products/` 真实图）
- **背景**：off-white `#FAFBFC` + 极浅 grid；**不用**全屏 `#0052D9` 渐变
- **Eyebrow**：`UROVO APAC`
- **H1 方向（EN，需优化，非照抄）**：`Enterprise Mobility for the Asia-Pacific` 或 `Intelligent Data Capture for Modern Operations`
- **Subtitle**：mobile computers、RFID、POS、scanners、printers、industry solutions — 强调 **operational efficiency**
- **CTA Primary**：Explore Products → **Secondary**：Explore Solutions
- **动效**：CSS fade/translate 200ms；`prefers-reduced-motion` 尊重

---

## 8. 产品页改造

### Catalog.vue → Product Portfolio

- 标题 **Products** / **Product Portfolio**
- 保留搜索 + 品类 filter
- 卡片：大图 + 品类 + 名称 + 一行卖点 + **Explore Product →**
- 去掉「图鉴」「培训」

### Detail.vue → Product Detail Page

- **Hero**：产品图 + 定位 + highlight bullets
- **Tabs**：Specifications / Applications（现 scenarios）
- **CTA**：**Contact Sales** + **Download Product Information**（→ file.en.urovo.com）
- **移除**：「进入销售培训」、`trainingPath` 按钮
- **可选**：Related Products（同 category 3 款）

### Value-first（Honeywell 规律）

Hero 先展示 **3 条 outcomes**（从 `scenarios` 提炼），再进 Specs tab。

---

## 9. Solutions / Software 页

### Solutions hub + 3 详情页

重构 `TrainingPage` → `ContentPage` / `SolutionPage`：

| Tab | 来源 | 官网名 |
|-----|------|--------|
| intro + specs | trainingContent | **Overview** |
| faqs | trainingContent | **FAQ** |
| cases | trainingContent | **Case Studies** |
| scripts | — | **不展示** |

每页增加：**Recommended Products**（链到 products.js）

### Software

- Hub：**UROVO Software Ecosystem**
- UEE：device MDM、OTA、app distribution、enterprise launcher（来自现有 intro，不夸大）
- UMS：remote monitoring、diagnostics、alerts、on-prem option
- CTA：Contact Sales

---

## 10. Footer

```
UROVO APAC
Enterprise mobility, data capture & industry solutions

Products | Solutions | Software | Resources
About | Contact | www.urovo.com

Language · © 2026 UROVO
```

**可用真实链接**：www.urovo.com · file.en.urovo.com · 400-888-6989（中国区 — APAC 专用联系方式暂无则不编造）

---

## 11. Design Benchmark 研究结论（规律提取，非模仿）

### 设计优先级（冲突时）

1. 用户体验  
2. UROVO 品牌  
3. B2B 企业官网逻辑  
4. 产品信息清晰度  
5. 视觉效果  

### Benchmark 分工

| 来源 | 提取规律 | UROVO 转化 |
|------|----------|------------|
| **Zebra** | Hardware+Software+Industry 三层 IA；行业页写 business outcome；Resources/Support 闭环；产品生命周期叙事 | Products/Solutions/Software 三主枝 + 轻量 Dropdown；不做 Zebra 级巨型 Mega Menu |
| **Honeywell** | Product→Business Value 先于参数；Product Finder；CTA=Contact/Quote 非 Buy | Detail Hero 先 outcomes 后 specs；全站 Contact Sales |
| **Datalogic** | 全生态首页；Resources 分型；Success Stories 格式 | Home portfolio grid；Resources=Downloads+Cases；**不做**无 CMS 的新闻瀑布 |
| **Panasonic TOUGHBOOK** | 产品 Hero 摄影；痛点维度→能力；一线场景叙事 | Product Hero 场景形容词；Why UROVO 问题→能力映射 |
| **Awwwards** | 大排版层级；有目的动效；不对称 Hero 构图 | clamp H1、左文右图 Hero；**禁止** scroll-jacking/WebGL |
| **Godly** | Section 背景交替；80–120px section padding；hover border+shadow | off-white/white 交替；6px 按钮圆角；减少 pill 按钮 |
| **Industrial Site Design** | B2B 蓝色=信任；Research→Contact 非购物车；角色导向 | Lead gen 清晰；Downloads 优先 |

### 禁止（AI 模板感）

紫蓝渐变模板 · 巨大渐变标题 · glass 卡片 · 发光按钮 · 粒子 · 随机 3D · HUD · 无意义统计 · 假客户 Logo · 假全球覆盖 · 假案例/奖项/认证

---

## 12. UROVO APAC Design System v0.1

### 色彩

| Token | 值 | 用途 |
|-------|-----|------|
| `--color-primary` | `#0052D9` | CTA、链接、accent |
| `--color-navy` | `#001529` | Header 文字、Footer |
| `--color-bg` | `#FFFFFF` / `#F5F7FA` | 页面/交替 Section |
| `--color-text` | `#1D2129` | 正文 |
| `--color-muted` | `#606266` | 次级 |
| `--color-border` | `#E5E6EB` | 分割、grid |

**原则**：白/off-white 为主，蓝为 accent；Hero 不全屏蓝。

### 字体与排版

- EN：**Inter** 或 Helvetica Neue（现有）
- 中文：PingFang SC / Microsoft YaHei
- H1：`clamp(2rem, 4vw, 3.25rem)`，700
- Body：15–16px，line-height 1.6

### 布局

- Content max-width：**1200px**
- Section padding：80–120px desktop / 48–64px mobile
- 12-column grid，gutter 24px

### 组件

- Button Primary：实心 `#0052D9`，radius 6px
- Card：1px border + hover shadow（非 glass）
- Product card：4:3 图，轻 border

### 响应式断点

1440 · 1280 · 1024 · 768 · 480 · 375 — Header/Hero/Products/Footer 需独立 mobile 设计

### SEO（无 SSR）

- `index.html` + router `afterEach` 更新 title/description
- 每页唯一 H1；产品图 `alt="{name} - UROVO APAC"`
- Open Graph：title、description、image

---

## 13. 页面处置汇总

| 处置 | 页面/组件 |
|------|-----------|
| **保留并改造** | Catalog.vue, Detail.vue, products.js, i18n/* |
| **完全重写** | HomeView.vue |
| **重构** | AppLayout → SiteLayout；新建 SiteHeader.vue, SiteFooter.vue |
| **改造复用** | TrainingPage → ContentPage（`showScripts: false`） |
| **重新定位** | 行业方案→SolutionDetail；UEE/UMS→SoftwareDetail；公司与品牌→About |
| **隐藏** | exam, sales/scripts, sales/customer-analysis, sales/collaboration |
| **停用** | SidebarMenu 在布局中的使用 |

---

## 14. 实施 Phase（不要一次做完）

| Phase | 内容 |
|-------|------|
| 1 | ✅ 信息架构 + Benchmark 分析（本文档） |
| 2 | SiteLayout + SiteHeader + SiteFooter；移除 Sidebar |
| 3 | 新 menu/siteNav + router redirects + i18n 官网文案 |
| 4 | HomeView 完全重写（Hero → Footer sections） |
| 5 | Catalog + Detail 官网化 |
| 6 | Solutions / Software / About / Resources / Contact 页面 |
| 7 | ContentPage 改造；隐藏 scripts tab |
| 8 | tokens.css 扩展 + 响应式全断点 |
| 9 | SEO meta + index.html |
| 10 | 隐藏 exam 路由；清理培训向 i18n key |

---

## 15. 需修改的文件清单（实施时）

**新建：**

- `src/components/SiteHeader.vue`
- `src/components/SiteFooter.vue`
- `src/components/SiteLayout.vue`（或重构 AppLayout）
- `src/data/siteNav.js`
- `src/views/solutions/*`
- `src/views/about/*`
- `src/views/resources/*`
- `src/views/contact/*`
- `src/components/ContentPage.vue`（自 TrainingPage 演进）

**大改：**

- `src/views/HomeView.vue`
- `src/views/products/Catalog.vue`
- `src/views/products/Detail.vue`
- `src/router/index.js`
- `src/i18n/messages/en-US.js` / `zh-CN.js`
- `src/assets/styles/tokens.css`
- `index.html`
- `src/stores/locale.js`（默认 `en`）

**保留不改（除非后续确认删除）：**

- `src/views/考试系统/Index.vue`
- `src/data/exam.js`
- `trainingContent.js` 内 scripts 字段（数据保留，UI 不展示）

---

## 16. 给实施 AI 的示例 Prompt

```
你是前端工程师，负责将 urovo-learning 仓库改造为 UROVO APAC 企业官网。

请先阅读 docs/APAC-WEBSITE-REDESIGN-BRIEF.md 全文。

从 Phase 2 开始：创建 SiteHeader + SiteFooter + SiteLayout，移除 Sidebar，
不破坏现有 /products 路由。

遵循 Brief 中的 Design System、真实数据原则、Benchmark 转化规律。
English 优先。完成后 commit + push。
```

---

*文档版本：2026-08-18 · 与 Phase 1 分析 + Benchmark 研究同步*
