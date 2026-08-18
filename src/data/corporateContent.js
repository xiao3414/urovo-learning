/**
 * UROVO APAC corporate website content (sanitized from legacy training materials).
 * Legacy training routes continue to use trainingContent.js — do not remove that file.
 */

export const industryLogistics = {
  title: '物流解决方案',
  subtitle: '仓储 · 运输 · 配送 · 最后一公里',
  overview:
    '优博讯为亚太物流与供应链企业提供移动数据终端、扫描、RFID 及设备管理软件，覆盖入库、拣货、复核、出库、配送与签收等全链路数据采集场景。',
  challenges: [
    '人工录入效率低、易出错，作业过程难以追溯',
    '人工成本上升与配送时效要求不断提高',
    '大促及高峰期间拣货与分拣成为瓶颈',
  ],
  solution:
    '从入库到签收，UROVO 提供与 WMS 及企业系统对接的移动作业终端、远距扫描、揽派一体设备与打印方案，配合 UEE/UMS 实现 fleet 级部署与运维管理。',
  applications: [
    { title: '仓储作业', desc: '入库、拣货、复核、出库 — PDA 与远距扫描终端（如 RT40S、DT50/DT66）' },
    { title: '揽收与派件', desc: '揽收扫描、派件签收 — i9000S 等揽派一体终端' },
    { title: '末端驿站', desc: '出入库管理、电子签收、票据打印 — PDA + 便携打印机 / POS' },
    { title: '冷链作业', desc: '宽温与冷链型号支持混合 ambient / 冷库场景' },
  ],
  specs: [
    { label: '核心流程', value: '揽收 / 分拣 / 拣货 / 派件 / 签收' },
    { label: '推荐产品', value: 'RT40S / DT50 / i9000S' },
    { label: '软件支持', value: 'WMS SDK · UEE · UMS' },
  ],
  faqs: [
    { q: '设备是否支持冷链环境？', a: '提供宽温及冷链型号（如 RT40S 冷链版），适用于冷库与常温混合作业。' },
    { q: '高峰期间系统能否支撑大规模部署？', a: 'RT40S 等产品已在大型电商仓储等场景实现千台级部署，支持远距扫描与高强度作业。' },
    { q: '能否与现有 WMS 对接？', a: '优博讯提供 USDK 与 API，支持与主流 WMS/ERP 系统集成。' },
  ],
  useCases: [
    {
      label: '电商仓储',
      challenge: '大促期间拣货瓶颈',
      approach: 'RT40S 移动终端与定制作业应用',
      outcome: '参考项目中处理能力显著提升',
    },
    {
      label: '快递分拣',
      challenge: '高日票量分拣压力',
      approach: '大规模 RT40S 部署',
      outcome: '分拣效率在参考项目中明显改善',
    },
  ],
  recommendedProductIds: ['rt40s', 'dt50-5g', 'i9000s'],
  heroProductId: 'rt40s',
}

export const industryManufacturing = {
  title: '制造业解决方案',
  subtitle: '产线追溯 · 物料管理 · 质量管控',
  overview:
    '优博讯面向制造企业提供产线数据采集、物料追溯、质检与巡检所需的工业级 PDA、平板及 RFID 设备，支持与 MES/ERP/QMS 系统集成。',
  challenges: [
    '产线追溯数据不完整，难以满足客户或出口 audit 要求',
    '物料流转依赖人工，错误率高',
    '不良品定位与根因分析耗时长',
  ],
  solution:
    '通过工业级移动数据终端采集工单、物料与质检数据，并与 MES/ERP 对接，实现从原料到成品的可追溯管理；远距扫描与工业平板覆盖高位货架与巡检场景。',
  applications: [
    { title: '产线追溯', desc: '工单报工、物料追溯、质检数据采集 — PDA + MES' },
    { title: '高位仓储', desc: '远距扫码、低温区域作业 — RT40S + 长距扫描' },
    { title: '设备巡检', desc: '点检与维护记录 — 工业 PDA / 平板' },
    { title: '质量管控', desc: '检验数据采集与不良品追踪' },
  ],
  specs: [
    { label: '核心场景', value: '工单报工 / 物料追溯 / 质检 / 巡检' },
    { label: '系统对接', value: 'MES / ERP / QMS' },
    { label: '推荐产品', value: 'i6310 / DT50 / RT40S' },
  ],
  faqs: [
    { q: '产线环境是否耐用？', a: '工业级防护（如 IP65）、抗油污与跌落设计，适合长期产线运行。' },
    { q: '是否支持 MES 集成？', a: '提供 USDK/API，可与主流 MES/ERP 系统对接。' },
  ],
  useCases: [
    {
      label: '电子制造',
      challenge: '追溯不满足供应链 audit',
      approach: '产线 PDA + MES 数据采集',
      outcome: '通过 tier-1 供应链 audit 要求',
    },
    {
      label: '汽车零部件',
      challenge: '油污环境与干扰',
      approach: '工业 PDA + MES',
      outcome: '不良品定位时间大幅缩短',
    },
  ],
  recommendedProductIds: ['dt50-5g', 'rt40s', 'dt66'],
  heroProductId: 'dt50-5g',
}

