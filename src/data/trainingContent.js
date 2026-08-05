/**
 * 销售新人学习内容（从集训课件提炼，非 PPT 原文）
 */

export const productPDA = {
  title: 'PDA 数据采集终端',
  subtitle: '工业级移动数据采集 · 物流/制造/零售/医疗通用',
  intro: `
    <h3>什么是 PDA？</h3>
    <p>手持数据终端（Mobile Computer）是专为企业级场景打造的便携式计算设备，集成<strong>高速条码/RFID 采集、多任务处理、稳定无线通信</strong>。与消费手机的核心区别：</p>
    <ul>
      <li><strong>工业级防护</strong>：IP65/IP67 防尘防水，1.5m 跌落，适应仓库/车间恶劣环境</li>
      <li><strong>专业扫描引擎</strong>：识读速度/准确率远超手机，支持远距、污损条码</li>
      <li><strong>长效续航</strong>：5000mAh 级大电池，支持热插拔换电，保障全天作业</li>
      <li><strong>企业级适配</strong>：稳定定制系统，与 ERP/WMS 无缝对接</li>
    </ul>
    <h3>主要应用场景</h3>
    <ul>
      <li><strong>仓储物流</strong>：揽收、入库盘点、拣货出库、上门派件</li>
      <li><strong>生产制造</strong>：物料管理、产线追溯、质量管控</li>
      <li><strong>零售连锁</strong>：库存盘点、移动收银、货品追溯</li>
      <li><strong>医疗健康</strong>：护理药房管理、医保结算、处方核验</li>
    </ul>
    <h3>代表产品</h3>
    <h4>DT50 — 经典工业 PDA</h4>
    <p>5.7 寸 HD+ 屏 · IP67 · 5000mAh · 1300W 后置 · 标距/远距扫描引擎 · 支持 RFID/指纹/身份证扩展</p>
    <h4>RT40S — 远距扫描旗舰</h4>
    <p>适合高位货架、物流分拣，远距扫描减少弯腰动作，拣货效率显著提升</p>
    <h4>DT630 — 企业级智能手机</h4>
    <p>Android 15 · 8 核 2.5GHz · 内置 UHF RFID（1.2m 批量识读 ≥50 标签/秒）· 5G · Wi-Fi 6E · IP68</p>
    <h4>UPad — 智能商业平板</h4>
    <p>11 寸 · 7mm 纤薄 · 条码+RFID 一体 · SoftPOS/NFC/扫码支付 · 零售/酒店/餐饮全场景</p>
    <h3>产品矩阵概览</h3>
    <p>优博讯覆盖全触屏 PDA、按键 PDA、RFID 手持、穿戴式、工业平板、打印机、扫描枪等全系列 AIDC 产品。<strong>PDA 出货量全球第二、中国第一</strong>（VDC 数据）。</p>
  `,
  specs: [
    { label: '明星型号', value: 'DT50 / RT40S / DT630 / i6310' },
    { label: '操作系统', value: 'Android 11 ~ 15' },
    { label: '防护等级', value: 'IP65 ~ IP68，1.5m 跌落' },
    { label: '扫描能力', value: '一维/二维/DPM/远距 DSM' },
    { label: '扩展配件', value: 'RFID 手柄、扫描手柄、座充、保护套' },
    { label: '资料库', value: 'file.urovo.com（OA 登录）' },
  ],
  scripts: [
    { scene: '开场破冰', content: 'X总您好，我是优博讯小王。了解到贵司仓储还在用纸质/人工录入，我们帮很多物流客户拣货效率提升了 30% 以上。今天想花 15 分钟了解您的痛点，看有没有能帮到的。' },
    { scene: 'FAB 产品介绍', content: 'RT40S（Feature）支持超远距扫描和 IP67 防护（Advantage），仓管员不用频繁贴近货位扫码，设备更耐摔（Benefit），直接降低更换成本和拣货时间。' },
    { scene: '与手机对比', content: '消费手机在仓库容易摔坏、扫描慢、续航不够。工业 PDA 专为 8-12 小时高强度作业设计，识读率是手机无法比拟的，TCO 算下来更划算。' },
    { scene: 'POC 促成', content: '建议先申请 5 台样机做 2 周 POC，我们派工程师驻场支持。测试通过后谈批量，您看下周方便安排吗？' },
  ],
  faqs: [
    { q: '能和 WMS/ERP 对接吗？', a: '可以。提供 USDK/Android SDK，支持与 SAP、用友、金蝶及各类 WMS/TMS 对接，有成熟 ISV 伙伴。' },
    { q: '扫描污损/褶皱条码可以吗？', a: '采用霍尼韦尔/斑马等一线引擎，识读率 99.9%+。DL 版对污损条码专门优化，建议安排实测。' },
    { q: '和竞品比有什么优势？', a: '① 识读率行业领先 ② 开放 SDK 对接快 ③ 国内市场份额第一 ④ 本地化 2 小时响应。' },
    { q: '设备坏了怎么办？', a: '全国联保，一线城市 4 小时响应、48 小时内维修或换机。' },
  ],
  cases: [
    { customer: '头部快递企业', industry: '物流', challenge: '分拣慢、故障率高', solution: '5000+ 台 RT40S + 定制分拣 APP', result: '效率提升 35%，故障率降 60%' },
    { customer: '连锁超市', industry: '零售', challenge: '盘点耗时长、错误率高', solution: '200 店 DT50 + 盘点系统', result: '盘点从 2 天缩至 4 小时' },
    { customer: '汽车零配件厂', industry: '制造', challenge: '产线追溯、耐油污', solution: 'i6310 + MES 对接', result: '不良品定位从 4 小时降至 15 分钟' },
  ],
}

