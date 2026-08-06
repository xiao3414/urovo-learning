/**
 * 销售新人学习平台 - 菜单结构
 */
export const menuConfig = [
  {
    id: 'catalog',
    title: '产品图鉴',
    icon: 'Goods',
    path: '/products',
  },
  {
    id: 'product-learn',
    title: '产品学习',
    icon: 'Box',
    children: [
      { id: 'pda', title: 'PDA 知识要点', path: '/product/pda' },
      { id: 'rfid', title: 'RFID 知识要点', path: '/product/rfid' },
      { id: 'pos', title: 'POS 知识要点', path: '/product/pos' },
    ],
  },
  {
    id: 'software',
    title: '软件生态',
    icon: 'Monitor',
    children: [
      { id: 'uee', title: 'UEE 设备管理', path: '/software/uee' },
      { id: 'ums', title: 'UMS 运维平台', path: '/software/ums' },
    ],
  },
  {
    id: 'industry',
    title: '行业方案',
    icon: 'OfficeBuilding',
    children: [
      { id: 'logistics', title: '智慧物流', path: '/industry/logistics' },
      { id: 'manufacturing', title: '智能制造', path: '/industry/manufacturing' },
      { id: 'retail', title: '连锁零售', path: '/industry/retail' },
    ],
  },
  {
    id: 'sales',
    title: '销售训练',
    icon: 'ChatDotRound',
    children: [
      { id: 'company', title: '公司与品牌', path: '/sales/company' },
      { id: 'customer-analysis', title: '客户分析', path: '/sales/customer-analysis' },
      { id: 'scripts', title: '销售话术', path: '/sales/scripts' },
      { id: 'collaboration', title: '内部协作', path: '/sales/collaboration' },
    ],
  },
  {
    id: 'exam',
    title: '考试系统',
    icon: 'EditPen',
    path: '/exam',
  },
]

export function flattenPages(items = menuConfig) {
  const result = []
  for (const item of items) {
    if (item.path) result.push(item)
    if (item.children) result.push(...flattenPages(item.children))
  }
  return result
}

export const allPages = flattenPages()