export const industryRetail = {
  title: '零售解决方案',
  subtitle: '门店运营 · 盘点收银 · 会员服务',
  overview:
    '优博讯为连锁零售提供条码与 RFID 数据采集、移动收银、库存管理与会员核验的一体化终端组合，覆盖门店日常运营与全渠道库存场景。',
  challenges: [
    '门店盘点耗时长，影响营业与库存准确性',
    '全渠道库存同步困难',
    '高价值 SKU 需要更高效的识别与结算方式',
  ],
  solution:
    '条码方案：PDA + POS + 打印机组合，支持收发货、盘点与收银。RFID 方案：标签识读 + 手持/固定读写 + 自助结算。UPad 等商业平板支持辅助销售、SoftPOS 与会员核验。',
  applications: [
    { title: '门店盘点', desc: '移动盘点终端，缩短关店盘点时间' },
    { title: '条码收银', desc: '扫码枪 + POS + 打印机组合' },
    { title: 'RFID 零售', desc: 'RFID 标签识读 + 结算台或 DT630/UPad 一体方案' },
    { title: '移动销售', desc: 'UPad — 价格查询、移动收银、SoftPOS/NFC、会员核验' },
  ],
  specs: [
    { label: '条码方案', value: 'PDA + POS + 打印机' },
    { label: 'RFID 方案', value: 'RFID 标签 + 手持/固定读写' },
    { label: '新兴场景', value: 'UPad 商业平板 + SoftPOS' },
  ],
  faqs: [
    { q: 'RFID 是否值得投入？', a: '高周转、高价值 SKU 通常 ROI 最高。建议从试点门店评估。' },
    { q: '是否支持移动支付？', a: 'POS 与 UPad 等产品支持多种支付方式与 SoftPOS 场景。' },
  ],
  useCases: [
    {
      label: '服装连锁',
      challenge: '全渠道库存管理',
      approach: '扫码枪 + POS + PDA + 打印机',
      outcome: '收发货效率提升',
    },
    {
      label: 'RFID 自助收银',
      challenge: '自助结算体验',
      approach: 'RFID 结算台方案',
      outcome: '自助收银体验升级',
    },
  ],
  recommendedProductIds: ['dt66', 'dt50', 'i9000s'],
  heroProductId: 'dt66',
}

export const softwareUEE = {
  title: 'UEE',
  tagline: 'Enterprise Device Experience',
  subtitle: '端云一体化设备管理与部署平台',
  overview:
    'UEE 是优博讯 IoT 数字化生态平台，面向企业移动设备 fleet 提供部署、配置、管理、监控与安全能力，支撑 Device Lifecycle Management 与 Application Management。',
  lifecycle: ['Deploy', 'Configure', 'Manage', 'Monitor', 'Secure'],
  capabilities: [
    { label: '设备管理', value: '远程配置、OTA 固件升级、应用分发、企业桌面（Enterprise Launcher）' },
    { label: '开发集成', value: 'USDK 开发者文档与接口，ScanWedge / Key Mapping 扫码按键自定义' },
    { label: '批量部署', value: 'UFS / Software HUB 快速定制与批量配置' },
    { label: '安全合规', value: '远程擦除、地理围栏、应用白名单等企业安全能力' },
  ],
  mobilitySupport:
    'UEE 面向物流、零售、制造、金融、医疗等行业的大规模移动设备部署，帮助 IT 团队统一管理终端配置、应用更新与安全策略。',
  faqs: [
    { q: 'UEE 与 UMS 有何区别？', a: 'UEE 侧重 MDM 设备管理（配置、安全、应用分发）；UMS 侧重运维监控（状态、日志、远程诊断）。' },
    { q: '是否支持开发者集成？', a: '提供 USDK 与开发者文档，支持与企业应用快速集成。' },
  ],
  recommendedProductIds: ['dt630', 'dt66', 'rt40s'],
}