export const productRFID = {
  title: 'RFID 数据采集方案',
  subtitle: '批量识读 · 非视距采集 · 实时库存可视化',
  intro: `
    <h3>RFID 解决什么问题？</h3>
    <p>从「逐件扫码」升级到「批量识读」：</p>
    <ul>
      <li><strong>条码方案</strong>：一物一码，降低人工、提高效率 — 适合单品追溯</li>
      <li><strong>RFID 方案</strong>：批量采集、非视距读取 — 适合大批量盘点、出入库</li>
    </ul>
    <h3>核心能力</h3>
    <ul>
      <li>UHF 860-960MHz，读取距离 0.5~8 米可调</li>
      <li>批量读取 200+ 标签/秒，穿透包装</li>
      <li>终端：DT50U 手持 · FR1000/FR2000 固定式读写器</li>
      <li>DT630 内置 UHF：1.2m 内 ≥50 标签/秒，支持 Impinj Gen2X</li>
    </ul>
    <h3>典型场景</h3>
    <ul>
      <li><strong>服装零售</strong>：RFID 标签 + 自助收银（优衣库模式）</li>
      <li><strong>仓储盘点</strong>：批量识读，盘点时间缩短 90%</li>
      <li><strong>资产管理</strong>：非视距批量清点固定资产</li>
    </ul>
  `,
  specs: [
    { label: '手持终端', value: 'DT50U / DT630（内置 UHF）' },
    { label: '固定读写', value: 'FR1000 智能固定 / FR2000 桌面' },
    { label: '协议', value: 'EPC C1G2 / ISO 18000-6C / Gen2X' },
    { label: '混合方案', value: '条码 + RFID 二合一设备' },
  ],
  scripts: [
    { scene: '需求挖掘', content: 'X总，贵司盘点一次要多少人、多长时间？RFID 同样工作量可能只需原来的 1/10，且不需要逐件扫码。' },
    { scene: '价值呈现', content: 'RFID 的核心价值是「实时可视库存」。我们客户上线后准确率从 85% 提到 99.5%，直接减少缺货和积压。' },
    { scene: '标签成本异议', content: 'RFID 标签比条码贵，但高价值/高周转 SKU 标签成本占比很低。我们可以先做 ROI 分析，找到最值得 RFID 化的区域。' },
  ],
  faqs: [
    { q: 'RFID 和条码能共存吗？', a: '完全可以。条码做单品追溯，RFID 做批量盘点，优博讯设备支持同时识读。' },
    { q: '金属/液体环境能用吗？', a: '可以，需选抗金属标签和合适安装方式，我们提供现场勘测建议。' },
  ],
  cases: [
    { customer: '优衣库', industry: '零售', challenge: '自助收银、快速结算', solution: 'RFID 结算台 + 收银机', result: '自助收银大幅提效' },
    { customer: '服装品牌', industry: '零售', challenge: '库存不准、盘点占人力', solution: 'RFID 标签 + DT50U', result: '准确率 99.5%，盘点时间减 90%' },
  ],
}

