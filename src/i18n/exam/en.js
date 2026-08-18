/**
 * APAC Sales Certification Exam (English)
 */
export const examQuestions = [
  { id: 1, category: 'Product', question: 'Typical UROVO PDA protection rating is?', options: ['IP20', 'IP54', 'IP65/IP67', 'No rating'], answer: 2, explain: 'Industrial PDAs such as DT50 are rated IP67 with 1.5 m drop resistance.' },
  { id: 2, category: 'Product', question: 'Core advantage of RFID over barcode is?', options: ['Lower tag cost', 'Bulk non-line-of-sight read', 'No tags needed', 'Single read only'], answer: 1, explain: 'RFID enables bulk identification without line-of-sight — ideal for inventory counts.' },
  { id: 3, category: 'Software', question: 'UEE platform primarily provides?', options: ['Accounting', 'Device development & MDM ecosystem', 'HR system', 'CRM'], answer: 1, explain: 'UEE is UROVO\'s IoT ecosystem: USDK, OTA, app distribution, and device management.' },
  { id: 4, category: 'POS', question: 'Which payment method is NOT supported by i9100 Smart POS?', options: ['Magstripe', 'IC chip', 'QR scan', 'Cash only — no electronic'], answer: 3, explain: 'i9100 supports magstripe, IC, contactless, and QR — not "cash only".' },
  { id: 5, category: 'Organization', question: 'Which unit is NOT part of the sales/marketing front office?', options: ['Regional Sales', 'Channel', 'Product Manufacturing Center', 'Key Account'], answer: 2, explain: 'Manufacturing belongs to supply chain, not sales organization.' },
  { id: 6, category: 'Certification', question: 'Minimum pass score for this APAC certification is?', options: ['60', '70', '80', '90'], answer: 2, explain: 'Pass score is 80 points — review materials and retry if needed.' },
  { id: 7, category: 'Sales', question: 'In SPIN, "N" stands for?', options: ['Need-payoff', 'Number', 'Network', 'Negotiate'], answer: 0, explain: 'SPIN: Situation → Problem → Implication → Need-payoff.' },
  { id: 8, category: 'Sales', question: 'In FAB, "A" stands for?', options: ['Action', 'Advantage', 'Amount', 'Authority'], answer: 1, explain: 'FAB: Feature → Advantage → Benefit.' },
  { id: 9, category: 'Compliance', question: 'Which may be shared with customers?', options: ['Other customers\' shipment volumes', 'Unreleased pricing', 'Published product specs from official channels', 'Unannounced roadmap'], answer: 2, explain: 'Only officially published information may be shared externally.' },
  { id: 10, category: 'Process', question: 'Product Manager\'s role is best described as?', options: ['Mini-CEO accountable for product business results', 'Documentation only', 'Testing only', 'Procurement only'], answer: 0, explain: 'PM owns product direction and business outcomes end-to-end.' },
  { id: 11, category: 'Industry', question: 'Which is NOT a typical parcel hub requirement?', options: ['Collection scan', 'Inbound/outbound', 'Production line traceability', 'Delivery POD'], answer: 2, explain: 'Line traceability is manufacturing — hubs need collect/sort/deliver flows.' },
  { id: 12, category: 'Customer FAQ', question: 'Customer asks about WMS integration — best answer?', options: ['No integration', 'SDK/API with proven APAC deployments', 'Only UROVO WMS', 'Always $1M extra fee'], answer: 1, explain: 'USDK/API supports mainstream WMS/ERP with partner ecosystem.' },
  { id: 13, category: 'Objection', question: 'Customer says "too expensive" — best response?', options: ['Instant discount', 'ROI / 3-year TCO analysis', 'Ignore', 'Attack competitor'], answer: 1, explain: 'Shift focus from unit price to productivity and total cost of ownership.' },
  { id: 14, category: 'Support', question: 'Customer Service Center mainly handles?', options: ['R&D design', 'After-sales support & escalations', 'Raw material buying', 'Financial audit'], answer: 1, explain: 'CS owns post-sales support, RMA, and complaint handling.' },
  { id: 15, category: 'Brand', question: 'UROVO core values include?', options: ['Profit above all', 'Ambition with execution ("reach high, act solid")', 'Move fast break things', 'Scale only'], answer: 1, explain: 'Corporate values emphasize long-term ambition and disciplined execution.' },
  { id: 16, category: 'Product', question: 'DT66 flagship PDA screen size is?', options: ['5.7"', '6.5"', '4"', '10.1"'], answer: 1, explain: 'DT66 features a 6.5" full-view display — 2026 flagship PDA.' },
  { id: 17, category: 'R&D', question: 'PVT stage means?', options: ['Production Verification Test', 'Project Validation Test', 'Production Version Test', 'Plan Verification Test'], answer: 0, explain: 'PVT = small-batch production verification before MP mass production.' },
  { id: 18, category: 'APAC', question: 'Primary English collateral library for APAC sales is?', options: ['file.urovo.com only (Chinese OA)', 'file.en.urovo.com', 'Personal Google Drive', 'WeChat files'], answer: 1, explain: 'file.en.urovo.com hosts English datasheets and marketing assets.' },
]

export const PASS_SCORE = 80