export const softwareUMS = {
  title: 'UMS',
  tagline: 'Unified Device Management',
  subtitle: '远程设备监控 · 诊断 · 告警',
  overview:
    'UMS 让企业 IT/运维团队远程监控、诊断与管理移动终端，支持 Device Lifecycle Management 中的 Monitor 与 Diagnose 环节，降低返厂与业务中断成本。',
  lifecycle: ['Monitor', 'Diagnose', 'Alert', 'Secure'],
  capabilities: [
    { label: '实时监控', value: '电量、存储、网络、扫描次数、Crash 日志等设备健康看板' },
    { label: '远程诊断', value: 'Log 抓取、远程重启、问题定位' },
    { label: '告警通知', value: '邮件、短信、Webhook 等告警方式' },
    { label: '部署选项', value: '支持私有化部署，数据不出域' },
  ],
  mobilitySupport:
    'UMS 配合 UEE 构成完整的设备 lifecycle 管理能力，适用于物流、制造、零售等拥有大规模移动作业终端的企业 fleet。',
  faqs: [
    { q: '数据存储在哪里？', a: '支持私有化部署，数据可存储在客户自有服务器。' },
    { q: '能否减少设备返厂？', a: '远程日志与诊断能力可帮助 IT 团队在本地定位多数常见问题，减少不必要的返厂。' },
  ],
  recommendedProductIds: ['dt50-5g', 'dt630', 'rt40s'],
}

export const aboutUrovo = {
  title: 'About UROVO',
  subtitle: 'Enterprise mobility and AIDC solutions for global businesses.',
  overview:
    '优博讯是全球领先的 IoT 行业数字化方案提供商，为客户打造端云一体化生态，提供多场景智能终端及软件云服务。品牌使命：智联世界，至善至优。',
  focus: [
    { label: 'AIDC 积累', value: '2006 年起持续投入企业移动数据终端与自动识别技术' },
    { label: '产品组合', value: 'PDA · RFID · POS · 打印机 · 平板 · 扫描枪' },
    { label: '行业覆盖', value: '物流、零售、制造、金融、医疗、政务等' },
    { label: '软件生态', value: 'UEE 设备管理 · UMS 远程运维' },
  ],
  technology:
    '优博讯专注于企业级移动数据终端、数据采集、RFID 与企业设备管理软件（UEE/UMS），为物流、零售与制造等一线作业场景提供硬件与软件组合。',
  apac:
    '本站点面向亚太企业客户与合作伙伴，提供英文优先的产品信息、行业解决方案与区域化支持资源。如需部署咨询、产品选型或商务合作，请联系销售团队。',
  milestones: [
    // CONTENT VERIFICATION REQUIRED: milestones sourced from legacy salesCompany training material
    '2006 — 推出国内第一款 PDA，推动物流数字化',
    '2016 — 深交所上市（300531），全产品线布局',
    '2020 — 联合高通推出 5G 旗舰 PDA',
    '2021 — 发布 UEE 行业生态平台',
    '2024 — 持续扩展 5G 与 RFID 企业级产品组合',
  ],
  specs: [
    { label: '定位', value: '全球 IoT 数字化方案提供商' },
    { label: '市场参考', value: '根据优博讯公开资料，在全球专业加固型 PDA 市场处于领先地位' },
    { label: '上市', value: '深交所创业板 300531' },
  ],
}