export const productPOS = {
  title: 'POS 支付终端',
  subtitle: '扫码 · 刷卡 · 刷脸 · 全场景支付受理',
  intro: `
    <h3>支付场景概览</h3>
    <p>哪里有支付，哪里就有 POS。优博讯覆盖<strong>扫码、刷卡、刷脸、碰一碰/NFC、刷掌</strong>等全受理方式。</p>
    <h3>扫码支付设备</h3>
    <ul>
      <li><strong>Q1500 云音箱</strong>：静态/动态码播报，4G/Wi-Fi，五档音量</li>
      <li><strong>Q200 扫码盒</strong>：360° 扫码，即插即用，1.5m 抗跌落</li>
      <li><strong>S710/S716 扫描枪</strong>：有线/无线，兼容 Windows/Android/Linux</li>
    </ul>
    <h3>金融 POS（Smart POS）</h3>
    <ul>
      <li><strong>i9100</strong>：5.5 寸 · Android 13 · 四核 2.0GHz · 磁条/IC/非接/扫码 · 内置打印</li>
      <li><strong>i9200</strong>：5.5 寸轻薄 · 80mm/s 打印 · 可选 eSIM/扫描头</li>
      <li><strong>i9600</strong>：6.745 寸 · 可选八核 · 屏下 NFC · 可选客显屏</li>
      <li><strong>i9000S</strong>：PDA+POS 二合一 · 8 核 · 工业级 1.5m 跌落 · 揽件/执法/停车收费</li>
      <li><strong>i5300/i5300L</strong>：带物理键盘/双屏，适合传统收银</li>
    </ul>
    <h3>非金 POS</h3>
    <p><strong>i9200 非金版</strong>：便利店、餐厅、菜市场、小吃店、服装批发市场等轻量收银场景。</p>
    <p><strong>U100 价格查询机</strong>：10.1 寸 · NFC · 可选 UHF · 内置扫码 · POE · 零售价格查询/会员核验。</p>
  `,
  specs: [
    { label: '金融 POS', value: 'i9100 / i9200 / i9600 / i5300 系列' },
    { label: '移动支付', value: 'i9000S（PDA-POS 二合一）' },
    { label: '非金 POS', value: 'i9200 非金版 / U100 查询机' },
    { label: '扫码周边', value: 'Q1500 云音箱 / Q200 扫码盒 / S710 扫描枪' },
    { label: '认证', value: 'PCI / EMV / 金融安全认证' },
  ],
  scripts: [
    { scene: '场景切入', content: 'X总，您的门店/驿站目前支持哪些支付方式？我们一套设备就能覆盖微信/支付宝扫码、银行卡、NFC 碰一碰，还能打印小票。' },
    { scene: '非金 vs 金融', content: '如果是便利店/餐饮，i9200 非金版性价比最高；如果需要银行卡受理和 PCI 认证，推荐 i9100 金融 POS。' },
    { scene: '云音箱推荐', content: '小商户用静态码收款，Q1500 云音箱能实时播报金额，防止逃单，4G/Wi-Fi 随时可用。' },
  ],
  faqs: [
    { q: '金融 POS 和非金 POS 区别？', a: '金融 POS 支持磁条/IC/非接全支付，需 PCI/EMV 认证；非金 POS 面向轻量扫码收银场景，成本更低。' },
    { q: '能打印小票吗？', a: 'i9100/i9200/i9000S 等内置打印机，支持揽件、收银、执法等移动打印场景。' },
  ],
  cases: [
    { customer: '连锁便利店', industry: '零售', challenge: '多种支付方式、防逃单', solution: 'i9200 非金版 + Q1500 云音箱', result: '收银效率提升，到账实时播报' },
    { customer: '物流揽件', industry: '物流', challenge: '移动揽件+打印+支付', solution: 'i9000S PDA-POS', result: '一单到底，减少设备切换' },
  ],
}

