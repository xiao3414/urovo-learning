/**
 * 销售新人结业考试 - 基于集训课件
 */
export const examQuestions = [
  { id: 1, category: '产品知识', question: '优博讯 PDA 典型防护等级是？', options: ['IP20', 'IP54', 'IP65/IP67', '无防护'], answer: 2, explain: '课件介绍 DT50 等产品具备 IP67 防尘防水，1.5m 跌落测试。' },
  { id: 2, category: '产品知识', question: 'RFID 相比条码的核心优势是？', options: ['成本更低', '批量非视距读取', '不需标签', '只能读一次'], answer: 1, explain: 'RFID 可批量、非视距识读，适合盘点场景。' },
  { id: 3, category: '产品知识', question: '优博讯 UEE 生态平台的核心定位是？', options: ['财务系统', '设备开发与管理生态', 'HR 系统', 'CRM'], answer: 1, explain: 'UEE 构建 IoT 数字化生态，提供 USDK、设备管理、OTA 等能力。' },
  { id: 4, category: 'POS产品', question: 'i9100 智能 POS 支持的支付方式不包括？', options: ['磁条卡', 'IC卡', '扫码', '仅现金'], answer: 3, explain: 'i9100 集磁条卡、IC卡、非接、扫码等多种支付方式于一体。' },
  { id: 5, category: '组织架构', question: '营销中心下属不包括以下哪个？', options: ['销售部', '渠道部', '产品制造中心', '行业大客户部'], answer: 2, explain: '产品制造中心属于供应链体系，不属于营销中心。' },
  { id: 6, category: '人事制度', question: '新员工培训考试成绩低于多少分不得转正？', options: ['60', '70', '80', '90'], answer: 2, explain: '课件规定：培训考试成绩低于 80 分不得转正，有一次补考机会。' },
  { id: 7, category: '销售技巧', question: 'SPIN 提问法中 "N" 代表？', options: ['Need-payoff 需求价值', 'Number 数量', 'Network 关系', 'Negotiate 谈判'], answer: 0, explain: 'SPIN: Situation → Problem → Implication → Need-payoff。' },
  { id: 8, category: '销售技巧', question: 'FAB 法中 "A" 代表？', options: ['Action', 'Advantage 优势', 'Amount', 'Authority'], answer: 1, explain: 'FAB: Feature(特征) → Advantage(优势) → Benefit(利益)。' },
  { id: 9, category: '信息安全', question: '对外沟通时，以下哪项可以透露给客户？', options: ['其他客户出货量', '未公开的产品价格', '已上市产品的公开规格', '公司未公开新品信息'], answer: 2, explain: '官方渠道已公开的信息可以传达；未公开信息严禁泄露。' },
  { id: 10, category: '业务流程', question: '产品经理在产品部的角色是？', options: ['Mini Boss，对产品经营结果负责', '仅写文档', '只做测试', '只管采购'], answer: 0, explain: '课件：产品经理是产品的 Mini Boss，对产品经营结果负责。' },
  { id: 11, category: '行业方案', question: '快递驿站典型需求不包括？', options: ['揽收扫描', '入库出库', '产线追溯', '派件签收'], answer: 2, explain: '产线追溯属于制造场景；驿站需求为揽收、分拣、派件等。' },
  { id: 12, category: '客户问题', question: '客户问能否对接 WMS，正确回答是？', options: ['不能', '提供 SDK/API，有成熟案例', '只能对接优博讯系统', '需额外收费100万'], answer: 1, explain: '优博讯提供 USDK 和 API，支持与主流 WMS/ERP 对接。' },
  { id: 13, category: '异议处理', question: '客户说"价格太贵"，最佳回应是？', options: ['直接降价', '算 ROI/TCO 长期价值', '不回应', '攻击竞品'], answer: 1, explain: '用 ROI 和总拥有成本分析，将焦点从单价转移到长期价值。' },
  { id: 14, category: 'Day3-4', question: '客户服务中心的主要职责是？', options: ['产品研发', '售后支持与客诉处理', '原材料采购', '财务审计'], answer: 1, explain: '客户服务中心负责售后支持、客诉处理等服务。' },
  { id: 15, category: '企业文化', question: '优博讯核心价值观是？', options: ['利润至上', '志存高远、脚踏实地', '快速迭代', '规模第一'], answer: 1, explain: '优博讯核心价值观：志存高远、脚踏实地。' },
  { id: 16, category: '产品知识', question: 'DT66 旗舰 PDA 的屏幕尺寸是？', options: ['5.7 寸', '6.5 寸', '4 寸', '10.1 寸'], answer: 1, explain: '2026 全系产品介绍：DT66 为 6.5 寸高清全面屏旗舰 PDA。' },
  { id: 17, category: '研发流程', question: 'PVT 阶段的全称是？', options: ['Product Verification Test 生产验证测试', 'Project Validation Test 项目验证', 'Production Version Test 量产版本', 'Plan Verification Test 计划验证'], answer: 0, explain: 'PVT = Production Verification Test，小批量生产验证阶段，之后进入 MP 量产。' },
]

export const PASS_SCORE = 80
