/**
 * Menu structure — titles resolved via i18n titleKey
 */
export const menuStructure = [
  {
    id: 'catalog',
    titleKey: 'menu.catalog',
    icon: 'Goods',
    path: '/products',
  },
  {
    id: 'product-learn',
    titleKey: 'menu.productLearn',
    icon: 'Box',
    children: [
      { id: 'pda', titleKey: 'menu.pda', path: '/product/pda' },
      { id: 'rfid', titleKey: 'menu.rfid', path: '/product/rfid' },
      { id: 'pos', titleKey: 'menu.pos', path: '/product/pos' },
    ],
  },
  {
    id: 'software',
    titleKey: 'menu.software',
    icon: 'Monitor',
    children: [
      { id: 'uee', titleKey: 'menu.uee', path: '/software/uee' },
      { id: 'ums', titleKey: 'menu.ums', path: '/software/ums' },
    ],
  },
  {
    id: 'industry',
    titleKey: 'menu.industry',
    icon: 'OfficeBuilding',
    children: [
      { id: 'logistics', titleKey: 'menu.logistics', path: '/industry/logistics' },
      { id: 'manufacturing', titleKey: 'menu.manufacturing', path: '/industry/manufacturing' },
      { id: 'retail', titleKey: 'menu.retail', path: '/industry/retail' },
    ],
  },
  {
    id: 'sales',
    titleKey: 'menu.sales',
    icon: 'ChatDotRound',
    children: [
      { id: 'company', titleKey: 'menu.company', path: '/sales/company' },
      { id: 'customer-analysis', titleKey: 'menu.customerAnalysis', path: '/sales/customer-analysis' },
      { id: 'scripts', titleKey: 'menu.scripts', path: '/sales/scripts' },
      { id: 'collaboration', titleKey: 'menu.collaboration', path: '/sales/collaboration' },
    ],
  },
  {
    id: 'exam',
    titleKey: 'menu.exam',
    icon: 'EditPen',
    path: '/exam',
  },
]

export function flattenPages(items = menuStructure) {
  const result = []
  for (const item of items) {
    if (item.path) result.push(item)
    if (item.children) result.push(...flattenPages(item.children))
  }
  return result
}

export const allPages = flattenPages()

/** @deprecated use useMenuConfig() */
export const menuConfig = menuStructure