export const softwareUEE = {
  title: 'UEE 生态云平台',
  subtitle: '端云一体化 · 设备开发与管理生态',
  intro: `
    <h3>平台定位</h3>
    <p>UEE 是优博讯<strong> IoT 数字化生态平台</strong>，构建「端云」一体化，为千行百业提供数字化转型服务。</p>
    <h3>核心模块</h3>
    <ul>
      <li><strong>USDK</strong>：开发者文档与接口，快速集成</li>
      <li><strong>Enterprise OS</strong>：企业级操作系统 · OTA 固件升级</li>
      <li><strong>APP Market</strong>：应用市场，合作伙伴应用分发</li>
      <li><strong>UFS / Software HUB</strong>：快速定制与批量配置工具</li>
      <li><strong>ScanWedge / Key Mapping</strong>：扫码/按键自定义，免二次开发</li>
      <li><strong>Enterprise Launcher</strong>：企业模式，锁定作业界面</li>
    </ul>
    <h3>系统工具（即配即用）</h3>
    <p>电池管理 · Log 抓取 · WiFi 诊断 · 硬件检测 · OCR · 身份证识别 · 网络对讲 · UDI 医疗器械追溯</p>
    <h3>覆盖行业</h3>
    <p>物流快递 · 连锁零售 · 电商 · 智能制造 · 金融支付 · 行政执法 · 医疗大健康 · 公共事业</p>
  `,
  specs: [
    { label: '定位', value: 'IoT 端云一体化生态' },
    { label: '开发', value: 'USDK + 开发者文档' },
    { label: '管理', value: '远程配置、OTA、应用分发' },
    { label: '定制', value: 'UFS 批量配置、OEM Config' },
  ],
  scripts: [
    { scene: '交叉销售', content: 'X总，200 台 PDA 怎么统一管理？UEE 可以远程推送 APP、统一 WiFi 配置、一键锁定丢失设备，IT 运维效率提升 5 倍。' },
    { scene: '安全卖点', content: '设备丢失数据怎么办？UEE 支持远程擦除、地理围栏、应用白名单，满足等保合规。' },
  ],
  faqs: [
    { q: 'UEE 和 UMS 区别？', a: 'UEE 侧重 MDM 设备管理（配置、安全、应用分发）；UMS 侧重运维监控（状态、日志、远程诊断）。' },
  ],
  cases: [
    { customer: '大型物流企业', industry: '物流', challenge: '5000 台设备分散管理', solution: 'UEE 云端统一管理', result: 'APP 更新从 2 周缩至 1 天' },
  ],
}

export const softwareUMS = {
  title: 'UMS 远程设备管理平台',
  subtitle: '设备状态监控 · 远程诊断 · 故障预警',
  intro: `
    <h3>平台定位</h3>
    <p>UMS 让企业 IT/运维团队<strong>远程、批量管控终端设备</strong>，设备管理与维护更简单高效。</p>
    <h3>核心能力</h3>
    <ul>
      <li>实时监控：电量、存储、网络、扫描次数、Crash 日志</li>
      <li>远程诊断：Log 抓取、远程重启、问题定位</li>
      <li>告警通知：邮件、短信、Webhook</li>
      <li>配合 UTMS（支付终端管理）、KMS（密钥管理）</li>
    </ul>
    <h3>销售价值</h3>
    <p>80% 的问题不需要返厂即可远程定位解决，降低运维成本和业务中断时间。</p>
  `,
  specs: [
    { label: '监控', value: '设备健康状态实时看板' },
    { label: '远程', value: '日志抓取、重启、诊断' },
    { label: '部署', value: '支持私有化，数据不出域' },
  ],
  scripts: [
    { scene: '痛点切入', content: '设备出问题一线员工要打电话报修、寄回检测，来回至少 3 天。UMS 远程看日志，80% 问题不用返厂。' },
  ],
  faqs: [
    { q: '数据存在哪里？', a: '支持私有化部署，数据存储在客户自有服务器。' },
  ],
  cases: [
    { customer: '制造企业', industry: '制造', challenge: '产线 PDA 故障难以及时发现', solution: 'UMS 监控 + 预警', result: '响应从 4 小时降至 30 分钟' },
  ],
}

export const industryLogistics = {
  title: '智慧物流方案',
  subtitle: '仓储 · 运输 · 配送 · 最后一公里',
  intro: `
    <h3>行业痛点</h3>
    <ul>
      <li>手抄记录：慢、易错、难追溯 → 条码/RFID 替代</li>
      <li>人工成本上涨 + 时效要求提高</li>
      <li>大促期间拣货瓶颈</li>
    </ul>
    <h3>全链路场景</h3>
    <p>入库 → 拣货 → 复核 → 出库 → 配送 → 签收，每个环节都有对应产品和方案。</p>
    <h3>快递驿站需求分析（销售练习）</h3>
    <ul>
      <li>揽收扫描 → PDA（i9000S 揽件+打印）</li>
      <li>入库/出库管理 → PDA + WMS</li>
      <li>派件签收 → PDA + 电子签名</li>
      <li>小票打印 → 便携打印机 / i9000S</li>
      <li>收款 → POS / 云音箱</li>
    </ul>
    <h3>推荐产品</h3>
    <p>RT40S（远距拣货）· DT50（通用仓储）· i9000S（揽派一体）· 便携打印机 · Q1500 云音箱</p>
  `,
  specs: [
    { label: '核心场景', value: '揽收/分拣/拣货/派件/签收' },
    { label: '推荐产品', value: 'RT40S / DT50 / i9000S' },
    { label: '软件', value: 'WMS SDK + UEE/UMS' },
  ],
  scripts: [
    { scene: '行业切入', content: 'X总，物流行业面临人工成本上涨和时效双重压力。我们服务了头部快递客户，分拣和最后一公里有成熟方案，今天重点聊您最痛的环节。' },
    { scene: '拣货方案', content: '拣货推荐 RT40S 远距扫描，员工不用弯腰扫码，单仓日均多处理 500 单。' },
  ],
  faqs: [
    { q: '冷链能用吗？', a: '有宽温版（-20°C ~ 60°C），适合冷库和常温混合作业。' },
    { q: '大促撑得住吗？', a: '头部电商仓储中心 1000+ 台 RT40 部署，大促处理能力提升 40%。' },
  ],
  cases: [
    { customer: '电商仓储中心', industry: '物流', challenge: '大促拣货瓶颈', solution: '1000 台 RT40S + 定制 APP', result: '处理能力提升 40%' },
    { customer: '头部快递', industry: '物流', challenge: '500 万票/日分拣压力', solution: '5000+ RT40S', result: '效率提升 35%' },
  ],
}

export const industryManufacturing = {
  title: '智能制造方案',
  subtitle: '产线追溯 · 物料管理 · 质量管控',
  intro: `
    <h3>行业痛点</h3>
    <ul>
      <li>产线追溯不满足客户 audit 要求</li>
      <li>物料管理靠人工，错误率高</li>
      <li>不良品定位耗时长</li>
    </ul>
    <h3>典型场景</h3>
    <ul>
      <li><strong>高位货架仓储</strong>：远距扫码（1m+）、低温冷链（-10°C 以下）→ RT40S + 长距扫描头</li>
      <li><strong>产线追溯</strong>：工单报工、物料追溯、质检 → PDA + MES 对接</li>
      <li><strong>设备巡检</strong>：点检、维护记录 → 工业 PDA / 平板</li>
    </ul>
    <h3>推荐产品</h3>
    <p>i6310（轻量）· DT50（通用）· RT40S（远距/冷链）· 工业平板</p>
  `,
  specs: [
    { label: '核心场景', value: '工单报工/物料追溯/质检/巡检' },
    { label: '对接系统', value: 'MES / ERP / QMS' },
    { label: '推荐产品', value: 'i6310 / DT50 / RT40S' },
  ],
  scripts: [
    { scene: '政策驱动', content: '工信部推动智能制造和工业互联网，产线数据采集是基础。我们帮制造企业实现原料到成品的全流程追溯，通过了供应链 audit。' },
  ],
  faqs: [
    { q: '产线环境耐用吗？', a: 'IP65 防护，抗油污、抗干扰，1.5m 跌落，适合产线长期运行。' },
  ],
  cases: [
    { customer: '电子制造厂', industry: '制造', challenge: '追溯不满足 audit', solution: '产线 PDA + MES', result: '通过苹果/华为供应链 audit' },
    { customer: '汽车零配件厂', industry: '制造', challenge: '耐油污、抗干扰', solution: 'i6310 + MES', result: '不良品定位 4h → 15min' },
  ],
}

export const industryRetail = {
  title: '连锁零售方案',
  subtitle: '门店管理 · 盘点收银 · 会员运营',
  intro: `
    <h3>典型需求（以海澜之家为例）</h3>
    <ul>
      <li>扫商品码 · 收银支付 · 出入库 · 盘点</li>
      <li>需要：扫码枪 + POS + 收银机 + 打印机 + PDA 组合</li>
    </ul>
    <h3>RFID 零售（以优衣库为例）</h3>
    <ul>
      <li>RFID 标签 → RFID 识读 → 自助收银/结算</li>
      <li>产品：RFID 结算台 + 收银机，或 DT630/UPad 一体方案</li>
    </ul>
    <h3>UPad 零售场景</h3>
    <p>辅助销售 · 价格查询 · 收银 · 库存管理 · SoftPOS/NFC 支付 · 会员核验</p>
  `,
  specs: [
    { label: '条码方案', value: 'PDA + POS + 打印机' },
    { label: 'RFID 方案', value: 'RFID 标签 + 手持/结算台' },
    { label: '新兴场景', value: 'UPad 商业平板 + SoftPOS' },
  ],
  scripts: [
    { scene: '门店痛点', content: 'X总，门店盘点要关店半天、库存不准影响销售，我们的方案可以 4 小时完成全店盘点，准确率 99%+。' },
  ],
  faqs: [
    { q: 'RFID 值得投入吗？', a: '高周转 SKU、高价值商品 ROI 最高。我们可以先做试点门店测算。' },
  ],
  cases: [
    { customer: '海澜之家', industry: '零售', challenge: '全渠道库存管理', solution: '扫码枪+POS+PDA+打印机', result: '收发货效率大幅提升' },
    { customer: '优衣库', industry: '零售', challenge: '自助收银', solution: 'RFID 结算台', result: '自助收银体验升级' },
  ],
}

export const salesCompany = {
  title: '公司与品牌',
  subtitle: '了解优博讯 · 建立销售信心',
  intro: `
    <h3>公司定位</h3>
    <p>优博讯是全球领先的 <strong>IoT 行业数字化方案提供商</strong>，为客户打造「端云」一体化生态，提供多场景智能终端及软件云服务。</p>
    <p><strong>品牌使命</strong>：智联世界，至善至优 · 构建企业数智新生力</p>
    <h3>为什么选择优博讯？</h3>
    <ul>
      <li><strong>20 年创新</strong>：2006 年推出国内第一款 PDA，持续引领 AIDC 行业</li>
      <li><strong>市场第一</strong>：PDA 出货量全球第二、中国第一（VDC）</li>
      <li><strong>全产品线</strong>：PDA · RFID · POS · 打印机 · 平板 · 扫描枪</li>
      <li><strong>技术领先</strong>：AI/WiFi 6E/RFID Gen2X/5G · 德国红点奖</li>
      <li><strong>行业覆盖</strong>：物流、零售、制造、金融、医疗、政务等</li>
      <li><strong>上市平台</strong>：深交所创业板（300531）</li>
    </ul>
    <h3>发展里程碑</h3>
    <ul>
      <li>2006 — 国内第一款 PDA，推动物流数字化</li>
      <li>2012 — 国内第一款安卓 PDA 和 POS</li>
      <li>2016 — 深交所上市，收购佳博，全产品线布局</li>
      <li>2019 — 发布 Safedroid OS 安全操作系统</li>
      <li>2020 — 联合高通推出国内首款 5G 旗舰 PDA</li>
      <li>2021 — 发布 UEE 行业生态平台</li>
      <li>2023 — 海外业务高速增长，国内市场份额连续第一</li>
    </ul>
    <h3>销售必备资源</h3>
    <ul>
      <li>中文资料库：<strong>file.urovo.com</strong>（OA 登录）</li>
      <li>英文资料库：file.en.urovo.com</li>
      <li>官网：www.urovo.com</li>
      <li>服务热线：400-888-6989</li>
    </ul>
    <h3>品牌行为准则（销售必知）</h3>
    <ul>
      <li>每位员工都是品牌大使，对外沟通代表公司形象</li>
      <li>不可泄露未公开产品信息、价格、其他客户信息</li>
      <li>遇到不确定的问题，转对外窗口，不可随意承诺</li>
      <li>拜访客户前准备：产品彩页、成功案例、规格书（市场部申请 SC05 流程）</li>
    </ul>
  `,
  specs: [
    { label: '定位', value: '全球领先 IoT 数字化方案提供商' },
    { label: '股票代码', value: '300531（深交所）' },
    { label: '核心优势', value: 'PDA 全球第二/中国第一' },
  ],
  scripts: [
    { scene: '公司介绍', content: '优博讯专注 AIDC 领域 20 年，PDA 出货量中国第一。我们提供从硬件到软件到云服务的完整方案，服务了顺丰、京东物流等头部客户。' },
    { scene: '品牌背书', content: '我们是 AIDC 领域唯一深交所上市公司，RT40S 和 DT50 获德国红点奖，产品性能和品质有充分保障。' },
  ],
  faqs: [
    { q: '资料哪里下载？', a: '登录 file.urovo.com（OA 账号），有产品彩页、规格书、成功案例等。' },
    { q: '拜访客户要准备什么？', a: '产品彩页、成功案例、规格书。可通过市场部 SC05 流程申请 PPT/视频支持。' },
  ],
  cases: [],
}

export const salesCustomerAnalysis = {
  title: '客户分析方法论',
  subtitle: 'SPIN · BANT · 决策链识别',
  intro: `
    <h3>BANT 客户 qualification</h3>
    <ul>
      <li><strong>B Budget</strong>：项目预算范围？</li>
      <li><strong>A Authority</strong>：最终决策人是谁？</li>
      <li><strong>N Need</strong>：最急需解决什么问题？</li>
      <li><strong>T Timeline</strong>：希望什么时候上线？</li>
    </ul>
    <h3>SPIN 提问法</h3>
    <ul>
      <li><strong>S Situation</strong>：贵司仓库面积？日出入库量？</li>
      <li><strong>P Problem</strong>：目前用什么方式采集数据？</li>
      <li><strong>I Implication</strong>：这种方式带来了哪些困扰？</li>
      <li><strong>N Need-payoff</strong>：如果效率提升 30%，对您意味着什么？</li>
    </ul>
    <h3>决策链</h3>
    <p>IT 部门、采购、一线主管各有关注点。建议安排联合拜访，一次对齐各方需求。</p>
  `,
  specs: [
    { label: '框架', value: 'BANT + SPIN' },
    { label: '目标', value: '识别真需求 vs 询价' },
  ],
  scripts: [
    { scene: 'BANT 摸底', content: '这个项目预算范围？最终决策是谁？最急迫解决什么？计划什么时候上线？' },
    { scene: 'SPIN 挖掘', content: '（S）仓库多大、日处理量多少？（P）现在怎么采集？（I）带来什么困扰？（N）提升 30% 效率意味着什么？' },
  ],
  faqs: [
    { q: '客户说"先了解"怎么办？', a: '不急于推产品，用 SPIN 挖痛点，给行业案例，建立信任后再推进。' },
    { q: '怎么判断真需求？', a: 'BANT 四要素齐全 = 真需求；只有询价无预算无决策人 = 低优先级。' },
  ],
  cases: [
    { customer: '销售新人案例', industry: '方法论', challenge: '首次拜访不知从何说起', solution: 'SPIN 15 分钟了解痛点', result: '获得 POC 机会，成交 100 台' },
  ],
}

export const salesScripts = {
  title: '销售话术大全',
  subtitle: '全流程话术 · 异议处理 · 谈判技巧',
  intro: `
    <h3>销售全流程</h3>
    <p>陌拜 → 需求挖掘 → 方案呈现 → 报价 → 谈判 → 成交 → 售后协同</p>
    <h3>FAB 法则</h3>
    <ul>
      <li><strong>F Feature</strong>：产品特征（如 RT40S 远距扫描）</li>
      <li><strong>A Advantage</strong>：竞争优势（不用弯腰扫码）</li>
      <li><strong>B Benefit</strong>：客户利益（拣货效率提升、降低 TCO）</li>
    </ul>
    <h3>常见异议类型</h3>
    <p>价格 · 竞品 · 时机 · 权限 · 信任 · 已有供应商</p>
  `,
  specs: [
    { label: '方法', value: 'FAB / SPIN / BANT / ROI' },
    { label: '原则', value: '结果导向 · 不虚假承诺' },
  ],
  scripts: [
    { scene: '电话陌拜', content: 'X总您好，我是优博讯小王。我们专注物流/制造移动数据采集，帮 XX 公司提升了 30% 仓储效率。请问负责仓储/IT 的同事方便介绍一下吗？' },
    { scene: '价格太贵', content: '理解您的关注。我帮您做 ROI 分析：设备是一次投入，效率提升是每天持续的收益，3 年 TCO 算下来我们更划算。' },
    { scene: '再考虑', content: '没问题，主要考虑哪方面？预算、技术还是决策流程？我可以针对性补充资料，方便您内部汇报。' },
    { scene: '已有供应商', content: '很多客户保留两家供应商做备份，或在新项目做 POC 对比。我们可以提供样机实测，数据说话。' },
    { scene: '技术问题不会答', content: '这个问题很专业，我需要跟技术专家确认后给您准确答复，明天上午回复您，可以吗？（绝不编造）' },
    { scene: '临门一脚', content: '方案您也认可了，POC 效果不错。本月有季度促销，现在下单赠 2 年延保。我明天发合同，争取本周走完流程？' },
  ],
  faqs: [
    { q: '"发个资料看看"', a: '好的，请问您最关心效率、成本还是对接？我针对性整理。' },
    { q: '客户一直拖', a: '假设成交法：如果方案没问题，计划几月启动？我提前安排备货和工程师。' },
  ],
  cases: [
    { customer: '异议处理', industry: '技巧', challenge: '比竞品贵 20%', solution: 'ROI + 样机实测 + TCO', result: '客户接受溢价' },
  ],
}

export const salesCollaboration = {
  title: '内部协作指南',
  subtitle: '销售过程中找谁 · 怎么走流程',
  intro: `
    <h3>组织架构（销售相关）</h3>
    <ul>
      <li><strong>营销中心</strong>：销售部 · 渠道部 · 行业大客户部 · 海外事业部</li>
      <li><strong>产品部</strong>：产品规划 · 定义 · GTM · 培训</li>
      <li><strong>移动产品事业部</strong>：PDA/POS 研发（项目部/硬件/软件/测试/工程）</li>
      <li><strong>行业应用事业部</strong>：行业软件定制 · 项目交付</li>
      <li><strong>市场部</strong>：品牌 · 物料 · 展会 · 内容营销</li>
      <li><strong>客户服务中心</strong>：售后 · 客诉 · SLA</li>
      <li><strong>工程部 FAE</strong>：售前售后技术支持 · 样机 · POC 支持</li>
    </ul>
    <h3>销售全流程协作</h3>
    <ul>
      <li><strong>需求阶段</strong>：销售收集 → 产品部评估 → FAE 技术可行性</li>
      <li><strong>方案阶段</strong>：产品部提供规格书/彩页 → 市场部物料支持（SC05）</li>
      <li><strong>POC 测试</strong>：FAE 驻场支持 → 工程部提供样机</li>
      <li><strong>报价合同</strong>：营销中心审批 → 财务信用评估</li>
      <li><strong>交付售后</strong>：供应链交付 → 客服接手 SLA</li>
    </ul>
    <h3>市场部支持（销售常用）</h3>
    <ul>
      <li><strong>SC04</strong>：市场物料申请（礼品、画册、polo 衫）</li>
      <li><strong>SC05</strong>：设计/PPT/视频支持申请</li>
      <li><strong>SC10</strong>：企业展厅参观申请（提前 3 工作日）</li>
      <li>资料库：file.urovo.com 下载最新彩页/规格书</li>
    </ul>
    <h3>渠道体系</h3>
    <p>包线总代 → 白金 → 金牌 → 认证代理商，另有软件伙伴（ERP/WMS/MES）和集成商生态。</p>
    <h3>信息安全红线</h3>
    <ul>
      <li>不可对外泄露：未公开产品信息、价格、其他客户信息、公司制度</li>
      <li>对外沟通需经对外负责人确认，邮件抄送负责人</li>
      <li>不确定的问题转 FAE/产品部，不可随意承诺</li>
    </ul>
  `,
  specs: [
    { label: '技术支持', value: 'FAE 组 / 客户服务中心' },
    { label: '物料申请', value: '市场部 SC04/SC05 流程' },
    { label: '样机 POC', value: '工程部研发样机组 + FAE' },
  ],
  scripts: [],
  faqs: [
    { q: 'POC 样机找谁？', a: '通过 FAE 组申请，工程部样机组负责组装刷机测试。' },
    { q: '客户要定制开发？', a: '转行业应用事业部评估，销售不要自行承诺开发周期和范围。' },
  ],
  cases: [],
}
